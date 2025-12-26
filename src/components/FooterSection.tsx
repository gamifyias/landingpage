import { Sparkles, Twitter, Github, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="relative py-20 px-6 mt-20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-6xl">
        {/* CTA Section */}
        <div className="relative glass-card p-12 rounded-3xl mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/5 via-transparent to-glow-purple/5" />
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Step Into Your <span className="text-gradient">IAS Success</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ready to gamify your preparation? Join thousands of aspirants who are mastering UPSC CSE with Gamify IAS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" onClick={() => window.open("https://gamifyias.in", "_blank")}>
                Start Your Journey
              </Button>
              <Button variant="glass" size="xl" onClick={() => window.open("https://gamifyias.com/secondmom", "_blank")}>
                Explore Mentorship
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ecosystem</h3>
            <ul className="space-y-3">
              {[
                { name: "Main Site", url: "https://gamifyias.in" },
                { name: "Mentorship", url: "https://gamifyias.com/secondmom" },
                { name: "LMS System", url: "https://lms.gamifyias.in" },
                { name: "AI Chatbot", url: "https://ai.gamifyias.in" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "Tutorials", "Blog", "Support"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Careers", "Press", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Cookies", "License"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glow-cyan to-glow-purple flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">
              Gamify<span className="text-gradient">IAS</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Gamify IAS. Prepared with passion for UPSC Aspirants.
          </p>

          <div className="flex items-center gap-2">
            {[Twitter, Github, Instagram, MessageCircle].map((Icon, index) => (
              <Button key={index} variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
