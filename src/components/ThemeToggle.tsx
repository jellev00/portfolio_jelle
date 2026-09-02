"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const MEDIA_QUERY = "(prefers-color-scheme: dark)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(MEDIA_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(MEDIA_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const prefersDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [override, setOverride] = useState<"light" | "dark" | null>(null);
  const theme = override ?? (prefersDark ? "dark" : "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setOverride(theme === "dark" ? "light" : "dark")}
      className="font-mono uppercase text-xs px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:text-[var(--text)] hover:border-[var(--text2)]"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
