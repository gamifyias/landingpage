import Navigation from "@/components/Navigation";
import InfiniteCardScroller from "@/components/InfiniteCardScroller";
import FooterSection from "@/components/FooterSection";
import FloatingParticles from "@/components/FloatingParticles";
import SEOContentSection from "@/components/SEOContentSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gamify IAS - Master UPSC with Amogh Varsha | Gamified Academy</title>
        <meta name="description" content="Join Gamify IAS Academy by Amogh Varsha. Master UPSC Prelims and Mains using our AI bot, smart LMS, and Secondmom mentorship. Experience true gamification in education." />
        <meta name="keywords" content="Amogh Varsha, gamify ias, gamify ias academy, gamification in education, upsc, prelims, mains, gamify upsc, Secondmom mentorship, upsc ai bot, upsc lms, rank first upsc" />
        <link rel="canonical" href="https://www.gamifyias.in/" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden">
        {/* Floating Particles Background */}
        <FloatingParticles />

        {/* Vignette Effect */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10 pt-20">
          <InfiniteCardScroller />

          {/* Secondary Section */}
          {/* <section className="relative py-32 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Where Preparation<br />
                    <span className="text-gradient">Meets Gamification</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Gamify IAS transforms the rigorous UPSC preparation into an engaging and
                    rewarding journey. Master complex subjects through our specialized ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="glass-card px-4 py-2 rounded-full">
                      <span className="text-sm text-muted-foreground">Personalized Mentorship</span>
                    </div>
                    <div className="glass-card px-4 py-2 rounded-full">
                      <span className="text-sm text-muted-foreground">Smart LMS</span>
                    </div>
                    <div className="glass-card px-4 py-2 rounded-full">
                      <span className="text-sm text-muted-foreground">Expert Test Series</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-glow-cyan/20 via-transparent to-transparent blur-3xl" />
                  <div className="relative glass-card p-6 rounded-3xl">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-glow-cyan to-glow-purple flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground text-sm">Empowering Aspirants</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <SEOContentSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default Index;
