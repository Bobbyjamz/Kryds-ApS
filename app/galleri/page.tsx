import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBookBar from "@/components/MobileBookBar";
import GalleryIntro from "@/components/GalleryIntro";
import GalleryCarousel from "@/components/GalleryCarousel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Billeder fra ${site.name}: jakkesæt i ægte uld, tilpasset af skrædder i København.`,
  alternates: { canonical: "/galleri" },
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-[170px] pb-[120px] max-[900px]:pt-[130px] max-[900px]:pb-[80px] flex flex-col gap-14">
        <GalleryIntro />
        <GalleryCarousel />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
