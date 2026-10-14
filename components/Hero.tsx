"use client";

import ModelImage from "./ModelImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { startPrice, formatAmount } from "@/lib/site";

export default function Hero() {
  const { t, lang } = useLanguage();
  const points = [t("hero_point_1"), t("hero_point_2"), t("hero_point_3")];

  return (
    <section className="relative min-h-screen overflow-hidden px-[52px] pt-[150px] pb-[110px] max-[900px]:px-5 max-[900px]:pt-[120px] max-[900px]:pb-20">
      {/* Guldringe som i logoet */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none max-[900px]:hidden">
        <div className="hero-ring" style={{ width: 1100, height: 1100, left: "74%", top: "52%" }} />
        <div className="hero-ring" style={{ width: 780, height: 780, left: "74%", top: "52%", borderColor: "rgb(var(--c-gold) / .18)" }} />
      </div>

      <div className="container-x relative z-[1] grid grid-cols-[1.12fr_.88fr] gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-16">
        <div>
          <div className="eyebrow opacity-0 animate-fadeup" style={{ animationDelay: ".15s" }}>
            {t("hero_eyebrow")}
          </div>
          <h1
            className="font-serif font-normal text-[clamp(44px,5.6vw,92px)] leading-[1] tracking-[-.01em] mt-8 opacity-0 animate-fadeup"
            style={{ animationDelay: ".3s" }}
          >
            {t("hero_h1_1")}
            <br />
            <em className="italic text-gold">{t("hero_h1_2")}</em>
          </h1>
          <p
            className="max-w-[480px] text-[17px] leading-[1.8] text-cream/70 mt-8 opacity-0 animate-fadeup"
            style={{ animationDelay: ".45s" }}
          >
            {t("hero_desc")}
          </p>
          <p className="flex items-baseline gap-3 mt-9 opacity-0 animate-fadeup" style={{ animationDelay: ".55s" }}>
            <span className="font-sans text-[11px] tracking-[.28em] uppercase text-muted">{t("hero_price_label")}</span>
            <span className="font-serif text-[40px] leading-none text-gold lining-nums">
              {formatAmount(startPrice, lang)}
              <span className="text-[22px] ml-[6px]">{t("price_currency")}</span>
            </span>
          </p>
          <div className="flex flex-wrap gap-4 mt-8 opacity-0 animate-fadeup" style={{ animationDelay: ".65s" }}>
            <a href="#book" className="btn-gold">{t("hero_btn_book")}</a>
            <a href="#kollektion" className="btn-outline">{t("hero_btn_collection")}</a>
          </div>
          <ul
            className="flex flex-wrap gap-x-9 gap-y-3 mt-14 pt-8 border-t border-[var(--hairline)] max-w-[620px] opacity-0 animate-fadeup"
            style={{ animationDelay: ".75s" }}
          >
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-sans text-[12px] tracking-[.16em] uppercase text-muted">
                <span className="w-[5px] h-[5px] rotate-45 bg-gold" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="frame-offset relative w-full max-w-[540px] justify-self-end opacity-0 animate-fadeup max-[900px]:justify-self-center max-[900px]:max-w-[460px] max-[900px]:mr-[18px]"
          style={{ animationDelay: ".4s" }}
        >
          <ModelImage
            slot="hero"
            priority
            sizes="(max-width: 900px) 92vw, 540px"
            alt="Model i jakkesæt fra Atelier Copenhagen"
          />
        </div>
      </div>
    </section>
  );
}
