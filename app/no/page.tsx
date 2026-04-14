import { LocalePage } from "@/components/LocalePage";

export const metadata = {
  title: "Tesla henvisningskode Norge — verifisert og aktiv",
  description:
    "Bruk vår Tesla henvisningskode i Norge og få gjeldende henvisningsbonus på din nye Tesla. Oppdatert og verifisert.",
  alternates: { canonical: "/no" },
};

export default function Page() {
  return <LocalePage locale="no" />;
}
