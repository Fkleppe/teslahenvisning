import Link from "next/link";
import { LOCALES, CONTENT, type Locale } from "@/lib/content";

export function Header({ current }: { current: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-black/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${current}`} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="relative flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-[--color-brand-2] to-[--color-brand-3]">
            <span className="size-2 rounded-sm bg-white" />
          </span>
          teslahenvisning
          <span className="text-[--color-muted] font-normal">.com</span>
        </Link>
        <nav className="flex items-center gap-1 rounded-full border border-[--color-border] bg-[--color-background-elev] p-1 text-xs">
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                l === current
                  ? "bg-white/10 text-white"
                  : "text-[--color-muted] hover:text-white"
              }`}
            >
              <span className="mr-1.5">{CONTENT[l].flag}</span>
              {CONTENT[l].localeName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
