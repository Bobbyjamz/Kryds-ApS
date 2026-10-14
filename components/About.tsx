"use client";

import ModelImage from "./ModelImage";
import LogoMark from "./LogoMark";
import { site } from "@/lib/site";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="om" className="section bg-black2 border-y border-[var(--hairline)]" ref={ref}>
      <div className="container-x grid grid-cols-2 gap-24 items-center max-[900px]:grid-cols-1 max-[900px]:gap-14">
        <div className="reveal frame-offset relative max-w-[520px] w-full max-[900px]:max-w-[460px] max-[900px]:mr-[18px]">
          <ModelImage slot="atelier" sizes="(max-width: 900px) 92vw, 520px" alt={`Atelieret hos ${site.name}`} />
        </div>

        <div>
          <div className="eyebrow reveal">{t("about_eyebrow")}</div>
          <h2 className="h2 reveal mt-6">
            {t("about_h2")}
            <br />
            <em className="italic text-gold">{t("about_h2_accent")}</em>
          </h2>
          <p className="reveal text-[17px] leading-[1.85] text-cream/75 mt-8 max-w-[520px]">{t("about_p1")}</p>
          <p className="reveal text-[16px] leading-[1.85] text-muted mt-5 max-w-[520px]">{t("about_p2")}</p>
          <div className="reveal flex items-center gap-8 mt-11 flex-wrap">
            <a href="#book" className="btn-gold">{t("about_cta")}</a>
            <LogoMark size={38} />
          </div>
        </div>
      </div>
    </section>
  );
}
