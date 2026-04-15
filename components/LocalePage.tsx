import Image from "next/image";
import Link from "next/link";
import {
  CONTENT,
  REFERRAL_URLS,
  LAST_VERIFIED,
  LOCALES,
  BONUS_INFO,
  GUIDE,
  ABOUT,
  type Locale,
} from "@/lib/content";
import { JsonLd } from "./JsonLd";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=90";

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const bonusInfo = BONUS_INFO[locale];
  const guide = GUIDE[locale];
  const about = ABOUT[locale];

  return (
    <>
      <JsonLd locale={locale} />

      {/* MINIMAL HEADER — absolute on hero */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-6 sm:px-10">
          <Link href={`/${locale}`} className="text-[14px] font-semibold tracking-[0.04em] text-white">
            teslahenvisning
          </Link>
          <nav className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.095em] text-white">
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

      {/* HERO — full viewport, Tesla-style */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <Image src={HERO_IMG} alt="Tesla" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 scrim-top" />

        <div className="relative z-10 flex h-full flex-col items-center">
          {/* Title block top */}
          <div className="fade pt-[18vh] text-center text-white">
            <h1 className="h-hero">{c.heroTitle}</h1>
            <p className="mt-2 sub-hero !text-white/85">{c.heroTitleAccent}</p>
          </div>

          {/* CTA block bottom */}
          <div className="mt-auto pb-14">
            <div className="fade-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="tbtn tbtn-fill"
              >
                {c.ctaPrimary}
              </a>
              <a href="#bonus" className="tbtn tbtn-ghost">
                {c.ctaSecondary}
              </a>
            </div>
            <div className="fade-3 mt-4 text-center text-[11px] uppercase tracking-[0.14em] text-white/65">
              <span className="rounded-sm bg-amber-400/90 px-1.5 py-0.5 text-[10px] font-semibold text-amber-950">{c.adLabel}</span>
              <span className="ml-3 tabular">{c.verifiedPrefix} {LAST_VERIFIED}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS — light, centered, no cards */}
      <section id="bonus" className="px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{bonusInfo.title}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-[--color-muted]">{bonusInfo.intro}</p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <dl className="divide-y divide-black/8">
            {bonusInfo.points.map((p) => (
              <div key={p.k} className="grid grid-cols-[11rem_1fr] gap-6 py-5 text-[14px] sm:grid-cols-[14rem_1fr]">
                <dt className="text-[--color-muted]">{p.k}</dt>
                <dd className="font-medium">{p.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center text-[13px] text-[--color-muted]">{bonusInfo.note}</p>
        </div>

        <div className="mt-14 text-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="tbtn tbtn-fill"
          >
            {c.ctaPrimary}
          </a>
        </div>
      </section>

      {/* HOW — three columns, no cards */}
      <section className="bg-[#f4f4f4] px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{c.howTitle}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-[--color-muted]">{c.howSub}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-3 sm:gap-10">
          {c.steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto text-[3rem] font-semibold leading-none tabular">0{i + 1}</div>
              <h3 className="mt-8 text-[18px] font-medium">{s.t}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-[--color-muted]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODELS — clean table-style list */}
      <section className="px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{c.modelsTitle}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-[--color-muted]">{c.modelsSub}</p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          {c.models.map((m) => (
            <a
              key={m.id}
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-6 border-b border-black/8 py-6 sm:grid-cols-[4rem_1fr_auto_auto]"
            >
              <div className="text-[2rem] font-semibold leading-none tabular">{m.id}</div>
              <div>
                <div className="text-[17px] font-medium">{m.name}</div>
                <div className="mt-0.5 text-[12px] text-[--color-muted-2]">{m.tag}</div>
              </div>
              <div className="hidden text-right text-[13px] text-[--color-muted] tabular sm:block">
                <div>{m.priceFrom}</div>
                <div>{m.range}</div>
              </div>
              <span className="text-[--color-muted-2] transition group-hover:translate-x-1 group-hover:text-[--color-ink]" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* GUIDE */}
      <section className="bg-[#f4f4f4] px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{guide.title}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-[--color-muted]">{guide.intro}</p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl space-y-12">
          {guide.items.map((g, i) => (
            <article key={i} className="grid gap-3 sm:grid-cols-[4rem_1fr] sm:gap-8">
              <div className="text-[13px] font-medium uppercase tracking-wider text-[--color-muted-2] tabular">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-[19px] font-semibold tracking-tight">{g.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[--color-muted]">{g.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{c.comparisonTitle}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-[--color-muted]">{c.comparisonSub}</p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="grid grid-cols-3 border-b border-black/12 pb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[--color-muted]">
            <div></div>
            <div>{c.comparisonHeaders[1]}</div>
            <div className="text-[--color-ink]">{c.comparisonHeaders[2]}</div>
          </div>
          {c.comparisonRows.map((row) => (
            <div key={row[0]} className="grid grid-cols-3 border-b border-black/6 py-5 text-[14px]">
              <div className="font-medium">{row[0]}</div>
              <div className="text-[--color-muted] tabular">{row[1]}</div>
              <div className="tabular font-medium">{row[2]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#f4f4f4] px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{about.title}</h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-[--color-muted]">{about.body}</p>
        </div>
        <ul className="mx-auto mt-12 max-w-xl space-y-3 text-center">
          {about.points.map((p, i) => (
            <li key={i} className="text-[14px] text-[--color-muted]">
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{c.faqTitle}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-[--color-muted]">{c.faqSub}</p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          {c.faqs.map((f, i) => (
            <details key={i} className="group border-b border-black/8">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                <span className="text-[15px] font-medium leading-snug">{f.q}</span>
                <span className="mt-1 text-[--color-muted-2] transition group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="pb-5 pr-8 text-[14px] leading-[1.7] text-[--color-muted]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 text-center sm:px-10 sm:py-36">
        <h2 className="mx-auto h-section max-w-3xl">{c.finalCta}</h2>
        <p className="mx-auto mt-6 max-w-md text-[17px] leading-[1.6] text-[--color-muted]">{c.finalCtaSub}</p>
        <div className="mt-12">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="tbtn tbtn-fill"
          >
            {c.finalCtaButton}
          </a>
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-[--color-muted-2] tabular">
          {c.verifiedPrefix} {LAST_VERIFIED}
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f4f4f4] px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <Link href={`/${locale}`} className="text-[13px] font-semibold">teslahenvisning.com</Link>
            <div className="flex gap-6 text-[12px]">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={l === locale ? "text-[--color-ink] font-medium" : "text-[--color-muted] hover:text-[--color-ink]"}
                >
                  {CONTENT[l].localeName}
                </Link>
              ))}
            </div>
          </div>
          <p className="border-t border-black/8 pt-6 text-[11px] leading-relaxed text-[--color-muted-2]">
            {c.disclaimer}
          </p>
          <p className="mt-3 text-[11px] text-[--color-muted-2]">© {new Date().getFullYear()} teslahenvisning.com</p>
        </div>
      </footer>
    </>
  );
}
