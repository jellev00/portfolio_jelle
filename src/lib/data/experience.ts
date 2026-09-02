import type { LocalizedString } from "@/lib/i18n";

export type ExperienceEntry = {
  group: "Werkervaring" | "Opleiding";
  period: LocalizedString;
  role: LocalizedString;
  organisation: LocalizedString;
  description: LocalizedString;
};

export const experience: ExperienceEntry[] = [
  {
    group: "Werkervaring",
    period: { nl: "2026 - 2026", en: "2026 - 2026" },
    role: { nl: "Bachelorproef", en: "Bachelor thesis" },
    organisation: { nl: "Springbok Agency", en: "Springbok Agency" },
    description: {
      nl: "Bouwen van een dependency dashboard met AI implementaties voor analyses.",
      en: "Built a dependency dashboard with AI implementations for analytics.",
    },
  },
  {
    group: "Werkervaring",
    period: { nl: "2024 - 2024", en: "2024 - 2024" },
    role: { nl: "Stage Developer", en: "Developer Internship" },
    organisation: { nl: "Elision", en: "Elision" },
    description: {
      nl: "Bouwen van een dependency tracker.",
      en: "Built a dependency tracker.",
    },
  },
  {
    group: "Werkervaring",
    period: { nl: "2022 - Heden", en: "2022 - Present" },
    role: { nl: "Job student Elektricien", en: "Student Electrician" },
    organisation: { nl: "ATS nv Groep", en: "ATS nv Groep" },
    description: {
      nl: "Bordenbouw. Het bouwen van elektrische borden/kasten.",
      en: "Panel building — constructing electrical panels and cabinets.",
    },
  },
  {
    group: "Opleiding",
    period: { nl: "2024 - 2026", en: "2024 - 2026" },
    role: { nl: "Bachelor Toegepaste Informatica", en: "Bachelor of Applied Computer Science" },
    organisation: { nl: "HoGent", en: "HoGent" },
    description: {
      nl: "Specialisatie in Software Engineering & IT.",
      en: "Specialization in Software Engineering & IT.",
    },
  },
  {
    group: "Opleiding",
    period: { nl: "2022 - 2024", en: "2022 - 2024" },
    role: { nl: "Graduaat Programmeren", en: "Associate Degree in Programming" },
    organisation: { nl: "HoGent", en: "HoGent" },
    description: {
      nl: "Gefocust op programmeren.",
      en: "Focused on programming.",
    },
  },
  {
    group: "Opleiding",
    period: { nl: "2016 - 2022", en: "2016 - 2022" },
    role: { nl: "Industriële ICT", en: "Industrial ICT" },
    organisation: { nl: "GO! Atheneum Oudenaarde", en: "GO! Atheneum Oudenaarde" },
    description: {
      nl: "Gefocust op programmeren op industrieel vlak en elektriciteit en elektronica.",
      en: "Focused on industrial programming, electricity and electronics.",
    },
  },
];

export function experienceByGroup(group: ExperienceEntry["group"]) {
  return experience.filter((entry) => entry.group === group);
}
