import { Sparkles, ArrowRight, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-glow-cyan/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-glow-purple/15 via-transparent to-transparent blur-3xl translate-x-20 translate-y-10" />
      </div>

      {/* Badge */}
      <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="glass-card px-4 py-2 flex items-center gap-2 shimmer">
          <Sparkles className="w-4 h-4 text-glow-cyan" />
          <span className="text-sm text-muted-foreground">AI-Powered Creative Platform</span>
          <span className="px-2 py-0.5 rounded-full bg-glow-cyan/20 text-glow-cyan text-xs font-medium">
            New
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1 
        className="text-center max-w-4xl mb-6 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
          Where
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-gradient glow-text leading-tight">
          Imagination
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
          Comes Alive
        </span>
      </h1>

      {/* Subheading */}
      <p 
        className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        Create magical characters, explore infinite worlds, and bring your wildest ideas to life with the power of AI.
      </p>

      {/* Prompt Input */}
      <div 
        className="relative w-full max-w-2xl mb-8 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-glow-cyan/20 via-glow-purple/20 to-glow-orange/20 blur-xl" />
          <div className="relative glass-card rounded-full p-2 flex items-center gap-2">
            <div className="pl-4">
              <Wand2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your magical creation..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 px-2 text-base"
            />
            <Button variant="hero" size="lg" className="gap-2">
              Create
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div 
        className="flex flex-wrap justify-center gap-3 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        {["Magical creature", "Fantasy world", "Cute robot", "Space adventure"].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setPrompt(suggestion)}
            className="px-4 py-2 rounded-full border border-border/30 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-muted/20 transition-all duration-300"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Scroll Hint */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <div className="scroll-hint-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
