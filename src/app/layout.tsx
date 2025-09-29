import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "СТО К24 Дніпро - Професійний автосервіс повного циклу",
  description:
    "Професійний ремонт та обслуговування автомобілів у Дніпрі. Понад 15 років досвіду, кваліфіковані майстри, сучасне обладнання. Гарантія на всі роботи.",
  keywords:
    "автосервіс Дніпро, ремонт авто, СТО, К24, ремонт двигуна, ремонт трансмісії, автодіагностика",
  authors: [{ name: "К24 Dnipro" }],
  creator: "К24 Dnipro",
  publisher: "К24 Dnipro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://k24dnipro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "СТО К24 Дніпро - Професійний автосервіс повного циклу",
    description:
      "Професійний ремонт та обслуговування автомобілів у Дніпрі. Понад 15 років досвіду, кваліфіковані майстри, сучасне обладнання.",
    url: "https://k24dnipro.com",
    siteName: "СТО К24 Дніпро",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "СТО К24 Дніпро - Професійний автосервіс",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "СТО К24 Дніпро - Професійний автосервіс повного циклу",
    description:
      "Професійний ремонт та обслуговування автомобілів у Дніпрі. Понад 15 років досвіду.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable} ${montserrat.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
