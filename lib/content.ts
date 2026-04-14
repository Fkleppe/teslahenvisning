export type Locale = "no" | "dk" | "se";

export const LOCALES: Locale[] = ["no", "dk", "se"];

export const REFERRAL_URLS: Record<Locale, string> = {
  no: "https://www.tesla.com/no_no/referral/create64623",
  dk: "https://www.tesla.com/da_dk/referral/create64623",
  se: "https://www.tesla.com/sv_se/referral/create64623",
};

export const REFERRAL_CODE = "create64623";

type Copy = {
  htmlLang: string;
  adLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSub: string;
  codeLabel: string;
  copy: string;
  copied: string;
  ctaOpen: string;
  benefitsTitle: string;
  verifiedPrefix: string;
  howTitle: string;
  steps: { t: string; d: string }[];
  modelsTitle: string;
  faqTitle: string;
  disclaimer: string;
  localeName: string;
};

export const CONTENT: Record<Locale, Copy> = {
  no: {
    htmlLang: "nb-NO",
    adLabel: "Annonse",
    heroEyebrow: "Tesla henvisningskode · Norge",
    heroTitle: "Spar på din nye Tesla med henvisningskoden.",
    heroSub:
      "Bruk koden under når du bestiller, og få Tesla sin gjeldende henvisningsbonus — helt gratis.",
    codeLabel: "Henvisningskode",
    copy: "Kopier kode",
    copied: "Kopiert!",
    ctaOpen: "Bestill med henvisning",
    benefitsTitle: "Fordeler akkurat nå",
    verifiedPrefix: "Sist verifisert",
    howTitle: "Slik bruker du koden",
    steps: [
      { t: "Kopier koden", d: "Ett klikk — koden legges på utklippstavlen." },
      { t: "Bestill på tesla.com", d: "Lim inn koden i henvisningsfeltet ved bestilling." },
      { t: "Motta bonusen", d: "Tesla aktiverer bonusen automatisk ved levering." },
    ],
    modelsTitle: "Velg din Tesla",
    faqTitle: "Ofte stilte spørsmål",
    disclaimer:
      "Ikke tilknyttet, godkjent av eller sponset av Tesla, Inc. Tesla er et varemerke tilhørende Tesla, Inc.",
    localeName: "Norsk",
  },
  dk: {
    htmlLang: "da-DK",
    adLabel: "Reklame",
    heroEyebrow: "Tesla henvisningskode · Danmark",
    heroTitle: "Spar på din nye Tesla med henvisningskoden.",
    heroSub:
      "Brug koden, når du bestiller, og få Teslas aktuelle henvisningsbonus — helt gratis.",
    codeLabel: "Henvisningskode",
    copy: "Kopiér kode",
    copied: "Kopieret!",
    ctaOpen: "Bestil med henvisning",
    benefitsTitle: "Fordele lige nu",
    verifiedPrefix: "Senest verificeret",
    howTitle: "Sådan bruger du koden",
    steps: [
      { t: "Kopiér koden", d: "Ét klik — koden lægges på udklipsholderen." },
      { t: "Bestil på tesla.com", d: "Indsæt koden i henvisningsfeltet ved bestilling." },
      { t: "Modtag bonussen", d: "Tesla aktiverer bonussen automatisk ved levering." },
    ],
    modelsTitle: "Vælg din Tesla",
    faqTitle: "Ofte stillede spørgsmål",
    disclaimer:
      "Ikke tilknyttet, godkendt af eller sponsoreret af Tesla, Inc. Tesla er et varemærke tilhørende Tesla, Inc.",
    localeName: "Dansk",
  },
  se: {
    htmlLang: "sv-SE",
    adLabel: "Reklam",
    heroEyebrow: "Tesla värva vän-kod · Sverige",
    heroTitle: "Spara på din nya Tesla med värva vän-koden.",
    heroSub:
      "Använd koden när du beställer och få Teslas aktuella värva vän-bonus — helt gratis.",
    codeLabel: "Värva vän-kod",
    copy: "Kopiera kod",
    copied: "Kopierad!",
    ctaOpen: "Beställ med koden",
    benefitsTitle: "Förmåner just nu",
    verifiedPrefix: "Senast verifierad",
    howTitle: "Så använder du koden",
    steps: [
      { t: "Kopiera koden", d: "Ett klick — koden läggs på urklipp." },
      { t: "Beställ på tesla.com", d: "Klistra in koden i värva vän-fältet vid beställning." },
      { t: "Få bonusen", d: "Tesla aktiverar bonusen automatiskt vid leverans." },
    ],
    modelsTitle: "Välj din Tesla",
    faqTitle: "Vanliga frågor",
    disclaimer:
      "Inte ansluten till, godkänd av eller sponsrad av Tesla, Inc. Tesla är ett varumärke som tillhör Tesla, Inc.",
    localeName: "Svenska",
  },
};

export const LAST_VERIFIED = "2026-04-14";
