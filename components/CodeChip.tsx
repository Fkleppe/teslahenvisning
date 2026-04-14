"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { REFERRAL_CODE } from "@/lib/content";

export function CodeChip({ copyLabel, copiedLabel }: { copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl transition-all hover:border-[--color-accent]/50 hover:bg-white/[0.06] glow"
      aria-label="Copy referral code"
    >
      <span className="font-mono text-xl sm:text-2xl tracking-tight text-white">
        {REFERRAL_CODE}
      </span>
      <span className="flex items-center gap-2 rounded-full bg-[--color-accent] px-4 py-2 text-sm font-medium text-black transition-transform group-hover:scale-[1.02]">
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? copiedLabel : copyLabel}
      </span>
    </button>
  );
}
