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

// Image Editing Endpoint using Gemini 3.1
app.post("/api/edit-image", async (req, res) => {
  try {
    const { imageUrl, instruction, quality = "standard" } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "Original image is required for editing" });
    }
    if (!instruction) {
      return res.status(400).json({ error: "Edit instruction is required" });
    }

    console.log(`Editing image. Instruction: "${instruction}". Quality: "${quality}"`);

    // Parse base64 image data
    let base64Data = "";
    let mimeType = "image/png";
    
    if (imageUrl.startsWith("data:")) {
      const match = imageUrl.match(/^data:([^;]+);base64,(.*)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }
    } else {
      // If it's not a data URL, treat it as base64
      base64Data = imageUrl;
    }

    if (!base64Data) {
      return res.status(400).json({ error: "Invalid image format. Must be a base64 Data URL." });
    }

    const ai = getGeminiClient();
    const isLite = quality === "standard";
    const model = isLite ? "gemini-3.1-flash-lite-image" : "gemini-3.1-flash-image";

    const imagePart = {
      inlineData: {
        data: base64Data,
        mimeType: mimeType
      }
    };

    const textPart = {
      text: instruction
    };

    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [imagePart, textPart]
      }
    });

    let editedBase64Image = "";
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData?.data) {
          editedBase64Image = part.inlineData.data;
          break;
        }
      }
    }

    if (!editedBase64Image) {
      throw new Error("No edited image data was returned from the Gemini API.");
    }

    const newImageUrl = `data:${mimeType};base64,${editedBase64Image}`;

    return res.json({
      success: true,
      imageUrl: newImageUrl,
      model: model === "gemini-3.1-flash-lite-image" ? "Gemini 3.1 Flash Lite" : "Gemini 3.1 Flash Pro",
      timestamp: new Date().toISOString(),
      prompt: instruction,
    });

  } catch (error: any) {
    console.error("Error editing image:", error);
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
      error: error.message || "An error occurred during image editing.",
      isQuotaError,
      originalError: error.message
    });
  }
});

// Video/Animation Endpoint using Veo 3.1 (3-step long-running operation pipeline)
app.post("/api/generate-video", async (req, res) => {
  try {
    const { prompt, imageUrl, motionPrompt = "cinematic camera pan", aspectRatio = "16:9", duration = 5 } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "Base image URL is required for animation" });
    }

    console.log(`Attempting to animate image with Veo 3.1. Motion Prompt: "${motionPrompt}"`);
    
    let ai;
    try {
      ai = getGeminiClient();
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: "Gemini API key is not configured. An active Gemini API key is required to use Veo 3.1 video generation."
      });
    }

    try {
      if (ai.models && typeof (ai.models as any).generateVideos === "function") {
        console.log("Calling ai.models.generateVideos using Veo 3.1...");
        // Extract base64 image data to pass as reference
        const base64Data = imageUrl.includes("base64,") ? imageUrl.split("base64,")[1] : "";
        
        const videoResponse = await (ai.models as any).generateVideos({
          model: "veo-3.1-lite-generate-preview",
          prompt: motionPrompt || `Animate this image: ${prompt || "cinematic 3d parallax pan"}`,
          image: base64Data ? {
            imageBytes: base64Data,
            mimeType: "image/png"
          } : undefined,
          config: {
            numberOfVideos: 1,
            resolution: "720p",
            aspectRatio: aspectRatio === "9:16" ? "9:16" : "16:9"
          }
        });

        if (videoResponse?.name) {
          return res.json({
            success: true,
            operationName: videoResponse.name,
            model: "veo-3.1-lite-generate-preview",
          });
        }
        throw new Error("No operation was returned by the Veo API.");
      } else {
        throw new Error("The SDK installed on this workspace does not currently support the generateVideos (Veo) method.");
      }

    } catch (apiError: any) {
      console.warn("Veo API call failed:", apiError.message);
      let errorMsg = apiError.message || "Veo 3.1 video generation failed.";
      if (errorMsg.includes("permission") || errorMsg.includes("not found")) {
        errorMsg = "Your Gemini API key does not have access to the Veo 3.1 video generation model. Please ensure Veo is enabled on your API key's project.";
      }
      return res.status(400).json({
        success: false,
        error: errorMsg
      });
    }

  } catch (error: any) {
    console.error("General error animating image:", error);
    res.status(500).json({
      success: false,
      error: error.message || "An error occurred during animation setup.",
    });
  }
});

