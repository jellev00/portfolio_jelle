export type Language = "nl" | "en";

export type LocalizedString = {
  nl: string;
  en?: string;
};

export function localize(value: LocalizedString, language: Language): string {
  return value[language] ?? value.nl;
}

type Dictionary = {
  theme: {
    dark: string;
    light: string;
  };
  hero: {
    role: string;
    bio: string;
    availability: string;
  };
  bigTitle: {
    eyebrow: string;
    title: string;
  };
  stats: {
    shipped: string;
    projects: string;
    count: string;
  };
  techStack: {
    label: string;
  };
  projects: {
    heading: string;
    eyebrow: string;
    viewProject: string;
  };
  timeline: {
    heading: string;
    eyebrow: string;
    werkervaring: string;
    opleiding: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    button: string;
  };
  footer: {
    contact: string;
    copyright: string;
  };
  detail: {
    back: string;
    liveSite: string;
    github: string;
    paper: string;
    gallery: string;
    screens: string;
    interested: string;
    getInTouch: string;
  };
  placeholders: {
    projectScreenshot: string;
    heroScreenshot: string;
    screenshot: string;
  };
};

export const translations: Record<Language, Dictionary> = {
  nl: {
    theme: {
      dark: "Donkere modus",
      light: "Lichte modus",
    },
    hero: {
      role: "Junior Web Developer",
      bio: "Ik bouw snelle, toegankelijke interfaces met oog voor cleane code en doordachte details.",
      availability: "Beschikbaar voor werk",
    },
    bigTitle: {
      eyebrow: "2026 — geselecteerd werk",
      title: "Portfolio",
    },
    stats: {
      shipped: "Opgeleverd",
      projects: "Projecten",
      count: "3+",
    },
    techStack: {
      label: "Tech stack",
    },
    projects: {
      heading: "Projecten",
      eyebrow: "Praktijkcases",
      viewProject: "Bekijk project",
    },
    timeline: {
      heading: "Ervaring & Opleiding",
      eyebrow: "Timeline",
      werkervaring: "Werkervaring",
      opleiding: "Opleiding",
    },
    cta: {
      eyebrow: "Open voor junior functies",
      heading: "Laten we samenwerken",
      button: "Neem contact op",
    },
    footer: {
      contact: "Contact",
      copyright: "© 2026 Jelle Vandriessche",
    },
    detail: {
      back: "← Terug naar portfolio",
      liveSite: "Live site",
      github: "GitHub",
      paper: "Paper downloaden",
      gallery: "Gallery",
      screens: "Schermen",
      interested: "Interesse om samen te werken?",
      getInTouch: "Neem contact op",
    },
    placeholders: {
      projectScreenshot: "project screenshot",
      heroScreenshot: "hero screenshot",
      screenshot: "screenshot",
    },
  },
  en: {
    theme: {
      dark: "Dark mode",
      light: "Light mode",
    },
    hero: {
      role: "Junior Web Developer",
      bio: "I build fast, accessible interfaces with a focus on clean code and thoughtful details.",
      availability: "Available for work",
    },
    bigTitle: {
      eyebrow: "2026 — selected work",
      title: "Portfolio",
    },
    stats: {
      shipped: "Shipped",
      projects: "Projects",
      count: "3+",
    },
    techStack: {
      label: "Tech stack",
    },
    projects: {
      heading: "Projects",
      eyebrow: "Case studies",
      viewProject: "View project",
    },
    timeline: {
      heading: "Experience & Education",
      eyebrow: "Timeline",
      werkervaring: "Work experience",
      opleiding: "Education",
    },
    cta: {
      eyebrow: "Open to junior roles",
      heading: "Let's work together",
      button: "Get in touch",
    },
    footer: {
      contact: "Contact",
      copyright: "© 2026 Jelle Vandriessche",
    },
    detail: {
      back: "← Back to portfolio",
      liveSite: "Live site",
      github: "GitHub",
      paper: "Download paper",
      gallery: "Gallery",
      screens: "Screens",
      interested: "Interested in working together?",
      getInTouch: "Get in touch",
    },
    placeholders: {
      projectScreenshot: "project screenshot",
      heroScreenshot: "hero screenshot",
      screenshot: "screenshot",
    },
  },
};
