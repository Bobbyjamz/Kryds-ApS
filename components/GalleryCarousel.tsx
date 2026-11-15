"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { GALLERY } from "@/lib/gallery";
import { site } from "@/lib/site";

/**
 * Karrusel der ruller af sig selv. Listen vises to gange efter hinanden, så den kan køre i ring uden hop;
 * kopien er skjult for skærmlæsere. Hvert foto findes kun én gang i GALLERY.
 */
export default function GalleryCarousel() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const items = [...GALLERY, ...GALLERY];

  return (
    <div className="flex flex-col gap-6">
      <div className="gallery" data-paused={paused}>
        <ul className="gallery-track" style={{ animationDuration: `${GALLERY.length * 3.2}s` }}>
          {items.map((g, i) => {
            const copy = i >= GALLERY.length;
            return (
              <li key={i} className="gallery-item" aria-hidden={copy || undefined}>
                <Image
                  src={g.src}
                  width={g.width}
                  height={g.height}
                  alt={copy ? "" : `${site.name} — ${t("gal_photo")} ${i + 1}`}
                  sizes="(max-width: 640px) 70vw, 380px"
                  loading={i < 6 ? "eager" : "lazy"}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container-x w-full flex items-center justify-between gap-4 px-[52px] max-[900px]:px-5">
        <p className="font-sans text-[11px] tracking-[.24em] uppercase text-cream/60">
          {GALLERY.length} {t("gal_count")}
        </p>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="font-sans text-[11px] tracking-[.24em] uppercase text-gold border border-gold/40 px-5 py-3 hover:bg-gold/10 transition-colors cursor-pointer bg-transparent"
        >
          {paused ? t("gal_play") : t("gal_pause")}
        </button>
      </div>
    </div>
  );
}