// Helper function to build a mock Operation object compatible with the @google/genai SDK
function buildMockOperation(operationName: string) {
  return {
    name: operationName,
    _fromAPIResponse({ apiResponse }: any) {
      const done = apiResponse.done;
      const error = apiResponse.error;
      const rawResponse = apiResponse.response;
      
      let response = undefined;
      if (rawResponse) {
        const mldevResponse = rawResponse.generateVideoResponse;
        if (mldevResponse) {
          const samples = mldevResponse.generatedSamples || mldevResponse.generatedVideos;
          if (samples && Array.isArray(samples)) {
            response = {
              generatedVideos: samples.map((sample: any) => {
                const video = sample.video;
                return {
                  video: {
                    uri: video?.uri || video?.gcsUri,
                    mimeType: video?.mimeType || video?.encoding
                  }
                };
              })
            };
          }
        } else {
          const samples = rawResponse.videos || rawResponse.generatedVideos || rawResponse.generatedSamples;
          if (samples && Array.isArray(samples)) {
            response = {
              generatedVideos: samples.map((sample: any) => {
                const video = sample.video || sample._self || sample;
                return {
                  video: {
                    uri: video?.uri || video?.gcsUri,
                    mimeType: video?.mimeType || video?.encoding
                  }
                };
              })
            };
          } else {
            response = rawResponse;
          }
        }
      }

      return {
        name: apiResponse.name || operationName,
        metadata: apiResponse.metadata,
        done: done !== undefined ? done : false,
        error: error,
        response: response
      };
    }
  };
}

// Poll the status of a video generation operation
app.post("/api/video-status", async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: "Operation name is required." });
    }

    const ai = getGeminiClient();
    const updated = await (ai.operations as any).getVideosOperation({
      operation: buildMockOperation(operationName)
    });

    return res.json({
      success: true,
      done: updated.done,
      error: updated.error
    });
  } catch (error: any) {
    console.error("Error checking video status:", error);
    res.status(500).json({
      success: false,
      error: error.message || "An error occurred while checking video status."
    });
  }
});

// Securely stream the generated video back to the client
app.get("/api/video-download", async (req, res) => {
  try {
    const operationName = req.query.operationName as string;
    if (!operationName) {
      return res.status(400).json({ error: "Operation name is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(401).json({ error: "Gemini API key is not configured." });
    }

    const ai = getGeminiClient();
    const updated = await (ai.operations as any).getVideosOperation({
      operation: buildMockOperation(operationName)
    });

    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return res.status(404).json({ error: "Video URI not found or video not ready yet." });
    }

    console.log(`Streaming video from Google URI: ${uri}`);
    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey }
    });

    if (!videoRes.ok) {
      throw new Error(`Failed to fetch video from Google URI. Status: ${videoRes.status}`);
    }

    res.setHeader('Content-Type', 'video/mp4');

    if (videoRes.body) {
      const reader = videoRes.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            res.end();
            break;
          }
          res.write(Buffer.from(value));
        }
      } catch (streamErr) {
        console.error("Error piping video stream:", streamErr);
        res.end();
      }
    } else {
      res.status(500).json({ error: "Failed to read video body." });
    }
  } catch (error: any) {
    console.error("Error downloading video:", error);
    res.status(500).json({
      error: error.message || "An error occurred while downloading video."
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
