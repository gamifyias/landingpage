import { Sparkles, Menu, Search, Bell, User, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-glow-cyan to-glow-purple flex items-center justify-center shadow-lg shadow-glow-cyan/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <span className="font-bold text-xl tracking-tight text-foreground">
              Gamify IAS <span className="text-gradient">Academy</span>
            </span>
          </div>

          {/* Center Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="https://gamifyias.in" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Home
            </a>
            <a href="https://gamifyias.com/secondmom" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Mentorship
            </a>
            <a href="https://lms.gamifyias.in" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Courses
            </a>
            <a href="https://test.gamifyias.in" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Test Series
            </a>
          </div>

          {/* Right Side Actions */}
          {/* <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hidden md:flex">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="icon" className="hidden md:flex">
              <Grid3X3 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
              <Menu className="w-5 h-5" />
            </Button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
