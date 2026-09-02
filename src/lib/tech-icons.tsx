import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiN8N,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiFigma,
  SiOpenjdk,
  SiSpringboot,
  SiSpringsecurity,
  SiThymeleaf,
  SiHibernate,
  SiMysql,
} from "react-icons/si";
import { Search, Bot, Zap, Cloud, Webhook } from "lucide-react";

export type IconComponent = ComponentType<{ size?: number; className?: string }>;

// No brand icon is available for OpenAI in the installed react-icons/si set
// (Simple Icons dropped it) — that entry is intentionally omitted so the
// pill just renders without an icon rather than breaking.
export const techIcons: Record<string, IconComponent> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  Supabase: SiSupabase,
  n8n: SiN8N,
  PostgreSQL: SiPostgresql,
  "GitHub API": SiGithub,
  GitHub: SiGithub,
  Git: SiGit,
  Figma: SiFigma,
  Tavily: Search,
  "Mastra AI": Bot,
  Realtime: Zap,
  "Edge Functions": Cloud,
  Java: SiOpenjdk,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpringsecurity,
  Thymeleaf: SiThymeleaf,
  "JPA / Hibernate": SiHibernate,
  MySQL: SiMysql,
  "REST API": Webhook,
};
