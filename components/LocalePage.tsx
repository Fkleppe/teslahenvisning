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
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=85";

const TICKER: Record<Locale, string[]> = {
  no: ["Andreas bestilte Model Y", "Marit bestilte Model 3", "Lars bestilte Model Y", "Henrik bestilte Model S", "Anna bestilte Model 3", "Per bestilte Model X"],
  dk: ["Mads bestilte Model Y", "Line bestilte Model 3", "Henrik bestilte Model Y", "Sara bestilte Model S", "Mikkel bestilte Model 3", "Pernille bestilte Model X"],
  se: ["Erik beställde Model Y", "Sofia beställde Model 3", "Johan beställde Model Y", "Linnea beställde Model S", "Karl beställde Model 3", "Astrid beställde Model X"],
};

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const stats = STATS[locale];
  const tickerItems = TICKER[locale];

  return (
    <>
      <JsonLd locale={locale} />

      {/* NAV */}
      <header className="relative z-50 px-6 pt-6 sm:px-10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2.5 text-[14px] font-semibold tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-full bg-[--color-fg] text-[10px] text-white">th</span>
            teslahenvisning
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-1 text-[13px]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`rounded-full px-3 py-1.5 transition ${
                    l === locale ? "bg-[--color-fg] text-white" : "text-[--color-muted] hover:text-[--color-fg]"
                  }`}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </nav>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-[--color-fg] px-4 text-[13px] font-medium text-white transition hover:opacity-90 sm:inline-flex"
            >
              Bestill nå <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO — asymmetric split */}
      <section className="px-6 pt-14 pb-20 sm:px-10 sm:pt-20 sm:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: copy */}
          <div className="lg:col-span-7 lg:pt-6">
            <div className="fade inline-flex items-center gap-2 rounded-full border border-[--color-line] bg-white px-3 py-1.5 text-[12px]">
              <span className="live-dot" />
              <span className="text-[--color-muted]">
                <span className="font-medium text-[--color-fg]">Aktiv</span> · {c.verifiedPrefix.toLowerCase()} {LAST_VERIFIED}
              </span>
              <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-900">{c.adLabel}</span>
            </div>

            <h1 className="fade-2 mt-7 h1">
              {c.heroTitle}.{" "}
              <span className="text-[--color-muted]">{c.heroTitleAccent.replace(/[.]$/, "")}.</span>
            </h1>

            <p className="fade-3 mt-7 max-w-xl text-[17px] leading-[1.5] text-[--color-muted] sm:text-[18px]">
              {c.heroSub}
            </p>

            <div className="fade-4 mt-9 flex flex-wrap items-center gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn btn-primary"
              >
                {c.ctaPrimary} <span aria-hidden>→</span>
              </a>
              <a href="#how" className="text-[14px] font-medium text-[--color-muted] hover:text-[--color-fg]">
                {c.ctaSecondary} →
              </a>
            </div>

            {/* trust row */}
            <div className="fade-4 mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[--color-muted]">
              {c.trustRow.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="text-[--color-green]">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: image card with floating offer chip */}
          <div className="relative lg:col-span-5">
            <div className="fade-2 relative aspect-[4/5] overflow-hidden rounded-3xl bg-[--color-bg-dark]">
              <Image
                src={HERO_IMG}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover opacity-95"
              />

              {/* corner status */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[11px] text-white backdrop-blur">
                <span className="live-dot" />
                Live henvisning
              </div>

              {/* bottom destination chip */}
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl bg-black/55 p-3 text-white backdrop-blur">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-white/65">Destinasjon</div>
                  <div className="mt-0.5 text-[14px] font-medium">tesla.com / {locale.toUpperCase()}</div>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black">Sikker</span>
              </div>
            </div>

            {/* Floating offer card */}
            <div className="fade-3 absolute -left-3 -bottom-6 w-[88%] rounded-2xl float-card p-5 sm:-left-8 sm:bottom-10 sm:w-[78%]">
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
                Aktiv bonus
              </div>
              <div className="mt-1.5 text-[26px] font-semibold leading-tight tracking-tight">
                Gratis Supercharger-km
              </div>
              <div className="mt-1 text-[13px] text-[--color-muted]">
                Aktiveres automatisk når du bestiller via lenken.
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium text-[--color-green]">
                <span className="size-1.5 rounded-full bg-[--color-green]" />
                Verifisert {LAST_VERIFIED}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK STATS BAND */}
      <section className="bg-[--color-bg-dark] text-[--color-fg-inv]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-[2.25rem] font-semibold tracking-tight tabular sm:text-[2.75rem]">
                  {s.value}
                </div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.1em] text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TICKER */}
        <div className="border-t border-white/10 overflow-hidden py-4">
          <div className="ticker-track text-[13px] text-white/55">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap">
                <span className="size-1 rounded-full bg-[--color-green]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-6 sm:px-10">
        {/* HOW */}
        <section id="how" className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
                Slik fungerer det
              </div>
              <h2 className="mt-4 h2">{c.howTitle}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[--color-muted]">{c.howSub}</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-2xl bg-[--color-line] sm:grid-cols-3">
                {c.steps.map((s, i) => (
                  <div key={i} className="bg-white p-7">
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[--color-muted] tabular">
                      0{i + 1}
                    </div>
                    <h3 className="mt-12 text-[18px] font-medium">{s.t}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MODELS */}
        <section className="py-24 sm:py-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
                Tilgjengelig
              </div>
              <h2 className="mt-4 h2">{c.modelsTitle}</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.models.map((m) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col rounded-2xl bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(10,10,10,0.12)]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[2.5rem] font-medium leading-none tabular">{m.id}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[--color-muted]">{m.tag}</span>
                </div>
                <h3 className="mt-12 text-[16px] font-medium">{m.name}</h3>
                <div className="mt-1 text-[13px] text-[--color-muted] tabular">{m.priceFrom}</div>
                <div className="mt-0.5 text-[13px] text-[--color-muted] tabular">{m.range}</div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium text-[--color-fg]">
                  {c.modelCta} <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
                Fordeler
              </div>
              <h2 className="mt-4 h2">{c.whyTitle}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[--color-muted]">{c.whySub}</p>
            </div>
            <div className="lg:col-span-8 grid gap-3 sm:grid-cols-2">
              {c.benefits.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white p-7">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[--color-green]">
                    Inkludert
                  </div>
                  <h3 className="mt-4 text-[17px] font-medium">{b.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-24 sm:py-32">
          <div className="text-center">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
              Sammenligning
            </div>
            <h2 className="mt-4 h2">{c.comparisonTitle}</h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[--color-muted]">
              {c.comparisonSub}
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl bg-white">
            <div className="grid grid-cols-3 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[--color-muted]">
              <div></div>
              <div>{c.comparisonHeaders[1]}</div>
              <div className="text-[--color-fg]">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-6 py-4 text-[14px] odd:bg-[--color-bg]">
                <div className="font-medium">{row[0]}</div>
                <div className="text-[--color-muted] tabular">{row[1]}</div>
                <div className="tabular font-medium">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
                FAQ
              </div>
              <h2 className="mt-4 h2">{c.faqTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white">
                {c.faqs.map((f, i) => (
                  <details key={i} className="group border-b border-[--color-line] last:border-b-0">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6">
                      <span className="text-[15px] font-medium leading-snug">{f.q}</span>
                      <span className="mt-1 text-[--color-muted-2] transition group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="px-6 pb-6 pr-12 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FINAL CTA — dark band */}
      <section className="bg-[--color-bg-dark] text-[--color-fg-inv]">
        <div className="mx-auto max-w-[1280px] px-6 py-28 text-center sm:px-10 sm:py-36">
          <h2 className="mx-auto h1 max-w-3xl">{c.finalCta}</h2>
          <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
            {c.finalCtaSub}
          </p>
          <div className="mt-10 inline-flex flex-col items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-medium text-[--color-fg] transition hover:scale-[1.02]"
            >
              {c.finalCtaButton} <span aria-hidden>→</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-[12px] text-white/55">
              <span className="live-dot" />
              {c.verifiedPrefix} {LAST_VERIFIED}
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href={`/${locale}`} className="text-[13px] font-medium">
              teslahenvisning.com
            </Link>
            <div className="flex gap-5 text-[12px]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={l === locale ? "font-medium" : "text-[--color-muted-2] hover:text-[--color-fg]"}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-[--color-muted-2]">
            {c.disclaimer}
          </p>
          <p className="mt-3 text-[11px] text-[--color-muted-2]">
            © {new Date().getFullYear()} teslahenvisning.com
          </p>
        </div>
      </footer>
    </>
  );
}
