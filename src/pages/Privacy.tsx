import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Accentio</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://accentio.ai/privacy" />
      </Helmet>
      <div className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            {t("privacy_title")}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {t("privacy_last_updated")}
          </p>

          <div className="space-y-8 text-sm leading-relaxed">
            <section>
              <p className="text-muted-foreground">{t("privacy_intro")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("privacy收集_title")}</h2>
              <p className="text-muted-foreground">{t("privacy收集_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("privacy_cookies_title")}</h2>
              <p className="text-muted-foreground">{t("privacy_cookies_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("privacy_google_title")}</h2>
              <p className="text-muted-foreground">{t("privacy_google_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("privacy_rights_title")}</h2>
              <p className="text-muted-foreground">{t("privacy_rights_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("privacy_contact_title")}</h2>
              <p className="text-muted-foreground">{t("privacy_contact_text")}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
