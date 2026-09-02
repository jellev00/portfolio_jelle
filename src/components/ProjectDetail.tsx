"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { ExternalLink, FileDown, Mail } from "lucide-react";
import Header from "@/components/Header";
import Placeholder from "@/components/Placeholder";
import TechBadge from "@/components/TechBadge";
import { useLanguage } from "@/context/language-context";
import { localize, translations } from "@/lib/i18n";
import type { Project } from "@/lib/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations[language];

  const showLive = project.showLiveButton && Boolean(project.liveUrl);

  return (
    <div className="max-w-[1180px] mx-auto px-[28px] pt-8 pb-6 flex flex-col gap-[14px]">
      <Header />

      <Link
        href="/"
        className="font-mono uppercase text-xs w-fit px-4 py-3 rounded-full border border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--text2)] transition-colors"
      >
        {t.detail.back}
      </Link>

      <div className="mt-[34px] flex flex-col gap-4">
        <h1 className="text-[76px] max-[900px]:text-[48px] max-[420px]:text-[36px] leading-[0.9] font-bold tracking-[-0.045em] break-words">
          {localize(project.name, language)}
        </h1>
        <p className="text-[19px] leading-[1.5] text-[var(--text2)] max-w-[52ch]">
          {localize(project.tagline, language)}
        </p>
        {project.category && (
          <span className="font-mono text-xs tracking-[0.05em] text-[var(--text2)]">
            {localize(project.category, language)}
          </span>
        )}
      </div>

      <Placeholder
        label={t.placeholders.heroScreenshot}
        src={project.heroImage}
        className="mt-[14px] aspect-[21/9] rounded-2xl border border-[var(--border)]"
        labelClassName="text-xs"
      />

      <div className="card mt-[14px] p-7 px-[28px] flex flex-wrap justify-between gap-6">
        <div className="flex flex-wrap gap-2 items-center">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="font-mono uppercase text-xs px-4 py-3 rounded-full bg-[var(--mint)] text-[var(--on-mint)] inline-flex items-center gap-[6px] whitespace-nowrap hover:-translate-y-0.5 transition-transform duration-200"
            >
              <FileDown size={14} className="shrink-0" />
              {t.detail.paper}
            </a>
          )}
          {showLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase text-xs px-4 py-3 rounded-full bg-[var(--mint)] text-[var(--on-mint)] inline-flex items-center gap-[6px] whitespace-nowrap hover:-translate-y-0.5 transition-transform duration-200"
            >
              <ExternalLink size={14} className="shrink-0" />
              {t.detail.liveSite}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase text-xs px-4 py-3 rounded-full border border-[var(--border)] text-[var(--text)] inline-flex items-center gap-[6px] whitespace-nowrap hover:-translate-y-0.5 transition-transform duration-200"
            >
              <SiGithub size={14} className="shrink-0" />
              {t.detail.github}
            </a>
          )}
        </div>
      </div>

      {project.highlights && (
        <div className="card mt-[14px] p-7 px-[28px] grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {project.highlights.map((highlight) => (
            <div key={highlight.value} className="flex flex-col gap-1">
              <div className="text-[32px] font-bold text-[var(--text)]">{highlight.value}</div>
              <div className="font-mono uppercase text-[11px] tracking-[0.1em] text-[var(--text2)]">
                {localize(highlight.label, language)}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-[14px] mt-5 max-[900px]:grid-cols-1">
        {project.sections.map((section) => (
          <div key={section.index} className="card p-[30px] pb-[34px] flex flex-col gap-3">
            <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
              {section.index}
            </span>
            <h3 className="text-[22px] font-bold">{localize(section.title, language)}</h3>
            <p className="text-[15px] leading-[1.65] text-[var(--text2)]">
              {localize(section.body, language)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[34px] flex items-center justify-between">
        <h3 className="text-[26px] font-bold tracking-[-0.02em]">{t.detail.gallery}</h3>
        <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
          {t.detail.screens}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-[14px] max-[900px]:grid-cols-1">
        {project.gallery.map((item, index) => (
          <div key={item.src ?? `${item.caption?.nl}-${index}`} className="card p-[14px] flex flex-col gap-3">
            <Placeholder
              label={t.placeholders.screenshot}
              src={item.src}
              className="aspect-[16/10] rounded-xl"
            />
            {item.caption && (
              <span className="font-mono text-[11px] text-[var(--text2)]">
                {localize(item.caption, language)}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="card mt-[34px] p-[44px] py-11 max-[560px]:p-7 max-[560px]:py-8 flex flex-wrap items-center justify-between gap-7 max-[560px]:flex-col max-[560px]:items-start">
        <h3 className="text-[38px] max-[560px]:text-[28px] font-bold max-w-[24ch] leading-[1.05] min-w-0 break-words">
          {t.detail.interested}
        </h3>
        <Link
          href="/#contact"
          className="font-mono uppercase text-xs px-4 py-3 rounded-full bg-[var(--mint)] text-[var(--on-mint)] inline-flex items-center gap-[6px] whitespace-nowrap hover:-translate-y-0.5 transition-transform duration-200"
        >
          <Mail size={14} className="shrink-0" />
          {t.detail.getInTouch}
        </Link>
      </div>
    </div>
  );
}
