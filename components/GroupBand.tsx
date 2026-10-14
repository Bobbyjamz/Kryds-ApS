"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GroupBand() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  // Vælg "Gruppe" i bookingformularen, så kunden ikke skal gøre det selv
  const preselectGroup = () => {
    const select = document.getElementById("occasion") as HTMLSelectElement | null;
    if (select) select.value = t("occ_group");
  };

  return (
    <section className="bg-gold text-black px-[52px] py-20 max-[900px]:px-5 max-[900px]:py-16" ref={ref}>
      <div className="container-x reveal flex items-center justify-between gap-12 max-[900px]:flex-col max-[900px]:items-start">
        <div className="max-w-[660px]">
          <p className="font-sans text-[11px] tracking-[.32em] uppercase">{t("group_eyebrow")}</p>
          <h2 className="font-serif font-normal text-[clamp(36px,4.2vw,56px)] leading-[1.05] mt-4">
            {t("group_h2")} <em className="italic">{t("group_h2_accent")}</em>
          </h2>
          <p className="text-[16px] leading-[1.8] mt-5">{t("group_text")}</p>
        </div>
        <a
          href="#book"
          onClick={preselectGroup}
          className="flex-shrink-0 inline-flex items-center justify-center font-sans text-[12px] tracking-[.22em] uppercase bg-black text-cream px-9 py-4 no-underline transition-colors hover:bg-black2"
        >
          {t("group_cta")}
        </a>
      </div>
    </section>
  );
}
