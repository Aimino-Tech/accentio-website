import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").split("-")[0];

  const toggleLanguage = () => {
    i18n.changeLanguage(current === "en" ? "de" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-foreground hover:bg-muted transition-colors duration-200 text-sm font-medium"
      title={`Switch to ${current === "en" ? "Deutsch" : "English"}`}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{current === "en" ? "EN" : "DE"}</span>
    </button>
  );
};

export default LanguageSelector;
