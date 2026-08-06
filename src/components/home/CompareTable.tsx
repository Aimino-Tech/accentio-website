import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const rows = [
  { key: "compare_row_real", accent: "97", shift: "—", intel: "100" },
  { key: "compare_row_accentio", accent: "98", shiftKey: "compare_shift_accentio", intel: "100" },
  { key: "compare_row_gemini", accent: "86", shiftKey: "compare_shift_none", intel: "95" },
  { key: "compare_row_elevenlabs", accent: "78", shiftKey: "compare_shift_none", intel: "95" },
];

const chartPoints = [
  { key: "compare_row_real", x: 97, y: 100, color: "text-emerald-400", lx: 84, ly: 100, labelDx: -6, labelDy: 4 },
  { key: "compare_row_accentio", x: 98, y: 100, color: "text-accentio-400", highlight: true, lx: 78, ly: 88, labelDx: -6, labelDy: 4 },
  { key: "compare_row_gemini", x: 86, y: 95, color: "text-muted-foreground", lx: 70, ly: 82, labelDx: -6, labelDy: 4 },
  { key: "compare_row_elevenlabs", x: 78, y: 95, color: "text-muted-foreground", lx: 62, ly: 66, labelDx: -6, labelDy: 4 },
];

// SVG chart geometry: plot area inside a 420x300 viewBox
const PLOT = { x0: 55, y0: 30, w: 290, h: 200 };
const toX = (v: number) => PLOT.x0 + (v / 100) * PLOT.w;
const toY = (v: number) => PLOT.y0 + (1 - v / 100) * PLOT.h;

const RealityChart = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold text-center mb-1">
        {t("compare_chart_title")}
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-6">
        {t("compare_chart_sub")}
      </p>
      <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
        <svg
          viewBox="0 0 420 300"
          role="img"
          aria-label={t("compare_chart_aria")}
          className="w-full h-auto"
        >
          {/* gridlines */}
          {[25, 50, 75].map((g) => (
            <g key={g}>
              <line
                x1={toX(g)} y1={PLOT.y0} x2={toX(g)} y2={PLOT.y0 + PLOT.h}
                className="stroke-border" strokeWidth="1"
              />
              <line
                x1={PLOT.x0} y1={toY(g)} x2={PLOT.x0 + PLOT.w} y2={toY(g)}
                className="stroke-border" strokeWidth="1"
              />
            </g>
          ))}

          {/* axes */}
          <line x1={PLOT.x0} y1={PLOT.y0 + PLOT.h} x2={PLOT.x0 + PLOT.w} y2={PLOT.y0 + PLOT.h} className="stroke-foreground/40" strokeWidth="1" />
          <line x1={PLOT.x0} y1={PLOT.y0} x2={PLOT.x0} y2={PLOT.y0 + PLOT.h} className="stroke-foreground/40" strokeWidth="1" />

          {/* axis ticks */}
          {[0, 25, 50, 75, 100].map((g) => (
            <g key={`x${g}`}>
              <text x={toX(g)} y={PLOT.y0 + PLOT.h + 16} textAnchor="middle" className="fill-muted-foreground" fontSize="10">
                {g}
              </text>
            </g>
          ))}
          {[0, 25, 50, 75, 100].map((g) => (
            <g key={`y${g}`}>
              <text x={PLOT.x0 - 8} y={toY(g) + 3} textAnchor="end" className="fill-muted-foreground" fontSize="10">
                {g}
              </text>
            </g>
          ))}

          {/* axis labels */}
          <text x={PLOT.x0 + PLOT.w / 2} y={PLOT.y0 + PLOT.h + 34} textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="500">
            {t("compare_chart_x")}
          </text>
          <text x={16} y={PLOT.y0 + PLOT.h / 2} textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="500" transform={`rotate(-90 16 ${PLOT.y0 + PLOT.h / 2})`}>
            {t("compare_chart_y")}
          </text>

          {/* leader lines + labels */}
          {chartPoints.map((p) => (
            <g key={p.key}>
              <line
                x1={toX(p.x)} y1={toY(p.y)} x2={toX(p.lx)} y2={toY(p.ly)}
                className="stroke-border" strokeWidth="1" strokeDasharray="3 3"
              />
              {p.highlight && (
                <circle cx={toX(p.x)} cy={toY(p.y)} r="14" className="fill-accentio-500/10" />
              )}
              <circle
                cx={toX(p.x)} cy={toY(p.y)} r={p.highlight ? 7 : 5}
                className={p.color} fill="currentColor"
              />
              <text
                x={toX(p.lx) + (p.labelDx ?? 0)}
                y={toY(p.ly) + (p.labelDy ?? 4)}
                textAnchor={p.labelDx !== undefined && p.labelDx < 0 ? "end" : "start"}
                className="fill-muted-foreground" fontSize="10"
              >
                {t(p.key)}
              </text>
            </g>
          ))}
        </svg>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          {t("compare_chart_note")}
        </p>
      </div>
    </div>
  );
};

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
                      {t("compare_header_accent")}
                    </th>
                    <th className="text-center text-sm font-medium text-muted-foreground px-4 py-3">
                      {t("compare_header_shift")}
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
                        {row.accent}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono tabular-nums">
                        {row.shiftKey ? t(row.shiftKey) : row.shift}
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

          <RealityChart />
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
