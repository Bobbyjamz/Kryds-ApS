import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Collection from "@/components/Collection";
import Process from "@/components/Process";
import Lookbook from "@/components/Lookbook";
import WhyAtelier from "@/components/WhyAtelier";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import { ImagesProvider } from "@/contexts/ImagesContext";
import { resolveImages } from "@/lib/resolve-images";

// Siden bygges statisk, så billederne i public/billeder/ findes ved build.
export const dynamic = "force-static";

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
        <About />
        <Booking />
      </main>
      <Footer />
    </ImagesProvider>
  );
}
