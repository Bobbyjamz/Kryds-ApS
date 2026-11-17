/**
 * Billedpladser på siden.
 *
 * Læg et billede i public/billeder/ med samme navn som `file`
 * (fx public/billeder/hero.jpg), så vises det automatisk i stedet for pladsholderen.
 * Understøttede formater: jpg, jpeg, png, webp, avif.
 */
export const IMAGE_SLOTS = {
  hero:                  { file: "hero",                  ratio: "4/5", label: "Forside" },
  "variant-sort":        { file: "variant-sort",          ratio: "3/4", label: "Variant: sort" },
  "variant-navy":        { file: "variant-navy",          ratio: "3/4", label: "Variant: navy" },
  "variant-naalestribe": { file: "variant-naalestribe",   ratio: "3/4", label: "Variant: nålestribe" },
  "variant-vest":        { file: "variant-vest",          ratio: "3/4", label: "Variant: vest" },
  atelier:             { file: "atelier",               ratio: "4/5", label: "Atelieret" },
} as const;

export type ImageSlot = keyof typeof IMAGE_SLOTS;

/** slot → offentlig sti (fx "/billeder/hero.jpg") eller null hvis billedet mangler */
export type ResolvedImages = Record<ImageSlot, string | null>;

export const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"] as const;
