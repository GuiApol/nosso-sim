import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Manrope,
} from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-ui",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://nosso-sim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Guilherme + Raul | Nosso Sim",
    template: "%s | Guilherme + Raul",
  },

  description:
    "Celebre conosco o casamento de Guilherme e Raul, no dia 13 de janeiro de 2027, em Fortaleza, Ceará.",

  keywords: [
    "Guilherme e Raul",
    "casamento",
    "nosso sim",
    "casamento em Fortaleza",
    "13 de janeiro de 2027",
  ],

  authors: [
    {
      name: "Guilherme + Raul",
    },
  ],

  creator: "Guilherme + Raul",

  alternates: {
    canonical: "/",
  },

  openGraph: {
  type: "website",
  locale: "pt_BR",
  url: "https://nosso-sim-phi.vercel.app/",
  siteName: "Guilherme & Raul",
  title: "Guilherme & Raul | Nosso Sim",
  description:
    "Celebre conosco o casamento de Guilherme e Raul, no dia 13 de janeiro de 2027, em Fortaleza, Ceará.",
  images: [
    {
      url: "https://nosso-sim-phi.vercel.app/images/og/nosso-sim-og.png",
      width: 1200,
      height: 630,
      alt: "Convite de casamento de Guilherme e Raul, 13 de janeiro de 2027",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "Guilherme & Raul | Nosso Sim",
  description:
    "Nosso casamento será em 13 de janeiro de 2027, em Fortaleza, Ceará.",
  images: [
    "https://nosso-sim-phi.vercel.app/images/og/nosso-sim-og.png",
  ],
},

  robots: {
    index: true,
    follow: true,
  },

icons: {
    icon: "/images/logo/logo.png",
    shortcut: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d1f32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}