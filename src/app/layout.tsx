import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Choice Guide - I Migliori Buoni e Offerte Italiane",
  description: "La community italiana di buoni e offerte. Trova le migliori promozioni, codici sconto e risparmia sui tuoi acquisti su Temu e altri negozi.",
  keywords: "buoni, offerte, sconti, codici promozionali, Temu, affiliazione, risparmio, shopping online, offerte italiane",
  authors: [{ name: "Smart Choice Guide" }],
  creator: "Smart Choice Guide",
  publisher: "Smart Choice Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smart-choice-guide-temu.vercel.app'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Smart Choice Guide - I Migliori Buoni e Offerte Italiane",
    description: "La community italiana di buoni e offerte. Trova le migliori promozioni e risparmia sui tuoi acquisti.",
    url: 'https://smart-choice-guide-temu.vercel.app',
    siteName: 'Smart Choice Guide',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Choice Guide - I Migliori Buoni e Offerte Italiane",
    description: "La community italiana di buoni e offerte. Trova le migliori promozioni e risparmia sui tuoi acquisti.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
