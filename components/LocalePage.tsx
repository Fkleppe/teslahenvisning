import Image from "next/image";
import Link from "next/link";
import {
  CONTENT,
  REFERRAL_URLS,
  LAST_VERIFIED,
  LOCALES,
  type Locale,
} from "@/lib/content";
import { JsonLd } from "./JsonLd";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=85";

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];

  return (
    <>
      <JsonLd locale={locale} />

      {/* HEADER */}
      <header className="px-8 py-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link href={`/${locale}`} className="text-[14px] font-medium tracking-tight">
            teslahenvisning
          </Link>
          <nav className="flex items-center gap-5 text-[13px]">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={l === locale ? "text-[--color-fg]" : "text-[--color-muted-2] hover:text-[--color-fg]"}
              >
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-8">
        {/* HERO */}
        <section className="pt-24 pb-32 sm:pt-32">
          <p className="fade text-[13px] text-[--color-muted]">
            <span className="mr-2 rounded-sm bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-900">
              {c.adLabel}
            </span>
            {c.heroEyebrow}
          </p>

          <h1 className="fade-2 mt-8 text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-[3.5rem]">
            {c.heroTitle} {c.heroTitleAccent}
          </h1>

          <p className="fade-3 mt-8 text-[17px] leading-[1.55] text-[--color-muted]">
            {c.heroSub}
          </p>

          <div className="fade-3 mt-12">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-full bg-[--color-fg] px-6 py-3.5 text-[14px] font-medium text-white transition hover:opacity-90"
            >
              {c.ctaPrimary}
              <span aria-hidden>→</span>
            </a>
          </div>

          <p className="mt-6 text-[12px] text-[--color-muted-2] tabular">
            {c.verifiedPrefix.toLowerCase()} {LAST_VERIFIED}
          </p>
        </section>

        {/* HERO IMAGE */}
        <figure className="-mx-8 sm:mx-0">
          <div className="relative aspect-[16/10] overflow-hidden sm:rounded-xl">
            <Image
              src={HERO_IMG}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          </div>
        </figure>

        {/* WHY */}
        <section className="pt-32 pb-24">
          <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
            {c.whyTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[--color-muted]">{c.whySub}</p>

          <div className="mt-14 space-y-12">
            {c.benefits.map((b, i) => (
              <div key={i}>
                <h3 className="text-[18px] font-medium tracking-tight">{b.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[--color-muted]">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW */}
        <section className="pt-24 pb-24">
          <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
            {c.howTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[--color-muted]">{c.howSub}</p>

          <div className="mt-14 space-y-12">
            {c.steps.map((s, i) => (
              <div key={i}>
                <p className="text-[12px] uppercase tracking-[0.14em] text-[--color-muted-2] tabular">
                  Steg {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[20px] font-medium tracking-tight">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[--color-muted]">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MODELS */}
        <section className="pt-24 pb-24">
          <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
            {c.modelsTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[--color-muted]">{c.modelsSub}</p>

          <ul className="mt-12 space-y-8">
            {c.models.map((m) => (
              <li key={m.id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex items-baseline justify-between gap-6"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-[28px] font-medium tabular text-[--color-muted-2] w-8">
                      {m.id}
                    </span>
                    <span>
                      <span className="block text-[18px] font-medium tracking-tight">{m.name}</span>
                      <span className="mt-0.5 block text-[13px] text-[--color-muted] tabular">
                        {m.priceFrom} · {m.range}
                      </span>
                    </span>
                  </span>
                  <span className="text-[--color-muted-2] transition group-hover:translate-x-0.5 group-hover:text-[--color-fg]" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* COMPARISON */}
        <section className="pt-24 pb-24">
          <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
            {c.comparisonTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[--color-muted]">{c.comparisonSub}</p>

          <div className="mt-12 space-y-5">
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-baseline gap-4 text-[15px]">
                <div className="font-medium">{row[0]}</div>
                <div className="text-[--color-muted] tabular">{row[1]}</div>
                <div className="tabular">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-24 pb-24">
          <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
            {c.faqTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[--color-muted]">{c.faqSub}</p>

          <div className="mt-12 space-y-3">
            {c.faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-2">
                  <span className="text-[16px] font-medium leading-snug">{f.q}</span>
                  <span className="mt-1 text-[--color-muted-2] transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="pb-2 pr-8 text-[15px] leading-[1.6] text-[--color-muted]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pt-32 pb-32 text-center">
          <h2 className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-[3.25rem]">
            {c.finalCta}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[--color-muted]">
            {c.finalCtaSub}
          </p>
          <div className="mt-10">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-full bg-[--color-fg] px-7 py-4 text-[14px] font-medium text-white transition hover:opacity-90"
            >
              {c.finalCtaButton}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-8 pb-12 pt-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href={`/${locale}`} className="text-[13px] font-medium">
              teslahenvisning.com
            </Link>
            <div className="flex gap-5 text-[12px]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={l === locale ? "text-[--color-fg]" : "text-[--color-muted-2] hover:text-[--color-fg]"}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-10 text-[11px] leading-relaxed text-[--color-muted-2]">
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
