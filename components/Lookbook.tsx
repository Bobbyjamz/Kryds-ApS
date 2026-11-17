"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import GalleryCarousel from "./GalleryCarousel";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { GALLERY, LOOKBOOK_COUNT } from "@/lib/gallery";

export default function Lookbook() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="lookbook" className="py-[120px] max-[900px]:py-[80px]" ref={ref}>
      <div className="px-[52px] max-[900px]:px-5">
        <div className="container-x">
          <SectionHeading eyebrow={t("look_eyebrow")} title={t("look_h2")} accent={t("look_h2_accent")} intro={t("look_intro")} center />
        </div>
      </div>

      {/* Et lille udvalg ruller forbi; resten ligger i galleriet */}
      <div className="mt-14">
        <GalleryCarousel images={GALLERY.slice(0, LOOKBOOK_COUNT)} />
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-12 px-5">
        <Link href="/galleri" className="btn-outline">
          {t("look_all")} ({GALLERY.length})
        </Link>
        <a href="#book" className="btn-gold">{t("look_cta")}</a>
      </div>
    </section>
  );
}
