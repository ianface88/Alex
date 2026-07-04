import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = 3000;

// Enable JSON body parsing with a limit of 10MB to accommodate images if needed
app.use(express.json({ limit: "10mb" }));

// Initialize Gemini SDK lazily to prevent crash if key is missing on startup
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

function getDimensionsForRatio(aspectRatio: string) {
  switch (aspectRatio) {
    case "1:1":
      return { width: 1024, height: 1024 };
    case "4:3":
      return { width: 1024, height: 768 };
    case "3:4":
      return { width: 768, height: 1024 };
    case "16:9":
      return { width: 1280, height: 720 };
    case "9:16":
      return { width: 720, height: 1280 };
    default:
      return { width: 1024, height: 1024 };
  }
}

// API Routes
app.post("/api/generate-image", async (req, res) => {
  try {
    const { prompt, enhancedPrompt, aspectRatio = "1:1", quality = "standard", engine = "free" } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const promptToSend = enhancedPrompt || prompt;
    
    // Auto-detect if we must fallback to the free engine
    const useFreeEngine = engine === "free" || !process.env.GEMINI_API_KEY;

    if (useFreeEngine) {
      console.log(`Generating image using Free FLUX Engine. Prompt: "${promptToSend}"`);
      const { width, height } = getDimensionsForRatio(aspectRatio);
      const randomSeed = Math.floor(Math.random() * 10000000);
      
      const pollUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(promptToSend)}?width=${width}&height=${height}&nologo=true&private=true&seed=${randomSeed}`;
      
      const pollResponse = await fetch(pollUrl);
      if (!pollResponse.ok) {
        throw new Error(`Free Engine (Pollinations.ai) returned status ${pollResponse.status}`);
      }
      
      const arrayBuffer = await pollResponse.arrayBuffer();
      const base64Image = Buffer.from(arrayBuffer).toString("base64");
      const imageUrl = `data:image/png;base64,${base64Image}`;
      
      return res.json({
        success: true,
        imageUrl,
        model: "flux-free",
        quality,
        aspectRatio,
        timestamp: new Date().toISOString(),
        prompt: prompt,
        enhancedPrompt: promptToSend,
      });
    }

    const ai = getGeminiClient();

    // Select the model and configuration based on requested quality
    // Standard -> gemini-3.1-flash-lite-image
    // High -> gemini-3.1-flash-image (supports 1K)
    // Ultra -> gemini-3.1-flash-image (supports 2K)
    let model = "gemini-3.1-flash-lite-image";
    let imageSize: string | undefined = undefined;

    if (quality === "high") {
      model = "gemini-3.1-flash-image";
      imageSize = "1K";
    } else if (quality === "ultra") {
      model = "gemini-3.1-flash-image";
      imageSize = "2K";
    }

    const config: any = {
      imageConfig: {
        aspectRatio: aspectRatio,
      },
    };

    if (imageSize && model === "gemini-3.1-flash-image") {
      config.imageConfig.imageSize = imageSize;
    }

    console.log(`Generating image using model "${model}" with prompt: "${promptToSend}" and config:`, config);

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: promptToSend,
          },
        ],
      },
      config: config,
    });

    // Extract the image base64 data
    let base64Image: string | null = null;
    let feedbackText: string | null = null;

    if (
      response &&
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      response.candidates[0].content.parts
    ) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          base64Image = part.inlineData.data;
        } else if (part.text) {
          feedbackText = part.text;
        }
      }
    }

    if (!base64Image) {
      console.error("Gemini response did not contain image data. Full response:", JSON.stringify(response));
      return res.status(500).json({
        error: "Failed to generate image. No image data returned from Gemini.",
        feedback: feedbackText,
      });
    }

    const imageUrl = `data:image/png;base64,${base64Image}`;

    res.json({
      success: true,
      imageUrl,
      model,
      quality,
      aspectRatio,
      timestamp: new Date().toISOString(),
      prompt: prompt,
      enhancedPrompt: promptToSend,
    });
  } catch (error: any) {
    console.error("Error generating image:", error);
    
    const errorMessage = error.message || "";
    let isQuotaError = false;
    let customMessage = errorMessage;

    if (
      errorMessage.includes("RESOURCE_EXHAUSTED") ||
      errorMessage.includes("quota") ||
      errorMessage.includes("Quota exceeded") ||
      errorMessage.includes("limit: 0") ||
      errorMessage.includes("429")
    ) {
      isQuotaError = true;
      customMessage = "Your Gemini API key doesn't have quota for image generation (free keys have 0 quota for images). To resolve this, please set up a paid billable API key by clicking 'Set Up Paid Key' in the top-right status bar or configure it in AI Studio settings.";
    }

    res.status(500).json({
      success: false,
      error: customMessage,
      isQuotaError,
      originalError: errorMessage
    });
  }
});

// Setup Vite Dev Server / Static Assets Serving
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    // We import dynamically so Vite is not required in production build
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
