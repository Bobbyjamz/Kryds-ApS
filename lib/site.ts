import type { Lang } from "./translations";

/**
 * Virksomhedsoplysninger — ret dem her, så opdateres hele siden.
 * Tomme felter ("") bliver automatisk skjult på siden.
 */
export const site = {
  name: "Atelier",
  /** Juridisk navn der står i footer og privatlivspolitik */
  legalName: "Atelier",
  cvr: "",

  // TODO: Midlertidigt KrydsByg's kontaktinfo — skift til Atelier's egen
  phone: "+45 42 77 88 66",
  email: "kontakt@krydsbyg.com",

  /** Fx "Store Kongensgade 1, 1264 København K" */
  address: "",
  /** Fx [{ days: "Man–Fre", hours: "10–18" }, { days: "Lør", hours: "10–15" }] */
  openingHours: [] as { days: string; hours: string }[],

  instagram: "",
  facebook: "",

  /**
   * Vis små hjælpetekster (filnavn + format) på billedpladser der mangler billede.
   * Sæt til false, når photoshoot'et er lagt ind.
   */
  showImageHints: true,
};

/** Startpris i kr. for et jakkesæt — vises som "Jakkesæt fra 1.699 kr." */
export const startPrice = 1699;

/** Kun beløbet, fx "1.699" (dansk) eller "1,699" (engelsk) */
export function formatAmount(amount: number, lang: Lang): string {
  return amount.toLocaleString(lang === "da" ? "da-DK" : "en-GB");
}

/** Beløb med valuta, fx "1.699 kr." eller "DKK 1,699" */
export function formatPrice(amount: number, lang: Lang): string {
  return lang === "da" ? `${formatAmount(amount, lang)} kr.` : `DKK ${formatAmount(amount, lang)}`;
}

export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
