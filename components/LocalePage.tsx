import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Zap, Gift, Clock, Check, ChevronRight, Sparkles } from "lucide-react";
import { CONTENT, REFERRAL_URLS, LAST_VERIFIED, LOCALES, type Locale } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=80";

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-[--color-border] bg-black/50 px-5 py-2.5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-sm font-medium tracking-tight">
            <span className="relative flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-[--color-accent] via-[--color-accent-2] to-[--color-accent-4]">
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            teslahenvisning
          </Link>
          <nav className="flex items-center gap-0.5 text-xs">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  l === locale ? "bg-white text-black" : "text-[--color-muted] hover:text-white"
                }`}
              >
                <span className="mr-1">{CONTENT[l].flag}</span>
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mesh-hero" />
        <div className="noise" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="fade-up mb-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              <span className="size-1 rounded-full bg-amber-400" />
              {c.adLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[--color-border] bg-white/[0.03] px-3 py-1 text-xs text-[--color-muted] backdrop-blur">
              <Sparkles className="size-3 text-[--color-accent-2]" />
              {c.heroEyebrow}
            </span>
          </div>

          <h1 className="fade-up-2 h-display max-w-5xl">
            {c.heroTitle}{" "}
            <em className="font-serif italic gradient-text-warm">
              {c.heroTitleAccent}
            </em>
          </h1>

          <p className="fade-up-3 mt-8 max-w-2xl text-lg leading-relaxed text-[--color-muted] sm:text-xl">
            {c.heroSub}
          </p>

          <div className="fade-up-4 mt-12 flex flex-wrap items-center gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[--color-accent] via-[--color-accent-2] to-[--color-accent] bg-[length:200%_100%] px-8 py-5 text-base font-medium text-white transition-all hover:bg-[position:100%_0] btn-glow"
            >
              <span>{c.ctaPrimary}</span>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-[--color-border-strong] bg-white/[0.03] px-6 py-5 text-sm font-medium backdrop-blur transition hover:bg-white/[0.06]"
            >
              {c.ctaSecondary}
            </a>
          </div>

          <div className="fade-up-5 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[--color-muted]">
            <div className="flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative size-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono uppercase tracking-wider text-[10px]">
                {c.verifiedPrefix} · {LAST_VERIFIED}
              </span>
            </div>
            {c.trustRow.map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Check className="size-3 text-[--color-accent-3]" strokeWidth={2.5} />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Car image */}
        <div className="relative mx-auto mt-20 max-w-7xl px-6">
          <div className="fade-up-5 relative aspect-[21/9] overflow-hidden rounded-3xl border border-[--color-border]">
            <Image
              src={HERO_IMG}
              alt="Tesla"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover car-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
                    {c.secured}
                  </div>
                  <div className="mt-2 font-serif italic text-3xl text-white sm:text-5xl">
                    Tesla.{CONTENT[locale].localeName.toLowerCase()}
                  </div>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-white/70">
                  <span className="text-[--color-accent-2]">●</span> referral · active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS TICKER */}
      <section className="relative overflow-hidden border-y border-[--color-border] bg-gradient-to-r from-[--color-accent]/5 via-transparent to-[--color-accent-3]/5 py-10">
        <div className="marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-16 pr-16">
              {["Model 3", "Model Y", "Model S", "Model X", "Cybertruck", "Model 3", "Model Y"].map((m, i) => (
                <span
                  key={`${k}-${i}`}
                  className="ticker-text font-serif italic text-white/[0.09]"
                >
                  {m} <span className="text-[--color-accent]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WHY — BENTO */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
              / 01 · Fordeler
            </div>
            <h2 className="h-mega">
              {c.whyTitle.split(" ").slice(0, -2).join(" ")}{" "}
              <em className="font-serif italic gradient-text-warm">
                {c.whyTitle.split(" ").slice(-2).join(" ")}
              </em>
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">{c.whySub}</p>
          </div>

          <div className="bento">
            {/* Big lead cell */}
            <div className="bento-cell col-span-6 md:col-span-4 md:row-span-2">
              <div className="gradient-ring rounded-2xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[--color-accent] to-[--color-accent-2]">
                  <Zap className="size-7 text-white" strokeWidth={1.8} />
                </div>
                <div className="mt-12">
                  <h3 className="text-3xl font-medium sm:text-4xl">{c.benefits[0].t}</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-[--color-muted]">
                    {c.benefits[0].d}
                  </p>
                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="font-serif italic text-7xl gradient-text-warm sm:text-8xl">
                      ∞
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[--color-muted]">
                      km Supercharger
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift */}
            <div className="bento-cell col-span-6 md:col-span-2">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[--color-accent-4]/20 ring-1 ring-inset ring-[--color-accent-4]/30">
                <Gift className="size-5 text-[--color-accent-4]" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-medium">{c.benefits[1].t}</h3>
              <p className="mt-2 text-sm text-[--color-muted]">{c.benefits[1].d}</p>
            </div>

            {/* Shield */}
            <div className="bento-cell col-span-3 md:col-span-2">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[--color-accent-3]/15 ring-1 ring-inset ring-[--color-accent-3]/30">
                <Shield className="size-5 text-[--color-accent-3]" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-medium">{c.benefits[2].t}</h3>
              <p className="mt-2 text-sm text-[--color-muted]">{c.benefits[2].d}</p>
            </div>

            {/* Clock */}
            <div className="bento-cell col-span-3 md:col-span-2">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/15">
                <Clock className="size-5 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-medium">{c.benefits[3].t}</h3>
              <p className="mt-2 text-sm text-[--color-muted]">{c.benefits[3].d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="relative overflow-hidden border-t border-[--color-border] py-24 sm:py-32">
        <div className="absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-accent]/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
              / 02 · Prosess
            </div>
            <h2 className="h-mega">
              {c.howTitle.split(" ").slice(0, 1).join(" ")}{" "}
              <em className="font-serif italic gradient-text-cool">
                {c.howTitle.split(" ").slice(1).join(" ")}
              </em>
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">{c.howSub}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-background-elev] p-8 transition-all hover:-translate-y-1 hover:border-[--color-border-strong]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif italic text-8xl leading-none gradient-text-warm opacity-90">
                    {i + 1}
                  </span>
                  <ChevronRight className="size-5 text-[--color-muted] transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-8 text-xl font-medium">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[--color-muted]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative border-t border-[--color-border] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
              / 03 · Sammenligning
            </div>
            <h2 className="h-mega">{c.comparisonTitle}</h2>
            <p className="mt-6 text-lg text-[--color-muted]">{c.comparisonSub}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[--color-border]">
            <div className="grid grid-cols-3 bg-[--color-background-elev]">
              {c.comparisonHeaders.map((h, i) => (
                <div
                  key={i}
                  className={`px-6 py-5 text-sm font-medium ${
                    i === 2
                      ? "relative bg-gradient-to-br from-[--color-accent]/15 via-[--color-accent-2]/10 to-transparent text-white"
                      : "text-[--color-muted]"
                  }`}
                >
                  {i === 2 && <span className="mr-2 inline-block size-1.5 rounded-full bg-[--color-accent-2]" />}
                  {h}
                </div>
              ))}
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-[--color-border]">
                <div className="px-6 py-5 text-sm font-medium">{row[0]}</div>
                <div className="px-6 py-5 text-sm text-[--color-muted]">
                  {row[1] === "Ingen" || row[1] === "—" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="size-1 rounded-full bg-[--color-muted]" />
                      {row[1]}
                    </span>
                  ) : (
                    row[1]
                  )}
                </div>
                <div className="px-6 py-5 text-sm text-white bg-gradient-to-r from-[--color-accent]/[0.06] to-transparent">
                  <span className="inline-flex items-center gap-2">
                    <Check className="size-4 text-[--color-accent-2]" strokeWidth={2.5} />
                    {row[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="relative border-t border-[--color-border] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
                / 04 · Modeller
              </div>
              <h2 className="h-mega">
                {c.modelsTitle.split(" ")[0]}{" "}
                <em className="font-serif italic gradient-text-cool">
                  {c.modelsTitle.split(" ").slice(1).join(" ")}
                </em>
              </h2>
              <p className="mt-6 text-lg text-[--color-muted]">{c.modelsSub}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.models.map((m, i) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-background-elev] p-6 transition-all hover:-translate-y-1 hover:border-[--color-border-strong]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-[--color-accent]/30 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="relative flex h-36 items-center justify-center">
                  <span className="absolute inset-0 flex items-center justify-center font-serif italic text-[12rem] leading-none text-white/[0.04]">
                    {m.id}
                  </span>
                  <span className="relative font-serif italic text-8xl gradient-text-warm">
                    {m.id}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{m.name}</h3>
                  <span className="rounded-full border border-[--color-border] bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[--color-muted]">
                    {m.tag}
                  </span>
                </div>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="text-white">{m.priceFrom}</div>
                  <div className="text-[--color-muted]">{m.range}</div>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[--color-accent-2]">
                  {c.modelCta}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-[--color-border] py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
              / 05 · FAQ
            </div>
            <h2 className="h-mega">
              <em className="font-serif italic">{c.faqTitle}</em>
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">{c.faqSub}</p>
          </div>
          <div className="divide-y divide-[--color-border] overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-background-elev]">
            {c.faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-7 py-6 transition hover:bg-white/[0.02]">
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-accent-2]">
                      0{i + 1}
                    </span>
                    <span className="font-medium">{f.q}</span>
                  </span>
                  <span className="shrink-0 rounded-full border border-[--color-border] p-1.5 transition-transform group-open:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-7 pb-6 pl-[5.25rem] text-sm leading-relaxed text-[--color-muted]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative border-t border-[--color-border] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[--color-border] bg-gradient-to-br from-[--color-background-elev] to-[--color-background] p-12 sm:p-20">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute -left-20 -top-20 size-[500px] rounded-full bg-[--color-accent]/30 blur-[120px]" />
              <div className="absolute -right-20 -bottom-20 size-[400px] rounded-full bg-[--color-accent-4]/25 blur-[120px]" />
              <div className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-accent-3]/15 blur-[100px]" />
            </div>
            <div className="relative text-center">
              <h2 className="h-display">
                <em className="font-serif italic gradient-text-warm">{c.finalCta}</em>
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg text-[--color-muted]">{c.finalCtaSub}</p>
              <div className="mt-12 inline-flex flex-col items-center gap-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-6 text-lg font-medium text-black transition hover:scale-[1.02] btn-glow"
                >
                  {c.finalCtaButton}
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="inline-flex items-center gap-1.5 text-xs text-[--color-muted]">
                  <Shield className="size-3" />
                  {c.secured}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[--color-border] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap items-start justify-between gap-8">
            <div>
              <Link href={`/${locale}`} className="flex items-center gap-2 text-sm font-medium">
                <span className="relative flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-[--color-accent] via-[--color-accent-2] to-[--color-accent-4]">
                  <span className="size-1.5 rounded-full bg-white" />
                </span>
                teslahenvisning<span className="text-[--color-muted] font-normal">.com</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-[--color-muted]">
                Personlig Tesla-henvisningslenke for Norge, Danmark og Sverige.
              </p>
            </div>
            <div className="flex gap-10">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`text-sm transition ${
                    l === locale ? "text-white" : "text-[--color-muted] hover:text-white"
                  }`}
                >
                  {CONTENT[l].flag} {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[--color-border] pt-8 text-xs leading-relaxed text-[--color-muted]">
            <p className="max-w-4xl">{c.disclaimer}</p>
            <p className="mt-4">© {new Date().getFullYear()} teslahenvisning.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
