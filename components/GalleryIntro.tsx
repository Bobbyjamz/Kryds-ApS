"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GalleryIntro() {
  const { t } = useLanguage();
  return (
    <div className="px-[52px] max-[900px]:px-5">
      <div className="container-x flex items-end justify-between gap-8 flex-wrap">
        <div className="max-w-[640px]">
          <div className="eyebrow">{t("gal_eyebrow")}</div>
          <h1 className="h2 mt-6">
            {t("gal_h1")} <em className="italic text-gold">{t("gal_h1_accent")}</em>
          </h1>
          <p className="text-[16px] leading-[1.8] text-muted mt-5">{t("gal_intro")}</p>
        </div>
        <Link href="/#book" className="btn-gold">{t("look_cta")}</Link>
      </div>
    </div>
  );
}
