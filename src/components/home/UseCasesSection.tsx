import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const useCases = [
  { idx: 1, titleKey: "uc_1_title", subKey: "uc_1_sub", problemKey: "uc_1_problem", solutionKey: "uc_1_solution", diffKey: "uc_1_diff" },
  { idx: 2, titleKey: "uc_2_title", subKey: "uc_2_sub", problemKey: "uc_2_problem", solutionKey: "uc_2_solution", diffKey: "uc_2_diff" },
  { idx: 3, titleKey: "uc_3_title", subKey: "uc_3_sub", problemKey: "uc_3_problem", solutionKey: "uc_3_solution", diffKey: "uc_3_diff" },
  { idx: 4, titleKey: "uc_4_title", subKey: "uc_4_sub", problemKey: "uc_4_problem", solutionKey: "uc_4_solution", diffKey: "uc_4_diff" },
  { idx: 5, titleKey: "uc_5_title", subKey: "uc_5_sub", problemKey: "uc_5_problem", solutionKey: "uc_5_solution", diffKey: "uc_5_diff" },
];

const UseCasesSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      id="use-cases"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("use_cases_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("use_cases_title")}
          </h2>
          <p className="text-muted-foreground">{t("use_cases_sub")}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.idx}
              className="rounded-xl border border-border bg-card p-6 card-glow-hover"
            >
              <h3 className="text-lg font-semibold mb-1">{t(uc.titleKey)}</h3>
              <p className="text-xs text-accentio-400 font-medium mb-4">
                {t(uc.subKey)}
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Problem
                  </span>
                  <p className="text-muted-foreground mt-1">
                    {t(uc.problemKey)}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Solution
                  </span>
                  <p className="text-muted-foreground mt-1">
                    {t(uc.solutionKey)}
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="inline-flex items-center rounded-full bg-accentio-500/10 border border-accentio-500/20 px-3 py-1 text-xs font-medium text-accentio-400">
                    {t(uc.diffKey)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
