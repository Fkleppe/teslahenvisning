import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://teslahenvisning.com";
  const lastModified = new Date("2026-04-14");

  return [
    {
      url: `${base}/no`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [
            l === "no" ? "nb-NO" : l === "dk" ? "da-DK" : "sv-SE",
            `${base}/${l}`,
          ]),
        ),
      },
    },
    ...LOCALES.filter((l) => l !== "no").map((l) => ({
      url: `${base}/${l}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
