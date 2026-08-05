import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const rows = [
  { key: "compare_row_real", pAccent: "0.974", dp: "—", intel: "1.0" },
  { key: "compare_row_accentio", pAccent: "0.975", dpKey: "compare_dp_accentio", intel: "1.0" },
  { key: "compare_row_gemini", pAccent: "0.872", dpKey: "compare_dp_gemini", intel: "—" },
  { key: "compare_row_elevenlabs", pAccent: "0.788", dpKey: "compare_dp_elevenlabs", intel: "—" },
];

const CompareTable = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      id="comparison"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("compare_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("compare_title")}
          </h2>
          <p className="text-muted-foreground">{t("compare_sub")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                      {t("compare_header_system")}
                    </th>
                    <th className="text-center text-sm font-medium text-muted-foreground px-4 py-3">
                      {t("compare_header_p_accent")}
                    </th>
                    <th className="text-center text-sm font-medium text-muted-foreground px-4 py-3">
                      {t("compare_header_dp")}
                    </th>
                    <th className="text-center text-sm font-medium text-muted-foreground px-4 py-3">
                      {t("compare_header_intel")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.key}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-3 text-sm font-medium">
                        {t(row.key)}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono tabular-nums">
                        {row.pAccent}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono tabular-nums">
                        {row.dpKey ? t(row.dpKey) : row.dp}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono tabular-nums">
                        {row.intel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
            {t("compare_footnote")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
