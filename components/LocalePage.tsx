import Image from "next/image";
import Link from "next/link";
import {
  CONTENT,
  REFERRAL_URLS,
  LAST_VERIFIED,
  ACTIVE_SINCE,
  LOCALES,
  STATS,
  NAV,
  BONUS_INFO,
  GUIDE,
  ABOUT,
  RESOURCES,
  type Locale,
} from "@/lib/content";
import { JsonLd } from "./JsonLd";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=90";

const OFFER: Record<Locale, { k: string; v: string; foot: string }> = {
  no: { k: "Gjeldende bonus", v: "Gratis Supercharger-kilometer", foot: "Tesla publiserer ikke beløpet offentlig. Vises i bestillingsflyten." },
  dk: { k: "Aktuel bonus", v: "Gratis Supercharger-kilometer", foot: "Tesla offentliggør ikke beløbet. Vises i bestillingsflowet." },
  se: { k: "Aktuell bonus", v: "Gratis Supercharger-kilometer", foot: "Tesla offentliggör inte beloppet. Visas i beställningsflödet." },
};

const REASSURANCE: Record<Locale, string> = {
  no: "Du sendes til tesla.com/no_no. Henvisningen registreres i URL-en.",
  dk: "Du sendes til tesla.com/da_dk. Henvisningen registreres i URL'en.",
  se: "Du skickas till tesla.com/sv_se. Värva vän registreras i URL:en.",
};

const SECTION_LABELS: Record<Locale, Record<string, string>> = {
  no: { how: "Prosess", models: "Modeller", bonus: "Bonus", guide: "Lokal guide", about: "Om", resources: "Ressurser", faq: "FAQ", why: "Fordeler" },
  dk: { how: "Proces", models: "Modeller", bonus: "Bonus", guide: "Lokal guide", about: "Om", resources: "Ressourcer", faq: "FAQ", why: "Fordele" },
  se: { how: "Process", models: "Modeller", bonus: "Bonus", guide: "Lokal guide", about: "Om", resources: "Resurser", faq: "FAQ", why: "Fördelar" },
};

