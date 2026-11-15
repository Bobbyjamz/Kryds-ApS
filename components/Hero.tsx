"use client";

import Image from "next/image";
import { useImages } from "@/contexts/ImagesContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { startPrice, formatAmount } from "@/lib/site";

export default function Hero() {
  const { t, lang } = useLanguage();
  const images = useImages();
  const points = [t("hero_point_1"), t("hero_point_2"), t("hero_point_3")];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden px-[52px] pt-[170px] pb-[110px] max-[900px]:px-5 max-[900px]:items-end max-[900px]:pt-[58svh] max-[900px]:pb-16">
      {/* Billede i fuld skærm med langsom zoom ud; på mobil kun øverst, så teksten står under ansigtet */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-full overflow-hidden max-[900px]:h-[80svh]">
        {images.hero && (
          <Image
            src={images.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-zoom object-cover object-[60%_4%] max-[900px]:object-[50%_0%]"
          />
        )}
        <div className="hero-shade absolute inset-0" />
      </div>

      <div className="container-x relative z-[1] w-full">
        <div className="max-w-[640px]">
          <div className="eyebrow opacity-0 animate-fadeup" style={{ animationDelay: ".15s" }}>
            {t("hero_eyebrow")}
          </div>
          <h1
            className="font-sans font-light uppercase text-[clamp(38px,4.6vw,72px)] leading-[1.08] tracking-[.06em] mt-8 opacity-0 animate-fadeup"
            style={{ animationDelay: ".3s" }}
          >
            {t("hero_h1_1")}
            <br />
            <span className="text-gold">{t("hero_h1_2")}</span>
          </h1>
          <p
            className="max-w-[480px] text-[17px] leading-[1.8] text-cream/75 mt-8 opacity-0 animate-fadeup"
            style={{ animationDelay: ".45s" }}
          >
            {t("hero_desc")}
          </p>
          <p className="flex items-baseline gap-3 mt-9 opacity-0 animate-fadeup" style={{ animationDelay: ".55s" }}>
            <span className="font-sans text-[11px] tracking-[.28em] uppercase text-cream/60">{t("hero_price_label")}</span>
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
            className="flex flex-wrap gap-x-9 gap-y-3 mt-14 pt-8 border-t border-gold/25 max-w-[620px] opacity-0 animate-fadeup"
            style={{ animationDelay: ".75s" }}
          >
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-sans text-[12px] tracking-[.16em] uppercase text-cream/70">
                <span className="w-[5px] h-[5px] rotate-45 bg-gold" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
