import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Plus } from "lucide-react";
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

const IMG = {
  hero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=2400&q=85",
  modelY: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85",
  model3: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=1600&q=85",
  modelS: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&w=1600&q=85",
  modelX: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=85",
  charge: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=85",
};

type CardProps = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  textColor?: "light" | "dark";
  align?: "top" | "bottom";
  height?: string;
};

function HeroCard({
  image,
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  textColor = "light",
  align = "top",
  height = "h-[80vh] min-h-[600px]",
}: CardProps) {
  const text = textColor === "light" ? "text-white" : "text-[--color-foreground]";
  const subText = textColor === "light" ? "text-white/85" : "text-[--color-muted]";

  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      {textColor === "light" && <div className="absolute inset-0 scrim-bottom" />}

      <div
        className={`relative z-10 flex h-full flex-col items-center px-6 ${
          align === "top" ? "pt-24 sm:pt-32" : "pb-32 justify-end"
        }`}
      >
        <div className={`fade-up text-center ${text}`}>
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="rounded-full bg-amber-400/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="card-title">{title}</h1>
          {subtitle && <p className={`mt-2 card-sub ${subText}`}>{subtitle}</p>}
        </div>

        <div className="fade-up-2 mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:max-w-xl">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-dark inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[14px] font-medium tracking-wide uppercase transition"
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="btn-light inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[14px] font-medium tracking-wide uppercase transition"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>

      {align === "top" && (
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <ChevronDown className="size-7 text-white/80 animate-bounce" />
        </div>
      )}
    </section>
  );
}

