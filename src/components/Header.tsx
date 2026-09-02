"use client";

import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {

  return (
      <header className="flex items-center justify-between">
        <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
          [Jelle]
        </span>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>
  );
}