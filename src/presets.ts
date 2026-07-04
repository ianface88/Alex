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
    id: "acrylic-palette",
    name: "Acrylic Palette Knife",
    description: "Rich, textured dimensional impasto acrylic blobs, heavy tool scrapes, and layered glossy paints.",
    category: "Artistic",
    promptEnhancement: ", heavy impasto acrylic palette knife painting, thick textured paint layers, colorful visible palette knife strokes, high-relief paint texture, vibrant fine art masterpiece, expressive canvas",
    icon: "Paintbrush",
    examplePrompt: "A field of vibrant red poppies under a turbulent blue sky"
  },
  {
    id: "risograph-print",
    name: "Retro Risograph Print",
    description: "Charming misaligned layered ink textures, organic speckle grain, and warm duotone retro pastel colors.",
    category: "Retro",
    promptEnhancement: ", retro risograph print, multi-layered ink print, texture overlay, slight registration misalignment, organic halftone dot grain, vibrant limited color palette, clean graphic design poster",
    icon: "Image",
    examplePrompt: "An elegant cat sitting on a windowsill overlooking a crescent moon"
  },
  {
    id: "japanese-woodblock",
    name: "Japanese Woodblock (Ukiyo-e)",
    description: "Classic hand-carved block prints with graceful ink lines, gradient sky washes, and organic aged washi paper textures.",
    category: "Illustration",
    promptEnhancement: ", ukiyo-e style, classic Japanese woodblock print, elegant black ink outlines, flat color fields, organic aged washi paper texture, traditional woodblock printing style, masterwork illustration",
    icon: "Brush",
    examplePrompt: "A majestic crane bird standing in front of a giant red sun"
  },
  {
    id: "stained-glass",
    name: "Stained Glass Window",
    description: "Luminous translucent colored glass panels separated by thick, intricate dark lead outlines.",
    category: "Artistic",
    promptEnhancement: ", exquisite stained glass window, luminous colored glass mosaics, glowing light passing through glass panels, thick dark lead outlines, medieval gothic cathedral style, radiant colors",
    icon: "Palette",
    examplePrompt: "A majestic roaring lion surrounded by celestial golden stars"
  },
  {
    id: "art-nouveau",
    name: "Art Nouveau Elegance",
    description: "Flowing organic whip-lash lines, decorative botanical scrollwork, and elegant golden-era illustrations.",
    category: "Illustration",
    promptEnhancement: ", elegant art nouveau poster, Alphonse Mucha style, flowing curvilinear lines, intricate botanical scrollwork and frames, ornate decorative motifs, soft pastel colors, vintage masterpiece, gold foil accents",
    icon: "PenTool",
    examplePrompt: "A beautiful celestial woman with long flowing hair holding the solar system"
  },
  {
    id: "surrealist-dali",
    name: "Surrealist Dali Dream",
    description: "Melting clocks, desert horizons, impossible physical geometries, and high-contrast symbolic dreamscapes.",
    category: "Artistic",
    promptEnhancement: ", surrealist painting in the style of Salvador Dali, melting clocks and bizarre dreamlike structures, infinite barren desert horizon, high-contrast long shadows, impossible physics, metaphysical atmosphere",
    icon: "Orbit",
    examplePrompt: "A giant chess board stretching into a golden ocean under an orange sky"
  },
  {
    id: "charcoal-sketch",
    name: "Gothic Charcoal Sketch",
    description: "Dramatic high-contrast charcoal smudges, rich cotton paper grains, and deep expressive hand-drawn shadows.",
    category: "Artistic",
    promptEnhancement: ", dramatic chiaroscuro charcoal sketch, hand-drawn charcoal smudges on textured warm cotton paper, raw graphite lines, deep expressive shadow gradients, textured fine art drawing",
    icon: "PenTool",
    examplePrompt: "A mysterious old lighthouse standing against a massive stormy wave"
  },
  {
    id: "bismuth-crystal",
    name: "Bismuth Iridescence",
    description: "Stunning geometric metallic stair-stepped rainbow crystals with futuristic architectural alignments.",
    category: "Artistic",
    promptEnhancement: ", futuristic iridescent bismuth crystal landscape, stair-stepped metallic crystal geometries, beautiful rainbow light refraction, metallic sheen, dark obsidian ground, alien mineral formations",
    icon: "Sparkles",
    examplePrompt: "A futuristic crystalline temple complex carved into a canyon"
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
    name: "Classic 80s Vaporwave",
    description: "Nostalgic 1985 glitch aesthetic: classical marble statues, checkerboard floors, Windows 95 icons, floppy disks, and tropical palm leaves. No sunset.",
    category: "Retro",
    promptEnhancement: ", classic 1980s vaporwave design aesthetic, elegant Roman marble statue bust, high-contrast black and pink checkerboard floor grid, retro Windows 95 operating system popup dialog boxes, neon teal and hot magenta colors, pink floppy disks, palm leaves, vintage VHS tracking static overlay, surreal digital collage art style, strictly no sunset, no sun",
    icon: "Image",
    examplePrompt: "A Greco-Roman marble statue wearing neon green sunglasses standing next to a vintage CRT computer screen and floppy disks"
  },
  {
    id: "pop-art",
    name: "Andy Warhol Pop Art",
    description: "Bold silkscreen prints, vibrant complementary color block partitions, and retro comic halftone dot patterns.",
    category: "Artistic",
    promptEnhancement: ", andy warhol pop art style, bold silkscreen print, high-contrast saturated primary colors, visible halftone dot texture overlay, retro printmaking, graphic illustration, soup-can pop era aesthetic, dramatic block outlines",
    icon: "Palette",
    examplePrompt: "A cool bulldog wearing a leather jacket, rendered in a 4-panel multi-color pop art collage"
  },
  {
    id: "botanical-vintage",
    name: "Vintage Botanical",
    description: "Delicate ink stippling, antique hand-colored watercolor shading, and aged parchment paper backgrounds.",
    category: "Illustration",
    promptEnhancement: ", vintage botanical illustration style, highly detailed hand-drawn ink lines, delicate watercolor washes, stippling shading, antique faded parchment paper texture, academic flora classification plate design, aged and historic",
    icon: "PenTool",
    examplePrompt: "A detailed wild rose flower showing its petals, leaves, stem, and root structure"
  },
  {
    id: "chalk-art",
    name: "Chalkboard Chalk Art",
    description: "Incredibly intricate white and colored chalk sketches hand-drawn on dusty, dark slate chalkboard backgrounds.",
    category: "Artistic",
    promptEnhancement: ", gorgeous chalkboard art, realistic hand-drawn chalk illustration, dusty slate blackboard background with light chalk residue, intricate white and colored chalk strokes, chalkboard lettering art, high-contrast sketch",
    icon: "Brush",
    examplePrompt: "A steaming mug of hot chocolate topped with marshmallows and beautiful cursive lettering saying 'Warm & Cozy'"
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
  }
];
