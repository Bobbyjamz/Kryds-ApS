"use client";

import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";

const STEPS: { num: string; title: TranslationKey; desc: TranslationKey }[] = [
  { num: "01", title: "proc_1_title", desc: "proc_1_desc" },
  { num: "02", title: "proc_2_title", desc: "proc_2_desc" },
  { num: "03", title: "proc_3_title", desc: "proc_3_desc" },
  { num: "04", title: "proc_4_title", desc: "proc_4_desc" },
];

export default function Process() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="proces" className="section bg-black2 border-y border-[var(--hairline)]" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("proc_eyebrow")} title={t("proc_h2")} accent={t("proc_h2_accent")} />

        <ol className="grid grid-cols-4 mt-16 border-t border-gold/20 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className="reveal group relative pt-10 pr-8 max-[560px]:pr-0 max-[560px]:pb-4"
            >
              {/* Guldprik på linjen */}
              <span className="absolute -top-[5px] left-0 w-[9px] h-[9px] rotate-45 bg-black2 border border-gold transition-colors group-hover:bg-gold" aria-hidden="true" />
              <span className="font-serif italic text-[56px] leading-none text-gold/80">{s.num}</span>
              <h3 className="font-serif text-[26px] leading-tight mt-5 text-cream">{t(s.title)}</h3>
              <p className="text-[15px] leading-[1.75] text-muted mt-3 max-w-[280px]">{t(s.desc)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
