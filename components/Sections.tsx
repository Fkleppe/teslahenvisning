import { Zap, Shield, Gift, Clock, Check, X, ChevronRight } from "lucide-react";
import { CTAButton } from "./CTAButton";
import type { Copy } from "./types";
import type { Benefit } from "@/lib/content";

const icons = { zap: Zap, shield: Shield, gift: Gift, clock: Clock } as const;

export function WhySection({ c }: { c: Copy }) {
  return (
    <section className="border-t border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-background-elev] px-3 py-1 text-xs text-[--color-muted]">
            <span className="size-1.5 rounded-full bg-[--color-brand-3]" />
            {c.whyTitle.split(" ").slice(0, 2).join(" ")}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.whyTitle}
          </h2>
          <p className="mt-4 text-lg text-[--color-muted]">{c.whySub}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-border] sm:grid-cols-2">
          {c.benefits.map((b: Benefit, i: number) => {
            const Icon = icons[b.icon];
            return (
              <div
                key={i}
                className="group relative bg-[--color-background] p-8 transition-colors hover:bg-[--color-background-elev]"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[--color-brand-2]/20 to-[--color-brand-3]/20 ring-1 ring-inset ring-white/10">
                  <Icon className="size-5 text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-medium">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[--color-muted]">{b.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowSection({ c }: { c: Copy }) {
  return (
    <section id="how" className="relative border-t border-[--color-border] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-brand]/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.howTitle}</h2>
          <p className="mt-4 text-lg text-[--color-muted]">{c.howSub}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {c.steps.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[--color-border] bg-[--color-background-elev] p-7 transition-all hover:border-[--color-border-strong]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="font-mono text-xs text-[--color-brand-3]">
                  STEG 0{i + 1}
                </div>
                <ChevronRight className="size-4 text-[--color-muted] transition-transform group-hover:translate-x-0.5" />
              </div>
              <h3 className="text-lg font-medium">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[--color-muted]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection({ c }: { c: Copy }) {
  return (
    <section className="border-t border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.comparisonTitle}
          </h2>
          <p className="mt-4 text-lg text-[--color-muted]">{c.comparisonSub}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[--color-border]">
          <table className="w-full text-left">
            <thead className="bg-[--color-background-elev]">
              <tr>
                {c.comparisonHeaders.map((h, i) => (
                  <th
                    key={i}
                    className={`px-6 py-4 text-sm font-medium ${
                      i === 2 ? "text-white" : "text-[--color-muted]"
                    } ${i === 2 ? "bg-gradient-to-r from-[--color-brand-2]/10 to-[--color-brand-3]/10" : ""}`}
                  >
                    {i === 2 && (
                      <span className="mr-2 inline-block size-1.5 rounded-full bg-[--color-brand-3]" />
                    )}
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.comparisonRows.map((row, i) => (
                <tr key={i} className="border-t border-[--color-border]">
                  <td className="px-6 py-5 text-sm font-medium">{row[0]}</td>
                  <td className="px-6 py-5 text-sm text-[--color-muted]">{row[1]}</td>
                  <td className="px-6 py-5 text-sm text-white bg-gradient-to-r from-[--color-brand-2]/5 to-[--color-brand-3]/5">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function ModelsSection({ c, url }: { c: Copy; url: string }) {
  return (
    <section className="border-t border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.modelsTitle}</h2>
          <p className="mt-4 text-lg text-[--color-muted]">{c.modelsSub}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.models.map((m) => (
            <a
              key={m.id}
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group relative flex flex-col rounded-2xl border border-[--color-border] bg-[--color-background-elev] p-6 transition-all hover:border-[--color-border-strong] hover:-translate-y-0.5"
            >
              <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent ring-1 ring-inset ring-white/5">
                <span className="text-7xl font-semibold tracking-tight gradient-text">{m.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">{m.name}</h3>
                <span className="rounded-full border border-[--color-border] bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[--color-muted]">
                  {m.tag}
                </span>
              </div>
              <div className="mt-3 space-y-1 text-sm">
                <div className="text-white">{m.priceFrom}</div>
                <div className="text-[--color-muted]">{m.range}</div>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[--color-brand-3]">
                {c.modelCta}
                <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ c }: { c: Copy }) {
  return (
    <section className="border-t border-[--color-border]">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.faqTitle}</h2>
          <p className="mt-4 text-lg text-[--color-muted]">{c.faqSub}</p>
        </div>
        <div className="mt-12 divide-y divide-[--color-border] overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-background-elev]">
          {c.faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.02]">
                <span className="pr-6 font-medium">{f.q}</span>
                <span className="shrink-0 rounded-full border border-[--color-border] p-1 transition-transform group-open:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-[--color-muted]">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ c, url }: { c: Copy; url: string }) {
  return (
    <section className="border-t border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-[--color-background-elev] p-12 text-center sm:p-20">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-brand-2]/25 blur-[100px]" />
            <div className="absolute right-0 bottom-0 h-[300px] w-[500px] translate-y-1/2 rounded-full bg-[--color-brand-3]/20 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              <span className="gradient-text">{c.finalCta}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[--color-muted]">{c.finalCtaSub}</p>
            <div className="mt-10 flex justify-center">
              <CTAButton href={url} label={c.finalCtaButton} secured={c.secured} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ c }: { c: Copy }) {
  return (
    <footer className="border-t border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm">
            <span className="relative flex size-5 items-center justify-center rounded bg-gradient-to-br from-[--color-brand-2] to-[--color-brand-3]">
              <span className="size-1.5 rounded-sm bg-white" />
            </span>
            <span className="font-medium">teslahenvisning.com</span>
          </div>
          <div className="max-w-2xl text-xs leading-relaxed text-[--color-muted]">{c.disclaimer}</div>
        </div>
        <div className="mt-8 border-t border-[--color-border] pt-6 text-xs text-[--color-muted]">
          © {new Date().getFullYear()} teslahenvisning.com · All rights reserved
        </div>
      </div>
    </footer>
  );
}
