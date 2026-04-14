import { CONTENT, REFERRAL_URLS, LAST_VERIFIED, type Locale } from "@/lib/content";
import { CTAButton } from "./CTAButton";
import { Header } from "./Header";
import {
  WhySection,
  HowSection,
  ComparisonSection,
  ModelsSection,
  FaqSection,
  FinalCTA,
  Footer,
} from "./Sections";
import { Check } from "lucide-react";

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];

  return (
    <>
      <Header current={locale} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mesh" />
        <div className="grid-lines" />
        <div className="noise" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="fade-up mb-6 inline-flex items-center gap-2">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-300">
              {c.adLabel}
            </span>
            <span className="rounded-full border border-[--color-border] bg-[--color-background-elev]/80 px-3 py-1 text-xs text-[--color-muted] backdrop-blur">
              {c.heroEyebrow}
            </span>
          </div>

          <h1 className="fade-up-2 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            {c.heroTitle}{" "}
            <span className="gradient-text">{c.heroTitleAccent}</span>
          </h1>

          <p className="fade-up-3 mt-6 max-w-2xl text-lg leading-relaxed text-[--color-muted] sm:text-xl">
            {c.heroSub}
          </p>

          <div className="fade-up-4 mt-10 flex flex-wrap items-center gap-4">
            <CTAButton href={url} label={c.ctaPrimary} secured={c.secured} />
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-background-elev]/60 px-5 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-[--color-border-strong] hover:bg-[--color-background-elev]"
            >
              {c.ctaSecondary}
            </a>
          </div>

          <div className="fade-up-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[--color-muted]">
            <div className="flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              {c.verifiedPrefix} {LAST_VERIFIED}
            </div>
            {c.trustRow.map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Check className="size-3 text-[--color-brand-3]" strokeWidth={2.5} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhySection c={c} />
      <HowSection c={c} />
      <ComparisonSection c={c} />
      <ModelsSection c={c} url={url} />
      <FaqSection c={c} />
      <FinalCTA c={c} url={url} />
      <Footer c={c} />
    </>
  );
}
