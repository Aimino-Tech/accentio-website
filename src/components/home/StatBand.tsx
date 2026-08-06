import { useTranslation } from "react-i18next";
import { useInView, useCountUp } from "@/hooks/useInView";

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  decimals?: number;
  index: number;
}

function StatItem({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  decimals = 3,
  index,
}: StatItemProps) {
  const { ref, isVisible } = useInView();
  const { count, start } = useCountUp(value, 2000);

  if (isVisible) start();

  return (
    <div
      ref={ref}
      className={`text-center reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl sm:text-4xl font-semibold tabular-nums">
        {prefix}
        {count.toFixed(decimals)}
        {suffix && (
          <span className="text-lg text-muted-foreground ml-1">{suffix}</span>
        )}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
      {sublabel && (
        <div className="text-xs text-muted-foreground/70 mt-0.5">
          {sublabel}
        </div>
      )}
    </div>
  );
}

const StatBand = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 border-y border-border reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <StatItem
            value={98}
            label={t("stat_p_accent")}
            sublabel={t("stat_p_accent_real")}
            decimals={0}
            index={0}
          />
          <StatItem
            value={100}
            label={t("stat_intelligibility")}
            decimals={0}
            index={1}
          />
          <StatItem
            value={0}
            label={t("stat_competitor_dp")}
            decimals={0}
            index={2}
          />
          <StatItem
            value={18}
            label={t("stat_cells")}
            decimals={0}
            index={3}
          />
          <StatItem
            value={5}
            prefix="0–"
            label={t("stat_stress")}
            decimals={0}
            index={4}
          />
        </div>
      </div>
    </section>
  );
};

export default StatBand;
