"use client";

import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const ITEMS: { num: string; title: TranslationKey; desc: TranslationKey }[] = [
  { num: "I",   title: "why_1_title", desc: "why_1_desc" },
  { num: "II",  title: "why_2_title", desc: "why_2_desc" },
  { num: "III", title: "why_3_title", desc: "why_3_desc" },
  { num: "IV",  title: "why_4_title", desc: "why_4_desc" },
  { num: "V",   title: "why_5_title", desc: "why_5_desc" },
  { num: "VI",  title: "why_6_title", desc: "why_6_desc" },
];

export default function WhyAtelier() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="hvorfor" className="section bg-black2 border-y border-[var(--hairline)]" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("why_eyebrow")} title={t("why_h2")} accent={t("why_h2_accent")} />

        <div className="reveal grid grid-cols-3 gap-px mt-16 bg-[var(--hairline)] border border-[var(--hairline)] max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {ITEMS.map((item) => (
            <div key={item.num} className="group bg-black2 p-11 transition-colors hover:bg-gray max-[640px]:p-8">
              <span className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center font-serif text-[17px] text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                {item.num}
              </span>
              <h3 className="font-serif text-[25px] leading-tight mt-7 text-cream">{t(item.title)}</h3>
              <p className="text-[15px] leading-[1.75] text-muted mt-3">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
