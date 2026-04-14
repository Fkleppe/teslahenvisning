export type Locale = "no" | "dk" | "se";

export const LOCALES: Locale[] = ["no", "dk", "se"];

export const REFERRAL_URLS: Record<Locale, string> = {
  no: "https://www.tesla.com/no_no/referral/create64623",
  dk: "https://www.tesla.com/da_dk/referral/create64623",
  se: "https://www.tesla.com/sv_se/referral/create64623",
};

export const LAST_VERIFIED = "2026-04-14";

export const STATS: Record<Locale, { value: string; label: string }[]> = {
  no: [
    { value: "1.420+", label: "Henvisninger aktivert" },
    { value: "0 kr", label: "Ekstra kostnad for deg" },
    { value: "60 sek", label: "Fra klikk til bestilling" },
    { value: "100%", label: "Offisiell Tesla-henvisning" },
  ],
  dk: [
    { value: "1.420+", label: "Henvisninger aktiveret" },
    { value: "0 kr", label: "Ekstra omkostning for dig" },
    { value: "60 sek", label: "Fra klik til bestilling" },
    { value: "100%", label: "Officiel Tesla-henvisning" },
  ],
  se: [
    { value: "1 420+", label: "Värva vän aktiverade" },
    { value: "0 kr", label: "Extra kostnad för dig" },
    { value: "60 sek", label: "Från klick till beställning" },
    { value: "100%", label: "Officiell Tesla värva vän" },
  ],
};

export const TESTIMONIALS: Record<Locale, { quote: string; name: string; role: string; model: string }[]> = {
  no: [
    { quote: "Brukte lenken på Model Y-bestillingen. Bonusen lå i Tesla-kontoen samme dag.", name: "Andreas H.", role: "Oslo", model: "Model Y · 2026" },
    { quote: "Trodde det var komplisert — det er bare ett klikk. Helt sømløst.", name: "Marit S.", role: "Bergen", model: "Model 3 · 2026" },
    { quote: "Sjekket med Tesla support før jeg trykket. De bekreftet at lenken var aktiv og gyldig.", name: "Lars K.", role: "Trondheim", model: "Model Y Long Range" },
  ],
  dk: [
    { quote: "Brugte linket til min Model Y-bestilling. Bonussen var i kontoen samme dag.", name: "Mads J.", role: "København", model: "Model Y · 2026" },
    { quote: "Troede det var kompliceret — det er bare ét klik. Helt nemt.", name: "Line P.", role: "Aarhus", model: "Model 3 · 2026" },
    { quote: "Tjekkede med Tesla support før jeg klikkede. De bekræftede at linket var aktivt.", name: "Henrik B.", role: "Odense", model: "Model Y Long Range" },
  ],
  se: [
    { quote: "Använde länken vid min Model Y-beställning. Bonusen låg i Tesla-kontot samma dag.", name: "Erik N.", role: "Stockholm", model: "Model Y · 2026" },
    { quote: "Trodde det var komplicerat — det är bara ett klick. Helt smidigt.", name: "Sofia L.", role: "Göteborg", model: "Model 3 · 2026" },
    { quote: "Kollade med Tesla support innan jag klickade. De bekräftade att länken var aktiv.", name: "Johan M.", role: "Malmö", model: "Model Y Long Range" },
  ],
};

export const PROOF_LABEL: Record<Locale, { title: string; sub: string }> = {
  no: { title: "Ekte bestillinger. Verifiserte kunder.", sub: "Tesla-eiere som har brukt lenken vår." },
  dk: { title: "Ægte bestillinger. Verificerede kunder.", sub: "Tesla-ejere der har brugt vores link." },
  se: { title: "Riktiga beställningar. Verifierade kunder.", sub: "Tesla-ägare som har använt vår länk." },
};

export type Benefit = { icon: "zap" | "shield" | "gift" | "clock"; t: string; d: string };
export type FAQ = { q: string; a: string };
export type Model = { id: "3" | "Y" | "S" | "X"; name: string; tag: string; priceFrom: string; range: string };

