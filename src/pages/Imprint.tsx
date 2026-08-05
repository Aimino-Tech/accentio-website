import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Imprint = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Imprint — Accentio</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://accentio.ai/imprint" />
      </Helmet>
      <div className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
            {t("imprint_title")}
          </h1>

          <div className="space-y-8 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_company")}</h2>
              <p className="text-muted-foreground">{t("imprint_company_name")}</p>
              <p className="text-muted-foreground">{t("imprint_address")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_contact")}</h2>
              <p className="text-muted-foreground">{t("imprint_email")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_represented")}</h2>
              <p className="text-muted-foreground">{t("imprint_represented_by")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_register")}</h2>
              <p className="text-muted-foreground">{t("imprint_register_entry")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_vat")}</h2>
              <p className="text-muted-foreground">{t("imprint_vat_id")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_dispute")}</h2>
              <p className="text-muted-foreground">{t("imprint_dispute_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_liability")}</h2>
              <p className="text-muted-foreground">{t("imprint_liability_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_liability_links")}</h2>
              <p className="text-muted-foreground">{t("imprint_liability_links_text")}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">{t("imprint_copyright")}</h2>
              <p className="text-muted-foreground">{t("imprint_copyright_text")}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;
