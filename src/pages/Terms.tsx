import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Terms of Service — Accentio</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://accentio.ai/terms" />
      </Helmet>
      <div className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            {t("terms_title")}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {t("terms_last_updated")}
          </p>

          <div className="space-y-8 text-sm leading-relaxed">
            <section>
              <p className="text-muted-foreground">{t("terms_intro")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_service_title")}</h2>
              <p className="text-muted-foreground">{t("terms_service_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_api_title")}</h2>
              <p className="text-muted-foreground">{t("terms_api_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_acceptable_title")}</h2>
              <p className="text-muted-foreground">{t("terms_acceptable_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_payment_title")}</h2>
              <p className="text-muted-foreground">{t("terms_payment_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_ip_title")}</h2>
              <p className="text-muted-foreground">{t("terms_ip_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_disclaimer_title")}</h2>
              <p className="text-muted-foreground">{t("terms_disclaimer_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_governing_title")}</h2>
              <p className="text-muted-foreground">{t("terms_governing_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("terms_changes_title")}</h2>
              <p className="text-muted-foreground">{t("terms_changes_text")}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
