import Link from "next/link";
import { LOCALES, CONTENT, type Locale } from "@/lib/content";

export function LocaleNav({ current }: { current: Locale }) {
  return (
    <nav className="flex items-center gap-1 text-sm">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            l === current
              ? "bg-white/10 text-white"
              : "text-white/50 hover:text-white hover:bg-white/5"
          }`}
        >
          {CONTENT[l].localeName}
        </Link>
      ))}
    </nav>
  );
}
