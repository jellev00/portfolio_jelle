import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FileText } from "lucide-react";
import type { LocalizedString } from "@/lib/i18n";
import type { IconComponent } from "@/lib/tech-icons";

export type Social = {
  label: LocalizedString;
  href: string;
  download?: boolean;
  icon: IconComponent;
};

export const socials: Social[] = [
  {
    label: { nl: "LinkedIn", en: "LinkedIn" },
    href: "https://www.linkedin.com/in/jelle-vandriessche",
    icon: FaLinkedinIn,
  },
  {
    label: { nl: "GitHub", en: "GitHub" },
    href: "https://www.github.com/jellev00",
    icon: SiGithub,
  },
  {
    label: { nl: "CV", en: "Resume" },
    href: "/documents/cv-jelle-vandriessche.pdf",
    download: true,
    icon: FileText,
  },
];
