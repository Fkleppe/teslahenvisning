import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus, Check } from "lucide-react";
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

function SectionLabel({ num, children }: { num: string; children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="label tabular">{num}</span>
      <span className="h-px flex-1 bg-[--color-line]" />
      <span className="label">{children}</span>
    </div>
  );
}

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const stats = STATS[locale];

  return (
    <>
      <JsonLd locale={locale} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[--color-line] bg-[--color-background]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-[14px] font-semibold tracking-tight">
            <span className="size-1.5 rounded-full bg-[--color-accent]" />
            teslahenvisning
            <span className="text-[--color-muted-2] font-normal">.com</span>
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
        <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-24">
          <div className="absolute inset-0 dot-grid" aria-hidden />
          <div className="absolute inset-0 hero-glow" aria-hidden />

          <div className="relative">
            <div className="fade-up mb-7 inline-flex items-center gap-2">
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-900">
                {c.adLabel}
              </span>
              <span className="label">{c.heroEyebrow}</span>
            </div>

            <h1 className="fade-up-2 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[4rem]">
              {c.heroTitle}{" "}
              <span className="font-serif italic font-normal text-[--color-accent]">
                {c.heroTitleAccent.replace(/[.]$/, "")}
              </span>
              <span className="text-[--color-muted]">.</span>
            </h1>

            <p className="fade-up-3 mt-7 max-w-xl text-[16px] leading-relaxed text-[--color-muted] sm:text-[17px]">
              {c.heroSub}
            </p>

            <div className="fade-up-4 mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group inline-flex items-center gap-2 rounded-full bg-[--color-foreground] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-black"
              >
                {c.ctaPrimary}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#how" className="accent-link text-[14px]">
                {c.ctaSecondary}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[--color-muted]">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80" />
                  <span className="relative size-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="tabular">{c.verifiedPrefix} {LAST_VERIFIED}</span>
              </span>
              {c.trustRow.slice(0, 2).map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="size-3 text-[--color-accent]" strokeWidth={2.5} />
                  {t}
                </span>
              ))}
            </div>

            {/* Hero image with refined treatment */}
            <div className="fade-up-4 mt-14 overflow-hidden rounded-2xl img-card">
              <div className="relative aspect-[16/10]">
                <Image
                  src={HERO_IMG}
                  alt="Tesla"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6">
                  <div className="flex items-end justify-between">
                    <div className="text-white">
                      <div className="label !text-white/70">Henvisning · Aktiv</div>
                      <div className="mt-1 text-[20px] font-medium tracking-tight">
                        tesla.com / {locale.toUpperCase()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      Live
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats inline strip */}
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[--color-line] sm:grid-cols-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-[--color-background] px-4 py-4">
                  <div className="text-[20px] font-semibold tracking-tight tabular">{s.value}</div>
                  <div className="mt-0.5 text-[11px] text-[--color-muted]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section">
          <SectionLabel num="01">Fordeler</SectionLabel>
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[36px]">
            {c.whyTitle}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.whySub}</p>

          <ul className="mt-10 space-y-1">
            {c.benefits.map((b, i) => (
              <li
                key={i}
                className="group flex items-start gap-5 border-t border-[--color-line] py-5 first:border-t-0"
              >
                <span className="label tabular pt-1">0{i + 1}</span>
                <div className="flex-1">
                  <div className="text-[16px] font-medium">{b.t}</div>
                  <div className="mt-1.5 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</div>
                </div>
                <Check className="mt-1 size-4 text-[--color-accent]" strokeWidth={2.5} />
              </li>
            ))}
          </ul>
        </section>

        {/* HOW */}
        <section id="how" className="section border-t border-[--color-line]">
          <SectionLabel num="02">Prosess</SectionLabel>
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[36px]">{c.howTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.howSub}</p>

          <ol className="mt-10 space-y-1">
            {c.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-[--color-line] py-6 first:border-t-0">
                <div className="font-serif italic text-4xl text-[--color-accent] leading-none tabular">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-[16px] font-medium">{s.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* MODELS */}
        <section className="section border-t border-[--color-line]">
          <SectionLabel num="03">Modeller</SectionLabel>
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[36px]">{c.modelsTitle}</h2>
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
                <div className="flex items-baseline gap-5">
                  <span className="w-10 font-serif italic text-4xl text-[--color-foreground] tabular">
                    {m.id}
                  </span>
                  <div>
                    <div className="text-[16px] font-medium">{m.name}</div>
                    <div className="mt-0.5 text-[13px] text-[--color-muted] tabular">
                      {m.priceFrom} · {m.range}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[--color-muted] transition group-hover:text-[--color-accent]">
                  <span className="hidden sm:inline">{c.modelCta}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="section border-t border-[--color-line]">
          <SectionLabel num="04">Sammenligning</SectionLabel>
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[36px]">{c.comparisonTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.comparisonSub}</p>

          <div className="mt-10">
            <div className="grid grid-cols-3 border-b border-[--color-line-strong] pb-3">
              <div></div>
              <div className="label">{c.comparisonHeaders[1]}</div>
              <div className="label !text-[--color-foreground] font-medium">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-center border-b border-[--color-line] py-4 text-[14px]">
                <div className="font-medium">{row[0]}</div>
                <div className="text-[--color-muted] tabular">{row[1]}</div>
                <div className="flex items-center gap-2 tabular">
                  <span className="flex size-4 items-center justify-center rounded-full bg-[--color-accent-soft]">
                    <Check className="size-2.5 text-[--color-accent]" strokeWidth={3} />
                  </span>
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section border-t border-[--color-line]">
          <SectionLabel num="05">FAQ</SectionLabel>
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[36px]">{c.faqTitle}</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[--color-muted]">{c.faqSub}</p>

          <div className="mt-10 divide-y divide-[--color-line] border-y border-[--color-line]">
            {c.faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer items-start justify-between gap-4 py-5">
                  <span className="text-[15px] font-medium leading-snug">{f.q}</span>
                  <Plus className="mt-1 size-4 shrink-0 text-[--color-muted] transition-transform group-open:rotate-45" />
                </summary>
                <div className="pb-5 pr-8 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section border-t border-[--color-line] text-center">
          <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[52px]">
            {c.finalCta.replace(/\?$/, "")}{" "}
            <span className="font-serif italic font-normal text-[--color-accent]">?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] text-[--color-muted]">{c.finalCtaSub}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[--color-foreground] px-7 py-4 text-[14px] font-medium text-white transition hover:bg-black"
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
            <Link href={`/${locale}`} className="flex items-center gap-2 text-[13px] font-semibold">
              <span className="size-1.5 rounded-full bg-[--color-accent]" />
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
