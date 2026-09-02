"use client";

import { useLanguage } from "@/context/language-context";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="font-mono uppercase text-xs px-4 py-3 rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:text-[var(--text)] hover:border-[var(--text2)]"
    >
      {language === "nl" ? "EN" : "NL"}
    </button>
  );
}
