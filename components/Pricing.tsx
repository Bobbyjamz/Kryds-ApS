"use client";

import Monogram from "./Monogram";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { startPrice, formatAmount } from "@/lib/site";
import type { TranslationKey } from "@/lib/translations";

const FEATURES: TranslationKey[] = ["price_f1", "price_f2", "price_f3", "price_f4"];

export default function Pricing() {
  const ref = useReveal<HTMLElement>();
  const { t, lang } = useLanguage();

  return (
    <section id="priser" className="section" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("price_eyebrow")} title={t("price_h2")} accent={t("price_h2_accent")} intro={t("price_intro")} center />

        <div className="reveal relative mt-16 max-w-[920px] mx-auto grid grid-cols-[1fr_1.15fr] border border-gold/40 bg-black2 max-[760px]:grid-cols-1">
          <span className="absolute top-0 left-0 right-0 h-px bg-gold" aria-hidden="true" />

          <div className="flex flex-col items-center justify-center text-center px-10 py-14 border-r border-[var(--hairline)] max-[760px]:border-r-0 max-[760px]:border-b max-[760px]:py-12">
            <Monogram size={52} className="opacity-80" />
            <p className="font-sans text-[11px] tracking-[.3em] uppercase text-muted mt-8">{t("price_from")}</p>
            <p className="font-serif text-gold leading-none mt-3 lining-nums">
              <span className="text-[clamp(64px,8vw,88px)]">{formatAmount(startPrice, lang)}</span>
              <span className="text-[28px] ml-2">{t("price_currency")}</span>
            </p>
          </div>

          <div className="flex flex-col px-12 py-14 max-[760px]:px-8 max-[760px]:py-10">
            <ul className="flex flex-col gap-5">
              {FEATURES.map((k) => (
                <li key={k} className="flex items-start gap-4 text-[16px] text-cream/85">
                  <span className="mt-[10px] w-[5px] h-[5px] rotate-45 bg-gold flex-shrink-0" aria-hidden="true" />
                  {t(k)}
                </li>
              ))}
            </ul>
            <a href="#book" className="btn-gold mt-10">
              {t("price_cta")}
            </a>
          </div>
        </div>

        <p className="reveal text-center text-[13px] leading-[1.7] text-muted mt-8 max-w-[520px] mx-auto">{t("price_note")}</p>
      </div>
    </section>
  );
}
