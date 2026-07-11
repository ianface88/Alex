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
    id: "vintage-polaroid",
    name: "Vintage Polaroid",
    description: "Warm, nostalgic instant-photo aesthetics with faded colors, soft focus, and authentic chemical burn borders.",
    category: "Realistic",
    promptEnhancement: ", vintage polaroid photo, 1970s instant photography, warm faded colors, slightly soft focus, light leak on margin, authentic analog film look",
    icon: "Camera",
    examplePrompt: "A cozy sun-drenched breakfast table with a mug of coffee and a fresh croissant"
  },
  {
    id: "macro-nature",
    name: "Extreme Macro Nature",
    description: "Incredible microscopic detail of plants, insects, or water drops, showing intricate veins and dew textures.",
    category: "Realistic",
    promptEnhancement: ", extreme macro lens photography, hyper-detailed close-up, sharp micro-textures, glistening dew drops, shallow depth of field, professional nature photography, National Geographic quality",
    icon: "Camera",
    examplePrompt: "A tiny ladybug perched on a blade of grass covered in morning dew"
  },
  {
    id: "drone-aerial",
    name: "Scenic Drone Aerial",
    description: "Sweeping high-altitude dramatic drone photography looking down on landscapes with beautiful horizons.",
    category: "Realistic",
    promptEnhancement: ", majestic drone aerial photo, high-angle bird's-eye view, sweeping panoramic landscape, ultra-detailed terrain, epic lighting, atmospheric depth, cinematic composition",
    icon: "Camera",
    examplePrompt: "Winding coastal highway hugging green cliffs above a dark turquoise ocean"
  },
  {
    id: "animal-portrait",
    name: "Wildlife Close-Up",
    description: "Stunning professional animal photography capturing soulful eyes, sharp fur/feather details, and clean natural backdrops.",
    category: "Realistic",
    promptEnhancement: ", stunning professional wildlife portrait, sharp focus on eyes, crisp fur details, soft blurred natural forest background, warm volumetric sunlight, National Geographic style",
    icon: "Camera",
    examplePrompt: "A regal red fox pausing in a snowy clearing, looking curious"
  },
  {
    id: "fashion-editorial",
    name: "High-Fashion Editorial",
    description: "Sleek studio portraiture styled with high contrast, dramatic shadows, soft skin textures, and artistic lighting.",
    category: "Realistic",
    promptEnhancement: ", high-fashion editorial portrait, studio lighting, dramatic shadow play, Vogue aesthetic, sharp styling, professional makeup and textures, high contrast, elegant color grading",
    icon: "Camera",
    examplePrompt: "A model wearing a structured silver metallic jacket with striking holographic eyeliner"
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
    id: "glass-morphism",
    name: "Glassmorphism 3D Art",
    description: "Beautiful frosted glass plates refracting pastel gradient lights, modern 3D abstract shapes, and soft shadows.",
    category: "Artistic",
    promptEnhancement: ", modern glassmorphism 3D illustration, frosted glass translucent layers, glowing pastel gradients, refracting colorful light, abstract geometric spheres, clean digital art, soft ambient shadows",
    icon: "Sparkles",
    examplePrompt: "A floating heart made of frosted translucent glass surrounding miniature glowing stars"
  },
  {
    id: "stained-paper-collage",
    name: "Torn Paper Collage Art",
    description: "Expressive mixed-media assemblage of torn newspaper, vintage patterns, watercolor washes, and layered textures.",
    category: "Artistic",
    promptEnhancement: ", torn paper collage art, mixed media masterpiece, layered handmade papers, vintage print clippings, watercolor stains, rough textured edges, abstract fine art assemblage",
    icon: "Palette",
    examplePrompt: "A majestic hummingbird sipping nectar from a flower, made of layered torn paper"
  },
  {
    id: "ancient-mosaic",
    name: "Ancient Glass Mosaic",
    description: "Intricate, slightly weathered hand-laid glass tile designs with sparkling gold grouts and earthy textures.",
    category: "Artistic",
    promptEnhancement: ", ancient Roman glass mosaic tile mural, intricate hand-laid colorful stone and glass pieces, glittering gold accents, weathered historic grout, ancient classic masterwork",
    icon: "Palette",
    examplePrompt: "An elegant peacock with sprawling feathers shimmering with gold"
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
    id: "pastel-retro-ad",
    name: "1950s Pastel Ad",
    description: "Hand-painted classic commercial art, cheerful characters, bright retro pastels, and subtle aged magazine grain.",
    category: "Retro",
    promptEnhancement: ", retro 1950s hand-painted commercial illustration, vintage mid-century advertisement style, soft pastel gouache brushstrokes, smiling cozy characters, retro Americana aesthetics",
    icon: "Image",
    examplePrompt: "A smiling retro family having a picnic in front of an old station wagon"
  },
  {
    id: "cyber-sunset",
    name: "80s Cyber-Sunset",
    description: "Grid lines sliding into a massive neon sun, wireframe mountains, glowing neon pink and purple gradients.",
    category: "Retro",
    promptEnhancement: ", 1980s outrun synthwave aesthetic, giant glowing low-poly wireframe grid floor, massive glowing neon sun on horizon, wireframe magenta mountains, hot pink and neon purple gradients",
    icon: "Image",
    examplePrompt: "A futuristic sports car driving towards a giant neon wireframe sunset"
  },
  {
    id: "victorian-photo",
    name: "Victorian Gothic Portrait",
    description: "Authentic 1800s cabinet card style with high-contrast sepia tones, light leaks, and antique plate-scratched textures.",
    category: "Retro",
    promptEnhancement: ", 19th century Victorian cabinet card photograph, antique sepia tint, vintage daguerreotype, chemical stains, scratched plate texture, high contrast eerie gothic mood",
    icon: "Image",
    examplePrompt: "A mysterious gothic mansion nestled in overgrown dark oak trees"
  },
  {
    id: "retro-postcard",
    name: "1960s Travel Postcard",
    description: "Saturated technicolor dyes, stylized retro borders, and warm nostalgic linen paper textures.",
    category: "Retro",
    promptEnhancement: ", 1960s vintage travel postcard style, highly saturated technicolor print, offset printing textures, retro linen paper grain, distressed retro typography frame border",
    icon: "Image",
    examplePrompt: "The golden sandy beach of Hawaii under puffy clouds with palm trees framing the view"
  },
  {
    id: "golden-age-comic",
    name: "Golden Age Comic Book",
    description: "Hand-drawn bold black outlines, ink dot gradients, dramatic action frames, and weathered cheap paper textures.",
    category: "Retro",
    promptEnhancement: ", 1940s golden age comic book art style, bold hand-inked line work, retro halftone dot patterns, hand-drawn action panels, slightly yellowed cheap vintage paper texture",
    icon: "Gamepad2",
    examplePrompt: "A retro superhero looking heroic standing atop a city skyscraper at night"
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
    id: "storybook-whimsical",
    name: "Whimsical Storybook",
    description: "Soft, cute hand-drawn watercolor illustration, pencil outlines, heartwarming animals, and fairytale forests.",
    category: "Illustration",
    promptEnhancement: ", cute children's storybook illustration, whimsical watercolor and colored pencil shading, soft warm tones, heartwarming fairytale aesthetics, adorable animal characters",
    icon: "Smile",
    examplePrompt: "A tiny hedgehog wearing a little knit hat sitting under a mushroom holding a cup of tea"
  },
  {
    id: "modern-flat-vector",
    name: "Modern Flat Vector Art",
    description: "Sleek geometric shapes, clean minimal curves, bold colors, high contrast, and stylish modern branding aesthetics.",
    category: "Illustration",
    promptEnhancement: ", modern flat vector illustration, sleek geometric minimalism, clean vector lines, bold flat color blocks, high contrast, trendy corporate art style, minimalist composition",
    icon: "PenTool",
    examplePrompt: "A traveler walking up a winding mountain trail toward a gigantic warm sun"
  },
  {
    id: "3d-paper-cutout",
    name: "3D Paper Cutout Craft",
    description: "Layered shadows, textured craft paper, 3D depth, creating cute and detailed miniature scenery.",
    category: "Illustration",
    promptEnhancement: ", 3d paper cutout shadow box art, layered textured paper sheets, realistic paper shadows, rich 3D depth, adorable miniature scenery craft, intricate paper-cut composition",
    icon: "Brush",
    examplePrompt: "An undersea paradise filled with colorful corals, fishes, and a friendly sea turtle"
  },
  {
    id: "ink-watercolor-wash",
    name: "Ink & Watercolor Wash",
    description: "Expressive black ink splatters, wet bleed colors, and loose sketching on heavy cotton paper.",
    category: "Illustration",
    promptEnhancement: ", expressive ink and watercolor wash painting, loose sketch lines, elegant ink splatters, wet-on-wet paint bleeds, artistic paper textures, elegant sketch masterpiece",
    icon: "Brush",
    examplePrompt: "A cozy Parisian street café with bicycle parked outside under cherry blossom petals"
  },
  {
    id: "pen-crosshatch",
    name: "Detailed Pen & Crosshatch",
    description: "Intricate black-and-white ink drawings with dense line-shading, vintage engraving feel, and fine sketch details.",
    category: "Illustration",
    promptEnhancement: ", intricate fine liner pen drawing, detailed crosshatching shadows, vintage engraving print style, black ink on textured cream-colored paper, high detail hand-drawn sketch",
    icon: "PenTool",
    examplePrompt: "An ancient giant oak tree with gnarly roots and secrets hidden in its hollow trunk"
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
    id: "film-noir",
    name: "1940s Classic Film Noir",
    description: "Dramatic high-contrast black-and-white photography, Venetian blind shadows, rainy dark city streets, and moody smoke.",
    category: "Cinematic",
    promptEnhancement: ", 1940s film noir photography style, dramatic high-contrast black and white, deep chiaroscuro shadows, venetian blind light patterns, rain-soaked dark city streets, atmospheric mist",
    icon: "ShieldAlert",
    examplePrompt: "A solitary detective in a trench coat standing under a lone glowing street lamp in the fog"
  },
  {
    id: "space-odyssey",
    name: "Interstellar Sci-Fi Odyssey",
    description: "Epic cosmic exploration, massive planets, glowing engine trails, sleek starships, and deep stellar nebulae.",
    category: "Cinematic",
    promptEnhancement: ", epic sci-fi space opera cinematic shot, massive detailed ringed planet, sleek starship gliding past, glowing hyperdrive trails, beautiful nebula gases, interstellar atmosphere, detailed spacecraft hull",
    icon: "Orbit",
    examplePrompt: "An astronaut exploring a crystal cave on a purple desert moon with gas giant in background"
  },
  {
    id: "magical-aurora",
    name: "Breathtaking Northern Lights",
    description: "Swirling luminous green and violet aurora ribbons over quiet snow-capped mountains and reflective lakes.",
    category: "Cinematic",
    promptEnhancement: ", breathtaking landscape photography of northern lights, brilliant swirling emerald and violet aurora borealis in night sky, majestic snow-capped mountains, reflective glassy lake surface, high dynamic range",
    icon: "Sun",
    examplePrompt: "A cozy wooden cabin glowing from inside, nestled in snow under a spectacular dancing green aurora"
  },
  {
    id: "golden-hour-sun",
    name: "Sun-Drenched Golden Hour",
    description: "Glistening warm lens flares, volumetric sunbeams, rich orange and amber color tones, and dreamy backlit silhouettes.",
    category: "Cinematic",
    promptEnhancement: ", spectacular cinematic shot at golden hour, sun-drenched backlight, glowing warm lens flares, rich amber and orange color grading, volumetric sunbeams, beautiful dust motes floating, soft magical dream",
    icon: "Sun",
    examplePrompt: "A group of friends laughing on a hilltop during a beautiful summer sunset"
  },
  {
    id: "misty-forest",
    name: "Moody Nordic Misty Forest",
    description: "Atmospheric towering pine trees, heavy mountain mists, cool slate-green color tones, and mysterious pathways.",
    category: "Cinematic",
    promptEnhancement: ", moody cinematic landscape photography, towering foggy pine forest, thick low-hanging mist, cool slate-green and dark charcoal color tones, mysterious dirt path, atmospheric and quiet",
    icon: "ShieldAlert",
    examplePrompt: "A winding forest trail disappearing into a thick wall of white mountain mist"
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
    description: "Lightning fast generation, perfect for quick ideas and drafts.",
    badge: "Lite"
  },
  {
    id: "high",
    label: "High Detail (1K)",
    model: "gemini-3.1-flash-image",
    description: "Crisp 1024px rendering with enhanced depth, lighting, and textures.",
    badge: "Pro 1K"
  },
  {
    id: "ultra",
    label: "Ultra Detail (2K)",
    model: "gemini-3.1-flash-image",
    description: "Supreme 2048px high-definition canvas with micro-detail fidelity.",
    badge: "Pro 2K"
  }
];
