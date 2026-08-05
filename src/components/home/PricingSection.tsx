import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  const tiers = [
    {
      nameKey: "pricing_free",
      descKey: "pricing_free_desc",
      priceKey: "pricing_free_price",
      unitKey: "pricing_free_unit",
      features: [
        "pricing_free_feature_1",
        "pricing_free_feature_2",
        "pricing_free_feature_3",
        "pricing_free_feature_4",
      ],
      ctaKey: "pricing_free_cta",
      popular: false,
    },
    {
      nameKey: "pricing_pro",
      descKey: "pricing_pro_desc",
      priceKey: "pricing_pro_price",
      unitKey: "pricing_pro_unit",
      noteKey: "pricing_pro_note",
      features: [
        "pricing_pro_feature_1",
        "pricing_pro_feature_2",
        "pricing_pro_feature_3",
        "pricing_pro_feature_4",
      ],
      ctaKey: "pricing_pro_cta",
      popular: true,
    },
    {
      nameKey: "pricing_matrix",
      descKey: "pricing_matrix_desc",
      priceKey: "pricing_matrix_price",
      unitKey: "pricing_matrix_unit",
      features: [
        "pricing_matrix_feature_1",
        "pricing_matrix_feature_2",
        "pricing_matrix_feature_3",
        "pricing_matrix_feature_4",
      ],
      ctaKey: "pricing_matrix_cta",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("pricing_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("pricing_title")}
          </h2>
          <p className="text-muted-foreground">{t("pricing_sub")}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.nameKey}
              className={`rounded-xl border bg-card p-6 flex flex-col ${
                tier.popular
                  ? "border-accentio-500/50 ring-1 ring-accentio-500/20"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="text-xs font-semibold text-accentio-400 mb-2">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{t(tier.nameKey)}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t(tier.descKey)}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-semibold tabular-nums">
                  {t(tier.priceKey)}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  {t(tier.unitKey)}
                </span>
              </div>
              {tier.noteKey && (
                <p className="text-xs text-amber-400 mb-4">
                  {t(tier.noteKey)}
                </p>
              )}
              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((fKey) => (
                  <li
                    key={fKey}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-accentio-400 mt-0.5 shrink-0" />
                    {t(fKey)}
                  </li>
                ))}
              </ul>
              <a href="#cta">
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full shimmer-sweep"
                >
                  {t(tier.ctaKey)}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          {t("pricing_custom_note")}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
