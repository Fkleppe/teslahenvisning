import Image from "next/image";
import Link from "next/link";
import {
  CONTENT,
  REFERRAL_URLS,
  LAST_VERIFIED,
  LOCALES,
  STATS,
  type Locale,
} from "@/lib/content";
import { JsonLd } from "./JsonLd";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=90";

const TICKER: Record<Locale, string[]> = {
  no: ["Andreas · Oslo · Model Y", "Marit · Bergen · Model 3", "Lars · Trondheim · Model Y LR", "Henrik · Stavanger · Model S", "Anna · Kristiansand · Model 3", "Ole · Tromsø · Model X"],
  dk: ["Mads · København · Model Y", "Line · Aarhus · Model 3", "Henrik · Odense · Model Y LR", "Sara · Aalborg · Model S", "Mikkel · Esbjerg · Model 3", "Pernille · Randers · Model X"],
  se: ["Erik · Stockholm · Model Y", "Sofia · Göteborg · Model 3", "Johan · Malmö · Model Y LR", "Linnea · Uppsala · Model S", "Karl · Västerås · Model 3", "Astrid · Örebro · Model X"],
};

const OFFER_HEADLINE: Record<Locale, { k: string; v: string; foot: string }> = {
  no: { k: "Gjeldende henvisningsbonus", v: "Gratis Supercharger-kilometer", foot: "Aktiveres automatisk ved levering" },
  dk: { k: "Aktuel henvisningsbonus", v: "Gratis Supercharger-kilometer", foot: "Aktiveres automatisk ved levering" },
  se: { k: "Aktuell värva vän-bonus", v: "Gratis Supercharger-kilometer", foot: "Aktiveras automatiskt vid leverans" },
};

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const stats = STATS[locale];
  const ticker = TICKER[locale];
  const offer = OFFER_HEADLINE[locale];

  // Clean hero headline — remove the problematic split
  const heroHeadline = `${c.heroTitle} ${c.heroTitleAccent.replace(/[.]$/, "")}`;

  return (
    <>
      <JsonLd locale={locale} />

      {/* NAV */}
      <header className="relative z-50 px-6 pt-6 sm:px-10 sm:pt-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2.5 text-[14px] font-semibold tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-full bg-[--color-ink] text-[9px] font-bold text-white">TH</span>
            teslahenvisning
          </Link>
          <nav className="flex items-center gap-0.5 rounded-full border border-[--color-line] bg-white/70 p-1 text-[12px] font-medium backdrop-blur">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  l === locale ? "bg-[--color-ink] text-white" : "text-[--color-muted] hover:text-[--color-ink]"
                }`}
              >
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO — centered, confident */}
      <section className="px-6 pt-20 sm:px-10 sm:pt-28">
        <div className="mx-auto max-w-[1080px] text-center">
          <div className="fade inline-flex items-center gap-2.5 rounded-full border border-[--color-line] bg-white px-3.5 py-1.5 text-[12px]">
            <span className="live" />
            <span className="font-medium">Aktiv henvisning</span>
            <span className="text-[--color-muted-2]">·</span>
            <span className="text-[--color-muted] tabular">{c.verifiedPrefix.toLowerCase()} {LAST_VERIFIED}</span>
            <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-900">{c.adLabel}</span>
          </div>

          <h1 className="fade-2 mx-auto mt-10 max-w-5xl display">
            {heroHeadline}.
          </h1>

          <p className="fade-3 mx-auto mt-8 max-w-2xl text-[17px] leading-[1.55] text-[--color-muted] sm:text-[19px]">
            {c.heroSub}
          </p>

          <div className="fade-4 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-primary"
            >
              {c.ctaPrimary} <span aria-hidden>→</span>
            </a>
            <a href="#how" className="text-[14px] font-medium text-[--color-muted] hover:text-[--color-ink]">
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Hero image card — cinematic full-width */}
      <section className="px-4 pt-16 pb-4 sm:px-6 sm:pt-20">
        <div className="relative mx-auto max-w-[1280px]">
          <div className="hero-image-card relative aspect-[21/10] w-full">
            <Image
              src={HERO_IMG}
              alt="Tesla"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/10" />

            {/* Top-left: destination chip */}
            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[12px] font-medium backdrop-blur">
              <span className="live" />
              Tesla.com / {locale.toUpperCase()} · Verifisert
            </div>

            {/* Bottom-left: offer info */}
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-sm text-white">
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
                  {offer.k}
                </div>
                <div className="mt-1.5 text-[1.5rem] font-semibold leading-tight tracking-tight sm:text-[2rem]">
                  {offer.v}
                </div>
                <div className="mt-1 text-[13px] text-white/75">{offer.foot}</div>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-[--color-ink]"
              >
                {c.ctaPrimary} <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pt-16 sm:px-10 sm:pt-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-[2.5rem] font-semibold tracking-tight tabular leading-none sm:text-[3rem]">
                  {s.value}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.1em] text-[--color-muted]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITY TICKER */}
      <section className="mt-24 overflow-hidden border-y border-[--color-line] py-5">
        <div className="ticker text-[13px] text-[--color-muted]">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap">
              <span className="size-1 rounded-full bg-[--color-green]" />
              {t}
            </span>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-6 sm:px-10">
        {/* HOW */}
        <section id="how" className="py-28 sm:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="label">Slik fungerer det</div>
            <h2 className="mt-5 h2">{c.howTitle}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[--color-muted]">{c.howSub}</p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <div key={i} className="rounded-2xl bg-white p-8">
                <div className="text-[2.5rem] font-semibold tabular leading-none text-[--color-muted-2]">
                  0{i + 1}
                </div>
                <h3 className="mt-12 h3">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MODELS */}
        <section className="py-28 sm:py-36">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="label">Modeller</div>
              <h2 className="mt-5 h2">{c.modelsTitle}</h2>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[14px] font-medium text-[--color-ink] hover:text-[--color-muted]"
            >
              Se alle på tesla.com →
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.models.map((m) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col rounded-2xl bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(10,10,10,0.15)]"
              >
                <div className="flex h-28 items-start justify-between">
                  <span className="text-[5rem] font-semibold leading-[0.8] tabular tracking-tighter">{m.id}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[--color-muted]">{m.tag}</span>
                </div>
                <h3 className="text-[17px] font-medium tracking-tight">{m.name}</h3>
                <div className="mt-1.5 space-y-0.5 text-[13px] text-[--color-muted] tabular">
                  <div>{m.priceFrom}</div>
                  <div>{m.range}</div>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium">
                  {c.modelCta} <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="label">Fordeler</div>
            <h2 className="mt-5 h2">{c.whyTitle}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[--color-muted]">{c.whySub}</p>
          </div>
          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.benefits.map((b, i) => (
              <div key={i} className="rounded-2xl bg-white p-7">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[--color-green]">
                  <span className="size-1.5 rounded-full bg-[--color-green]" />
                  Inkludert
                </div>
                <h3 className="mt-6 h3">{b.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <div className="label">Sammenligning</div>
            <h2 className="mt-5 h2">{c.comparisonTitle}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[--color-muted]">{c.comparisonSub}</p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl bg-white">
            <div className="grid grid-cols-3 px-8 py-5 text-[11px] font-medium uppercase tracking-[0.1em] text-[--color-muted]">
              <div></div>
              <div>{c.comparisonHeaders[1]}</div>
              <div className="text-[--color-ink]">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-center px-8 py-4 text-[14px] odd:bg-[--color-bg]">
                <div className="font-medium">{row[0]}</div>
                <div className="text-[--color-muted] tabular">{row[1]}</div>
                <div className="tabular font-medium">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <div className="label">FAQ</div>
            <h2 className="mt-5 h2">{c.faqTitle}</h2>
          </div>
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl bg-white">
            {c.faqs.map((f, i) => (
              <details key={i} className="group border-b border-[--color-line] last:border-b-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-7 py-5">
                  <span className="text-[15px] font-medium leading-snug">{f.q}</span>
                  <span className="mt-1 text-[--color-muted-2] transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="px-7 pb-5 pr-14 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* FINAL CTA — dark band */}
      <section className="dark-band">
        <div className="mx-auto max-w-[1280px] px-6 py-28 text-center sm:px-10 sm:py-36">
          <h2 className="mx-auto max-w-4xl display">{c.finalCta}</h2>
          <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-white/70">
            {c.finalCtaSub}
          </p>
          <div className="mt-12 inline-flex flex-col items-center gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-9 text-[15px] font-medium text-[--color-ink] transition hover:scale-[1.02]"
            >
              {c.finalCtaButton} <span aria-hidden>→</span>
            </a>
            <span className="inline-flex items-center gap-2 text-[12px] text-white/55">
              <span className="live" />
              {c.verifiedPrefix} {LAST_VERIFIED}
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dark-band border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8">
            <Link href={`/${locale}`} className="text-[13px] font-semibold text-white">
              teslahenvisning.com
            </Link>
            <div className="flex gap-5 text-[12px]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={l === locale ? "text-white font-medium" : "text-white/50 hover:text-white"}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 max-w-4xl text-[11px] leading-relaxed text-white/45">
            {c.disclaimer}
          </p>
          <p className="mt-3 text-[11px] text-white/45">
            © {new Date().getFullYear()} teslahenvisning.com
          </p>
        </div>
      </footer>
    </>
  );
}
