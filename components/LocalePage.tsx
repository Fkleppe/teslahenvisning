import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Gift, Clock, Check, Plus } from "lucide-react";
import { CONTENT, REFERRAL_URLS, LAST_VERIFIED, LOCALES, type Locale } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2400&q=85";

const ICON_MAP = { zap: Zap, shield: Shield, gift: Gift, clock: Clock } as const;

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[--color-border] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-[15px] font-medium tracking-tight">
            teslahenvisning<span className="text-[--color-muted-strong]">.com</span>
          </Link>
          <nav className="flex items-center gap-1 text-[13px]">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  l === locale ? "text-white" : "text-[--color-muted] hover:text-white"
                }`}
              >
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO — Tesla-style full-bleed product hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Tesla"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-vignette" />

        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Disclosure pill */}
          <div className="pt-28 sm:pt-32">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="fade-up inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                  {c.adLabel}
                </span>
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-white/70 backdrop-blur">
                  {c.heroEyebrow}
                </span>
              </div>
            </div>
          </div>

          {/* Hero copy */}
          <div className="flex flex-1 items-center">
            <div className="mx-auto w-full max-w-[1400px] px-6 py-16 text-center">
              <h1 className="fade-up-2 mx-auto h-display max-w-5xl">
                {c.heroTitle}
                <br />
                <span className="text-[--color-muted]">{c.heroTitleAccent}</span>
              </h1>
              <p className="fade-up-3 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {c.heroSub}
              </p>
            </div>
          </div>

          {/* Hero CTA bar at bottom */}
          <div className="pb-12 sm:pb-16">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="fade-up-4 flex flex-col items-center gap-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group inline-flex min-w-[260px] items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-black transition hover:bg-white/90"
                  >
                    {c.ctaPrimary}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#how"
                    className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-medium text-white backdrop-blur transition hover:bg-white/15"
                  >
                    {c.ctaSecondary}
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/65">
                  <span className="font-mono uppercase tracking-[0.14em]">
                    <span className="mr-1.5 inline-block size-1.5 translate-y-[-1px] rounded-full bg-emerald-400 align-middle" />
                    {c.verifiedPrefix} {LAST_VERIFIED}
                  </span>
                  {c.trustRow.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      <Check className="size-3" strokeWidth={2.5} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-[--color-border] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">{c.whyTitle.split(" ").slice(0, 1).join(" ")}</div>
            <h2 className="mt-5 h-section">{c.whyTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-[--color-muted] sm:text-lg">{c.whySub}</p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.benefits.map((b, i) => {
              const Icon = ICON_MAP[b.icon];
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[--color-border] bg-[--color-background-elev] p-7 transition-colors hover:border-[--color-border-strong]"
                >
                  <Icon className="size-6 text-white" strokeWidth={1.5} />
                  <h3 className="mt-8 text-[17px] font-medium leading-snug">{b.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="border-t border-[--color-border] bg-[--color-background-elev] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">{c.howTitle}</div>
            <h2 className="mt-5 h-section">{c.howSub}</h2>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-border] sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <div key={i} className="bg-[--color-background-elev-2] p-8 sm:p-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[--color-muted]">
                  Steg 0{i + 1}
                </div>
                <h3 className="mt-12 text-2xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-[--color-border] py-28 sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">{c.comparisonTitle.split(" ").slice(0, 1).join(" ")}</div>
            <h2 className="mt-5 h-section">{c.comparisonTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-[--color-muted] sm:text-lg">
              {c.comparisonSub}
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-[--color-border]">
            <div className="grid grid-cols-3 bg-[--color-background-elev]">
              {c.comparisonHeaders.map((h, i) => (
                <div
                  key={i}
                  className={`px-6 py-5 text-[13px] font-medium ${
                    i === 2 ? "bg-white/[0.04] text-white" : "text-[--color-muted]"
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-[--color-border]">
                <div className="px-6 py-5 text-[14px] font-medium">{row[0]}</div>
                <div className="px-6 py-5 text-[14px] text-[--color-muted]">{row[1]}</div>
                <div className="px-6 py-5 text-[14px] text-white bg-white/[0.02]">
                  <span className="inline-flex items-center gap-2">
                    <Check className="size-3.5" strokeWidth={2.5} />
                    {row[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="border-t border-[--color-border] bg-[--color-background-elev] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Modeller</div>
            <h2 className="mt-5 h-section">{c.modelsTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-[--color-muted] sm:text-lg">{c.modelsSub}</p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.models.map((m) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col rounded-2xl border border-[--color-border] bg-[--color-background] p-8 transition-all hover:-translate-y-1 hover:border-[--color-border-strong]"
              >
                <div className="flex h-32 items-center justify-center">
                  <span className="text-[7rem] font-medium leading-none tracking-tighter text-white/95">
                    {m.id}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-xl font-medium tracking-tight">{m.name}</h3>
                  <div className="mt-1 text-[12px] uppercase tracking-[0.14em] text-[--color-muted]">
                    {m.tag}
                  </div>
                </div>
                <div className="mt-6 space-y-2 border-t border-[--color-border] pt-6 text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-[--color-muted]">Pris</span>
                    <span className="text-white">{m.priceFrom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[--color-muted]">Rekkevidde</span>
                    <span className="text-white">{m.range}</span>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-white/5 py-3 text-[13px] font-medium transition-colors group-hover:bg-white group-hover:text-black">
                  {c.modelCta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[--color-border] py-28 sm:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-5 h-section">{c.faqTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-[--color-muted] sm:text-lg">{c.faqSub}</p>
          </div>
          <div className="mt-16 divide-y divide-[--color-border] border-y border-[--color-border]">
            {c.faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer items-start justify-between gap-4 py-6 transition-colors hover:text-white">
                  <span className="text-[16px] font-medium leading-snug">{f.q}</span>
                  <Plus className="mt-1 size-4 shrink-0 text-[--color-muted] transition-transform group-open:rotate-45" />
                </summary>
                <div className="pb-6 pr-8 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[--color-border] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="mx-auto h-display max-w-4xl">{c.finalCta}</h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-[--color-muted]">{c.finalCtaSub}</p>
          <div className="mt-12 inline-flex flex-col items-center gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group inline-flex min-w-[280px] items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-[15px] font-medium text-black transition hover:bg-white/90"
            >
              {c.finalCtaButton}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[--color-muted]">
              <Shield className="size-3" />
              {c.secured}
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[--color-border] py-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-start justify-between gap-8 pb-10">
            <div>
              <Link href={`/${locale}`} className="text-[15px] font-medium tracking-tight">
                teslahenvisning<span className="text-[--color-muted-strong]">.com</span>
              </Link>
              <p className="mt-3 max-w-sm text-[13px] text-[--color-muted]">
                Personlig Tesla-henvisningslenke for Norge, Danmark og Sverige.
              </p>
            </div>
            <div className="flex gap-8">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`text-[13px] transition-colors ${
                    l === locale ? "text-white" : "text-[--color-muted] hover:text-white"
                  }`}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[--color-border] pt-8 text-[12px] leading-relaxed text-[--color-muted-strong]">
            <p className="max-w-4xl">{c.disclaimer}</p>
            <p className="mt-4">© {new Date().getFullYear()} teslahenvisning.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
