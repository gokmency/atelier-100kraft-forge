import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations } from "../lib/i18n";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en"); // English is default

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang");
    if (savedLang === "en" || savedLang === "tr") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
