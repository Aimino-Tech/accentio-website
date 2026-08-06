import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const AgentsAPISection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      id="docs"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("agents_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("agents_title")}
          </h2>
          <p className="text-muted-foreground">{t("agents_sub")}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* REST API */}
          <div className="rounded-xl border border-border bg-card p-6 card-glow-hover">
            <h3 className="text-lg font-semibold mb-2">{t("agents_api_title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("agents_api_desc")}
            </p>
          </div>

          {/* MCP Tools */}
          <div className="rounded-xl border border-border bg-card p-6 card-glow-hover">
            <h3 className="text-lg font-semibold mb-2">{t("agents_mcp_title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("agents_mcp_desc")}
            </p>
            <div className="font-mono text-xs text-accentio-400">
              {t("agents_mcp_tools")}
            </div>
          </div>

          {/* RapidAPI */}
          <div className="rounded-xl border border-border bg-card p-6 card-glow-hover">
            <h3 className="text-lg font-semibold mb-2">{t("agents_rapidapi_title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("agents_rapidapi_desc")}
            </p>
          </div>
        </div>

        {/* MCP config code chip */}
        <div className="max-w-2xl mx-auto mt-12">
          <p className="text-xs font-medium text-muted-foreground mb-2 text-center">
            {t("agents_code_label")}
          </p>
          <div className="rounded-lg border border-border bg-background px-4 py-3 font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre">{t("agents_code_command")}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsAPISection;
