import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Gift, Clock, Check, Plus, Quote } from "lucide-react";
import {
  CONTENT,
  REFERRAL_URLS,
  LAST_VERIFIED,
  LOCALES,
  STATS,
  TESTIMONIALS,
  PROOF_LABEL,
  type Locale,
} from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85";
const CTA_BG_IMG =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=85";

const ICON_MAP = { zap: Zap, shield: Shield, gift: Gift, clock: Clock } as const;

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const stats = STATS[locale];
  const testimonials = TESTIMONIALS[locale];
  const proof = PROOF_LABEL[locale];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[--color-border] bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-[15px] font-medium tracking-tight">
            teslahenvisning<span className="text-[--color-muted-strong]">.com</span>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-1 text-[13px] sm:flex">
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
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black transition hover:bg-white/90 sm:inline-flex"
            >
              {c.ctaPrimary.split(" ").slice(0, 2).join(" ")}
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO — asymmetric split */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 pt-12 pb-12 lg:grid-cols-12 lg:gap-12 lg:pt-20 lg:pb-16">
          {/* Left: copy */}
          <div className="lg:col-span-6 lg:pt-8">
            <div className="fade-up mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">
                {c.adLabel}
              </span>
              <span className="rounded-full border border-[--color-border] bg-[--color-background-elev] px-3 py-1 text-[11px] text-[--color-muted]">
                {c.heroEyebrow}
              </span>
            </div>

            <h1 className="fade-up-2 h-display">
              {c.heroTitle}{" "}
              <span className="block text-white/85">{c.heroTitleAccent}</span>
            </h1>

            <p className="fade-up-3 mt-7 max-w-xl text-base leading-relaxed text-[--color-muted] sm:text-lg">
              {c.heroSub}
            </p>

            <div className="fade-up-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-black transition hover:bg-white/90"
              >
                {c.ctaPrimary}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[--color-border-strong] bg-transparent px-7 py-4 text-[15px] font-medium text-white transition hover:bg-white/[0.05]"
              >
                {c.ctaSecondary}
              </a>
            </div>

            <div className="fade-up-4 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[--color-muted]">
              <span className="font-mono uppercase tracking-[0.14em]">
                <span className="mr-1.5 inline-block size-1.5 translate-y-[-1px] rounded-full bg-emerald-400 align-middle" />
                {c.verifiedPrefix} {LAST_VERIFIED}
              </span>
              {c.trustRow.slice(0, 2).map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="size-3" strokeWidth={2.5} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[--color-border] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={HERO_IMG}
                alt="Tesla"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                      Henvisning · Aktiv
                    </div>
                    <div className="mt-1 text-2xl font-medium text-white sm:text-3xl">
                      tesla.com / {locale}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-[--color-border] bg-[--color-background-elev]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-[--color-border] sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-10 text-center sm:px-4 sm:py-12">
              <div className="text-4xl font-medium tracking-tight sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[--color-muted]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="eyebrow">Fordeler</div>
              <h2 className="mt-5 h-section">{c.whyTitle}</h2>
              <p className="mt-6 max-w-md text-base text-[--color-muted] sm:text-lg">{c.whySub}</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-border] sm:grid-cols-2 lg:col-span-7">
              {c.benefits.map((b, i) => {
                const Icon = ICON_MAP[b.icon];
                return (
                  <div
                    key={i}
                    className="bg-[--color-background-elev] p-7 transition-colors hover:bg-[--color-background-elev-2]"
                  >
                    <Icon className="size-6 text-white" strokeWidth={1.4} />
                    <h3 className="mt-8 text-[17px] font-medium leading-snug">{b.t}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="border-t border-[--color-border] bg-[--color-background-elev] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-20 max-w-3xl">
            <div className="eyebrow">Prosess</div>
            <h2 className="mt-5 h-section">{c.howTitle}</h2>
            <p className="mt-6 max-w-xl text-base text-[--color-muted] sm:text-lg">{c.howSub}</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-[5.5rem] hidden h-px bg-gradient-to-r from-transparent via-[--color-border-strong] to-transparent sm:block" />
            <div className="relative grid gap-8 sm:grid-cols-3 sm:gap-12">
              {c.steps.map((s, i) => (
                <div key={i} className="relative">
                  <div className="relative z-10 mb-8 flex size-44 items-center justify-center rounded-full border border-[--color-border-strong] bg-[--color-background] mx-auto">
                    <span className="text-7xl font-medium tracking-tighter">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / PROOF */}
      <section className="border-t border-[--color-border] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="eyebrow">Kundereferanser</div>
            <h2 className="mt-5 h-section">{proof.title}</h2>
            <p className="mt-6 text-base text-[--color-muted] sm:text-lg">{proof.sub}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative flex flex-col rounded-2xl border border-[--color-border] bg-[--color-background-elev] p-8"
              >
                <Quote className="size-7 text-[--color-muted-strong]" strokeWidth={1.5} />
                <blockquote className="mt-6 text-[17px] leading-relaxed text-white/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-[--color-border] pt-6">
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-[13px] font-medium">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium">
                      {t.name} · {t.role}
                    </div>
                    <div className="text-[12px] text-[--color-muted]">{t.model}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-[--color-border] bg-[--color-background-elev] py-28 sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow">Sammenligning</div>
            <h2 className="mt-5 h-section">{c.comparisonTitle}</h2>
            <p className="mt-6 text-base text-[--color-muted] sm:text-lg">{c.comparisonSub}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-background]">
            <div className="grid grid-cols-3">
              {c.comparisonHeaders.map((h, i) => (
                <div
                  key={i}
                  className={`px-6 py-6 text-[13px] font-medium uppercase tracking-[0.12em] ${
                    i === 2 ? "bg-white text-black" : "text-[--color-muted]"
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-[--color-border]">
                <div className="px-6 py-6 text-[15px] font-medium">{row[0]}</div>
                <div className="px-6 py-6 text-[15px] text-[--color-muted]">{row[1]}</div>
                <div className="px-6 py-6 text-[15px] text-white">
                  <span className="inline-flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-white">
                      <Check className="size-3 text-black" strokeWidth={3} />
                    </span>
                    {row[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="border-t border-[--color-border] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow">Modeller</div>
              <h2 className="mt-5 h-section">{c.modelsTitle}</h2>
              <p className="mt-6 text-base text-[--color-muted] sm:text-lg">{c.modelsSub}</p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="hidden items-center gap-1.5 text-[14px] font-medium text-white hover:text-white/80 sm:inline-flex"
            >
              Se alle på tesla.com
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.models.map((m) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-background-elev] transition-all hover:-translate-y-1 hover:border-[--color-border-strong]"
              >
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-b from-white/[0.04] to-transparent">
                  <span className="text-[8rem] font-medium leading-none tracking-tighter text-white">
                    {m.id}
                  </span>
                </div>
                <div className="border-t border-[--color-border] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium tracking-tight">{m.name}</h3>
                    <span className="rounded-full border border-[--color-border] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[--color-muted]">
                      {m.tag}
                    </span>
                  </div>
                  <div className="mt-5 space-y-2.5 text-[13px]">
                    <div className="flex justify-between">
                      <span className="text-[--color-muted]">Pris</span>
                      <span>{m.priceFrom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[--color-muted]">Rekkevidde</span>
                      <span>{m.range}</span>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white/5 py-3 text-[13px] font-medium transition-colors group-hover:bg-white group-hover:text-black">
                    {c.modelCta}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[--color-border] bg-[--color-background-elev] py-28 sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="eyebrow">FAQ</div>
              <h2 className="mt-5 h-section">{c.faqTitle}</h2>
              <p className="mt-6 max-w-md text-base text-[--color-muted] sm:text-lg">{c.faqSub}</p>
            </div>
            <div className="divide-y divide-[--color-border] border-y border-[--color-border] lg:col-span-8">
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
        </div>
      </section>

      {/* FINAL CTA — full-bleed image */}
      <section className="relative overflow-hidden border-t border-[--color-border]">
        <Image src={CTA_BG_IMG} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-32 text-center sm:py-44">
          <h2 className="mx-auto h-display max-w-4xl">{c.finalCta}</h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/80">{c.finalCtaSub}</p>
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
            <span className="inline-flex items-center gap-1.5 text-[11px] text-white/65">
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
