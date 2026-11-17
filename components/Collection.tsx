"use client";

import ModelImage from "./ModelImage";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ImageSlot } from "@/lib/images";
import { site } from "@/lib/site";
import type { TranslationKey } from "@/lib/translations";

// Varianterne vi har på lager, hver vist med et nærbillede af stof og detaljer
const ITEMS: { slot: ImageSlot; title: TranslationKey; desc: TranslationKey }[] = [
  { slot: "variant-sort",        title: "var_black_title",      desc: "var_black_desc" },
  { slot: "variant-navy",        title: "var_navy_title",       desc: "var_navy_desc" },
  { slot: "variant-naalestribe", title: "var_pinstripe_title",  desc: "var_pinstripe_desc" },
  { slot: "variant-vest",        title: "var_vest_title",       desc: "var_vest_desc" },
];

export default function Collection() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="kollektion" className="section" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("col_eyebrow")} title={t("col_h2")} accent={t("col_h2_accent")} intro={t("col_intro")} />

        <div className="grid grid-cols-4 gap-6 mt-16 max-[1100px]:grid-cols-2 max-[1100px]:gap-x-6 max-[1100px]:gap-y-12 max-[520px]:gap-x-3">
          {ITEMS.map((item) => (
            <article key={item.slot} className="group reveal">
              <ModelImage
                slot={item.slot}
                sizes="(max-width: 1100px) 50vw, 25vw"
                alt={`${t(item.title)} — ${site.name}`}
              />
              <h3 className="font-serif text-[30px] leading-none mt-7 text-cream transition-colors group-hover:text-gold max-[520px]:text-[24px] max-[520px]:mt-5">
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
