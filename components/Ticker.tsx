"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import { startPrice, formatPrice } from "@/lib/site";

const KEYS: TranslationKey[] = ["ticker_1", "ticker_2", "ticker_3", "ticker_4", "ticker_5", "ticker_6", "ticker_7", "ticker_8"];

export default function Ticker() {
  const { t, lang } = useLanguage();
  const items = KEYS.map((k) => t(k).replace("{price}", formatPrice(startPrice, lang)));

  return (
    <div aria-hidden="true" className="border-y border-gold/20 bg-black2 h-[58px] overflow-hidden flex items-center whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-serif italic text-[19px] text-gold/90 px-9 flex items-center gap-[72px]">
            {item}
            <span className="w-[5px] h-[5px] rotate-45 border border-gold/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
