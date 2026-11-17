"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { site, phoneHref } from "@/lib/site";

/**
 * Fast bjælke i bunden på mobil med "Ring" og "Book tid".
 * De fleste kommer fra Instagram på telefonen, og menuens Book-knap er skjult på smalle skærme.
 */
export default function MobileBookBar() {
  const { t } = useLanguage();

  return (
    <>
      {/* Plads i bunden, så bjælken ikke dækker footeren */}
      <div className="h-[72px] min-[561px]:hidden" aria-hidden="true" />
      <div
        className="fixed bottom-0 left-0 right-0 z-[450] grid grid-cols-2 gap-px bg-[var(--hairline)] border-t border-[var(--hairline)] min-[561px]:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {site.phone && (
          <a
            href={phoneHref(site.phone)}
            className="flex items-center justify-center h-[60px] bg-black font-sans text-[12px] tracking-[.2em] uppercase text-cream no-underline"
          >
            {t("book_call")}
          </a>
        )}
        <Link
          href="/#book"
          className={`flex items-center justify-center h-[60px] bg-gold font-sans text-[12px] tracking-[.2em] uppercase text-black no-underline ${site.phone ? "" : "col-span-2"}`}
        >
          {t("nav_book")}
        </Link>
      </div>
    </>
  );
}
