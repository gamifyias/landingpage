import { useEffect, useRef, useState, useCallback } from "react";
import { QrCode, Sparkles, Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

import gamifyMain from "@/assets/gamify_main.png";
import character2 from "@/assets/character-2.png";
import character3 from "@/assets/character-3.png";
import character4 from "@/assets/character-4.png";
import character5 from "@/assets/character-5.png";

const products = [
  { image: gamifyMain, title: "Main Site", creator: "Gamify IAS Core", id: "SITE", url: "https://gamifyias.in" },
  { image: character2, title: "SecondMom Mentorship", creator: "Mentorship Program", id: "MENTOR", url: "https://gamifyias.com/secondmom" },
  { image: character3, title: "LMS SYSTEM", creator: "Learning Management", id: "LMS", url: "https://lms.gamifyias.in" },
  { image: character4, title: "AI CHATBOT", creator: "Intellectual Assistant", id: "AI", url: "https://ai.gamifyias.in" },
  { image: character5, title: "TEST SERIES", creator: "Competitive Prep", id: "TEST", url: "https://test.gamifyias.in" },
];

// Triple the cards for infinite loop
const infiniteCards = [...products, ...products, ...products];

interface CardProps {
  image: string;
  url: string;
  title: string;
  creator: string;
  id: string;
  offset: number; // Position relative to center (-2, -1, 0, 1, 2)
  isActive: boolean;
  onClick: () => void;
}

const Card3D = ({ image, url, title, creator, id, offset, isActive, onClick }: CardProps) => {
  // Calculate 3D transforms based on position
  const rotation = offset * 8; // degrees
  const translateX = offset * 40; // pixels
  const translateZ = isActive ? 50 : -Math.abs(offset) * 80; // depth
  const scale = isActive ? 1 : 0.85 - Math.abs(offset) * 0.05;
  const opacity = isActive ? 1 : 0.7 - Math.abs(offset) * 0.1;

  return (
    <div
      onClick={onClick}
      className={`absolute left-1/2 cursor-pointer hover:scale-[1.02] ${!isActive ? "opacity-70" : ""
        }`}
      style={{
        transform: `
          translateX(calc(-50% + ${translateX + offset * 280}px))
          translateZ(${translateZ}px)
          rotateY(${rotation}deg)
          scale(${scale})
        `,
        opacity: Math.max(opacity, 0.3),
        zIndex: isActive ? 10 : 5 - Math.abs(offset),
        transition: "opacity 0.5s ease-out, scale 0.3s ease-out", // Only transition non-transform props if needed
      }}
    >
      <div
        className={`relative w-64 md:w-72 rounded-2xl overflow-hidden transition-all duration-500 ${isActive ? "card-glow-active" : "card-glow"
          }`}
      >
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl" />

        {/* Glow border */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-30"
          }`} style={{
            background: "linear-gradient(135deg, hsl(var(--glow-cyan) / 0.3) 0%, hsl(var(--glow-purple) / 0.2) 100%)",
            padding: "1px",
          }} />

        <div className="relative p-3">
          {/* Product Iframe (Locked)
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-card/50 border border-white/5 shadow-inner">
            <div className="absolute inset-0 pointer-events-none select-none" style={{ width: '1000%', height: '1000%', transform: 'scale(0.1)', transformOrigin: 'top left' }}>
              <iframe
                src={url}
                className="w-full h-full border-none"
                title={title}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            Fallback/Overlay to ensure no interaction and smooth appearance
            <div className="absolute inset-0 bg-transparent z-10" />

            Image overlay gradient
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent z-10" />
          </div> */}

          {/* Card Info */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-1">by {creator}</p>
              <h3 className={`font-semibold text-sm leading-tight truncate transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"
                }`}>
                {title}
              </h3>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${isActive ? "bg-glow-cyan/20" : "bg-muted/30"
                }`}>
                <QrCode className={`w-8 h-8 transition-colors duration-300 ${isActive ? "text-glow-cyan" : "text-muted-foreground"
                  }`} />
              </div>
              <span className={`text-xs font-mono transition-colors duration-300 ${isActive ? "text-glow-cyan" : "text-muted-foreground"
                }`}>
                #{id}
              </span>
            </div>
          </div>
        </div>

        {/* Click to Visit Overlay */}
        {isActive && (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/20 backdrop-blur-[2px]">
            <Button variant="hero" size="sm" className="shadow-xl scale-90 hover:scale-100 transition-transform">
              Visit Website
            </Button>
          </div>
        )}

        {/* Shine effect */}
        {isActive && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute inset-0 opacity-20" style={{
              background: "linear-gradient(105deg, transparent 40%, hsl(var(--foreground) / 0.1) 45%, transparent 50%)",
              animation: "shine 3s ease-in-out infinite",
            }} />
          </div>
        )}
      </div>
    </div>
  );
};

const InfiniteCardScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [prompt, setPrompt] = useState("");
  const lastTime = useRef(performance.now());
  const animationFrame = useRef<number>();
  const isMobile = useRef(false);

  // Check if mobile
  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection observer for scroll lock
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: [0.5] }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth momentum animation
  useEffect(() => {
    const animate = (time: number) => {
      const delta = Math.min(time - lastTime.current, 32) / 16.67; // Normalize to ~60fps
      lastTime.current = time;

      // Base auto-scroll speed (very slow and smooth)
      const autoScrollSpeed = !isHovered && Math.abs(velocity) < 0.02 ? 0.003 * delta : 0;

      if (Math.abs(velocity) > 0.0001 || autoScrollSpeed !== 0) {
        setActiveIndex((prev) => {
          let newIndex = prev + (velocity * 0.1 * delta) + autoScrollSpeed;
          // Clean wrap-around
          const total = products.length;
          newIndex = ((newIndex % total) + total) % total;
          return newIndex;
        });

        // Dynamic friction based on velocity
        const friction = 0.96;
        setVelocity((v) => {
          const nextV = v * Math.pow(friction, delta);
          return Math.abs(nextV) < 0.0001 ? 0 : nextV;
        });

        animationFrame.current = requestAnimationFrame(animate);
      } else {
        // Butter-smooth snap to nearest card
        setActiveIndex((prev) => {
          const target = Math.round(prev) % products.length;
          let diff = target - (prev % products.length);

          // Handle shortest path wrap-around for snapping
          if (diff > products.length / 2) diff -= products.length;
          if (diff < -products.length / 2) diff += products.length;

          if (Math.abs(diff) < 0.0001) return target;
          return prev + diff * 0.12 * delta;
        });
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [velocity, isHovered]);

  // Handle wheel events
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isInView || isMobile.current) return;

    // Detect if user is scrolling vertically enough to want to move the page
    if (Math.abs(e.deltaY) < 5) return;

    e.preventDefault();
    // Use a smaller multiplier for smoother increment
    setVelocity((v) => v + e.deltaY * 0.005);
  }, [isInView]);

  // Touch handling for mobile
  const touchStartX = useRef(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;

    if (inView) {
      const deltaX = touchStartX.current - e.touches[0].clientX;
      if (Math.abs(deltaX) > 10) {
        setVelocity(deltaX * 0.02);
        touchStartX.current = e.touches[0].clientX;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  // Get visible cards with offsets
  const getVisibleCards = () => {
    const cards = [];
    const currentIndex = Math.round(activeIndex);

    for (let offset = -3; offset <= 3; offset++) {
      let index = (currentIndex + offset + products.length) % products.length;
      const fractionalOffset = offset - (activeIndex - currentIndex);
      cards.push({
        ...products[index],
        offset: fractionalOffset,
        key: `${index}-${offset}`,
        isActive: Math.abs(fractionalOffset) < 0.5,
      });
    }
    return cards;
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-glow-cyan/10 via-transparent to-transparent blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-radial from-glow-purple/8 via-transparent to-transparent blur-3xl translate-x-32 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 px-6 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          Master{" "}
          <span className="relative inline-flex items-center gap-2">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-glow-cyan animate-pulse" />
            <span className="text-gradient glow-text">UPSC</span>
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          With Gamified Learning
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Explore our ecosystem of products designed to make your IAS preparation engaging, efficient, and effective.
        </p>
      </div>

      {/* 3D Cards Carousel */}
      <div
        className="relative w-full h-[480px] md:h-[520px]"
        style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {getVisibleCards().map((card) => (
            <Card3D
              key={card.key}
              image={card.image}
              url={(card as any).url}
              title={card.title}
              creator={card.creator}
              id={card.id}
              offset={card.offset}
              isActive={card.isActive}
              onClick={() => {
                if (!card.isActive) {
                  // Smoothly animate to the clicked card
                  const targetOffset = -card.offset;
                  setVelocity(targetOffset * 0.8);
                } else {
                  // Redirect on click if active
                  window.open((card as any).url, "_blank");
                }
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-8">
        {products.map((_, index) => {
          const isActive = Math.round(activeIndex) % products.length === index;
          return (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${isActive
                ? "w-8 h-2 bg-gradient-to-r from-glow-cyan to-glow-purple"
                : "w-2 h-2 bg-muted hover:bg-muted-foreground"
                }`}
              onClick={() => {
                const diff = index - (Math.round(activeIndex) % products.length);
                setVelocity(diff * 0.5);
              }}
            />
          );
        })}
      </div>

      {/* Prompt Input */}
      {/* <div className="relative w-full max-w-xl px-6 mt-8 z-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-glow-cyan/10 via-glow-purple/10 to-glow-cyan/10 blur-xl" />
          <div className="relative glass-card rounded-full p-1.5 flex items-center gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type a prompt..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 px-5 text-base"
            />
            <div className="flex items-center gap-1.5 pr-1">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Smile className="w-5 h-5" />
              </Button>
              <Button variant="hero" size="icon" className="w-10 h-10">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Navigation Dots */}
      

      {/* Scroll Lock Indicator */}
      {isInView && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="glass-card px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default InfiniteCardScroller;
