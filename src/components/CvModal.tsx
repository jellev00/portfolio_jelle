"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/i18n";

type CvModalProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLElement | null>;
};

const CV_FILES = {
  nl: "/documents/cv-jelle-vandriessche.pdf",
  en: "/documents/cv-jelle-vandriessche-EN.pdf",
};

export default function CvModal({ isOpen, onClose, triggerRef }: CvModalProps) {
  const { language } = useLanguage();
  const t = translations[language].cvModal;
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="card w-full max-w-sm p-6 flex flex-col gap-5 outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="cv-modal-title" className="text-xl font-bold tracking-[-0.02em]">
            {t.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="shrink-0 rounded-full p-1.5 text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-sm leading-[1.6] text-[var(--text2)]">{t.description}</p>
        <div className="flex flex-wrap gap-2">
          <a
            href={CV_FILES.nl}
            download
            className="font-mono text-xs px-4 py-3 rounded-full border border-[var(--border)] inline-flex items-center gap-[6px] whitespace-nowrap hover:border-[var(--text2)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {t.dutch}
          </a>
          <a
            href={CV_FILES.en}
            download
            className="font-mono text-xs px-4 py-3 rounded-full border border-[var(--border)] inline-flex items-center gap-[6px] whitespace-nowrap hover:border-[var(--text2)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {t.english}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
