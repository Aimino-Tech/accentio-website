import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const MatrixSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      id="matrix"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("matrix_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("matrix_title")}
          </h2>
          <p className="text-muted-foreground">{t("matrix_sub")}</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier A */}
          <div className="rounded-xl border border-emerald-500/30 bg-card p-6 card-glow-hover">
            <div className="text-sm font-semibold text-emerald-400 mb-2">
              {t("matrix_tier_a")}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("matrix_tier_a_desc")}
            </p>
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                {t("matrix_tier_a_zh")}
              </div>
              <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                {t("matrix_tier_a_ar")}
              </div>
            </div>
          </div>

          {/* Tier B */}
          <div className="rounded-xl border border-amber-500/30 bg-card p-6 card-glow-hover">
            <div className="text-sm font-semibold text-amber-400 mb-2">
              {t("matrix_tier_b")}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("matrix_tier_b_desc")}
            </p>
            <div className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
              {t("matrix_tier_b_cells")}
            </div>
          </div>

          {/* Tier C */}
          <div className="rounded-xl border border-muted bg-card p-6 card-glow-hover">
            <div className="text-sm font-semibold text-muted-foreground mb-2">
              {t("matrix_tier_c")}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("matrix_tier_c_desc")}
            </p>
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {t("matrix_tier_c_cells")}
            </div>
          </div>
        </div>

        {/* JSON example */}
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-xs font-medium text-muted-foreground mb-2 text-center">
            {t("matrix_example_label")}
          </p>
          <div className="rounded-lg border border-border bg-background px-4 py-3 font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre">{t("matrix_example")}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixSection;
