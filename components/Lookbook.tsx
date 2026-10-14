"use client";

import ModelImage from "./ModelImage";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ImageSlot } from "@/lib/images";
import { site } from "@/lib/site";

const SLOTS: ImageSlot[] = ["lookbook-1", "lookbook-2", "lookbook-3", "lookbook-4", "lookbook-5", "lookbook-6"];

export default function Lookbook() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="lookbook" className="section pb-[180px] max-[900px]:pb-[80px]" ref={ref}>
      <div className="container-x">
        <SectionHeading eyebrow={t("look_eyebrow")} title={t("look_h2")} accent={t("look_h2_accent")} intro={t("look_intro")} center />

        <div className="grid grid-cols-3 gap-6 mt-16 max-[900px]:grid-cols-2 max-[900px]:gap-3">
          {SLOTS.map((slot, i) => (
            // Midterkolonnen er forskudt for et redaktionelt look
            <div key={slot} className={i % 3 === 1 ? "min-[901px]:translate-y-16" : ""}>
              <div className="group reveal">
                <ModelImage
                  slot={slot}
                  sizes="(max-width: 900px) 50vw, 33vw"
                  alt={`Lookbook ${i + 1} — ${site.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
