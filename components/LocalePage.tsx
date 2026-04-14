import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Check } from "lucide-react";
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
      <header className="sticky top-0 z-50 border-b border-[--color-line] bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-[14px] font-semibold tracking-tight">
            teslahenvisning<span className="text-[--color-muted-2]">.com</span>
          </Link>
          <nav className="flex items-center gap-1 text-[13px]">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-md px-2.5 py-1 transition ${
                  l === locale
                    ? "text-[--color-foreground] font-medium"
                    : "text-[--color-muted] hover:text-[--color-foreground]"
                }`}
              >
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* HERO */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="fade-up mb-6 inline-flex items-center gap-2">
            <span className="rounded-full border border-[--color-line-strong] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[--color-muted]">
              {c.adLabel}
            </span>
            <span className="text-[12px] text-[--color-muted]">{c.heroEyebrow}</span>
          </div>

          <h1 className="fade-up-2 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[3.5rem]">
            {c.heroTitle}{" "}
            <span className="text-[--color-muted]">{c.heroTitleAccent}</span>
          </h1>

          <p className="fade-up-3 mt-6 max-w-xl text-[16px] leading-relaxed text-[--color-muted] sm:text-[17px]">
            {c.heroSub}
          </p>

          <div className="fade-up-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group inline-flex items-center gap-2 rounded-full bg-[--color-foreground] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-black"
            >
              {c.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="text-[14px] font-medium text-[--color-muted] hover:text-[--color-foreground] transition"
            >
              {c.ctaSecondary} →
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-[--color-muted]">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {c.verifiedPrefix} {LAST_VERIFIED}
          </div>

          {/* Single contained image */}
          <div className="mt-12 overflow-hidden rounded-xl border border-[--color-line]">
            <div className="relative aspect-[16/9]">
              <Image
                src={HERO_IMG}
                alt="Tesla"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="border-t border-[--color-line] py-16 sm:py-20">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">
            {c.whyTitle}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.whySub}</p>

          <ul className="mt-10 space-y-6">
            {c.benefits.map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[--color-foreground]">
                  <Check className="size-3 text-white" strokeWidth={3} />
                </span>
                <div>
                  <div className="text-[15px] font-medium">{b.t}</div>
                  <div className="mt-1 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW */}
        <section id="how" className="border-t border-[--color-line] py-16 sm:py-20">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">{c.howTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.howSub}</p>

          <ol className="mt-10 space-y-8">
            {c.steps.map((s, i) => (
              <li key={i} className="flex gap-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[--color-surface] text-[13px] font-semibold tabular-nums text-[--color-foreground] ring-1 ring-inset ring-[--color-line]">
                  {i + 1}
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[16px] font-medium">{s.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* MODELS — text list, no images */}
        <section className="border-t border-[--color-line] py-16 sm:py-20">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">{c.modelsTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.modelsSub}</p>

          <div className="mt-10 divide-y divide-[--color-line] border-y border-[--color-line]">
            {c.models.map((m) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex items-center justify-between gap-6 py-5 transition"
              >
                <div className="flex items-baseline gap-4">
                  <span className="w-8 text-2xl font-semibold tabular-nums">{m.id}</span>
                  <div>
                    <div className="text-[16px] font-medium">{m.name}</div>
                    <div className="text-[13px] text-[--color-muted]">
                      {m.priceFrom} · {m.range}
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-[--color-muted] transition group-hover:translate-x-0.5 group-hover:text-[--color-foreground]" />
              </a>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="border-t border-[--color-line] py-16 sm:py-20">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">{c.comparisonTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.comparisonSub}</p>

          <div className="mt-10 overflow-hidden rounded-lg border border-[--color-line]">
            <div className="grid grid-cols-3 bg-[--color-surface]">
              <div className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-[--color-muted]"></div>
              <div className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-[--color-muted]">{c.comparisonHeaders[1]}</div>
              <div className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-[--color-foreground]">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-[--color-line] text-[14px]">
                <div className="px-4 py-3 font-medium">{row[0]}</div>
                <div className="px-4 py-3 text-[--color-muted]">{row[1]}</div>
                <div className="px-4 py-3">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[--color-line] py-16 sm:py-20">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">{c.faqTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.faqSub}</p>

          <div className="mt-10 divide-y divide-[--color-line] border-y border-[--color-line]">
            {c.faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer items-start justify-between gap-4 py-5">
                  <span className="text-[15px] font-medium">{f.q}</span>
                  <Plus className="mt-1 size-4 shrink-0 text-[--color-muted] transition-transform group-open:rotate-45" />
                </summary>
                <div className="pb-5 pr-8 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA — text only */}
        <section className="border-t border-[--color-line] py-20 sm:py-28 text-center">
          <h2 className="text-[32px] font-semibold tracking-tight sm:text-[40px]">{c.finalCta}</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[--color-muted]">{c.finalCtaSub}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[--color-foreground] px-6 py-3.5 text-[14px] font-medium text-white transition hover:bg-black"
          >
            {c.finalCtaButton}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[--color-line]">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <Link href={`/${locale}`} className="text-[13px] font-semibold">
              teslahenvisning.com
            </Link>
            <div className="flex gap-5 text-[12px]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={l === locale ? "font-medium" : "text-[--color-muted] hover:text-[--color-foreground]"}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <p className="border-t border-[--color-line] pt-6 text-[11px] leading-relaxed text-[--color-muted-2]">
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
