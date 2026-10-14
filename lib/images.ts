/**
 * Billedpladser på siden.
 *
 * Læg et billede i public/billeder/ med samme navn som `file`
 * (fx public/billeder/hero.jpg), så vises det automatisk i stedet for pladsholderen.
 * Understøttede formater: jpg, jpeg, png, webp, avif.
 */
export const IMAGE_SLOTS = {
  hero:                  { file: "hero",                  ratio: "4/5", label: "Forside" },
  "kollektion-business": { file: "kollektion-business",   ratio: "3/4", label: "Business" },
  "kollektion-bryllup":  { file: "kollektion-bryllup",    ratio: "3/4", label: "Bryllup" },
  "kollektion-smoking":  { file: "kollektion-smoking",    ratio: "3/4", label: "Smoking" },
  "kollektion-skjorter": { file: "kollektion-skjorter",   ratio: "3/4", label: "Skjorter" },
  "lookbook-1":          { file: "lookbook-1",            ratio: "3/4", label: "Lookbook 1" },
  "lookbook-2":          { file: "lookbook-2",            ratio: "3/4", label: "Lookbook 2" },
  "lookbook-3":          { file: "lookbook-3",            ratio: "3/4", label: "Lookbook 3" },
  "lookbook-4":          { file: "lookbook-4",            ratio: "3/4", label: "Lookbook 4" },
  "lookbook-5":          { file: "lookbook-5",            ratio: "3/4", label: "Lookbook 5" },
  "lookbook-6":          { file: "lookbook-6",            ratio: "3/4", label: "Lookbook 6" },
  atelier:               { file: "atelier",               ratio: "4/5", label: "Atelieret" },
} as const;

export type ImageSlot = keyof typeof IMAGE_SLOTS;

/** slot → offentlig sti (fx "/billeder/hero.jpg") eller null hvis billedet mangler */
export type ResolvedImages = Record<ImageSlot, string | null>;

export const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"] as const;
