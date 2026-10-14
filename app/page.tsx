import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Collection from "@/components/Collection";
import Process from "@/components/Process";
import Lookbook from "@/components/Lookbook";
import WhyAtelier from "@/components/WhyAtelier";
import Pricing from "@/components/Pricing";
import GroupBand from "@/components/GroupBand";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import { ImagesProvider } from "@/contexts/ImagesContext";
import { resolveImages } from "@/lib/resolve-images";
import { startPrice, formatPrice } from "@/lib/site";
import { translations, FAQ_NUMBERS, type TranslationKey } from "@/lib/translations";

// Siden bygges statisk, så billederne i public/billeder/ findes ved build.
export const dynamic = "force-static";

// Spørgsmål & svar som struktureret data, så Google kan vise dem i søgeresultaterne
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_NUMBERS.map((n) => ({
    "@type": "Question",
    name: translations.da[`faq_${n}_q` as TranslationKey],
    acceptedAnswer: {
      "@type": "Answer",
      text: translations.da[`faq_${n}_a` as TranslationKey].replace("{price}", formatPrice(startPrice, "da")),
    },
  })),
};

export default function Home() {
  return (
    <ImagesProvider images={resolveImages()}>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Collection />
        <Process />
        <Lookbook />
        <WhyAtelier />
        <Pricing />
        <GroupBand />
        <About />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </ImagesProvider>
  );
}
