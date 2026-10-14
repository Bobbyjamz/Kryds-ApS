"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { site, phoneHref } from "@/lib/site";
import type { TranslationKey } from "@/lib/translations";

const LINKS: { href: string; key: TranslationKey }[] = [
  { href: "/#kollektion", key: "nav_collection" },
  { href: "/#proces", key: "nav_process" },
  { href: "/#lookbook", key: "nav_lookbook" },
  { href: "/#priser", key: "nav_prices" },
  { href: "/#om", key: "nav_about" },
  { href: "/#book", key: "nav_book" },
];

const SOCIALS = [
  { label: "Instagram", href: site.instagram },
  { label: "Facebook", href: site.facebook },
].filter((s) => s.href);

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-sans text-[10px] tracking-[.3em] uppercase text-gold mb-5">{children}</h2>;
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20 px-[52px] pt-24 pb-10 max-[900px]:px-5 max-[900px]:pt-16">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <Logo variant="full" />
          <p className="font-sans text-[11px] tracking-[.32em] uppercase text-gold mt-8">{t("footer_tagline")}</p>
        </div>

        <div className={`grid ${SOCIALS.length > 0 ? "grid-cols-3" : "grid-cols-2"} gap-12 mt-20 pt-14 border-t border-[var(--hairline)] max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:text-center`}>
          <div>
            <ColumnTitle>{t("footer_nav")}</ColumnTitle>
            <ul className="flex flex-col gap-3">
              {LINKS.map(({ href, key }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] text-muted no-underline hover:text-cream transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>{t("footer_contact")}</ColumnTitle>
            <ul className="flex flex-col gap-3 text-[15px] text-muted">
              {site.phone && (
                <li>
                  <a href={phoneHref(site.phone)} className="no-underline hover:text-cream transition-colors">{site.phone}</a>
                </li>
              )}
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="no-underline hover:text-cream transition-colors">{site.email}</a>
                </li>
              )}
              {site.address && <li>{site.address}</li>}
              {site.openingHours.map((h) => (
                <li key={h.days}>
                  {h.days} {h.hours}
                </li>
              ))}
            </ul>
          </div>

          {SOCIALS.length > 0 && (
            <div>
              <ColumnTitle>{t("footer_follow")}</ColumnTitle>
              <ul className="flex flex-col gap-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted no-underline hover:text-cream transition-colors">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4 mt-16 pt-8 border-t border-[var(--hairline)] text-[12px] text-muted/70 max-[760px]:justify-center max-[760px]:text-center">
          <p>
            © {year} {site.legalName}. {t("footer_rights")}
            {site.cvr && <> · CVR {site.cvr}</>}
          </p>
          <Link href="/privatlivspolitik" className="no-underline hover:text-cream transition-colors">
            {t("footer_privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
