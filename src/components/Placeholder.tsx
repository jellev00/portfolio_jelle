import Image from "next/image";

export default function Placeholder({
  label,
  src,
  className = "",
  labelClassName = "text-[11px]",
}: {
  label: string;
  src?: string;
  className?: string;
  labelClassName?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={label} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className={`stripe relative flex items-center justify-center ${className}`}>
      <span className={`font-mono uppercase text-[var(--text2)] ${labelClassName}`}>
        {label}
      </span>
    </div>
  );
}