export function LocalePage({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const stats = STATS[locale];
  const offer = OFFER[locale];
  const reassurance = REASSURANCE[locale];
  const nav = NAV[locale];
  const bonusInfo = BONUS_INFO[locale];
  const guide = GUIDE[locale];
  const about = ABOUT[locale];
  const resources = RESOURCES[locale];
  const L = SECTION_LABELS[locale];

  return (
    <>
      <JsonLd locale={locale} />

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-[--color-ink] text-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-2 text-[11px] sm:px-10">
          <div className="flex items-center gap-2 text-white/80">
            <span className="live" />
            <span className="hidden sm:inline">Aktiv henvisning · verifisert {LAST_VERIFIED}</span>
            <span className="sm:hidden">Verifisert {LAST_VERIFIED}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-white/60 sm:inline">Aktiv siden {ACTIVE_SINCE}</span>
            <span className="rounded-sm bg-amber-400/90 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-950">
              {c.adLabel}
            </span>
          </div>
        </div>
      </div>

      {/* HEADER NAV */}
      <header className="sticky top-0 z-50 border-b border-[--color-line] bg-[--color-bg]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-4 sm:px-10">
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5 text-[15px] font-semibold tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-full bg-[--color-ink] text-[9px] font-bold text-white">TH</span>
            teslahenvisning
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] text-[--color-muted] lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[--color-ink] transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-0.5 rounded-full border border-[--color-line] p-0.5 text-[11px] sm:flex">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`rounded-full px-2.5 py-1 transition ${
                    l === locale ? "bg-[--color-ink] text-white" : "text-[--color-muted] hover:text-[--color-ink]"
                  }`}
                >
                  {CONTENT[l].localeName.slice(0, 2).toUpperCase()}
                </Link>
              ))}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[--color-ink] px-4 text-[12px] font-medium text-white transition hover:opacity-90"
            >
              {c.ctaPrimary} <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO — asymmetric with context column */}
      <section className="border-b border-[--color-line]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="fade text-[12px] uppercase tracking-[0.14em] text-[--color-muted]">
              {c.heroEyebrow}
            </div>
            <h1 className="fade-2 mt-5 display">
              {c.heroTitle} {c.heroTitleAccent.replace(/[.]$/, "")}.
            </h1>
            <p className="fade-3 mt-7 max-w-xl text-[17px] leading-[1.55] text-[--color-muted] sm:text-[18px]">
              {c.heroSub}
            </p>
            <div className="fade-4 mt-9 flex flex-wrap items-center gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-primary"
              >
                {c.ctaPrimary} <span aria-hidden>→</span>
              </a>
              <a href="#how" className="text-[14px] font-medium text-[--color-muted] hover:text-[--color-ink]">
                {c.ctaSecondary} →
              </a>
            </div>
            <div className="fade-4 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[--color-muted]">
              {c.trustRow.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="text-[--color-green]">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — bonus card */}
          <aside className="lg:col-span-5">
            <div className="fade-2 rounded-2xl bg-white p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[--color-muted]">
                  {offer.k}
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[--color-green]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[--color-green]">
                  <span className="size-1 rounded-full bg-[--color-green]" /> Aktiv
                </div>
              </div>
              <div className="mt-3 text-[1.625rem] font-semibold leading-tight tracking-tight">
                {offer.v}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[--color-muted]">
                {offer.foot}
              </p>
              <div className="mt-6 border-t border-[--color-line] pt-5">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.value}>
                      <div className="text-[1.5rem] font-semibold tabular leading-none">{s.value}</div>
                      <div className="mt-1.5 text-[11px] text-[--color-muted]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[--color-ink] py-3 text-[13px] font-medium text-white transition hover:opacity-90"
              >
                {c.ctaPrimary} <span aria-hidden>→</span>
              </a>
            </div>
          </aside>
        </div>

        {/* Contained hero image */}
        <div className="border-t border-[--color-line] bg-[--color-bg]">
          <div className="mx-auto max-w-[1280px] px-6 pb-16 sm:px-10">
            <div className="relative -mt-px aspect-[21/9] overflow-hidden rounded-b-2xl">
              <Image src={HERO_IMG} alt="Tesla" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-6 sm:px-10">
        {/* HOW */}
        <section id="how" className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="label">{L.how}</div>
              <h2 className="mt-4 h2">{c.howTitle}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[--color-muted]">{c.howSub}</p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {c.steps.map((s, i) => (
                <div key={i} className="flex gap-6 rounded-2xl bg-white p-7">
                  <div className="w-10 shrink-0 text-[2rem] font-semibold leading-none tabular text-[--color-muted-2]">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="h3">{s.t}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODELS */}
        <section id="models" className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="label">{L.models}</div>
              <h2 className="mt-4 h2">{c.modelsTitle}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[--color-muted]">{c.modelsSub}</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-[13px] font-medium hover:text-[--color-muted]">
              Se alle på tesla.com →
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.models.map((m) => (
              <a
                key={m.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col rounded-2xl bg-white p-6 transition hover:-translate-y-0.5"
              >
                <div className="flex h-24 items-start justify-between">
                  <span className="text-[4.5rem] font-semibold leading-[0.8] tabular tracking-tighter">{m.id}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[--color-muted]">{m.tag}</span>
                </div>
                <h3 className="mt-4 h3">{m.name}</h3>
                <div className="mt-2 space-y-0.5 text-[13px] text-[--color-muted] tabular">
                  <div>{m.priceFrom}</div>
                  <div>{m.range}</div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-[12px] font-medium">
                  {c.modelCta} <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* BONUS — detailed explainer */}
        <section id="bonus" className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="label">{L.bonus}</div>
              <h2 className="mt-4 h2">{bonusInfo.title}</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[--color-muted]">{bonusInfo.intro}</p>
              <p className="mt-5 rounded-lg border-l-2 border-[--color-ink] bg-white/60 px-4 py-3 text-[13px] leading-relaxed text-[--color-muted]">
                {bonusInfo.note}
              </p>
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-[--color-line] rounded-2xl bg-white">
                {bonusInfo.points.map((p) => (
                  <div key={p.k} className="grid grid-cols-[10rem_1fr] gap-4 p-5 sm:grid-cols-[12rem_1fr] sm:p-6">
                    <dt className="text-[12px] uppercase tracking-[0.1em] text-[--color-muted]">{p.k}</dt>
                    <dd className="text-[14px] leading-relaxed">{p.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="label">{L.why}</div>
              <h2 className="mt-4 h2">{c.whyTitle}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[--color-muted]">{c.whySub}</p>
            </div>
            <div className="lg:col-span-8 grid gap-3 sm:grid-cols-2">
              {c.benefits.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white p-7">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[--color-green]">
                    <span className="size-1.5 rounded-full bg-[--color-green]" /> Inkludert
                  </div>
                  <h3 className="mt-4 h3">{b.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDE — local market */}
        <section id="guide" className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="mb-14 max-w-2xl">
            <div className="label">{L.guide}</div>
            <h2 className="mt-4 h2">{guide.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[--color-muted]">{guide.intro}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {guide.items.map((g, i) => (
              <article key={i} className="rounded-2xl bg-white p-7">
                <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-[--color-muted] tabular">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{g.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[--color-muted]">{g.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="mx-auto max-w-2xl">
            <div className="label">Sammenligning</div>
            <h2 className="mt-4 h2">{c.comparisonTitle}</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[--color-muted]">{c.comparisonSub}</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-white">
            <div className="grid grid-cols-3 border-b border-[--color-line] px-8 py-5 text-[11px] font-medium uppercase tracking-[0.1em] text-[--color-muted]">
              <div></div>
              <div>{c.comparisonHeaders[1]}</div>
              <div className="text-[--color-ink]">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-center border-b border-[--color-line] px-8 py-4 text-[14px] last:border-b-0">
                <div className="font-medium">{row[0]}</div>
                <div className="text-[--color-muted] tabular">{row[1]}</div>
                <div className="tabular font-medium">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="label">{L.about}</div>
              <h2 className="mt-4 h2">{about.title}</h2>
              <p className="mt-5 text-[15px] leading-[1.65] text-[--color-muted]">{about.body}</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {about.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 rounded-2xl bg-white p-5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[--color-ink] text-[10px] font-semibold text-white tabular">
                      {i + 1}
                    </span>
                    <span className="text-[14px] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="label">{L.faq}</div>
              <h2 className="mt-4 h2">{c.faqTitle}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[--color-muted]">{c.faqSub}</p>
            </div>
            <div className="lg:col-span-8 overflow-hidden rounded-2xl bg-white">
              {c.faqs.map((f, i) => (
                <details key={i} className="group border-b border-[--color-line] last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-7 py-5">
                    <span className="text-[15px] font-medium leading-snug">{f.q}</span>
                    <span className="mt-1 text-[--color-muted-2] transition group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="px-7 pb-5 text-[14px] leading-relaxed text-[--color-muted]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="border-t border-[--color-line] py-24 sm:py-32">
          <div className="max-w-xl">
            <div className="label">{L.resources}</div>
            <h2 className="mt-4 h2">{resources.title}</h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {resources.links.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 transition hover:-translate-y-0.5"
              >
                <div>
                  <div className="text-[15px] font-semibold">{r.label}</div>
                  <div className="mt-1 text-[13px] text-[--color-muted]">{r.desc}</div>
                </div>
                <div className="mt-6 text-[12px] font-medium text-[--color-muted] transition group-hover:text-[--color-ink]">
                  Besøk →
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* FINAL CTA — dark band */}
      <section className="dark-band">
        <div className="mx-auto max-w-[1280px] px-6 py-28 text-center sm:px-10 sm:py-36">
          <h2 className="mx-auto max-w-4xl display">{c.finalCta}</h2>
          <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-white/70">{c.finalCtaSub}</p>
          <div className="mt-12 inline-flex flex-col items-center gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-9 text-[15px] font-medium text-[--color-ink] transition hover:scale-[1.02]"
            >
              {c.finalCtaButton} <span aria-hidden>→</span>
            </a>
            <span className="max-w-sm text-[12px] leading-relaxed text-white/55">{reassurance}</span>
          </div>
        </div>
      </section>

      {/* FOOTER — substantial */}
      <footer className="dark-band border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10">
          <div className="grid gap-10 pb-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-white">
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-[9px] font-bold text-[--color-ink]">TH</span>
                teslahenvisning.com
              </Link>
              <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/60">
                Personlig Tesla-henvisningslenke for Norge, Danmark og Sverige. Aktiv siden {ACTIVE_SINCE}.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">Navigasjon</div>
              <ul className="mt-4 space-y-2 text-[13px]">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-white/70 hover:text-white">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">Språk</div>
              <ul className="mt-4 space-y-2 text-[13px]">
                {LOCALES.map((l) => (
                  <li key={l}>
                    <Link href={`/${l}`} className={l === locale ? "text-white font-medium" : "text-white/70 hover:text-white"}>
                      {CONTENT[l].localeName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="max-w-4xl text-[11px] leading-relaxed text-white/45">{c.disclaimer}</p>
            <p className="mt-3 text-[11px] text-white/45">
              © {new Date().getFullYear()} teslahenvisning.com · Aktiv siden {ACTIVE_SINCE} · Sist verifisert {LAST_VERIFIED}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
