"use client";

import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { startPrice, formatPrice } from "@/lib/site";
import { FAQ_NUMBERS, type TranslationKey } from "@/lib/translations";

export default function Faq() {
  const ref = useReveal<HTMLElement>();
  const { t, lang } = useLanguage();
  const price = formatPrice(startPrice, lang);

  return (
    <section id="faq" className="section border-t border-[var(--hairline)]" ref={ref}>
      <div className="container-x grid grid-cols-[.8fr_1.2fr] gap-24 items-start max-[1000px]:grid-cols-1 max-[1000px]:gap-12">
        <SectionHeading eyebrow={t("faq_eyebrow")} title={t("faq_h2")} accent={t("faq_h2_accent")} />

        <div className="reveal border-t border-[var(--hairline)]">
          {FAQ_NUMBERS.map((n) => (
            <details key={n} className="group border-b border-[var(--hairline)]">
              <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none font-serif text-[23px] leading-snug text-cream transition-colors hover:text-gold [&::-webkit-details-marker]:hidden">
                {t(`faq_${n}_q` as TranslationKey)}
                <span className="relative w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <span className="absolute top-1/2 left-0 w-4 h-px bg-gold" />
                  <span className="absolute top-0 left-1/2 w-px h-4 bg-gold transition-transform duration-300 group-open:rotate-90" />
                </span>
              </summary>
              <p className="pb-7 pr-10 max-w-[640px] text-[15px] leading-[1.8] text-muted">
                {t(`faq_${n}_a` as TranslationKey).replace("{price}", price)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
