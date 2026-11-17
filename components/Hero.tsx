"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { startPrice, formatAmount } from "@/lib/site";

export default function Hero() {
  const { t, lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const points = [t("hero_point_1"), t("hero_point_2"), t("hero_point_3")];

  // Ved "reducer bevægelse" vises kun stillbilledet
  useEffect(() => {
    const v = videoRef.current;
    if (v && window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden px-[52px] pt-[170px] pb-[110px] max-[1099px]:px-5 max-[1099px]:items-end max-[1099px]:pt-[58svh] max-[1099px]:pb-16">
      {/* Brand-videoen i loop: på mobil i hele toppen, på computer i en høj ramme til højre */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[80svh] min-[1100px]:inset-x-auto min-[1100px]:top-1/2 min-[1100px]:-translate-y-[42%] min-[1100px]:right-[max(52px,calc((100vw-1320px)/2))] min-[1100px]:h-[min(74svh,760px)] min-[1100px]:aspect-[9/16]"
      >
        <div className="hero-frame relative h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/video/hero.mp4"
            poster="/video/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="hero-shade absolute inset-0 min-[1100px]:hidden" />
        </div>
      </div>

      <div className="container-x relative z-[1] w-full">
        <div className="max-w-[640px] min-[1100px]:max-w-[560px] min-[1280px]:max-w-[640px]">
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