function ProductCard({
  image,
  title,
  subtitle,
  primary,
  secondary,
  textColor = "light",
  align = "top",
}: CardProps) {
  const text = textColor === "light" ? "text-white" : "text-[--color-foreground]";
  const subText = textColor === "light" ? "text-white/85" : "text-[--color-muted]";

  return (
    <a
      href={primary.href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group relative flex h-[560px] w-full overflow-hidden rounded-2xl"
    >
      <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      {textColor === "light" && <div className="absolute inset-0 scrim-bottom" />}

      <div
        className={`relative z-10 flex h-full w-full flex-col items-center px-6 ${
          align === "top" ? "pt-12" : "pb-12 justify-end"
        }`}
      >
        <div className={`text-center ${text}`}>
          <h2 className="card-title">{title}</h2>
          {subtitle && <p className={`mt-1.5 card-sub ${subText}`}>{subtitle}</p>}
        </div>

        <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
          <span
            className="btn-dark inline-flex h-11 flex-1 items-center justify-center rounded-full px-5 text-[13px] font-medium tracking-wide uppercase"
          >
            {primary.label}
          </span>
          {secondary && (
            <span className="btn-light inline-flex h-11 flex-1 items-center justify-center rounded-full px-5 text-[13px] font-medium tracking-wide uppercase">
              {secondary.label}
            </span>
          )}
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
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
          <Link href={`/${locale}`} className="text-[15px] font-semibold tracking-tight text-white drop-shadow-sm">
            teslahenvisning
          </Link>
          <nav className="flex items-center gap-1 text-[12px] font-medium uppercase tracking-wider text-white drop-shadow">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  l === locale ? "bg-white/20 backdrop-blur" : "hover:bg-white/10"
                }`}
              >
                {CONTENT[l].localeName}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <HeroCard
        image={IMG.hero}
        eyebrow={c.adLabel}
        title={c.heroTitle}
        subtitle={c.heroSub}
        primary={{ label: c.ctaPrimary, href: url }}
        secondary={{ label: c.ctaSecondary, href: "#how" }}
        textColor="light"
        align="top"
      />

      {/* PRODUCT CARDS — 2 col */}
      <section className="px-2 py-2 sm:px-3 sm:py-3">
        <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2">
          <ProductCard
            image={IMG.modelY}
            title={c.models[1].name}
            subtitle={c.models[1].priceFrom + " · " + c.models[1].range}
            primary={{ label: c.modelCta, href: url }}
            secondary={{ label: "Detaljer", href: url }}
            textColor="light"
            align="top"
          />
          <ProductCard
            image={IMG.model3}
            title={c.models[0].name}
            subtitle={c.models[0].priceFrom + " · " + c.models[0].range}
            primary={{ label: c.modelCta, href: url }}
            secondary={{ label: "Detaljer", href: url }}
            textColor="light"
            align="top"
          />
        </div>
      </section>

      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2">
          <ProductCard
            image={IMG.modelS}
            title={c.models[2].name}
            subtitle={c.models[2].priceFrom + " · " + c.models[2].range}
            primary={{ label: c.modelCta, href: url }}
            secondary={{ label: "Detaljer", href: url }}
            textColor="light"
            align="top"
          />
          <ProductCard
            image={IMG.modelX}
            title={c.models[3].name}
            subtitle={c.models[3].priceFrom + " · " + c.models[3].range}
            primary={{ label: c.modelCta, href: url }}
            secondary={{ label: "Detaljer", href: url }}
            textColor="light"
            align="top"
          />
        </div>
      </section>

      {/* HOW IT WORKS — three light cards */}
      <section id="how" className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="card-title text-[--color-foreground]">{c.howTitle}</h2>
            <p className="mt-3 text-[15px] text-[--color-muted]">{c.howSub}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <div key={i} className="rounded-xl bg-[--color-background] p-6">
                <div className="text-5xl font-medium tracking-tighter text-[--color-foreground]">
                  0{i + 1}
                </div>
                <h3 className="mt-6 text-[18px] font-medium">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[--color-muted]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — Tesla map-style row */}
      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-12 sm:px-10 sm:py-14">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-medium tracking-tight sm:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-[13px] text-[--color-muted]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="card-title">{c.comparisonTitle}</h2>
            <p className="mt-3 text-[15px] text-[--color-muted]">{c.comparisonSub}</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl bg-[--color-background]">
            <div className="grid grid-cols-3">
              <div className="px-5 py-4 text-[12px] font-medium uppercase tracking-wider text-[--color-muted]"></div>
              <div className="px-5 py-4 text-[12px] font-medium uppercase tracking-wider text-[--color-muted]">{c.comparisonHeaders[1]}</div>
              <div className="bg-[--color-foreground] px-5 py-4 text-[12px] font-medium uppercase tracking-wider text-white">{c.comparisonHeaders[2]}</div>
            </div>
            {c.comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-black/5">
                <div className="px-5 py-4 text-[14px] font-medium">{row[0]}</div>
                <div className="px-5 py-4 text-[14px] text-[--color-muted]">{row[1]}</div>
                <div className="bg-[--color-foreground]/[0.04] px-5 py-4 text-[14px] font-medium">
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="card-title">{proof.title}</h2>
            <p className="mt-3 text-[15px] text-[--color-muted]">{proof.sub}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-xl bg-[--color-background] p-7">
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

      {/* FAQ */}
      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="card-title">{c.faqTitle}</h2>
              <p className="mt-3 text-[15px] text-[--color-muted]">{c.faqSub}</p>
            </div>
            <div className="mt-12">
              {c.faqs.map((f, i) => (
                <details key={i} className="group border-b border-black/8">
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

      {/* FINAL CTA — Tesla-style image card */}
      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          <Image src={IMG.hero} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 scrim-bottom" />
          <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-white">
            <h2 className="card-title text-center">{c.finalCta}</h2>
            <p className="mt-3 max-w-md text-center card-sub text-white/85">{c.finalCtaSub}</p>
            <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-dark inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[14px] font-medium uppercase tracking-wide transition"
              >
                {c.finalCtaButton}
              </a>
              <a
                href="#how"
                className="btn-light inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[14px] font-medium uppercase tracking-wide transition"
              >
                {c.ctaSecondary}
              </a>
            </div>
            <div className="mt-5 text-[11px] uppercase tracking-wider text-white/65">
              <span className="mr-1.5 inline-block size-1.5 translate-y-[-1px] rounded-full bg-emerald-400 align-middle" />
              {c.verifiedPrefix} {LAST_VERIFIED}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="rounded-2xl bg-white px-6 py-10 sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-6 pb-8">
            <Link href={`/${locale}`} className="text-[14px] font-semibold">
              teslahenvisning.com
            </Link>
            <div className="flex gap-6 text-[13px]">
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
          <div className="border-t border-black/8 pt-6 text-[11px] leading-relaxed text-[--color-muted-2]">
            <p className="max-w-4xl">{c.disclaimer}</p>
            <p className="mt-3">© {new Date().getFullYear()} teslahenvisning.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
