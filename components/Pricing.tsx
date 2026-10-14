"use client";

import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { prices } from "@/lib/site";
import type { TranslationKey } from "@/lib/translations";

type PackageId = keyof typeof prices;

const PACKAGES: { id: PackageId; featured?: boolean }[] = [
  { id: "business" },
  { id: "signature", featured: true },
  { id: "ceremony" },
];

export default function Pricing() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="priser" className="section" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("price_eyebrow")} title={t("price_h2")} accent={t("price_h2_accent")} intro={t("price_intro")} center />

        <div className="grid grid-cols-3 gap-6 mt-16 items-stretch max-[1000px]:grid-cols-1 max-[1000px]:max-w-[520px] max-[1000px]:mx-auto">
          {PACKAGES.map(({ id, featured }) => {
            const price = prices[id];
            const features = [1, 2, 3, 4].map((n) => t(`pkg_${id}_f${n}` as TranslationKey));
            return (
              <div
                key={id}
                className={`reveal relative flex flex-col p-11 border transition-colors max-[640px]:p-8 ${
                  featured ? "border-gold/60 bg-gray" : "border-[var(--hairline)] bg-black2 hover:border-gold/30"
                }`}
              >
                {featured && <span className="absolute top-0 left-0 right-0 h-px bg-gold" aria-hidden="true" />}
                <h3 className="font-serif text-[32px] leading-none text-cream">{t(`pkg_${id}_name` as TranslationKey)}</h3>
                <p className="text-[15px] text-muted mt-3">{t(`pkg_${id}_desc` as TranslationKey)}</p>

                <div className="mt-8 pb-8 border-b border-[var(--hairline)]">
                  {price !== null ? (
                    <p className="font-serif text-gold">
                      <span className="font-sans text-[11px] tracking-[.22em] uppercase text-muted mr-2">{t("price_from")}</span>
                      <span className="text-[44px] leading-none">{price.toLocaleString("da-DK")}</span>
                      <span className="text-[20px] ml-2">{t("price_currency")}</span>
                    </p>
                  ) : (
                    <p className="font-serif italic text-[30px] leading-none text-gold">{t("price_on_request")}</p>
                  )}
                </div>

                <ul className="flex flex-col gap-4 mt-8 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-cream/80">
                      <span className="mt-[9px] w-[5px] h-[5px] rotate-45 bg-gold flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#book" className={`${featured ? "btn-gold" : "btn-outline"} mt-auto`}>
                  {t("price_cta")}
                </a>
              </div>
            );
          })}
        </div>

        <p className="reveal text-center text-[13px] text-muted mt-10">{t("price_note")}</p>
      </div>
    </section>
  );
}
