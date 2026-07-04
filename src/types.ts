export interface StylePreset {
  id: string;
  name: string;
  description: string;
  category: "Artistic" | "Realistic" | "Illustration" | "Retro" | "Cinematic";
  promptEnhancement: string;
  icon: string; // Name of Lucide icon
  examplePrompt: string;
}

export interface AspectRatioOption {
  id: string;
  label: string;
  ratio: string; // e.g. "1:1", "16:9"
  widthClass: string; // for rendering a preview rectangle
  heightClass: string;
}

export interface QualityOption {
  id: string;
  label: string;
  model: string;
  description: string;
  badge?: string;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  enhancedPrompt: string;
  styleId: string;
  styleName: string;
  aspectRatio: string;
  quality: string;
  model: string;
  timestamp: string;
}
