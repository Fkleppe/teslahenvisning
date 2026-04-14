import { CONTENT, REFERRAL_URLS, type Locale } from "@/lib/content";

export function JsonLd({ locale }: { locale: Locale }) {
  const c = CONTENT[locale];
  const url = REFERRAL_URLS[locale];
  const baseUrl = `https://teslahenvisning.com/${locale}`;

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "teslahenvisning.com",
      url: "https://teslahenvisning.com",
      inLanguage: c.htmlLang,
      publisher: {
        "@type": "Organization",
        name: "teslahenvisning.com",
        url: "https://teslahenvisning.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: c.howTitle,
      description: c.howSub,
      inLanguage: c.htmlLang,
      step: c.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.t,
        text: s.d,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://teslahenvisning.com" },
        { "@type": "ListItem", position: 2, name: c.localeName, item: baseUrl },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
