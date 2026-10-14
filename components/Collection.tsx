"use client";

import ModelImage from "./ModelImage";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ImageSlot } from "@/lib/images";
import type { TranslationKey } from "@/lib/translations";

const ITEMS: { slot: ImageSlot; title: TranslationKey; desc: TranslationKey }[] = [
  { slot: "kollektion-business", title: "col_business_title", desc: "col_business_desc" },
  { slot: "kollektion-bryllup",  title: "col_wedding_title",  desc: "col_wedding_desc" },
  { slot: "kollektion-smoking",  title: "col_tux_title",      desc: "col_tux_desc" },
];

export default function Collection() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="kollektion" className="section" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("col_eyebrow")} title={t("col_h2")} accent={t("col_h2_accent")} intro={t("col_intro")} />

        <div className="grid grid-cols-3 gap-6 mt-16 max-[760px]:grid-cols-1 max-[760px]:max-w-[480px] max-[760px]:gap-12">
          {ITEMS.map((item) => (
            <article key={item.slot} className="group reveal">
              <ModelImage
                slot={item.slot}
                sizes="(max-width: 760px) 100vw, 33vw"
                alt={`${t(item.title)} — Atelier Copenhagen`}
              />
              <h3 className="font-serif text-[30px] leading-none mt-7 text-cream transition-colors group-hover:text-gold">
                {t(item.title)}
              </h3>
              <p className="text-[15px] leading-[1.75] text-muted mt-3">{t(item.desc)}</p>
              <a
                href="#book"
                className="gold-underline inline-flex items-center gap-2 mt-5 pb-1 font-sans text-[11px] tracking-[.22em] uppercase text-gold no-underline"
              >
                {t("col_cta")}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
