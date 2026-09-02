import { techIcons } from "@/lib/tech-icons";

export default function TechBadge({ name }: { name: string }) {
  const Icon = techIcons[name];

  return (
    <span className="font-mono text-xs px-[13px] py-[7px] rounded-full border border-[var(--border)] inline-flex items-center gap-[6px] whitespace-nowrap">
      {Icon && <Icon size={14} className="shrink-0" />}
      {name}
    </span>
  );
}
