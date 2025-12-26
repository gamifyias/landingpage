import { QrCode } from "lucide-react";

interface CharacterCardProps {
  image: string;
  title: string;
  creator: string;
  id: string;
  isActive: boolean;
  style?: React.CSSProperties;
}

const CharacterCard = ({ image, title, creator, id, isActive, style }: CharacterCardProps) => {
  return (
    <div
      className={`relative flex-shrink-0 transition-all duration-500 ease-out ${
        isActive ? "scale-100 z-20" : "scale-90 z-10"
      }`}
      style={style}
    >
      {/* Glow effect for active card */}
      {isActive && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-glow-cyan/30 via-glow-purple/20 to-glow-orange/10 blur-2xl animate-glow-pulse" />
      )}

      <div
        className={`relative w-72 md:w-80 rounded-3xl overflow-hidden transition-all duration-500 ${
          isActive ? "glass-card-active" : "glass-card"
        }`}
      >
        {/* Character Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isActive ? "scale-105 brightness-110" : "scale-100 brightness-75"
            }`}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />

          {/* ID Badge */}
          <div className="absolute top-4 right-4">
            <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground">#{id}</span>
            </div>
          </div>

          {/* Active indicator */}
          {isActive && (
            <div className="absolute top-4 left-4">
              <div className="w-3 h-3 rounded-full bg-glow-cyan animate-pulse shadow-[0_0_10px_hsl(var(--glow-cyan))]" />
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className={`font-bold text-lg transition-colors duration-300 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}>
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">by {creator}</p>
            </div>
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isActive ? "bg-glow-cyan/20" : "bg-muted/30"
            }`}>
              <QrCode className={`w-5 h-5 transition-colors duration-300 ${
                isActive ? "text-glow-cyan" : "text-muted-foreground"
              }`} />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              isActive 
                ? "bg-glow-cyan/20 text-glow-cyan" 
                : "bg-muted/30 text-muted-foreground"
            }`}>
              Collectible
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              isActive 
                ? "bg-glow-purple/20 text-glow-purple" 
                : "bg-muted/30 text-muted-foreground"
            }`}>
              AI Created
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
