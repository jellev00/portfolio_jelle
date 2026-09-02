"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Placeholder from "@/components/Placeholder";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechBadge from "@/components/TechBadge";
import { projects } from "@/lib/data/projects";
import { socials } from "@/lib/data/socials";
import { useLanguage } from "@/context/language-context";
import { localize, translations } from "@/lib/i18n";

const techStack = ["Next.js", "React", "TypeScript", "Tailwind", "Git", "Figma"];
const name = "Jelle Vandriessche";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-[1180px] mx-auto px-[28px] pt-8 pb-6 flex flex-col gap-[14px]">
      {/* Header */}
      <Header />

      {/* Hero bento grid */}
      <section className="grid grid-cols-3 gap-[14px] mt-[34px] max-[900px]:grid-cols-1">
        {/* Card 1: hero */}
        <div className="card col-start-1 row-start-1 row-span-2 p-8 flex flex-col gap-[22px] max-[900px]:col-auto max-[900px]:row-auto">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-[var(--border)]">
            <Image src="/profile.png" alt={name} fill priority className="object-cover" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-[40px] max-[900px]:text-[44px] leading-[1.02] font-bold tracking-[-0.03em]">
              {name}
            </h1>
            <span className="font-mono uppercase text-xs w-fit px-[13px] py-[7px] rounded-full bg-[var(--mint)] text-[var(--on-mint)]">
              {t.hero.role}
            </span>
            <p className="text-base leading-[1.6] text-[var(--text2)] max-w-[34ch]">
              {t.hero.bio}
            </p>
          </div>
          <div className="mt-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--mint)]" />
            <span className="font-mono text-xs text-[var(--text2)]">
              {t.hero.availability}
            </span>
          </div>
        </div>

        {/* Card 2: big title */}
        <div className="card col-start-2 col-span-2 row-start-1 p-9 pb-7 min-h-[220px] flex flex-col justify-between hover:scale-[1.02] hover:border-[var(--text2)] transition-transform duration-200 max-[900px]:col-auto max-[900px]:row-auto">
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
            {t.bigTitle.eyebrow}
          </span>
          <h2 className="text-[112px] max-[900px]:text-[76px] leading-[0.86] font-bold tracking-[-0.05em]">
            {t.bigTitle.title}
          </h2>
        </div>

        {/* Card 3: stats (purple) */}
        <div className="col-start-2 row-start-2 rounded-2xl bg-[var(--purple)] p-8 min-h-[200px] flex flex-col justify-between text-[#0D0F0E] hover:scale-[1.02] transition-transform duration-200 max-[900px]:col-auto max-[900px]:row-auto">
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[#1A0F4D]">
            {t.stats.shipped}
          </span>
          <div>
            <div className="text-[64px] font-bold tracking-[-0.04em] text-[#0B0620]">
              {t.stats.count}
            </div>
            <div className="text-base font-medium text-[#1A0F4D]">{t.stats.projects}</div>
          </div>
        </div>

        {/* Card 4: tech stack */}
        <div className="card col-start-3 row-start-2 p-8 min-h-[200px] flex flex-col gap-5 hover:scale-[1.02] hover:border-[var(--text2)] transition-transform duration-200 max-[900px]:col-auto max-[900px]:row-auto">
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
            {t.techStack.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-[34px] flex flex-col gap-[14px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[26px] font-bold tracking-[-0.02em]">{t.projects.heading}</h3>
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
            {t.projects.eyebrow}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[14px] max-[900px]:grid-cols-1">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card p-[14px] pb-6 flex flex-col gap-[18px] hover:scale-[1.02] hover:border-[var(--text2)] transition-transform duration-200"
            >
              <Placeholder
                label={t.placeholders.projectScreenshot}
                src={project.heroImage}
                className="aspect-[16/10] rounded-xl"
              />
              <div className="px-[10px] flex flex-col gap-2">
                <h4 className="text-xl font-bold">{localize(project.name, language)}</h4>
                <p className="text-[15px] leading-[1.55] text-[var(--text2)]">
                  {localize(project.desc, language)}
                </p>
                <span className="font-mono uppercase text-[11px] w-fit text-[var(--text)] border-b border-[var(--mint)] pb-0.5">
                  {t.projects.viewProject}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ervaring & Opleiding */}
      <section className="mt-[34px] flex flex-col gap-[14px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[26px] font-bold tracking-[-0.02em]">{t.timeline.heading}</h3>
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
            {t.timeline.eyebrow}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-[14px] max-[900px]:grid-cols-1">
          <ExperienceTimeline group="Werkervaring" title={t.timeline.werkervaring} />
          <ExperienceTimeline group="Opleiding" title={t.timeline.opleiding} />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-[34px] rounded-2xl bg-[var(--coral)] p-[44px] py-11 flex flex-wrap items-center justify-between gap-7 hover:scale-[1.02] transition-transform duration-200">
        <div>
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[#5A1A08]">
            {t.cta.eyebrow}
          </span>
          <h3 className="text-[44px] font-bold tracking-[-0.03em] text-[#2B0A00] mt-2">
            {t.cta.heading}
          </h3>
        </div>
        <a
          href="mailto:jelle.vandriessche@gmail.com"
          className="bg-[#0D0F0E] text-[#F5F4F0] px-[30px] py-4 rounded-full inline-flex items-center gap-[6px] whitespace-nowrap hover:-translate-y-0.5 transition-transform duration-200"
        >
          <Mail size={14} className="shrink-0" />
          {t.cta.button}
        </a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mt-[34px] border-t border-[var(--border)] pt-[26px] pb-2 px-1 flex justify-between items-end gap-6 max-[900px]:flex-col max-[900px]:items-start"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
            {t.footer.contact}
          </span>
          <a
            href="mailto:jelle.vandriessche@gmail.com"
            className="text-[22px] font-bold border-b border-[var(--border)] w-fit hover:border-[var(--mint)] transition-colors"
          >
            jelle.vandriessche@gmail.com
          </a>
        </div>
        <nav className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              download={social.download}
              className="font-mono text-xs px-4 py-[9px] rounded-full border border-[var(--border)] inline-flex items-center gap-[6px] whitespace-nowrap hover:border-[var(--text2)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <social.icon size={14} className="shrink-0" />
              {localize(social.label, language)}
            </a>
          ))}
        </nav>
      </footer>
      <p className="font-mono text-[11px] text-[var(--text2)] px-1">{t.footer.copyright}</p>
    </div>
  );
}
