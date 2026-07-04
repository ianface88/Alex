import { StylePreset, AspectRatioOption, QualityOption } from "./types";

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: "none",
    name: "No Preset (Raw Prompt)",
    description: "Sends your prompt exactly as you typed it, with no stylistic enhancements.",
    category: "Realistic",
    promptEnhancement: "",
    icon: "Sparkles",
    examplePrompt: "A golden retriever sitting in a coffee shop holding a small newspaper"
  },
  {
    id: "photorealistic",
    name: "Hyper-Photorealistic",
    description: "High-end cinematic photography with sharp lens details, micro-textures, and realistic environment dynamics.",
    category: "Realistic",
    promptEnhancement: ", photorealistic portrait, incredibly detailed textures, 8k resolution, raw photo, dramatic volume lighting, captured on 35mm lens, f/1.8, cinematic composition, depth of field",
    icon: "Camera",
    examplePrompt: "An elderly weathered fisherman looking directly into the camera on a foggy pier"
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    description: "Futuristic neon-drenched cityscape with wet streets, holographic advertising, and heavy synthwave coloring.",
    category: "Cinematic",
    promptEnhancement: ", cyberpunk visual style, neon glowing pink, teal, and violet lights, rain-soaked asphalt with bright reflections, futuristic metropolis, high contrast, cinematic mood, 80s retro-future aesthetic",
    icon: "Zap",
    examplePrompt: "A sleek high-speed motorcycle parked outside a noodle shop in a futuristic city alley"
  },
  {
    id: "ghibli",
    name: "Studio Ghibli Anime",
    description: "Classic hand-painted anime background feel with soft, whimsical natural lighting and vibrant greens.",
    category: "Illustration",
    promptEnhancement: ", masterfully crafted anime key visual, inspired by Studio Ghibli art style, lush watercolor and gouache textures, soft atmospheric lighting, blue sky with puffy white clouds, nostalgic and cozy aesthetic",
    icon: "Brush",
    examplePrompt: "A small stone cottage surrounded by a sprawling field of wildflowers"
  },
  {
    id: "pixel-art",
    name: "Retro 16-Bit Pixel Art",
    description: "Crisp retro arcade console rendering with a clean grid layout and vibrant dithered color palettes.",
    category: "Retro",
    promptEnhancement: ", retro 16-bit pixel art style, detailed pixelated textures, vibrant color palette, dithered shading, nostalgic classic game background, high-quality pixel artwork",
    icon: "Gamepad2",
    examplePrompt: "A cozy tavern interior with a warm fireplace and adventurers at tables"
  },
  {
    id: "watercolor-fantasy",
    name: "Ethereal Watercolor",
    description: "Dreamy fantasy paint splashes, bleeding pigments, and elegant gold-ink outlines.",
    category: "Artistic",
    promptEnhancement: ", magical fantasy watercolor painting, wet-on-wet paint technique, beautiful pastel bleeding gradients, elegant gold ink filigree and outlines, dreamlike atmosphere, floating dust particles, white background margins",
    icon: "Paintbrush",
    examplePrompt: "A majestic stag standing proud in an enchanted glowing forest"
  },
  {
    id: "3d-pixar",
    name: "3D Animation / Pixar",
    description: "Adorable, expressive character modeling with soft clay-like textures and warm spherical illumination.",
    category: "Illustration",
    promptEnhancement: ", delightful 3D animated character style, Pixar and Disney aesthetic, vibrant playful colors, detailed clay textures, soft subsurface scattering, big expressive eyes, volumetric lighting, charming and high fidelity",
    icon: "Smile",
    examplePrompt: "A tiny baby dragon attempting to blow a tiny flame but only producing a bubble"
  },
  {
    id: "oil-painting",
    name: "Impressionist Oil Painting",
    description: "Rich, textured impasto brushstrokes and heavy canvas grain with vivid, museum-level contrast.",
    category: "Artistic",
    promptEnhancement: ", textured fine-art oil painting, prominent impasto brushstrokes, rich canvas grain, vibrant and expressive color palette, classic master oil painter style, dramatic light and shadow, museum gallery quality",
    icon: "Palette",
    examplePrompt: "A stormy sea crashing against tall rugged dark cliffs"
  },
  {
    id: "vintage-poster",
    name: "1920s Art Deco Poster",
    description: "Elegant geometric framing, bold stylized typographies, flat color blocks, and retro advertisements vibes.",
    category: "Retro",
    promptEnhancement: ", vintage art deco travel poster style, bold geometric shapes, stylized elegant composition, rich muted gold, teal, and burgundy color palette, retro travel illustration, clean lithograph texture, 1920s aesthetic",
    icon: "Image",
    examplePrompt: "A steam locomotive traveling across a dramatic curved mountain viaduct"
  },
  {
    id: "cosmic-darkness",
    name: "Cosmic Astral Surrealism",
    description: "Deep space nebula nebulas, swirling galaxies, floating geometry, and cosmic spiritual atmospheres.",
    category: "Artistic",
    promptEnhancement: ", cosmic surrealism style, stunning deep-space nebula, swirling galaxies and stardust, floating sacred geometry, iridescent star systems, deep violet and dark obsidian colors, epic spiritual dreamscape",
    icon: "Orbit",
    examplePrompt: "A grand mystical library floating in space with books spiraling like a galaxy"
  },
  {
    id: "vaporwave",
    name: "80s Vaporwave Sunset",
    description: "Nostalgic grid plains, magenta horizons, 3D classical busts, and vintage VHS analog artifacts.",
    category: "Retro",
    promptEnhancement: ", retro vaporwave aesthetic, glowing wireframe wire grid landscape, low-poly 3D classical marble bust, retro-futuristic pink sun setting, VHS tracking artifacts, magenta and cyan neon sky, surreal dreamscape",
    icon: "Sun",
    examplePrompt: "A lone dolphin jumping over a wireframe grid ocean with a purple sun"
  },
  {
    id: "minimalist-line",
    name: "Minimalist Ink Line Art",
    description: "Single-line ink vector drawings with high negative space and modern bohemian elegance.",
    category: "Artistic",
    promptEnhancement: ", minimalist continuous single-line ink drawing, modern fine line art, high negative space, clean black ink contours on warm off-white linen paper background, elegant simplicity, abstract outline, bohemian chic",
    icon: "PenTool",
    examplePrompt: "A delicate bouquet of spring flowers sitting in a simple vase"
  },
  {
    id: "dark-fantasy",
    name: "Gothic Dark Fantasy",
    description: "Moody, dark, and rich hand-painted gothic styling reminiscent of classic fantasy dark illustration.",
    category: "Cinematic",
    promptEnhancement: ", dark fantasy oil painting style, grim gothic atmosphere, muted moody colors, foggy medieval castle background, dynamic chiaroscuro lighting, intricate dark armor and leather textures, dramatic and high detail",
    icon: "ShieldAlert",
    examplePrompt: "A cloaked wizard holding a staff with a faintly glowing crystal atop a cliff"
  }
];

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { id: "1:1", label: "1:1 Square", ratio: "1:1", widthClass: "w-10", heightClass: "h-10" },
  { id: "4:3", label: "4:3 Photo", ratio: "4:3", widthClass: "w-12", heightClass: "h-9" },
  { id: "3:4", label: "3:4 Portrait", ratio: "3:4", widthClass: "w-9", heightClass: "h-12" },
  { id: "16:9", label: "16:9 Landscape", ratio: "16:9", widthClass: "w-14", heightClass: "h-8" },
  { id: "9:16", label: "9:16 Story", ratio: "9:16", widthClass: "w-8", heightClass: "h-14" },
];

export const QUALITY_OPTIONS: QualityOption[] = [
  {
    id: "standard",
    label: "Standard Quality",
    model: "gemini-3.1-flash-lite-image",
    description: "Lightning fast generation, great for quick ideas and drafts.",
    badge: "Fast & Free"
  },
  {
    id: "high",
    label: "High Quality (1K)",
    model: "gemini-3.1-flash-image",
    description: "Denser textures and fine details in full 1K (1024px) size.",
    badge: "Paid Key Required"
  },
  {
    id: "ultra",
    label: "Ultra Detail (2K)",
    model: "gemini-3.1-flash-image",
    description: "Maximum complexity and sharpness, perfect for wallpapers (2048px).",
    badge: "Paid Key Required"
  }
];
