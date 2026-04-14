import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://teslahenvisning.com"),
  title: {
    default: "Tesla henvisning — Norge, Danmark, Sverige",
    template: "%s · teslahenvisning.com",
  },
  description:
    "Bruk vår Tesla-henvisningslenke for Norge, Danmark og Sverige og få den aktive bonusen automatisk når du bestiller.",
  alternates: {
    canonical: "/",
    languages: {
      "nb-NO": "/no",
      "da-DK": "/dk",
      "sv-SE": "/se",
      "x-default": "/no",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
