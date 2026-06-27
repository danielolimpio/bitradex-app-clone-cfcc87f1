import { Button } from "@/components/ui/button";
import { Play, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/david-villa-hero.png";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-gradient-hero overflow-hidden min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[75vh]">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/50 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: copy */}
          <div className="space-y-8 relative z-20">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground block">{t("hero.headline1")}</span>
                <span className="text-foreground block">{t("hero.headline2")}</span>
              </h1>

              <div className="flex items-center space-x-3">
                <span className="text-xl lg:text-2xl font-semibold text-primary">Bitradex</span>
                <span className="text-lg text-primary/70">×</span>
                <span className="text-xl lg:text-2xl font-semibold text-primary">David Villa</span>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t("hero.ambassador")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-button transition-all duration-300 text-base px-8 py-6 rounded-md"
                  onClick={() => window.open('https://www.bitradex.com/en/account/register?inviteCode=7UII2W', '_blank')}
                >
                  {t("hero.registerNow")}
                </Button>
                <p className="text-xs text-muted-foreground mt-1">{t("common.signupMobile")}</p>
              </div>

              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-base px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                {t("hero.watchDemo")}
              </Button>
            </div>
          </div>

          {/* RIGHT: David Villa banner */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-[560px]">
              <img
                src={heroImage}
                alt="David Villa - Bitradex Global Brand Ambassador"
                className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(0,200,255,0.25)]"
              />
            </div>

            {/* Badges row — faithful to official site */}
            <div className="flex items-center justify-center gap-3 -mt-4 lg:-mt-6 relative z-30 flex-wrap">
              {/* Badge 1 */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#c9a14a]/60 bg-gradient-to-r from-[#1a1a2a]/90 to-[#0e0e18]/90 backdrop-blur-sm shadow-[0_0_15px_rgba(201,161,74,0.15)]">
                <Trophy className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div className="leading-tight text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">{t("hero.badge1Line1")}</div>
                  <div className="text-[11px] text-foreground font-medium">{t("hero.badge1Line2")}</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#c9a14a]/60 bg-gradient-to-r from-[#1a1a2a]/90 to-[#0e0e18]/90 backdrop-blur-sm shadow-[0_0_15px_rgba(201,161,74,0.15)]">
                <Trophy className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div className="leading-tight text-left">
                  <div className="text-[11px] text-foreground font-semibold">{t("hero.badge2Line1")}</div>
                  <div className="text-[11px] text-foreground font-medium">{t("hero.badge2Line2")}</div>
                </div>
              </div>

              {/* Badge 3 — filled blue pill */}
              <div className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-sm shadow-[0_0_20px_rgba(0,200,255,0.35)]">
                {t("hero.badge3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
