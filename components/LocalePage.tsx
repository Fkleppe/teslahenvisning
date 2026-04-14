import Link from "next/link";
import { CONTENT, REFERRAL_URLS, LAST_VERIFIED, type Locale } from "@/lib/content";
import { CodeChip } from "./CodeChip";
import { LocaleNav } from "./LocaleNav";
import { ArrowUpRight } from "lucide-react";

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="font-semibold tracking-tight">
            teslahenvisning<span className="text-[--color-accent]">.</span>com
          </Link>
          <LocaleNav current={locale} />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
              {c.adLabel}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              {c.heroEyebrow}
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {c.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60 sm:text-xl">{c.heroSub}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CodeChip copyLabel={c.copy} copiedLabel={c.copied} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-4 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              {c.ctaOpen}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {c.verifiedPrefix} {LAST_VERIFIED}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{c.howTitle}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-4 text-xs font-mono text-[--color-accent]">
                  0{i + 1}
                </div>
                <div className="text-lg font-medium">{s.t}</div>
                <div className="mt-2 text-sm text-white/60">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-white/40">
          <p className="max-w-3xl">{c.disclaimer}</p>
          <p className="mt-4">© {new Date().getFullYear()} teslahenvisning.com</p>
        </div>
      </footer>
    </>
  );
}
