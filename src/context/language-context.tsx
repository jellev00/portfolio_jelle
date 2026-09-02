"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Language } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "nl" ? "en" : "nl"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
