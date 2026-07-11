import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

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
    const { prompt, enhancedPrompt, aspectRatio = "1:1", quality = "standard" } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const promptToSend = enhancedPrompt || prompt;
    
    console.log(`Generating image using Gemini 3.1 Engine. Quality: "${quality}". Prompt: "${promptToSend}"`);
    const ai = getGeminiClient();
    
    const isLite = quality === "standard";
    const model = isLite ? "gemini-3.1-flash-lite-image" : "gemini-3.1-flash-image";
    
    const imageConfig: any = {
      aspectRatio: aspectRatio,
    };
    
    if (!isLite) {
      imageConfig.imageSize = quality === "ultra" ? "2K" : "1K";
    }
    
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          { text: promptToSend }
        ]
      },
      config: {
        imageConfig,
      }
    });
    
    let base64Image = "";
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData?.data) {
          base64Image = part.inlineData.data;
          break;
        }
      }
    }
    
    if (!base64Image) {
      throw new Error("No image data was returned from the Gemini API.");
    }
    
    const imageUrl = `data:image/png;base64,${base64Image}`;
    
    return res.json({
      success: true,
      imageUrl,
      model: model === "gemini-3.1-flash-lite-image" ? "Gemini 3.1 Flash Lite" : "Gemini 3.1 Flash Pro",
      quality: quality,
      aspectRatio,
      timestamp: new Date().toISOString(),
      prompt: prompt,
      enhancedPrompt: promptToSend,
    });
  } catch (error: any) {
    console.error("Error generating image:", error);
    const errMsg = error.message || "";
    const isQuotaError = 
      errMsg.toLowerCase().includes("quota") ||
      errMsg.toLowerCase().includes("billing") ||
      errMsg.toLowerCase().includes("limit") ||
      errMsg.toLowerCase().includes("api_key") ||
      errMsg.toLowerCase().includes("api key") ||
      errMsg.toLowerCase().includes("key is missing") ||
      errMsg.toLowerCase().includes("unauthorized") ||
      errMsg.toLowerCase().includes("forbidden") ||
      errMsg.toLowerCase().includes("credential") ||
      errMsg.toLowerCase().includes("403") ||
      errMsg.toLowerCase().includes("401");

    res.status(500).json({
      success: false,
      error: error.message || "An error occurred during image generation.",
      isQuotaError,
      originalError: error.message
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
