import { LocalePage } from "@/components/LocalePage";

export const metadata = {
  title: "Tesla henvisningskode Danmark — verificeret og aktiv",
  description:
    "Brug vores Tesla henvisningskode i Danmark og få den aktuelle henvisningsbonus på din nye Tesla. Opdateret og verificeret.",
  alternates: { canonical: "/dk" },
};

export default function Page() {
  return <LocalePage locale="dk" />;
}
