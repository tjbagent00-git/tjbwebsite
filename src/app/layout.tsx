import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import DigitalTwinWidget from "@/components/ui/DigitalTwinWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "TJ Bush — Enterprise AI & Product Leader",
  description:
    "Senior product and program leader at the intersection of enterprise technology and AI. Driving digital transformation at F5's AI Center of Excellence.",
  openGraph: {
    title: "TJ Bush — Enterprise AI & Product Leader",
    description:
      "Senior product and program leader at the intersection of enterprise technology and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
        <DigitalTwinWidget />
      </body>
    </html>
  );
}
