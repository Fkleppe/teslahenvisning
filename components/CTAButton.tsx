import { ArrowUpRight, Shield } from "lucide-react";

export function CTAButton({
  href,
  label,
  secured,
  size = "lg",
}: {
  href: string;
  label: string;
  secured?: string;
  size?: "lg" | "md";
}) {
  const padding = size === "lg" ? "px-7 py-5 text-base" : "px-5 py-3.5 text-sm";
  return (
    <div className="inline-flex flex-col items-start gap-2.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[--color-brand-2] via-[--color-brand] to-[--color-brand-3] font-medium text-white transition-transform hover:scale-[1.015] active:scale-[0.99] glow-cta ${padding}`}
      >
        <span className="relative z-10">{label}</span>
        <ArrowUpRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      {secured && (
        <span className="inline-flex items-center gap-1.5 text-xs text-[--color-muted]">
          <Shield className="size-3" />
          {secured}
        </span>
      )}
    </div>
  );
}
