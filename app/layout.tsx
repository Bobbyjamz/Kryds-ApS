import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { themeInitScript } from "@/lib/theme";
import { site, siteUrl, startPrice, formatPrice } from "@/lib/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Atelier Copenhagen — Skrædderoplevelsen for små penge";
const description = `Jakkesæt i ægte uld fra vores lager, tilpasset af skrædder i København. Næsten skræddersyet, fra ${formatPrice(startPrice, "da")}. Business, bryllup og smoking.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: "%s | Atelier Copenhagen" },
  description,
  alternates: { canonical: "/" },
  keywords: [
    "jakkesæt København", "tilpasset jakkesæt", "billigt jakkesæt", "jakkesæt tilpasning",
    "bryllupsjakkesæt", "smoking", "skrædder København", "jakkesæt fra lager", "Atelier Copenhagen",
  ],
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: "/atelier-logo.jpg" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Atelier Copenhagen" }],
    type: "website",
    locale: "da_DK",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description,
  url: siteUrl(),
  ...(site.phone && { telephone: site.phone.replace(/\s/g, "") }),
  ...(site.email && { email: site.email }),
  address: {
    "@type": "PostalAddress",
    addressLocality: "København",
    addressCountry: "DK",
    ...(site.address && { streetAddress: site.address }),
  },
  currenciesAccepted: "DKK",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