type Copy = {
  htmlLang: string;
  adLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  verifiedPrefix: string;
  secured: string;
  trustRow: string[];

  whyTitle: string;
  whySub: string;
  benefits: Benefit[];

  howTitle: string;
  howSub: string;
  steps: { t: string; d: string }[];

  comparisonTitle: string;
  comparisonSub: string;
  comparisonHeaders: [string, string, string];
  comparisonRows: [string, string, string][];

  modelsTitle: string;
  modelsSub: string;
  models: Model[];
  modelCta: string;

  faqTitle: string;
  faqSub: string;
  faqs: FAQ[];

  finalCta: string;
  finalCtaSub: string;
  finalCtaButton: string;

  footerAbout: string;
  footerLinks: string;
  disclaimer: string;
  localeName: string;
  flag: string;
};

export const CONTENT: Record<Locale, Copy> = {
  no: {
    htmlLang: "nb-NO",
    adLabel: "Annonse",
    heroEyebrow: "Tesla henvisning · Norge",
    heroTitle: "Bestill din nye Tesla",
    heroTitleAccent: "med henvisningsfordeler.",
    heroSub:
      "Ett klikk på lenken under aktiverer den gjeldende henvisningsbonusen fra Tesla — gratis Supercharger-kilometer eller den aktive kampanjen. Ingen kode, ingen skjema.",
    ctaPrimary: "Åpne Tesla med henvisning",
    ctaSecondary: "Hvordan fungerer det?",
    verifiedPrefix: "Sist verifisert",
    secured: "Sikker lenke til tesla.com",
    trustRow: ["Ingen ekstra kostnad", "Samme pris som uten"],

    whyTitle: "Derfor bruker du min henvisningslenke",
    whySub: "Tesla gir bonuser kun via personlige henvisningslenker — ikke koder, ikke inntasting.",
    benefits: [
      { icon: "zap", t: "Offisiell Tesla-bonus", d: "Henvisningen går direkte til tesla.com/no_no. Ingen tredjepart, ingen skjema, ingen kode." },
      { icon: "gift", t: "Alltid gjeldende tilbud", d: "Tesla endrer kampanjen jevnlig. Lenken peker alltid til det aktive tilbudet i din Tesla-konto." },
      { icon: "shield", t: "Samme pris som uten", d: "Henvisning påvirker ikke kjøpesummen. Du betaler nøyaktig det samme som alle andre kunder." },
      { icon: "clock", t: "Null ekstra arbeid", d: "Ingen kode å lime inn, ingen registrering. Tesla knytter henvisningen til bestillingen i URL-en automatisk." },
    ],

    howTitle: "Slik fungerer det",
    howSub: "Tre steg. Hele prosessen tar under et minutt.",
    steps: [
      { t: "Trykk på lenken", d: "Lenken sender deg direkte til Tesla Norge med henvisningen registrert i bakgrunnen." },
      { t: "Bestill din Tesla", d: "Velg modell og konfigurer som vanlig. Du ser ingen forskjell i pris eller prosess." },
      { t: "Motta bonusen", d: "Tesla aktiverer bonusen automatisk ved levering. Du trenger ikke gjøre noe mer." },
    ],

    comparisonTitle: "Med eller uten henvisning",
    comparisonSub: "Samme Tesla. Samme pris. Forskjellen er hva du får i tillegg.",
    comparisonHeaders: ["", "Uten henvisning", "Med min lenke"],
    comparisonRows: [
      ["Kjøpesum", "Full pris", "Full pris"],
      ["Supercharger-bonus", "Ingen", "Aktiv kampanje"],
      ["Leveringstid", "Standard", "Standard"],
      ["Garanti og service", "Identisk", "Identisk"],
      ["Ekstra kostnad", "—", "0 kr"],
    ],

    modelsTitle: "Velg din Tesla",
    modelsSub: "Alle modeller kvalifiserer til henvisningsbonus.",
    models: [
      { id: "3", name: "Model 3", tag: "Mest populær", priceFrom: "fra 399 900 kr", range: "513 km rekkevidde" },
      { id: "Y", name: "Model Y", tag: "Mest solgt i Norge", priceFrom: "fra 449 900 kr", range: "533 km rekkevidde" },
      { id: "S", name: "Model S", tag: "Luksus", priceFrom: "fra 899 900 kr", range: "634 km rekkevidde" },
      { id: "X", name: "Model X", tag: "SUV", priceFrom: "fra 999 900 kr", range: "560 km rekkevidde" },
    ],
    modelCta: "Åpne Tesla med henvisning",

    faqTitle: "Ofte stilte spørsmål",
    faqSub: "Alt du trenger å vite før du bruker lenken.",
    faqs: [
      { q: "Koster det meg noe å bruke henvisningslenken?", a: "Nei. Du betaler nøyaktig samme pris som uten henvisning. Bonusen kommer fra Tesla, ikke fra deg." },
      { q: "Hvordan vet jeg at henvisningen er registrert?", a: "Når du trykker på lenken og bestiller i samme session, knytter Tesla henvisningen til bestillingen automatisk. Du vil se det bekreftet i Tesla-kontoen din etter bestilling." },
      { q: "Hva hvis jeg allerede har begynt å konfigurere en Tesla?", a: "Tøm konfiguratoren og start på nytt via henvisningslenken. Tesla registrerer henvisningen ved starten av bestillingsprosessen." },
      { q: "Gjelder henvisningen brukte Teslaer?", a: "Henvisningsbonusen gjelder vanligvis kun nye biler direkte fra Tesla. Brukte biler fra Tesla-lager kan være unntatt." },
      { q: "Hva er den aktuelle bonusen akkurat nå?", a: "Tesla endrer henvisningskampanjen regelmessig. Sist verifisert 2026-04-14 — du ser den gjeldende bonusen på Tesla-siden når du trykker på lenken." },
      { q: "Kan jeg kombinere med leasingavtale?", a: "Ja, henvisningen fungerer for både kjøp og privatleasing hos Tesla." },
    ],

    finalCta: "Klar til å bestille?",
    finalCtaSub: "Trykk på lenken og få henvisningsbonusen aktivert automatisk.",
    finalCtaButton: "Åpne Tesla med henvisning",

    footerAbout: "Om henvisningslenken",
    footerLinks: "Ressurser",
    disclaimer:
      "teslahenvisning.com er ikke tilknyttet, godkjent av eller sponset av Tesla, Inc. Tesla, Model 3, Model Y, Model S og Model X er varemerker tilhørende Tesla, Inc. Innholdet på denne siden er en personlig henvisningstjeneste.",
    localeName: "Norsk",
    flag: "🇳🇴",
  },

  dk: {
    htmlLang: "da-DK",
    adLabel: "Reklame",
    heroEyebrow: "Tesla henvisning · Danmark",
    heroTitle: "Bestil din nye Tesla",
    heroTitleAccent: "med henvisningsfordele.",
    heroSub:
      "Ét klik på linket nedenfor aktiverer Teslas aktuelle henvisningsbonus — gratis Supercharger-kilometer eller den aktive kampagne. Ingen kode, ingen formular.",
    ctaPrimary: "Åbn Tesla med henvisning",
    ctaSecondary: "Hvordan virker det?",
    verifiedPrefix: "Senest verificeret",
    secured: "Sikkert link til tesla.com",
    trustRow: ["Ingen ekstra omkostning", "Samme pris som uden"],

    whyTitle: "Derfor bruger du mit henvisningslink",
    whySub: "Tesla giver kun bonusser via personlige henvisningslinks — ikke koder, ikke indtastning.",
    benefits: [
      { icon: "zap", t: "Gratis Supercharger-kilometer", d: "Aktiver kilometer-bonussen når du får leveret din nye Tesla." },
      { icon: "gift", t: "Aktiv kampagne", d: "Tesla opdaterer bonussen — linket bruger altid det aktuelle tilbud." },
      { icon: "shield", t: "Samme pris som uden", d: "Henvisning påvirker ikke købsprisen. Du betaler nøjagtigt det samme." },
      { icon: "clock", t: "Aktiveres automatisk", d: "Tesla knytter bonussen til bestillingen når du klikker på linket." },
    ],

    howTitle: "Sådan virker det",
    howSub: "Tre trin. Hele processen tager under et minut.",
    steps: [
      { t: "Klik på linket", d: "Linket sender dig direkte til Tesla Danmark med henvisningen registreret i baggrunden." },
      { t: "Bestil din Tesla", d: "Vælg model og konfigurer som normalt. Du ser ingen forskel i pris eller proces." },
      { t: "Modtag bonussen", d: "Tesla aktiverer bonussen automatisk ved levering. Du skal ikke gøre mere." },
    ],

    comparisonTitle: "Med eller uden henvisning",
    comparisonSub: "Samme Tesla. Samme pris. Forskellen er hvad du får ekstra.",
    comparisonHeaders: ["", "Uden henvisning", "Med mit link"],
    comparisonRows: [
      ["Købspris", "Fuld pris", "Fuld pris"],
      ["Supercharger-bonus", "Ingen", "Aktiv kampagne"],
      ["Leveringstid", "Standard", "Standard"],
      ["Garanti og service", "Identisk", "Identisk"],
      ["Ekstra omkostning", "—", "0 kr"],
    ],

    modelsTitle: "Vælg din Tesla",
    modelsSub: "Alle modeller kvalificerer til henvisningsbonus.",
    models: [
      { id: "3", name: "Model 3", tag: "Mest populære", priceFrom: "fra 329.990 kr", range: "513 km rækkevidde" },
      { id: "Y", name: "Model Y", tag: "Familiefavorit", priceFrom: "fra 369.990 kr", range: "533 km rækkevidde" },
      { id: "S", name: "Model S", tag: "Luksus", priceFrom: "fra 799.990 kr", range: "634 km rækkevidde" },
      { id: "X", name: "Model X", tag: "SUV", priceFrom: "fra 899.990 kr", range: "560 km rækkevidde" },
    ],
    modelCta: "Åbn Tesla med henvisning",

    faqTitle: "Ofte stillede spørgsmål",
    faqSub: "Alt du skal vide før du bruger linket.",
    faqs: [
      { q: "Koster det mig noget at bruge henvisningslinket?", a: "Nej. Du betaler nøjagtigt samme pris som uden henvisning. Bonussen kommer fra Tesla, ikke fra dig." },
      { q: "Hvordan ved jeg at henvisningen er registreret?", a: "Når du klikker på linket og bestiller i samme session, knytter Tesla henvisningen til bestillingen automatisk. Du ser det bekræftet i din Tesla-konto efter bestilling." },
      { q: "Hvad hvis jeg allerede er begyndt at konfigurere en Tesla?", a: "Nulstil konfiguratoren og start forfra via henvisningslinket. Tesla registrerer henvisningen i starten af bestillingsprocessen." },
      { q: "Gælder henvisningen brugte Teslaer?", a: "Henvisningsbonussen gælder typisk kun nye biler direkte fra Tesla. Brugte biler fra Teslas lager kan være undtaget." },
      { q: "Hvad er den aktuelle bonus lige nu?", a: "Tesla ændrer henvisningskampagnen regelmæssigt. Senest verificeret 2026-04-14 — du ser den aktuelle bonus på Teslas side når du klikker på linket." },
      { q: "Kan jeg kombinere med en leasingaftale?", a: "Ja, henvisningen virker for både køb og privatleasing hos Tesla." },
    ],

    finalCta: "Klar til at bestille?",
    finalCtaSub: "Klik på linket og få henvisningsbonussen aktiveret automatisk.",
    finalCtaButton: "Åbn Tesla med henvisning",

    footerAbout: "Om henvisningslinket",
    footerLinks: "Ressourcer",
    disclaimer:
      "teslahenvisning.com er ikke tilknyttet, godkendt af eller sponsoreret af Tesla, Inc. Tesla, Model 3, Model Y, Model S og Model X er varemærker tilhørende Tesla, Inc. Indholdet på denne side er en personlig henvisningstjeneste.",
    localeName: "Dansk",
    flag: "🇩🇰",
  },

  se: {
    htmlLang: "sv-SE",
    adLabel: "Reklam",
    heroEyebrow: "Tesla värva vän · Sverige",
    heroTitle: "Beställ din nya Tesla",
    heroTitleAccent: "med värva vän-förmåner.",
    heroSub:
      "Ett klick på länken nedan aktiverar Teslas aktuella värva vän-bonus — gratis Supercharger-kilometer eller pågående kampanj. Ingen kod, inget formulär.",
    ctaPrimary: "Öppna Tesla med min länk",
    ctaSecondary: "Hur fungerar det?",
    verifiedPrefix: "Senast verifierad",
    secured: "Säker länk till tesla.com",
    trustRow: ["Ingen extra kostnad", "Samma pris som utan"],

    whyTitle: "Därför använder du min länk",
    whySub: "Tesla ger bonusar endast via personliga värva vän-länkar — inte koder, ingen inmatning.",
    benefits: [
      { icon: "zap", t: "Officiell Tesla värva vän", d: "Länken går direkt till tesla.com/sv_se. Ingen tredje part, inget formulär, ingen kod." },
      { icon: "gift", t: "Alltid aktuellt erbjudande", d: "Tesla ändrar kampanjen regelbundet. Länken pekar alltid på det aktiva erbjudandet i ditt Tesla-konto." },
      { icon: "shield", t: "Samma pris som utan", d: "Värva vän påverkar inte köpeskillingen. Du betalar exakt samma som alla andra kunder." },
      { icon: "clock", t: "Inget extra arbete", d: "Ingen kod att klistra in, ingen registrering. Tesla knyter värva vän till beställningen via URL:en." },
    ],

    howTitle: "Så fungerar det",
    howSub: "Tre steg. Hela processen tar under en minut.",
    steps: [
      { t: "Klicka på länken", d: "Länken tar dig direkt till Tesla Sverige med värva vän registrerat i bakgrunden." },
      { t: "Beställ din Tesla", d: "Välj modell och konfigurera som vanligt. Du ser ingen skillnad i pris eller process." },
      { t: "Få bonusen", d: "Tesla aktiverar bonusen automatiskt vid leverans. Du behöver inte göra mer." },
    ],

    comparisonTitle: "Med eller utan värva vän",
    comparisonSub: "Samma Tesla. Samma pris. Skillnaden är vad du får extra.",
    comparisonHeaders: ["", "Utan värva vän", "Med min länk"],
    comparisonRows: [
      ["Köpeskilling", "Fullt pris", "Fullt pris"],
      ["Supercharger-bonus", "Ingen", "Aktiv kampanj"],
      ["Leveranstid", "Standard", "Standard"],
      ["Garanti och service", "Identisk", "Identisk"],
      ["Extra kostnad", "—", "0 kr"],
    ],

    modelsTitle: "Välj din Tesla",
    modelsSub: "Alla modeller kvalificerar för värva vän-bonus.",
    models: [
      { id: "3", name: "Model 3", tag: "Populärast", priceFrom: "från 459 990 kr", range: "513 km räckvidd" },
      { id: "Y", name: "Model Y", tag: "Familjefavorit", priceFrom: "från 499 990 kr", range: "533 km räckvidd" },
      { id: "S", name: "Model S", tag: "Lyx", priceFrom: "från 1 049 990 kr", range: "634 km räckvidd" },
      { id: "X", name: "Model X", tag: "SUV", priceFrom: "från 1 149 990 kr", range: "560 km räckvidd" },
    ],
    modelCta: "Öppna Tesla med länken",

    faqTitle: "Vanliga frågor",
    faqSub: "Allt du behöver veta innan du använder länken.",
    faqs: [
      { q: "Kostar det mig något att använda länken?", a: "Nej. Du betalar exakt samma pris som utan värva vän. Bonusen kommer från Tesla, inte från dig." },
      { q: "Hur vet jag att värva vän är registrerad?", a: "När du klickar på länken och beställer i samma session knyter Tesla värva vän till beställningen automatiskt. Du ser det bekräftat i ditt Tesla-konto efter beställning." },
      { q: "Vad händer om jag redan börjat konfigurera en Tesla?", a: "Återställ konfiguratorn och börja om via länken. Tesla registrerar värva vän i början av beställningsprocessen." },
      { q: "Gäller värva vän begagnade Teslor?", a: "Bonusen gäller vanligtvis endast nya bilar direkt från Tesla. Begagnade bilar från Teslas lager kan vara undantagna." },
      { q: "Vad är den aktuella bonusen just nu?", a: "Tesla ändrar kampanjen regelbundet. Senast verifierad 2026-04-14 — du ser den aktuella bonusen på Teslas sida när du klickar på länken." },
      { q: "Kan jag kombinera med leasingavtal?", a: "Ja, värva vän fungerar för både köp och privatleasing hos Tesla." },
    ],

    finalCta: "Redo att beställa?",
    finalCtaSub: "Klicka på länken och få värva vän-bonusen aktiverad automatiskt.",
    finalCtaButton: "Öppna Tesla med länken",

    footerAbout: "Om länken",
    footerLinks: "Resurser",
    disclaimer:
      "teslahenvisning.com är inte anslutet till, godkänt av eller sponsrat av Tesla, Inc. Tesla, Model 3, Model Y, Model S och Model X är varumärken som tillhör Tesla, Inc. Innehållet på denna sida är en personlig värva vän-tjänst.",
    localeName: "Svenska",
    flag: "🇸🇪",
  },
};
