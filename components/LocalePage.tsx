import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
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
import { JsonLd } from "./JsonLd";

const IMG = {
  hero: "https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=2400&q=85",
  modelY: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1800&q=85",
  model3: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1800&q=85",
  modelS: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1800&q=85",
  modelX: "https://images.unsplash.com/photo-1623006772851-a8bb52cdf0eb?auto=format&fit=crop&w=1800&q=85",
  finalCta: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=2400&q=85",
};

type Card = {
  image: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  secondaryLabel: string;
  href: string;
  textColor?: "light" | "dark";
};

function MediaCard({ image, title, subtitle, primaryLabel, secondaryLabel, href, textColor = "light", height = "h-[640px]" }: Card & { height?: string }) {
  const text = textColor === "light" ? "text-white" : "text-[--color-foreground]";
  const sub = textColor === "light" ? "text-white/85" : "text-[--color-muted]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative flex w-full overflow-hidden rounded-2xl ${height}`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 720px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
      {textColor === "light" && <div className="absolute inset-0 scrim-bottom" />}

      <div className="relative z-10 flex w-full flex-col items-center px-6 pt-12">
        <div className={`text-center ${text}`}>
          <h2 className="t-title">{title}</h2>
          {subtitle && <p className={`mt-2 t-sub ${sub}`}>{subtitle}</p>}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-12 z-10 flex justify-center px-6">
        <div className="flex w-full max-w-[28rem] flex-col gap-3 sm:flex-row">
          <span className="t-btn t-btn-dark flex-1">{primaryLabel}</span>
          <span className="t-btn t-btn-light flex-1">{secondaryLabel}</span>
        </div>
      </div>
    </a>
  );
}

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const stats = STATS[locale];
  const testimonials = TESTIMONIALS[locale];
  const proof = PROOF_LABEL[locale];

  return (
    <>
      <JsonLd locale={locale} />
      {/* HEADER — Tesla.com floating, transparent */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-8 py-5">
          <Link href={`/${locale}`} className="text-[14px] font-semibold tracking-[0.04em] text-white drop-shadow-sm">
            teslahenvisning
          </Link>
          <nav className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  l === locale ? "bg-white/15 backdrop-blur" : "hover:bg-white/10"
                }`}
              >
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
        <Image src={IMG.hero} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 scrim-bottom" />

        <div className="relative z-10 flex h-full flex-col items-center px-6 pt-[18vh] pb-16">
          <div className="fade-up text-center text-white">
            <h1 className="t-title">{c.heroTitle}</h1>
            <p className="mt-2 t-sub text-white/85">{c.heroTitleAccent}</p>
          </div>

          <div className="fade-up-2 mt-auto flex w-full max-w-[28rem] flex-col gap-3 sm:flex-row">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="t-btn t-btn-dark flex-1"
            >
              {c.ctaPrimary}
            </a>
            <a href="#how" className="t-btn t-btn-light flex-1">
              {c.ctaSecondary}
            </a>
          </div>

          {/* Disclosure — small, subtle, inline at bottom */}
          <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-white/70">
            <span className="rounded-full border border-white/40 px-2 py-0.5">{c.adLabel}</span>
            <span>{c.verifiedPrefix} {LAST_VERIFIED}</span>
          </div>
        </div>
      </section>

      {/* MODEL CARDS — 2x2 like tesla.com */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
          <MediaCard
            image={IMG.modelY}
            title={c.models[1].name}
            subtitle={`${c.models[1].priceFrom} · ${c.models[1].range}`}
            primaryLabel={c.modelCta}
            secondaryLabel="Detaljer"
            href={url}
          />
          <MediaCard
            image={IMG.model3}
            title={c.models[0].name}
            subtitle={`${c.models[0].priceFrom} · ${c.models[0].range}`}
            primaryLabel={c.modelCta}
            secondaryLabel="Detaljer"
            href={url}
          />
        </div>
      </section>

      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
          <MediaCard
            image={IMG.modelS}
            title={c.models[2].name}
            subtitle={`${c.models[2].priceFrom} · ${c.models[2].range}`}
            primaryLabel={c.modelCta}
            secondaryLabel="Detaljer"
            href={url}
          />
          <MediaCard
            image={IMG.modelX}
            title={c.models[3].name}
            subtitle={`${c.models[3].priceFrom} · ${c.models[3].range}`}
            primaryLabel={c.modelCta}
            secondaryLabel="Detaljer"
            href={url}
          />
        </div>
      </section>

      {/* HOW IT WORKS — clean white card, tesla.com style */}
      <section id="how" className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="rounded-2xl bg-white px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="t-title">{c.howTitle}</h2>
            <p className="mt-3 t-sub text-[--color-muted]">{c.howSub}</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[--color-foreground] text-[14px] font-medium text-white">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-[17px] font-medium">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="rounded-2xl bg-white px-6 py-14 sm:px-12">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-[2rem] font-medium tracking-tight sm:text-[2.5rem]">{s.value}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.08em] text-[--color-muted]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="rounded-2xl bg-white px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="t-title">{proof.title}</h2>
            <p className="mt-3 t-sub text-[--color-muted]">{proof.sub}</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl bg-[--color-surface] p-8">
                <blockquote className="text-[15px] leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-[--color-foreground] text-[12px] font-medium text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium">{t.name} · {t.role}</div>
                    <div className="text-[12px] text-[--color-muted]">{t.model}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="rounded-2xl bg-white px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="t-title">{c.comparisonTitle}</h2>
            <p className="mt-3 t-sub text-[--color-muted]">{c.comparisonSub}</p>
          </div>
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl">
            <div className="grid grid-cols-3">
              <div></div>
              <div className="px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-[--color-muted]">{c.comparisonHeaders[1]}</div>
              <div className="rounded-t-lg bg-[--color-foreground] px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-white">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-[--color-line]">
                <div className="px-6 py-5 text-[14px] font-medium">{row[0]}</div>
                <div className="px-6 py-5 text-center text-[14px] text-[--color-muted]">{row[1]}</div>
                <div className="bg-[--color-surface] px-6 py-5 text-center text-[14px] font-medium">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="rounded-2xl bg-white px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="t-title">{c.faqTitle}</h2>
              <p className="mt-3 t-sub text-[--color-muted]">{c.faqSub}</p>
            </div>
            <div className="mt-12">
              {c.faqs.map((f, i) => (
                <details key={i} className="group border-b border-[--color-line]">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 py-5">
                    <span className="text-[16px] font-medium">{f.q}</span>
                    <Plus className="size-4 shrink-0 text-[--color-muted] transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="pb-5 pr-8 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <MediaCard
          image={IMG.finalCta}
          title={c.finalCta}
          subtitle={c.finalCtaSub}
          primaryLabel={c.finalCtaButton}
          secondaryLabel={c.ctaSecondary}
          href={url}
          height="h-[640px]"
        />
      </section>

      {/* FOOTER */}
      <footer className="px-2 pt-2 pb-2 sm:px-3 sm:pt-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-12 sm:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8">
            <Link href={`/${locale}`} className="text-[14px] font-semibold tracking-tight">
              teslahenvisning.com
            </Link>
            <div className="flex gap-6 text-[12px] uppercase tracking-[0.08em]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={l === locale ? "text-[--color-foreground] font-medium" : "text-[--color-muted] hover:text-[--color-foreground]"}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[--color-line] pt-6 text-[11px] leading-relaxed text-[--color-muted-2]">
            <p className="max-w-4xl">{c.disclaimer}</p>
            <p className="mt-3">© {new Date().getFullYear()} teslahenvisning.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
