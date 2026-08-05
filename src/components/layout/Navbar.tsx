import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "../ui/LanguageSelector";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#product", labelKey: "nav_product" },
  { href: "/#matrix", labelKey: "nav_matrix" },
  { href: "/#use-cases", labelKey: "nav_use_cases" },
  { href: "/#pricing", labelKey: "nav_pricing" },
  { href: "https://docs.accentio.ai", labelKey: "nav_docs", external: true },
];

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="6" fill="#4f46e5" />
              <g
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              >
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="11" y1="12" x2="11" y2="20" />
                <line x1="14" y1="9" x2="14" y2="23" />
                <line x1="17" y1="11" x2="17" y2="21" />
                <line x1="20" y1="13" x2="20" y2="19" />
                <line x1="23" y1="14" x2="23" y2="18" />
                <line x1="26" y1="15" x2="26" y2="17" />
              </g>
            </svg>
            <span className="text-lg font-semibold">{t("brand_name")}</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const classes = cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-secondary"
              );
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {t(link.labelKey)}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className={classes}>
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
            <Link
              to="/#pricing"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shimmer-sweep"
            >
              {t("nav_get_api_key")}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full bg-secondary text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const classes = cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-secondary"
              );
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {t(link.labelKey)}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className={classes}>
                  {t(link.labelKey)}
                </Link>
              );
            })}
            <div className="flex items-center space-x-4 pt-4 px-4 border-t border-border">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
