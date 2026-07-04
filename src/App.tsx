import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Camera,
  Zap,
  Brush,
  Gamepad2,
  Paintbrush,
  Smile,
  Palette,
  Image as ImageIcon,
  Orbit,
  Sun,
  PenTool,
  ShieldAlert,
  Download,
  History,
  Sliders,
  Trash2,
  Maximize2,
  Eye,
  EyeOff,
  HelpCircle,
  Check,
  ChevronDown,
  Info,
  ExternalLink,
  X,
  RefreshCw,
  Search,
  ChevronRight,
  Flame,
  Key,
  Heart,
  Bookmark,
  FolderHeart,
  User
} from "lucide-react";
import { STYLE_PRESETS, ASPECT_RATIOS, QUALITY_OPTIONS } from "./presets";
import { StylePreset, AspectRatioOption, QualityOption, GeneratedImage } from "./types";

// Dynamic loading phrases that rotate during generation to keep user engaged
const LOADING_PHRASES = {
  default: [
    "Consulting Gemini's creative center...",
    "Drafting composition geometry...",
    "Synthesizing visual concepts...",
    "Injecting stylistic properties...",
    "Polishing texture layers...",
    "Rendering dynamic contrast...",
    "Finalizing canvas pixels..."
  ],
  photorealistic: [
    "Adjusting camera lens focal length...",
    "Calculating ray-traced volume lighting...",
    "Adding realistic micro-textures...",
    "Calibrating chromatic aberration...",
    "Developing photorealistic depth of field...",
    "Polishing specular highlights..."
  ],
  cyberpunk: [
    "Overclocking neon glow filaments...",
    "Adding cyberpunk rain-slicked asphalt reflections...",
    "Modulating magenta and teal light channels...",
    "Saturating dense city fog variables...",
    "Injecting holographic advertising nodes...",
    "Sychronizing dark alley ambient occlusion..."
  ],
  ghibli: [
    "Mixing whimsical watercolor pigments...",
    "Breezing wind through meadow grasses...",
    "Sculpting fluffy nostalgic cumulus clouds...",
    "Applying soft Studio Ghibli painterly aesthetic...",
    "Illuminating warm sunbeam layers...",
    "Polishing hand-drawn line boundaries..."
  ],
  "pixel-art": [
    "Configuring retro color indexing...",
    "Formatting 16-bit arcade pixel grids...",
    "Applying custom retro dithering...",
    "Optimizing nostalgic sprite contrast...",
    "Saturating cozy tavern shadows...",
    "Finalizing retro tile alignments..."
  ]
};

// Fun and creative starter prompts
const SURPRISE_PROMPTS = [
  "A majestic mechanical owl with brass gears and glowing copper eyes perched on a giant old pocket watch",
  "A cozy wizard's greenhouse inside a hollow glass dome, filled with glowing luminescent ferns and floating potions",
  "A tiny baby fox wearing a woolen explorer backpack sitting on top of a mountain of ancient glowing spellbooks",
  "A high-tech cyberpunk coffee bar where a robotic barista serves steaming espresso under neon-drenched lanterns",
  "A whimsical floating island made of white marble, holding an ancient bonsai tree with gold and pink cherry blossoms",
  "A sleepy sea otter floating on its back wearing tiny retro round sunglasses and eating a floating slice of melon",
  "An old forgotten stone bridge deep in an enchanted forest, covered in glowing mushrooms and blue ivy",
  "A futuristic space pilot resting in a retro leather chair, watching a giant ringed planet through a panoramic spaceship window"
];

