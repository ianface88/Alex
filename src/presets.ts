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
  },
  // Fantasy & Mythical
  {
    id: "elven-glade",
    name: "Elven Glade",
    description: "Luminous, mystical elven woodland with glowing flora, ancient white bark trees, and gentle twilight beams.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", high fantasy elven glade, ethereal glowing flowers, ancient white trees, soft purple and teal twilight lighting, majestic magical atmosphere, detailed digital painting",
    icon: "Sparkles",
    examplePrompt: "A sacred crystal well surrounded by glowing blue water lilies under a starry sky"
  },
  {
    id: "celestial-cosmic",
    name: "Celestial Cosmic Dream",
    description: "Surreal fusion of gold and stardust, showing characters with stellar patterns and glowing golden nebulae.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", celestial cosmic fantasy art, shimmering golden nebulae, glowing dust motes, deep purple space, ethereal divine mood, golden lines and constellation patterns",
    icon: "Orbit",
    examplePrompt: "A beautiful celestial goddess whose hair flows into swirling purple galaxies"
  },
  {
    id: "dragon-den",
    name: "Dragon's Flame Cavern",
    description: "Subterranean dark volcanic lair with rivers of glowing molten lava and glistening dragon scales.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", dark fantasy volcanic cavern, flowing rivers of liquid orange magma, dramatic volcanic heat haze, glistening metallic scales, fiery orange and dark obsidian lighting, epic fantasy art",
    icon: "Flame",
    examplePrompt: "A sleeping black dragon curled around a massive mound of glowing gold coins"
  },
  {
    id: "crystal-cavern",
    name: "Bioluminescent Crystal Cave",
    description: "Subterranean paradise filled with giant glowing purple amethyst spikes and sparkling mineral walls.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", majestic bioluminescent cave, giant glowing purple amethyst and quartz crystals, reflecting light on water pools, glittering limestone walls, magical deep cave lighting",
    icon: "Gem",
    examplePrompt: "A mystical glowing underground waterfall pooling into a turquoise crystal basin"
  },
  {
    id: "enchanted-castle",
    name: "Castle in the Clouds",
    description: "Majestic fairytale spires floating on dense puffy clouds during a dreamy peach and violet sunset.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", whimsical fairytale fantasy castle floating on soft voluminous white clouds, towering golden spires, magical glowing windows, peach and violet sunset glow, dreaming masterwork",
    icon: "Castle",
    examplePrompt: "A soaring magical academy with bridges connecting floating rock islands in the sky"
  },
  {
    id: "dark-necromancy",
    name: "Eerie Necromancer Fire",
    description: "Gothic dark fantasy with glowing emerald soul fire, ancient runic circles, and dark stone columns.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", grim dark gothic fantasy, glowing green soul fire, ancient stone sacrificial circle, ominous floating dark shadows, high-contrast creepy green and black lighting, dramatic oil painting",
    icon: "Skull",
    examplePrompt: "An ancient dark altar with a floating grimoire book glowing with eerie green fire"
  },
  {
    id: "mermaid-reef",
    name: "Siren's Deep Reef",
    description: "A gorgeous underwater kingdom with glowing neon coral reefs, playful sea turtles, and ancient sunken pillars.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", breathtaking underwater fantasy ocean, glowing neon coral reefs, majestic sunken Grecian marble ruins, schools of translucent glowing fish, beautiful sunbeams piercing deep blue water",
    icon: "Anchor",
    examplePrompt: "A majestic sub-aquatic throne carved of white pearl in an underwater cavern"
  },
  {
    id: "phoenix-rebirth",
    name: "Phoenix Rebirth Flame",
    description: "A magnificent blazing firebird rising from a pile of golden ashes, exploding with sparkling fire embers.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", magnificent phoenix bird, body made of blazing orange and gold flames, rising from burning embers, sparkling magical particles, dramatic high contrast fiery studio lighting, epic masterpiece",
    icon: "Flame",
    examplePrompt: "A majestic firebird stretching its wings, shedding glowing embers in a dark forest"
  },
  {
    id: "rune-magic",
    name: "Monolithic Runestones",
    description: "Mysterious ancient standing stones etched with glowing blue magical symbols under a foggy night sky.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", celtic standing runestones, glowing neon blue ancient runes, thick rolling mountain fog, eerie moonlit night, high detail mysterious atmosphere, moody digital painting",
    icon: "Wand2",
    examplePrompt: "A lone traveler standing before a giant circle of glowing runestones in the mist"
  },
  {
    id: "fairy-grove",
    name: "Whimsical Pixie Village",
    description: "Microscopic fairytale forest with glowing pink toadstools and cute tiny houses made of acorns.",
    category: "Fantasy & Mythical",
    promptEnhancement: ", macro fairytale pixie grove, glowing pink and orange mushrooms, cute tiny acorn and snail shell houses, floating golden pollen particles, whimsical soft focus, magical wonderland",
    icon: "Sparkles",
    examplePrompt: "A cozy tiny hollow log cottage with a warm glowing chimney inside a mossy forest"
  },

  // Cosmic & Sci-Fi
  {
    id: "cyber-grid",
    name: "Cyber Grid Matrix",
    description: "Abstract 3D digital grid stretching into infinity, floating digital cubes, and bright cyan laser lines.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", futuristic cyber grid space, infinite neon cyan laser lines, floating glowing 3D wireframe cubes, virtual reality digital matrix, high-tech abstract cyber design",
    icon: "Grid",
    examplePrompt: "A glowing futuristic gateway constructed of bright blue laser beams on a grid floor"
  },
  {
    id: "deep-nebula",
    name: "Supernova Stellar Nebula",
    description: "Breathtaking deep-space view of swirling pink and teal gas clouds, bright young stars, and cosmic dust.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", swirling stellar nebula gas clouds, vibrant hot pink and deep teal colors, millions of twinkling distant stars, celestial hyper-detailed cosmos",
    icon: "Orbit",
    examplePrompt: "A massive spiral galaxy spinning slowly near a shining bright gold star"
  },
  {
    id: "retro-futurism",
    name: "Retro-Futuristic Space",
    description: "1950s atomic age sci-fi style with sleek chrome spaceships, round bubble-helmet spacesuits, and red desert planet dunes.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", 1950s atomic age pulp sci-fi illustration, sleek polished chrome rocket ship, astronauts in bubble helmet suits, saturated vintage technicolor, nostalgic retro space exploration",
    icon: "Compass",
    examplePrompt: "A retro rocket landing on a rocky purple moon under a giant ringed green planet"
  },
  {
    id: "alien-biosphere",
    name: "Alien Bioluminescent Forest",
    description: "Bizarre alien landscape with tall spiral trees, glowing blue grass, and triple moons in the sky.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", exotic alien biosphere, towering pink spiral plants, glowing bioluminescent spores floating, vibrant alien forest, triple moons hanging in a dark indigo sky, epic otherworldly nature",
    icon: "Leaf",
    examplePrompt: "An exotic alien lake with glowing turquoise water reflecting multi-colored stars"
  },
  {
    id: "mech-hangar",
    name: "Massive Mech Hangar",
    description: "Industrial sci-fi hangar with a giant robotic battlesuit being repaired by yellow crane arms, sparks flying.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", cinematic industrial sci-fi mech bay, colossal humanoid robot, robotic repair crane arms, shower of bright yellow sparks, steel catwalks, low-key dramatic high-contrast lighting",
    icon: "Wrench",
    examplePrompt: "A towering white and blue robotic mech suit parked in a high-tech facility hangar"
  },
  {
    id: "solar-punk",
    name: "Solarpunk Green Utopia",
    description: "Futuristic eco-city of curved white stone skyscrapers, overflowing hanging gardens, solar panels, and clean blue skies.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", solarpunk architectural masterpiece, high-tech eco skyscrapers covered in hanging gardens and waterfalls, integrated sleek solar arrays, flying solar gliders, bright clean morning sun",
    icon: "Sun",
    examplePrompt: "A beautiful public courtyard in a futuristic city with families walking among trees and sleek solar pods"
  },
  {
    id: "starship-bridge",
    name: "Starship Command Bridge",
    description: "Sleek sci-fi spaceship bridge looking out of a giant glass windshield at a starry sky accelerating into warp speed.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", interior of starship control bridge, futuristic holographic control panels, massive panoramic cockpit glass window, star trails warping into streaks of light, sleek interstellar vessel",
    icon: "Monitor",
    examplePrompt: "A starship pilot seat facing a giant curved viewscreen showing a beautiful red nebula"
  },
  {
    id: "cybernetic-organic",
    name: "Cybernetic Bio-Organism",
    description: "Elegant blend of smooth white ceramic plates, exposed copper wiring, and glowing neon organic muscle fibers.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", high-tech bio-mechanical design, polished white ceramic plate armor, intricate copper circuits, glowing green muscle fibers, high-contrast macro studio shot, futuristic cyberpunk aesthetic",
    icon: "Shield",
    examplePrompt: "A mechanical robotic butterfly with delicate translucent wings filled with glowing circuits"
  },
  {
    id: "hologram-project",
    name: "Holographic Blue Laser",
    description: "Flickering translucent blue laser wireframe of objects or creatures, complete with retro scanlines and digital glitch.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", glowing blue laser holographic projection, semi-translucent 3D wireframe, subtle retro scanlines, digital noise glitch, dark room studio backdrop, high contrast technical hologram",
    icon: "Zap",
    examplePrompt: "A detailed 3D hologram of a futuristic tiger leaping out from a tablet screen"
  },
  {
    id: "asteroid-mining",
    name: "Asteroid Industrial Mining",
    description: "Rugged industrial spacecraft drilling into a massive dark asteroid in deep space, with flying rock debris.",
    category: "Cosmic & Sci-Fi",
    promptEnhancement: ", rugged industrial sci-fi space scene, mammoth dark rocky asteroid, heavy drilling spaceship emitting high-power laser beams, bright sparks, dark void of space, hyper-realistic details",
    icon: "Hammer",
    examplePrompt: "A group of mechanical space rovers drilling rock in a dusty crater under a massive blue nebula"
  },

  // Abstract & Geometric
  {
    id: "bauhaus-modern",
    name: "Bauhaus Geometric Art",
    description: "Elegant minimalist design using bold primary colors (red, blue, yellow) and clean balanced geometric shapes.",
    category: "Abstract & Geometric",
    promptEnhancement: ", classic Bauhaus design poster, bold primary red and blue and yellow color block, clean geometric circles and triangles, minimal graphic design, vintage paper textures, abstract modern art",
    icon: "Activity",
    examplePrompt: "An abstract face made of geometric red circles, black lines, and yellow triangles"
  },
  {
    id: "memphis-pop",
    name: "Memphis Pattern Pop",
    description: "Sass and energy of the 1980s with playful squiggles, pastel polka dots, and bold black confetti outlines.",
    category: "Abstract & Geometric",
    promptEnhancement: ", 1980s Memphis group design pattern, bright pastel pink and mint colors, black and white diagonal stripes, floating squiggles and dots, pop art, high energy retro aesthetic",
    icon: "Palette",
    examplePrompt: "A playful abstract landscape with floating pastel spheres and striped geometric stairs"
  },
  {
    id: "fluid-acrylic",
    name: "Fluid Acrylic Marble",
    description: "Luxurious swirling paint mixture with metallic gold veins and rich glossy turquoise, violet, and white shades.",
    category: "Abstract & Geometric",
    promptEnhancement: ", fluid acrylic paint pour art, swirling glossy marble textures, glistening metallic gold veins, liquid turquoise and violet colors, abstract expressionism, luxurious and elegant surface",
    icon: "Droplet",
    examplePrompt: "A beautiful abstract painting resembling deep ocean water currents with gold dust"
  },
  {
    id: "neomorphism-ui",
    name: "Neomorphic Soft 3D",
    description: "Clean modern design using soft, extruded 3D bevels, elegant monochromatic shadows, and a minimalist tactile feel.",
    category: "Abstract & Geometric",
    promptEnhancement: ", modern neomorphism 3D rendering, incredibly soft extruded physical shapes, clean monochrome slate-gray backdrop, soft bevels and shadows, highly tactile minimalist interface design",
    icon: "Layers",
    examplePrompt: "A floating minimalist cube with soft rounded corners rising from a matching smooth surface"
  },
  {
    id: "low-poly-3d",
    name: "Low-Poly Papercraft",
    description: "Charming angular 3D style using faceted flat-shaded triangular faces, mimicking geometric paper foldings.",
    category: "Abstract & Geometric",
    promptEnhancement: ", low-poly 3D modeling, sharp faceted triangular faces, origami paper foldings style, flat shaded geometries, clean solid colors, miniature stylized diorama, dramatic studio lighting",
    icon: "Box",
    examplePrompt: "A cute low-poly orange fox sitting under a blocky green pine tree"
  },
  {
    id: "holographic-foil",
    name: "Iridescent Chrome Foil",
    description: "Mesmerizing metallic rainbow foil sheets with fluid chrome ripples that reflect shifting pastel colors.",
    category: "Abstract & Geometric",
    promptEnhancement: ", holographic iridescent foil texture, liquid metallic chrome reflections, shifting pastel rainbow gradients, highly reflective surface, ultra-modern futuristic luxury design",
    icon: "Sparkles",
    examplePrompt: "A floating metallic rose petal made of shifting liquid rainbow chrome foil"
  },
  {
    id: "vaporwave-glitch",
    name: "Vaporwave Glitch Art",
    description: "Distorted 90s digital art featuring purple and magenta hues, classical Greek bust outlines, and video static scanlines.",
    category: "Abstract & Geometric",
    promptEnhancement: ", 1990s vaporwave aesthetic glitch art, chromatic aberration magenta and cyan outlines, retro classical Greek bust statue, computer screen scanlines, vaporous nostalgic 3D space",
    icon: "Activity",
    examplePrompt: "A digital glitch portal in a pink swimming pool surrounded by green palm trees"
  },
  {
    id: "brutalist-poster",
    name: "Swiss Brutalist Poster",
    description: "Raw and high-contrast style using gritty halftone textures, thick solid red and black ink, and heavy grid layouts.",
    category: "Abstract & Geometric",
    promptEnhancement: ", Swiss brutalist graphic design poster, high contrast red and black ink, heavy halftone grain, solid block shapes, raw concrete texture, bold industrial typography layout",
    icon: "Layout",
    examplePrompt: "An abstract high-contrast industrial eye graphic printed on weathered gray paper"
  },
  {
    id: "voronoi-cell",
    name: "Voronoi Computational Web",
    description: "Elegant mathematical cell structures resembling dragonfly wings or cracked mud, illuminated by neon borders.",
    category: "Abstract & Geometric",
    promptEnhancement: ", abstract voronoi cell network, clean computational geometry, glowing orange and cyan neon borders, intricate dark honeycomb pattern, mathematical generative art",
    icon: "Workflow",
    examplePrompt: "A beautiful abstract sculpture made of interlocking glowing voronoi geometric cells"
  },
  {
    id: "sacred-geometry",
    name: "Sacred Golden Mandala",
    description: "Intricate golden ratio lines, overlapping circles, and perfect geometric mandalas over a deep cosmic sky.",
    category: "Abstract & Geometric",
    promptEnhancement: ", sacred geometry vector art, glowing gold thin lines, perfect geometric golden ratio spiral, intricate cosmic mandala, deep space background with stars, spiritual divine masterwork",
    icon: "Compass",
    examplePrompt: "A majestic gold flower of life symbol glowing above a starry dark blue galaxy"
  },

  // Cute & Whimsical
  {
    id: "chibi-clay",
    name: "Chibi Claymation",
    description: "Chubby and cute clay figurines with realistic clay thumbprint textures and soft warm studio lights.",
    category: "Cute & Whimsical",
    promptEnhancement: ", cute chibi claymation character, handmade clay model, realistic micro-fingerprint and clay textures, soft cozy studio lighting, adorable round features, Pixar shorts style",
    icon: "Smile",
    examplePrompt: "An adorable chubby little green frog wearing a miniature yellow raincoat, made of clay"
  },
  {
    id: "kawaii-pastel",
    name: "Kawaii Pastel Cartoon",
    description: "Incredibly cute Japanese-style illustrations with smiling faces, round cheeks, and soft pastel pink and mint shades.",
    category: "Cute & Whimsical",
    promptEnhancement: ", cute kawaii Japanese illustration, adorable smiling characters, blushing pink cheeks, soft pastel mint and strawberry pink colors, clean simple vectors, cheerful happy atmosphere",
    icon: "Heart",
    examplePrompt: "A happy smiling piece of toast with a little pat of butter wearing a tiny red bowtie"
  },
  {
    id: "crochet-plush",
    name: "Cozy Crochet Plushie",
    description: "Cozy handmade yarn toys with visible wool stitches, fuzzy fiber details, and a rustic wooden floor backdrop.",
    category: "Cute & Whimsical",
    promptEnhancement: ", handmade cozy crochet plushie toy, detailed woolen knit stitches, fuzzy yarn fibers, adorable black bead eyes, soft lighting, resting on a warm rustic wooden floor",
    icon: "Smile",
    examplePrompt: "A cute little crocheted orange octopus with a happy tiny stitched smile"
  },
  {
    id: "felted-wool",
    name: "Felted Needle-Wool",
    description: "Fluffy and soft needle-felted animal toys made of condensed organic wool, featuring charming soft fuzz outlines.",
    category: "Cute & Whimsical",
    promptEnhancement: ", needle-felted wool miniature animal, fluffy soft felt texture, organic fuzzy wool outline, adorable hand-crafted look, cozy soft ambient lighting",
    icon: "Award",
    examplePrompt: "A tiny fluffy needle-felted penguin holding a tiny red felt heart"
  },
  {
    id: "candy-kingdom",
    name: "Candy Cane Land",
    description: "Fairytale landscape built out of gingerbread cottages, soft marshmallow clouds, and sparkling gumdrop hills.",
    category: "Cute & Whimsical",
    promptEnhancement: ", magical landscape made entirely of candy, cute gingerbread houses, fluffy white marshmallow clouds, red candy cane trees, glistening sugar gumdrop mountains, sweet cozy fairytale art",
    icon: "IceCream",
    examplePrompt: "A small river of sparkling chocolate flowing through hills of pink cotton candy"
  },
  {
    id: "isometric-diorama",
    name: "Miniature Cubic World",
    description: "Cute 3D cubic diorama placed on a wooden block, showcasing tiny detailed rooms and warm ambient window lights.",
    category: "Cute & Whimsical",
    promptEnhancement: ", cute 3D isometric diorama on a wooden base, miniature detailed room scene, warm cozy interior lighting, stylized tiny furniture, adorable digital art, beautiful toy-like composition",
    icon: "Box",
    examplePrompt: "A miniature library cubic world with tiny bookshelves, a green armchair, and a tiny fireplace"
  },
  {
    id: "sleepy-dreamy",
    name: "Sleepy Starry Cloud",
    description: "Dreamy sleeping animal floating on a fluffy cloud bed, surrounded by hanging gold paper stars and a yellow moon.",
    category: "Cute & Whimsical",
    promptEnhancement: ", dreamy whimsical sleep illustration, sleeping cute animal on a fluffy glowing cloud, hanging golden paper stars, giant glowing crescent moon, soft dark blue night, cozy cozy fantasy",
    icon: "Moon",
    examplePrompt: "A cute sleepy kitten curled up sleeping on a big smiling yellow crescent moon in the stars"
  },
  {
    id: "kawaii-boba",
    name: "Happy Boba Splashes",
    description: "Adorable bubble tea cup with cute eyes and little hands, with milk tea splashes and rainbow sprinkles.",
    category: "Cute & Whimsical",
    promptEnhancement: ", cute kawaii bubble tea cup cartoon, big happy eyes, splashing sweet milk tea, floating black tapioca pearls, colorful rainbow sprinkles, high energy whimsical digital art",
    icon: "Smile",
    examplePrompt: "A cute cartoon strawberry boba cup smiling and wearing a little flower on its head"
  },
  {
    id: "whimsical-garden",
    name: "Silly Talking Garden",
    description: "Cheerful flower characters with googly eyes and wide smiles, whispering under bright sunbeams.",
    category: "Cute & Whimsical",
    promptEnhancement: ", whimsical talking garden illustration, friendly smiling flower characters with big expressive eyes, bright magical sunbeams, giant crawling cute ladybugs, cheerful children's book art",
    icon: "Smile",
    examplePrompt: "A pair of yellow sunflowers wearing sunglasses and smiling happily at each other"
  },
  {
    id: "pocket-adventure",
    name: "Tiny Hero Mouse",
    description: "Tiny mouse explorer wearing a green leaf cape, carrying a wooden toothpick sword, looking brave.",
    category: "Cute & Whimsical",
    promptEnhancement: ", cute pocket-sized fantasy adventure, tiny mouse warrior wearing a green oak leaf cape, holding a toothpick sword, standing bravely on a mossy stone, soft dreamy forest light",
    icon: "Compass",
    examplePrompt: "A tiny mouse explorer looking up in awe at a giant red apple sitting on the forest floor"
  },

  // Architectural & Spaces
  {
    id: "brutalist-concrete",
    name: "Brutalist Concrete Slab",
    description: "Monumental, raw concrete block buildings with strong geometric lines, deep shadows, and an atmospheric cloudy sky.",
    category: "Architectural & Spaces",
    promptEnhancement: ", brutalist monumental architecture, massive raw concrete slab blocks, heavy shadows, geometric clean lines, dramatic perspective, moody overcast cloudy sky, hyper-realistic architectural photo",
    icon: "Home",
    examplePrompt: "A minimalist concrete library building with a giant round window surrounded by water"
  },
  {
    id: "gothic-cathedral",
    name: "Gothic Stone Cathedral",
    description: "Intricate stone spires, soaring flying buttresses, and dusty golden sunbeams piercing a giant stained glass window.",
    category: "Architectural & Spaces",
    promptEnhancement: ", dramatic gothic cathedral interior, majestic stone arches and gargoyles, colossal stained glass rose window, volumetric dusty golden light beams, ancient epic atmosphere",
    icon: "Castle",
    examplePrompt: "A majestic ancient stone cathedral courtyard overgrown with climbing green ivy"
  },
  {
    id: "mid-century-modern",
    name: "Mid-Century Modern Loft",
    description: "Warm teak wood panelling, minimalist retro furniture, a hanging fireplace, and large windows with potted palms.",
    category: "Architectural & Spaces",
    promptEnhancement: ", mid-century modern living room interior, warm teak wood walls, orange and green Eames chairs, large floor-to-ceiling glass windows, stylish atomic fireplace, sunset cozy lighting",
    icon: "Tv",
    examplePrompt: "A beautiful retro 1960s living room looking out at a swimming pool and tall palm trees"
  },
  {
    id: "scandinavian-minimalist",
    name: "Nordic Minimalist Room",
    description: "Sleek bright white walls, light ash wood furniture, soft linen blankets, and a warm flickering candle glow.",
    category: "Architectural & Spaces",
    promptEnhancement: ", Scandinavian minimalist interior design, bright white walls, natural light ash wood, soft cozy gray sheepskin throw, warm flickering candles, clean spacious architectural photo, hyper-cozy",
    icon: "Home",
    examplePrompt: "A quiet minimalist bedroom with a large window showing a gentle snowy forest outside"
  },
  {
    id: "bio-organic-arch",
    name: "Bio-Organic Treehouse",
    description: "Futuristic houses grown organically from colossal living redwood trees, winding spiral stairs, and green vines.",
    category: "Architectural & Spaces",
    promptEnhancement: ", bio-organic architectural fantasy, modern glass house integrated inside a massive living tree trunk, winding wooden steps, climbing green vines, beautiful dappled canopy sunlight",
    icon: "Leaf",
    examplePrompt: "A futuristic eco-friendly home suspended high in a forest canopy made of curved bamboo"
  },
  {
    id: "art-deco-palace",
    name: "Art Deco Brass Luxury",
    description: "Stately golden columns, symmetrical brass geometric patterns, luxury black marble floors, and deep velvet textures.",
    category: "Architectural & Spaces",
    promptEnhancement: ", opulent Art Deco grand lobby, symmetrical gold and brass geometric wall grilles, polished black marble floor with reflections, dark green velvet sofas, luxurious Great Gatsby aesthetic",
    icon: "Award",
    examplePrompt: "A luxurious Art Deco hotel bar shining with polished brass and warm amber lights"
  },
  {
    id: "zen-garden-house",
    name: "Zen Shoji Teahouse",
    description: "Peaceful traditional Japanese house with sliding paper doors, a gravel rock garden, and blooming cherry blossoms.",
    category: "Architectural & Spaces",
    promptEnhancement: ", traditional Japanese zen tea house, sliding paper shoji doors, manicured sand rock garden, small pond with orange koi fish, blooming pink cherry blossom tree, tranquil peaceful morning light",
    icon: "Sun",
    examplePrompt: "A cozy wooden porch of a Japanese cottage facing a misty mountain pine forest"
  },
  {
    id: "cyberpunk-loft",
    name: "Cyberpunk Industrial Loft",
    description: "Futuristic apartment with raw brick walls, exposed copper pipes, multi-colored neon signs, and rain-streaked windows.",
    category: "Architectural & Spaces",
    promptEnhancement: ", industrial cyberpunk loft interior, raw red brick wall, exposed pipes, glowing neon signs in pink and teal, sleek monitors, giant window overlooking a rainy futuristic neon city at night",
    icon: "Zap",
    examplePrompt: "A futuristic bedroom with neon tube lights, computer setups, and a view of skyscrapers"
  },
  {
    id: "mediterranean-villa",
    name: "Terracotta Sea Villa",
    description: "Sun-bleached white stucco walls, terracotta tiled roofs, bright blue window shutters, and vibrant pink bougainvillea.",
    category: "Architectural & Spaces",
    promptEnhancement: ", stunning Mediterranean coastal villa, sun-baked white plaster walls, warm terracotta tiles, vivid blue doors, sprawling hot pink bougainvillea flowers, overlooking a bright turquoise ocean, sunny summer",
    icon: "Compass",
    examplePrompt: "A cozy stone patio with white wooden chairs looking at a beautiful Greek island sunset"
  },
  {
    id: "cozy-treehouse-cabin",
    name: "Redwood Treehouse Cabin",
    description: "Charming rustic log cabin built high in redwood trees, connected by a rope bridge, with warm hanging lanterns.",
    category: "Architectural & Spaces",
    promptEnhancement: ", rustic redwood treehouse cabin, dark cedar log work, glowing orange hanging lanterns, rope suspension bridge, dense forest misty background, cozy fairytale hideaway, warm ambient photo",
    icon: "Home",
    examplePrompt: "A cozy treehouse cabin at twilight with a warm fire glowing inside and smoke rising from the chimney"
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
