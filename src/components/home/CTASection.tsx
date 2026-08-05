import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      id="cta"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("cta_title")}
          </h2>
          <p className="text-muted-foreground mb-8">{t("cta_desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing">
              <Button size="lg" className="shimmer-sweep">
                {t("cta_button")}
              </Button>
            </a>
            <a href="#comparison">
              <Button size="lg" variant="outline">
                {t("cta_demo")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