// Helper to map string icon names to Lucide Icon components
const PresetIcon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  switch (name) {
    case "Sparkles": return <Sparkles className={className} />;
    case "Camera": return <Camera className={className} />;
    case "Zap": return <Zap className={className} />;
    case "Brush": return <Brush className={className} />;
    case "Gamepad2": return <Gamepad2 className={className} />;
    case "Paintbrush": return <Paintbrush className={className} />;
    case "Smile": return <Smile className={className} />;
    case "Palette": return <Palette className={className} />;
    case "Image": return <ImageIcon className={className} />;
    case "Orbit": return <Orbit className={className} />;
    case "Sun": return <Sun className={className} />;
    case "PenTool": return <PenTool className={className} />;
    case "ShieldAlert": return <ShieldAlert className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [selectedPresetId, setSelectedPresetId] = useState("none");
  const [selectedRatioId, setSelectedRatioId] = useState("1:1");
  const [selectedQualityId, setSelectedQualityId] = useState("standard");
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);
  const [activeImage, setActiveImage] = useState<GeneratedImage | null>(null);
  const [history, setHistory] = useState<GeneratedImage[]>([]);
  const [savedImages, setSavedImages] = useState<GeneratedImage[]>([]);
  const [galleryTab, setGalleryTab] = useState<"saved" | "history">("saved");
  const [isPromptExpanded, setIsPromptExpanded] = useState(false); // set to false so it is neat and simple by default
  const [presetSearch, setPresetSearch] = useState("");
  const [presetFilter, setPresetFilter] = useState<string>("All");
  const [loadingPhraseIndex, setLoadingPhraseIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GeneratedImage | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<"free" | "gemini">("free");

  const phraseIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const endOfWorkspaceRef = useRef<HTMLDivElement | null>(null);

  // Load history & saved images from localStorage on mount
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem("imagipreset_history");
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        setHistory(parsedHistory);
        if (parsedHistory.length > 0) {
          setActiveImage(parsedHistory[0]);
        }
      }

      const storedSaved = localStorage.getItem("alex_saved_masterpieces");
      if (storedSaved) {
        setSavedImages(JSON.parse(storedSaved));
      }
    } catch (e) {
      console.error("Failed to load from localStorage", e);
    }
  }, []);

  // Save history to localStorage when it changes
  const saveHistory = (newHistory: GeneratedImage[]) => {
    setHistory(newHistory);
    try {
      localStorage.setItem("imagipreset_history", JSON.stringify(newHistory));
    } catch (e) {
      console.error("Failed to save history to localStorage", e);
    }
  };

  // Save/Remove saved images
  const saveToCollection = (image: GeneratedImage) => {
    if (savedImages.some(img => img.id === image.id)) return;
    const updated = [image, ...savedImages];
    setSavedImages(updated);
    try {
      localStorage.setItem("alex_saved_masterpieces", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save collection to localStorage", e);
    }
  };

  const removeFromCollection = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = savedImages.filter(img => img.id !== id);
    setSavedImages(updated);
    try {
      localStorage.setItem("alex_saved_masterpieces", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save collection to localStorage", e);
    }
  };

  const isImageSaved = (id: string) => savedImages.some(img => img.id === id);

  // Get active preset
  const activePreset = STYLE_PRESETS.find(p => p.id === selectedPresetId) || STYLE_PRESETS[0];

  // Get current aspect ratio config
  const activeRatio = ASPECT_RATIOS.find(r => r.id === selectedRatioId) || ASPECT_RATIOS[0];

  // Get current quality config
  const activeQuality = QUALITY_OPTIONS.find(q => q.id === selectedQualityId) || QUALITY_OPTIONS[0];

  // Compute final enhanced prompt
  const enhancedPrompt = prompt ? `${prompt}${activePreset.promptEnhancement}` : "";

  // Rotate loading phrases during generation
  useEffect(() => {
    if (isGenerating) {
      setLoadingPhraseIndex(0);
      const phrases = (LOADING_PHRASES as any)[selectedPresetId] || LOADING_PHRASES.default;
      
      phraseIntervalRef.current = setInterval(() => {
        setLoadingPhraseIndex(prev => (prev + 1) % phrases.length);
      }, 2500);
    } else {
      if (phraseIntervalRef.current) {
        clearInterval(phraseIntervalRef.current);
      }
    }

    return () => {
      if (phraseIntervalRef.current) {
        clearInterval(phraseIntervalRef.current);
      }
    };
  }, [isGenerating, selectedPresetId]);

  // Handle "Surprise Me" creative prompts
  const handleSurpriseMe = () => {
    const remaining = SURPRISE_PROMPTS.filter(p => p !== prompt);
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    setPrompt(random);
    setErrorMessage(null);
  };

  // Trigger generator
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setErrorMessage("Please enter a prompt to start your creation.");
      return;
    }

    setIsGenerating(true);
    setErrorMessage(null);
    setIsQuotaExceeded(false);

    // Scroll to results container on mobile for better UX
    setTimeout(() => {
      endOfWorkspaceRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt,
          enhancedPrompt: enhancedPrompt,
          aspectRatio: selectedRatioId,
          quality: selectedQualityId,
          engine: selectedEngine,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.isQuotaError) {
          setIsQuotaExceeded(true);
        }
        throw new Error(data.error || "Failed to generate your image.");
      }

      const newImage: GeneratedImage = {
        id: `img_${Date.now()}`,
        url: data.imageUrl,
        prompt: data.prompt,
        enhancedPrompt: data.enhancedPrompt,
        styleId: selectedPresetId,
        styleName: activePreset.name,
        aspectRatio: data.aspectRatio,
        quality: data.quality,
        model: data.model,
        timestamp: data.timestamp,
      };

      setActiveImage(newImage);
      saveHistory([newImage, ...history]);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred while communicating with Gemini.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Copy enhanced prompt to clipboard
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reuse a history item's configuration
  const handleReuseSettings = (item: GeneratedImage) => {
    setPrompt(item.prompt);
    setSelectedPresetId(item.styleId);
    setSelectedRatioId(item.aspectRatio);
    setSelectedQualityId(item.quality);
    setActiveImage(item);
    setLightboxImage(null);
    setErrorMessage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete history item
  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = history.filter(item => item.id !== id);
    saveHistory(updated);
    if (activeImage?.id === id) {
      setActiveImage(updated[0] || null);
    }
  };

  // Clear entire history
  const handleClearHistory = () => {
    if (window.confirm("Are you sure you want to clear your local generation history?")) {
      saveHistory([]);
      setActiveImage(null);
    }
  };

  // Preset filter categories
  const categories = ["All", "Artistic", "Realistic", "Illustration", "Retro", "Cinematic"];

  // Filtered style presets
  const filteredPresets = STYLE_PRESETS.filter(p => {
    const matchesCategory = presetFilter === "All" || p.category === presetFilter;
    const matchesSearch = p.name.toLowerCase().includes(presetSearch.toLowerCase()) || 
                          p.description.toLowerCase().includes(presetSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentPhrases = (LOADING_PHRASES as any)[selectedPresetId] || LOADING_PHRASES.default;
  const currentPhrase = currentPhrases[loadingPhraseIndex] || currentPhrases[0];

  return (
    <div id="app_root" className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 antialiased font-sans">
      
      {/* Background ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-950/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[5%] w-80 h-80 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Banner / Navbar */}
      <header id="app_header" className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Brush className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-indigo-100 to-indigo-200 flex items-center gap-2">
                Alex's StudioCraft
              </h1>
              <p className="text-xs text-indigo-300 font-medium tracking-wide flex items-center gap-1">
                <User className="w-3 h-3 text-pink-400" /> ARTIST CREATIVE CANVAS
              </p>
            </div>
          </div>

          {/* Model Status Bar with Interactive Engine Toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900/95 border border-slate-800/80 rounded-2xl sm:rounded-full p-2 sm:py-1.5 sm:px-4 text-xs w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-400 font-medium">Studio Engine:</span>
            </div>

            {/* Interactive Engine Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-850/80 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={() => {
                  setSelectedEngine("free");
                  setErrorMessage(null);
                  setIsQuotaExceeded(false);
                }}
                className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg font-bold transition-all text-[10px] uppercase tracking-wider cursor-pointer text-center ${
                  selectedEngine === "free"
                    ? "bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                }`}
              >
                Free Studio (FLUX)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedEngine("gemini");
                  setErrorMessage(null);
                  setIsQuotaExceeded(false);
                }}
                className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg font-bold transition-all text-[10px] uppercase tracking-wider cursor-pointer text-center flex items-center justify-center gap-1 ${
                  selectedEngine === "gemini"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                }`}
              >
                Gemini (Imagen)
              </button>
            </div>

            <span className="font-mono text-indigo-400 font-semibold bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-900/30 hidden md:inline-block">
              {selectedEngine === "free" ? "FLUX-FREE" : activeQuality.model.split("/").pop()}
            </span>
            
            {/* Secrets tip */}
            <div className="group relative hidden sm:block">
              <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-200 cursor-help" />
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-slate-900 border border-slate-700 text-slate-300 p-3 rounded-lg w-64 shadow-xl z-50 text-xs leading-relaxed">
                Choose the <strong>Free Studio Engine</strong> for keyless, unlimited art generation or <strong>Gemini</strong> (requires a billable key).
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Workspace */}
      <main id="app_main" className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:py-8">
        
        {/* Banner Informational note */}
        {selectedEngine === "gemini" && selectedQualityId !== "standard" && (
          <div className="mb-6 bg-amber-950/30 border border-amber-900/50 text-amber-200 rounded-xl p-4 flex gap-3 text-sm items-start">
            <Key className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
            <div>
              <p className="font-semibold">Paid API Key Recommendation</p>
              <p className="text-amber-300/90 mt-0.5">
                Generating with High Quality or Ultra Detail sizes requires your own Google developer billable API key. If generation fails, please verify your keys in AI Studio Secrets, or keep quality at <strong>Standard Quality</strong> (powered by <code>gemini-3.1-flash-lite-image</code>).
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Controls (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            <form onSubmit={handleGenerate} className="space-y-6">
              
              {/* Box 1: Core Prompt */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-indigo-500 rounded-full" />
                    1. Define Core Prompt
                  </label>
                  <button
                    type="button"
                    onClick={handleSurpriseMe}
                    disabled={isGenerating}
                    className="text-xs bg-indigo-950 hover:bg-indigo-900 border border-indigo-800/50 hover:border-indigo-700 text-indigo-300 px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Surprise Me!
                  </button>
                </div>

                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Describe what you want to see... (e.g., An astronaut riding a majestic horse on the rings of Saturn)"
                    className="w-full min-h-[100px] bg-slate-950/90 border border-slate-800 focus:border-indigo-500/80 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm transition resize-y"
                    maxLength={800}
                    disabled={isGenerating}
                  />
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-600">
                    {prompt.length}/800
                  </div>
                </div>
              </div>

              {/* Box 2: Style Preset Selector */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-indigo-500 rounded-full" />
                    2. Select Style Preset
                  </label>

                  {/* Search bar inside preset */}
                  <div className="relative max-w-xs w-full">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                    <input
                      type="text"
                      value={presetSearch}
                      onChange={(e) => setPresetSearch(e.target.value)}
                      placeholder="Search style..."
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500/80 rounded-lg pl-8 pr-3 py-1 text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 text-slate-200"
                    />
                  </div>
                </div>

                {/* Filter categories */}
                <div className="flex flex-wrap gap-1.5 border-b border-slate-800 pb-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setPresetFilter(cat)}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-md transition ${
                        presetFilter === cat
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Grid of presets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[290px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                  {filteredPresets.map((preset) => {
                    const isSelected = selectedPresetId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPresetId(preset.id)}
                        className={`text-left p-3 rounded-xl border transition flex flex-col justify-between gap-1 h-[96px] group relative overflow-hidden ${
                          isSelected
                            ? "bg-indigo-950/40 border-indigo-500/80 shadow-md shadow-indigo-500/5 text-slate-100"
                            : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30 text-slate-300"
                        }`}
                      >
                        {/* Selected accent glow */}
                        {isSelected && (
                          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                        )}

                        <div className="flex items-start gap-2.5">
                          <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 group-hover:text-slate-200'}`}>
                            <PresetIcon name={preset.icon} className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-xs flex items-center gap-1.5">
                              {preset.name}
                              {preset.id === "none" && (
                                <span className="text-[9px] font-mono bg-slate-800 text-slate-400 px-1 rounded">RAW</span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400 group-hover:text-slate-300 mt-0.5 line-clamp-2 leading-relaxed">
                              {preset.description}
                            </p>
                          </div>
                        </div>

                        <div className="text-[9px] font-mono text-indigo-400/70 font-semibold self-end bg-indigo-950/20 px-1.5 py-0.5 rounded border border-indigo-900/10 uppercase tracking-widest">
                          {preset.category}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Box 3: Proportion & Resolution config */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Aspect ratio selector */}
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-4">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-indigo-500 rounded-full" />
                    3. Dimensions / Aspect Ratio
                  </label>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {ASPECT_RATIOS.map((ratio) => {
                      const isSelected = selectedRatioId === ratio.id;
                      return (
                        <button
                          key={ratio.id}
                          type="button"
                          onClick={() => setSelectedRatioId(ratio.id)}
                          className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs font-medium transition ${
                            isSelected
                              ? "bg-indigo-950/40 border-indigo-500/80 text-white"
                              : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          {/* Mini ratio preview */}
                          <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center shrink-0">
                            <div className={`bg-indigo-500/50 border border-indigo-400 rounded ${ratio.widthClass} ${ratio.heightClass} shadow-inner`} />
                          </div>
                          <span>{ratio.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quality options */}
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-4">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-indigo-500 rounded-full" />
                    4. Render Quality
                  </label>

                  <div className="space-y-2">
                    {QUALITY_OPTIONS.map((opt) => {
                      const isSelected = selectedQualityId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedQualityId(opt.id)}
                          className={`w-full text-left p-2.5 rounded-xl border transition flex items-start gap-3 relative ${
                            isSelected
                              ? "bg-indigo-950/40 border-indigo-500/80 text-white"
                              : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold">{opt.label}</span>
                              {opt.badge && (
                                <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                  opt.id === "standard" 
                                    ? "bg-emerald-950/50 text-emerald-400 border border-emerald-900/40"
                                    : "bg-amber-950/50 text-amber-400 border border-amber-900/40"
                                }`}>
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400/90 mt-0.5 leading-normal">
                              {opt.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Collapsible expanded prompt view to see "magic" under the hood */}
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsPromptExpanded(!isPromptExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-slate-900/50 hover:bg-slate-900 transition text-xs text-slate-400"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                    How Prompt Enhancements Work (Live Preview)
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPromptExpanded ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isPromptExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-800/50 bg-slate-950/60 p-4 text-xs space-y-2.5"
                    >
                      <div className="text-[11px] text-slate-400 leading-relaxed font-normal">
                        Selecting styles adds high-impact creative descriptors. Your prompt is enhanced in real-time as shown below:
                      </div>

                      <div className="font-mono p-3 bg-slate-900/80 border border-slate-800/80 rounded-lg text-slate-300 break-words leading-relaxed select-all">
                        {prompt ? (
                          <>
                            <span className="text-white font-semibold">{prompt}</span>
                            {activePreset.promptEnhancement ? (
                              <span className="text-indigo-400">{activePreset.promptEnhancement}</span>
                            ) : (
                              <span className="text-slate-500 italic"> (No preset enhancement appended)</span>
                            )}
                          </>
                        ) : (
                          <span className="text-slate-500 italic">Enter a core prompt above to see live enhancements...</span>
                        )}
                      </div>

                      {prompt && (
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(enhancedPrompt, "enhanced_preview")}
                            className="text-[10px] text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 cursor-pointer"
                          >
                            {copiedId === "enhanced_preview" ? "Copied!" : "Copy Full Enhanced Prompt"}
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Error Alert Box */}
              {errorMessage && (
                <div className="bg-red-950/30 border border-red-900/50 text-red-200 p-4 rounded-xl text-sm flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 w-full">
                    <p className="font-semibold text-red-200">Generation Error</p>
                    <p className="text-red-300/95 leading-relaxed text-xs">{errorMessage}</p>
                    {isQuotaExceeded ? (
                      <div className="mt-3 bg-slate-950/90 rounded-xl p-3.5 border border-red-900/40 space-y-2.5 text-xs">
                        <div className="flex items-center gap-2 text-amber-400 font-semibold">
                          <Key className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>How to Resolve Key Quota Limit:</span>
                        </div>
                        <ol className="list-decimal pl-4 space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                          <li>
                            Ensure your Google AI Studio project is connected to a <strong>Paid/Billable plan</strong>. Free-tier keys have a limit of 0 for image generation.
                          </li>
                          <li>
                            Copy your billable API key from the <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline inline-flex items-center gap-0.5 font-medium">Google AI Studio console <ExternalLink className="w-2.5 h-2.5" /></a>.
                          </li>
                          <li>
                            Open the <strong>Settings &gt; Secrets</strong> menu (in the top-right toolbar of the AI Studio editor) and paste your key under the <code>GEMINI_API_KEY</code> field.
                          </li>
                        </ol>
                        <p className="text-[10px] text-slate-400 italic">
                          AI Studio will automatically inject your updated key. Once saved, you can try generating again!
                        </p>
                      </div>
                    ) : (
                      <p className="text-[10px] text-red-400/85">
                        Tip: Standard quality works most reliably if your key hasn't been upgraded.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Action Trigger Button */}
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className={`w-full py-4 px-6 rounded-2xl font-bold tracking-wide transition flex items-center justify-center gap-2.5 text-sm cursor-pointer shadow-lg ${
                  !prompt.trim()
                    ? "bg-slate-800/80 text-slate-500 border border-slate-700/30 cursor-not-allowed"
                    : isGenerating
                    ? "bg-indigo-950 text-indigo-400 border border-indigo-900/50 cursor-wait"
                    : "bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-600/20 shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.01]"
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating Masterpiece...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Generate {activePreset.name !== "No Preset (Raw Prompt)" ? `with ${activePreset.name}` : "Masterpiece"}
                  </>
                )}
              </button>

            </form>

          </div>

          {/* RIGHT COLUMN: Active Canvas & Metadata (5 cols on lg) */}
          <div ref={endOfWorkspaceRef} className="lg:col-span-5 space-y-6">
            
            {/* Box: Canvas */}
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl flex flex-col h-full">
              
              {/* Canvas header */}
              <div className="bg-slate-900/60 border-b border-slate-800/80 px-5 py-3.5 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isGenerating ? "bg-amber-400 animate-ping" : activeImage ? "bg-indigo-500" : "bg-slate-600"}`} />
                  Art Canvas Studio
                </span>
                {activeImage && !isGenerating && (
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => isImageSaved(activeImage.id) ? removeFromCollection(activeImage.id) : saveToCollection(activeImage)}
                      className="p-1.5 text-slate-400 hover:text-pink-400 rounded-lg hover:bg-slate-850/60 transition flex items-center gap-1 text-[11px]"
                      title={isImageSaved(activeImage.id) ? "Remove from Collection" : "Save to Collection"}
                    >
                      <Heart className={`w-4 h-4 ${isImageSaved(activeImage.id) ? "fill-pink-500 text-pink-500" : ""}`} />
                      <span className="hidden sm:inline">{isImageSaved(activeImage.id) ? "Saved" : "Save"}</span>
                    </button>
                    <button
                      onClick={() => setLightboxImage(activeImage)}
                      className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-850/60 transition"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <a
                      href={activeImage.url}
                      download={`imagipreset_${activeImage.id}.png`}
                      className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-850/60 transition"
                      title="Download Image"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Canvas workspace - sizes appropriately */}
              <div className="p-6 bg-slate-950/40 flex items-center justify-center min-h-[380px] sm:min-h-[460px] relative">
                
                {/* 1. Empty State */}
                {!activeImage && !isGenerating && (
                  <div className="text-center p-6 space-y-4 max-w-sm">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto shadow-inner text-slate-500">
                      <ImageIcon className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-slate-300">Your canvas is blank</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Input a core creative prompt on the left, choose an artistic style preset, and hit generate to bring it to life!
                      </p>
                    </div>
                    <button
                      onClick={handleSurpriseMe}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 hover:underline"
                    >
                      Need inspiration? Surprise Me <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                )}

                {/* 2. Generating / Loading State */}
                {isGenerating && (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 space-y-6">
                    {/* Artistic loading spinner container */}
                    <div className="relative flex items-center justify-center">
                      {/* Floating glowing aura */}
                      <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse" />
                      
                      {/* Rotating ring */}
                      <div className="w-16 h-16 rounded-full border-2 border-slate-800 border-t-indigo-500 animate-spin" />
                      
                      {/* Center floating icon */}
                      <div className="absolute flex items-center justify-center">
                        <PresetIcon name={activePreset.icon} className="w-6 h-6 text-indigo-400 animate-bounce" />
                      </div>
                    </div>

                    <div className="text-center space-y-2 max-w-xs">
                      {/* Rotating messages */}
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={currentPhrase}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs font-semibold text-slate-200 tracking-wide font-mono"
                        >
                          {currentPhrase}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-[10px] text-slate-500 font-normal">
                        Gemini is painting your canvas using neural networks. This typically takes 3 to 8 seconds.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. Render Image */}
                {activeImage && !isGenerating && (
                  <div className="w-full flex items-center justify-center">
                    <div className="relative group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                      <img
                        src={activeImage.url}
                        alt={activeImage.prompt}
                        className="max-h-[420px] max-w-full object-contain transition duration-300 group-hover:scale-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Canvas footer metadata info */}
              {activeImage && !isGenerating && (
                <div className="bg-slate-900/40 border-t border-slate-800/80 p-5 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider font-mono">
                      Core Concept Prompt
                    </span>
                    <p className="text-xs font-semibold text-slate-200 leading-relaxed italic">
                      "{activeImage.prompt}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px] border-t border-slate-800/60 pt-3">
                    <div>
                      <span className="text-slate-500">Preset Style:</span>
                      <p className="text-slate-300 font-semibold flex items-center gap-1.5 mt-0.5">
                        <PresetIcon name={activePreset.icon} className="w-3.5 h-3.5 text-indigo-400" />
                        {activeImage.styleName}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Aspect Ratio:</span>
                      <p className="text-slate-300 font-semibold mt-0.5">
                        {activeImage.aspectRatio} (Dimensions)
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Quality:</span>
                      <p className="text-slate-300 font-semibold mt-0.5 capitalize">
                        {activeImage.quality}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Engine model:</span>
                      <p className="text-indigo-400/90 font-semibold font-mono mt-0.5">
                        {activeImage.model.split("/").pop()}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced prompt snippet copy */}
                  <div className="bg-slate-950/80 rounded-lg p-2.5 border border-slate-800/60 text-[10px] font-mono text-slate-400 leading-relaxed flex items-start justify-between gap-3">
                    <div className="break-all flex-1 line-clamp-2">
                      <span className="text-indigo-400 font-semibold">Enhanced: </span>
                      {activeImage.enhancedPrompt}
                    </div>
                    <button
                      onClick={() => copyToClipboard(activeImage.enhancedPrompt, activeImage.id)}
                      className="shrink-0 text-indigo-400 hover:text-indigo-300 cursor-pointer font-bold hover:underline"
                    >
                      {copiedId === activeImage.id ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  {/* Alex's satisfying Save/Download Row */}
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    {isImageSaved(activeImage.id) ? (
                      <button
                        onClick={(e) => removeFromCollection(activeImage.id, e)}
                        className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-pink-950/50 border border-pink-900/60 hover:bg-pink-900/30 text-pink-300 transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-pink-950/20 active:scale-[0.98]"
                      >
                        <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
                        Saved in Alex's Studio Collection
                      </button>
                    ) : (
                      <button
                        onClick={() => saveToCollection(activeImage)}
                        className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                      >
                        <Heart className="w-4 h-4" />
                        Save to Studio Collection
                      </button>
                    )}

                    <a
                      href={activeImage.url}
                      download={`alex_art_${activeImage.id}.png`}
                      className="py-3 px-5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition flex items-center justify-center gap-1.5 active:scale-[0.98]"
                    >
                      <Download className="w-4 h-4 text-indigo-400" />
                      Save/Download PNG
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* SECTION: Gallery & Collections */}
        <section id="app_gallery" className="mt-12 bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-6">
          
          {/* Tabs Navigation Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            
            <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800/60 self-start">
              {/* Tab: Saved Works */}
              <button
                onClick={() => setGalleryTab("saved")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[40px] ${
                  galleryTab === "saved"
                    ? "bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <FolderHeart className="w-4 h-4 shrink-0" />
                <span>Alex's Saved Studio ({savedImages.length})</span>
              </button>

              {/* Tab: General History */}
              <button
                onClick={() => setGalleryTab("history")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[40px] ${
                  galleryTab === "history"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <History className="w-4 h-4 shrink-0" />
                <span>All Draft History ({history.length})</span>
              </button>
            </div>

            {/* Clear Actions */}
            {galleryTab === "history" && history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="text-xs text-red-400 hover:text-red-300 font-semibold transition flex items-center gap-1 cursor-pointer py-1 px-3 rounded-lg hover:bg-red-950/20"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear All Draft History
              </button>
            )}

            {galleryTab === "saved" && savedImages.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to clear your saved gallery collection?")) {
                    setSavedImages([]);
                    localStorage.removeItem("alex_saved_masterpieces");
                  }
                }}
                className="text-xs text-pink-400 hover:text-pink-300 font-semibold transition flex items-center gap-1 cursor-pointer py-1 px-3 rounded-lg hover:bg-pink-950/20"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Studio Collection
              </button>
            )}

          </div>

          {/* RENDER CURRENT TAB */}
          {galleryTab === "saved" ? (
            /* TAB: SAVED COLLECTION */
            savedImages.length === 0 ? (
              <div className="text-center py-14 bg-slate-950/30 border border-dashed border-slate-800/60 rounded-xl space-y-3.5 max-w-md mx-auto p-4">
                <div className="w-12 h-12 bg-pink-950/40 border border-pink-900/40 rounded-full flex items-center justify-center text-pink-400 mx-auto">
                  <Heart className="w-6 h-6 fill-pink-500/15" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-300">No saved masterpieces yet</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Click the <strong>"Save to Studio Collection"</strong> heart button on any masterpiece you create above to store it in your beautiful custom archive!
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {savedImages.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveImage(item);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`group relative rounded-xl border overflow-hidden bg-slate-950/80 cursor-pointer transition flex flex-col justify-between ${
                      activeImage?.id === item.id
                        ? "border-pink-500 shadow-md shadow-pink-500/5 ring-1 ring-pink-500/30"
                        : "border-slate-800 hover:border-slate-700 hover:scale-[1.01]"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="aspect-square bg-slate-900 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.prompt}
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.04]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Saved Heart Badge */}
                      <div className="absolute top-2.5 right-2.5 bg-pink-600 text-white p-1 rounded-full shadow-md z-10 border border-pink-400/30">
                        <Heart className="w-3.5 h-3.5 fill-current text-white" />
                      </div>

                      {/* Hover controls overlay */}
                      <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition duration-150 flex flex-col items-center justify-center gap-2 p-2 text-center z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage(item);
                          }}
                          className="bg-slate-900 text-slate-200 hover:text-white p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
                          title="View Fullscreen"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReuseSettings(item);
                          }}
                          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] px-2.5 py-1.5 rounded-lg transition"
                        >
                          Reuse Config
                        </button>

                        <button
                          onClick={(e) => removeFromCollection(item.id, e)}
                          className="text-[9px] text-pink-400 hover:text-pink-300 hover:underline mt-1 font-semibold block"
                        >
                          Unsave
                        </button>
                      </div>

                      {/* Style label */}
                      <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-mono text-pink-300 border border-slate-800/40">
                        {item.styleName}
                      </div>
                    </div>

                    {/* Small card details */}
                    <div className="p-3 space-y-1 bg-slate-900/40">
                      <p className="text-[10px] text-slate-300 font-medium line-clamp-2 leading-relaxed italic">
                        "{item.prompt}"
                      </p>
                      <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1.5 border-t border-slate-800/50">
                        <span>{item.aspectRatio}</span>
                        <button
                          onClick={(e) => removeFromCollection(item.id, e)}
                          className="text-slate-500 hover:text-pink-400 p-0.5 transition shrink-0"
                          title="Unsave Image"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )
          ) : (
            /* TAB: GENERAL DRAFT HISTORY */
            history.length === 0 ? (
              <div className="text-center py-10 bg-slate-950/30 border border-dashed border-slate-800/60 rounded-xl">
                <p className="text-xs text-slate-500">Your generated drafts will be auto-saved here during your session.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {history.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveImage(item);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`group relative rounded-xl border overflow-hidden bg-slate-950/80 cursor-pointer transition flex flex-col justify-between ${
                      activeImage?.id === item.id
                        ? "border-indigo-500 shadow-md shadow-indigo-500/5 ring-1 ring-indigo-500/30"
                        : "border-slate-800 hover:border-slate-700 hover:scale-[1.01]"
                    }`}
                  >
                    {/* Thumbnail aspect holder */}
                    <div className="aspect-square bg-slate-900 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.prompt}
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.04]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Style indicator marker */}
                      {isImageSaved(item.id) && (
                        <div className="absolute top-2 right-2 bg-pink-600/90 text-white p-0.5 rounded-full shadow-sm z-10">
                          <Heart className="w-2.5 h-2.5 fill-current text-white" />
                        </div>
                      )}

                      {/* Hover controls overlay */}
                      <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition duration-150 flex flex-col items-center justify-center gap-2 p-2 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage(item);
                          }}
                          className="bg-slate-900 text-slate-200 hover:text-white p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
                          title="View Fullscreen"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReuseSettings(item);
                          }}
                          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] px-2.5 py-1.5 rounded-lg transition"
                        >
                          Reuse Config
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            isImageSaved(item.id) ? removeFromCollection(item.id) : saveToCollection(item);
                          }}
                          className="text-[9px] text-indigo-400 hover:text-indigo-300 hover:underline mt-1 font-semibold block"
                        >
                          {isImageSaved(item.id) ? "Unsave" : "Save Image"}
                        </button>
                      </div>

                      {/* Style preset indicator label overlay on image */}
                      <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-mono text-indigo-300 border border-slate-800/40">
                        {item.styleName}
                      </div>
                    </div>

                    {/* Small card details */}
                    <div className="p-3 space-y-1 bg-slate-900/40">
                      <p className="text-[10px] text-slate-300 font-medium line-clamp-2 leading-relaxed italic">
                        "{item.prompt}"
                      </p>
                      <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1.5 border-t border-slate-800/50">
                        <span>{item.aspectRatio}</span>
                        <button
                          onClick={(e) => handleDeleteItem(item.id, e)}
                          className="text-slate-500 hover:text-red-400 p-0.5 transition shrink-0"
                          title="Delete from history"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )
          )}
        </section>

      </main>

      {/* FOOTER */}
      <footer id="app_footer" className="mt-16 border-t border-slate-900 bg-slate-950/40 py-8 text-center text-xs text-slate-500 space-y-2">
        <p>
          Powered by <strong className="text-slate-400">Gemini 3.1 Neural Models</strong> & official <strong>@google/genai</strong> SDK.
        </p>
        <p className="text-[10px] text-slate-600 font-mono">
          All image data stays private, securely loaded locally, with secrets safely guarded on server routes.
        </p>
      </footer>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-6 flex flex-col items-center justify-center gap-4"
          >
            
            {/* Top close bar */}
            <div className="w-full max-w-5xl flex items-center justify-between text-slate-300">
              <span className="text-xs font-semibold font-mono tracking-wider">
                VIEWING IN FULL FIDELITY
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main view frame */}
            <div className="flex-1 max-w-4xl max-h-[75vh] flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.prompt}
                className="max-w-full max-h-full object-contain rounded-lg border border-slate-800/80 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom details card inside lightbox */}
            <div className="w-full max-w-3xl bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl space-y-3.5 text-xs text-left">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest font-mono">
                  Concept Prompt
                </span>
                <p className="text-slate-200 font-medium italic text-sm">
                  "{lightboxImage.prompt}"
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] pt-2 border-t border-slate-800/55 text-slate-400">
                <div>
                  <span className="text-slate-500 block">Preset Style</span>
                  <strong className="text-slate-300 font-semibold">{lightboxImage.styleName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Dimensions</span>
                  <strong className="text-slate-300 font-semibold">{lightboxImage.aspectRatio}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Rendering size</span>
                  <strong className="text-slate-300 font-semibold capitalize">{lightboxImage.quality}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Model Engine</span>
                  <strong className="text-indigo-400/90 font-mono text-[10px] break-all">
                    {lightboxImage.model.split("/").pop()}
                  </strong>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 justify-end">
                <button
                  onClick={() => handleReuseSettings(lightboxImage)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-1.5 rounded-lg transition text-xs cursor-pointer"
                >
                  Reuse Configuration
                </button>
                <a
                  href={lightboxImage.url}
                  download={`imagipreset_${lightboxImage.id}.png`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 font-semibold px-4 py-1.5 rounded-lg transition text-xs flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PNG
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
