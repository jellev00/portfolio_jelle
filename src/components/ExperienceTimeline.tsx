"use client";

import { useLanguage } from "@/context/language-context";
import { localize } from "@/lib/i18n";
import { experienceByGroup, type ExperienceEntry } from "@/lib/data/experience";

export default function ExperienceTimeline({
  group,
  title,
}: {
  group: ExperienceEntry["group"];
  title: string;
}) {
  const { language } = useLanguage();
  const entries = experienceByGroup(group);

  return (
    <div className="card p-8 py-[30px] flex flex-col gap-[22px]">
      <span className="font-mono uppercase text-xs tracking-[0.13em] text-[var(--text2)]">
        {title}
      </span>
      <ol className="border-l border-[var(--mint)] pl-[26px] flex flex-col gap-[26px] list-none">
        {entries.map((entry) => (
          <li
            key={`${localize(entry.organisation, language)}-${localize(entry.period, language)}`}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1 w-[9px] h-[9px] rounded-full bg-[var(--mint)] border-2 border-[var(--surface)]" />
            <span className="font-mono text-[11px] text-[var(--text2)]">
              {localize(entry.period, language)}
            </span>
            <h4 className="text-[19px] font-bold mt-1">{localize(entry.role, language)}</h4>
            <p className="text-[15px] font-medium text-[var(--text)] mt-0.5">
              {localize(entry.organisation, language)}
            </p>
            <p className="text-[15px] leading-[1.55] text-[var(--text2)] mt-1.5">
              {localize(entry.description, language)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
