import './globals.css';
import type { Metadata } from 'next';
import {
  Inter,
  Montserrat,
} from 'next/font/google';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';

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
  title: "К24 Дніпро - Професійний автосервіс повного циклу",
  description:
    "Професійний автосервіс у Дніпрі: рихтування, рихтовка, полірування та фарбування автомобілів. Понад 2 роки досвіду, кваліфіковані майстри, сучасне обладнання. Гарантія на всі роботи.",
  keywords:
    "автосервіс Дніпро, ремонт авто, СТО, К24, ремонт двигуна, ремонт трансмісії, автодіагностика, рихтування, рихтовка, рихтування Дніпро, рихтовка Дніпро, полірування, полірування авто Дніпро, фарбування, фарбування авто Дніпро, кузовний ремонт, кузовний ремонт Дніпро",
  authors: [{ name: "К24 Dnipro" }],
  creator: "К24 Dnipro",
  publisher: "К24 Dnipro",
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  metadataBase: new URL("https://k24.dp.ua"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title:
      "К24 Дніпро - Рихтування, Полірування, Фарбування Авто | Кузовний центр",
    description:
      "Професійний автосервіс у Дніпрі: рихтування, рихтовка, полірування та фарбування автомобілів. Понад 2 роки досвіду, кваліфіковані майстри, сучасне обладнання.",
    url: "https://k24.dp.ua",
    siteName: "К24 Дніпро",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "К24 Дніпро",
    alternateName: "СТО К24 Дніпро",
    description:
      "Професійний автосервіс у Дніпрі: рихтування, рихтовка, полірування та фарбування автомобілів. Понад 2 роки досвіду, кваліфіковані майстри, сучасне обладнання.",
    url: "https://k24.dp.ua",
    telephone: ["+38 (098) 777-44-01", "+38 (097) 959-05-05"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "вулиця Нижньодніпровська",
      addressLocality: "Дніпро",
      addressRegion: "Дніпропетровська область",
      postalCode: "49000",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.53091509999999,
      longitude: 35.0372704,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Дніпро",
    },
    serviceType: [
      "Рихтування",
      "Рихтовка",
      "Полірування",
      "Фарбування",
      "Кузовний ремонт",
      "Ремонт двигуна",
      "Ремонт трансмісії",
      "Автодіагностика",
    ],
    sameAs: [
      "https://instagram.com/k24.dnipro",
      "https://www.tiktok.com/@k24.dnipro",
    ],
  };

  return (
    <html lang="uk" className={`${inter.variable} ${montserrat.variable}`}>
      <Head>
        <meta
          name="google-site-verification"
          content="6CgpA_BjgUm2xjXolSi_rzuzNtxvT4Xcbm2iE0_FmzY"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleTagManager gtmId="GTM-NZGXCKQD" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
