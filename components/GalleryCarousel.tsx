"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import type { GalleryImage } from "@/lib/gallery";
import { site } from "@/lib/site";

/**
 * Lille karrusel der ruller af sig selv og pauser ved hover. Listen vises to gange efter hinanden,
 * så den kan køre i ring uden hop; kopien er skjult for skærmlæsere.
 */
export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const { t } = useLanguage();
  const items = [...images, ...images];

  return (
    <div className="gallery">
      <ul className="gallery-track" style={{ animationDuration: `${images.length * 3.5}s` }}>
        {items.map((g, i) => {
          const copy = i >= images.length;
          return (
            <li key={i} className="gallery-item" aria-hidden={copy || undefined}>
              <Image
                src={g.src}
                width={g.width}
                height={g.height}
                alt={copy ? "" : `${site.name} — ${t("gal_photo")} ${i + 1}`}
                sizes="(max-width: 640px) 50vw, 260px"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
