import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "../ui/LanguageSelector";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/30 dark:bg-accentio-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("footer_product")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#matrix"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_matrix")}
                </Link>
              </li>
              <li>
                <Link
                  to="/#use-cases"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_use_cases")}
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_pricing")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("footer_company")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://docs.accentio.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav_docs")}
                </a>
              </li>
              <li>
                <a
                  href="https://accentio.ai"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_built")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("footer_legal")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/imprint"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_imprint")}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer_terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">
              {t("footer_settings") || "Settings"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Language</span>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {t("footer_copyright", { year: currentYear })}
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/accentio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="X"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/aimino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
