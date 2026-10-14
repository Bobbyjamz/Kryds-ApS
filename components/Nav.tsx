"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import { site, phoneHref } from "@/lib/site";

const LINKS: { href: string; key: TranslationKey }[] = [
  { href: "/#kollektion", key: "nav_collection" },
  { href: "/#proces", key: "nav_process" },
  { href: "/#lookbook", key: "nav_lookbook" },
  { href: "/#priser", key: "nav_prices" },
  { href: "/#om", key: "nav_about" },
];

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, t, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label={t("lang_switch")}
      title={t("lang_switch")}
      className={`font-sans text-[11px] tracking-[.2em] uppercase text-muted hover:text-gold border border-[var(--hairline)] hover:border-gold/50 px-[10px] py-[6px] transition-colors select-none min-w-[40px] text-center ${className}`}
    >
      {lang === "da" ? "EN" : "DA"}
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Skjul ved scroll ned, vis med det samme ved scroll op
      setNavHidden(y > 120 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lås body-scroll når mobilmenuen er åben
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const height = scrolled ? 64 : 84;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-[52px] max-[900px]:px-5"
        style={{
          height,
          background: scrolled || menuOpen ? "rgba(23,24,29,.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
          transform: navHidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
          transition: "height 300ms, background 300ms, border-color 300ms, transform 250ms ease",
        }}
      >
        <Logo />

        <ul className="flex gap-8 list-none items-center">
          {LINKS.map(({ href, key }) => (
            <li key={href} className="max-[1100px]:hidden">
              <Link
                href={href}
                className="font-sans text-[12px] tracking-[.2em] uppercase text-cream/70 no-underline transition-colors hover:text-gold"
              >
                {t(key)}
              </Link>
            </li>
          ))}
          <li className="max-[1100px]:hidden">
            <LangToggle />
          </li>
          <li className="max-[560px]:hidden">
            <Link
              href="/#book"
              className="font-sans font-normal text-[12px] tracking-[.2em] uppercase bg-gold text-black px-6 py-3 no-underline transition-colors hover:bg-gold2"
            >
              {t("nav_book")}
            </Link>
          </li>
          <li className="hidden max-[1100px]:block">
            <button
              aria-label={menuOpen ? t("nav_menu_close") : t("nav_menu_open")}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative flex items-center justify-center w-11 h-11 bg-transparent border-none cursor-pointer p-0"
            >
              <span className="flex flex-col justify-center gap-[6px] w-[26px]">
                <span
                  className="block h-px bg-gold transition-transform duration-300"
                  style={menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}}
                />
                <span className="block h-px bg-gold transition-opacity duration-300" style={menuOpen ? { opacity: 0 } : {}} />
                <span
                  className="block h-px bg-gold transition-transform duration-300"
                  style={menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
                />
              </span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobilmenu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[490] flex flex-col px-7 overflow-y-auto animate-fadeIn min-[1101px]:hidden"
          style={{ paddingTop: height + 28, paddingBottom: 32, background: "#17181D" }}
        >
          <nav className="flex flex-col gap-2">
            {LINKS.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="block py-2 font-serif text-[34px] leading-tight text-cream no-underline transition-colors hover:text-gold"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <Link
            href="/#book"
            onClick={closeMenu}
            className="mt-8 self-start font-sans text-[12px] tracking-[.2em] uppercase bg-gold text-black px-7 py-4 no-underline transition-colors hover:bg-gold2"
          >
            {t("nav_book")}
          </Link>

          <LangToggle className="mt-8 self-start" />

          {(site.phone || site.email) && (
            <div className="mt-auto pt-8 border-t border-[var(--hairline)] flex flex-col gap-1">
              {site.phone && (
                <a href={phoneHref(site.phone)} className="text-[14px] text-muted no-underline hover:text-cream transition-colors">
                  {site.phone}
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} className="text-[14px] text-muted no-underline hover:text-cream transition-colors">
                  {site.email}
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
