import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Aurora background — CSS-only, compositor-animated (no main-thread cost) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] min-w-[400px] min-h-[400px] rounded-full bg-accentio-500/20 blur-[100px] animate-aurora-float" />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] min-w-[360px] min-h-[360px] rounded-full bg-accentio-400/15 blur-[100px] animate-aurora-float"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute top-[35%] left-[45%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full bg-accentio-600/10 blur-[100px] animate-aurora-float"
          style={{ animationDelay: "-12s" }}
        />
        {/* Center glow pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentio-500/15 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up stagger-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accentio-500/30 bg-accentio-500/10 px-3 py-1 text-xs font-medium text-accentio-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accentio-400 animate-pulse" />
              {t("hero_badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            {t("hero_headline_1")}{" "}
            <span className="gradient-text gradient-text-animated">
              {t("hero_headline_2")}
            </span>{" "}
            {t("hero_headline_3")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up stagger-3">
            {t("hero_sub")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up stagger-4">
            <a href="#comparison">
              <Button size="lg" className="shimmer-sweep">
                {t("hero_cta_demo")}
              </Button>
            </a>
            <a href="#pricing">
              <Button size="lg" variant="outline">
                {t("hero_cta_api")}
              </Button>
            </a>
          </div>

          {/* Code chip */}
          <div className="animate-fade-in-up stagger-5">
            <p className="text-xs font-medium text-muted-foreground mb-2">
              {t("hero_code_label")}
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs sm:text-sm max-w-full overflow-x-auto">
              <code className="whitespace-nowrap">{t("hero_code_command")}</code>
              <button
                className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Copy code"
                onClick={() =>
                  navigator.clipboard.writeText(t("hero_code_command"))
                }
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
