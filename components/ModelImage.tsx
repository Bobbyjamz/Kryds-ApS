"use client";

import Image from "next/image";
import Monogram from "./Monogram";
import { useImages } from "@/contexts/ImagesContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGE_SLOTS, type ImageSlot } from "@/lib/images";
import { site } from "@/lib/site";

interface ModelImageProps {
  slot: ImageSlot;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Viser billedet fra public/billeder/<slot>.jpg hvis det findes,
 * ellers en pladsholder med monogrammet indtil photoshoot'et er klar.
 */
export default function ModelImage({ slot, alt, sizes, priority, className = "" }: ModelImageProps) {
  const images = useImages();
  const { t } = useLanguage();
  const src = images[slot];
  const { file, ratio, label } = IMAGE_SLOTS[slot];

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="placeholder-surface absolute inset-0 flex flex-col items-center justify-center text-center" role="img" aria-label={alt}>
          <div className="absolute inset-3 border border-gold/10 pointer-events-none" />
          <Monogram size={64} className="opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
          <span className="mt-5 font-sans text-[10px] tracking-[.35em] uppercase text-gold/60">{t("img_coming")}</span>
          {site.showImageHints && (
            <span className="absolute bottom-6 left-0 right-0 px-4 font-sans text-[10px] tracking-[.08em] text-muted/60">
              {label} · public/billeder/{file}.jpg · {ratio.replace("/", ":")}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
