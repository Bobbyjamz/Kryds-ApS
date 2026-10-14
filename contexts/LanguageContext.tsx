"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Lang, type TranslationKey } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  t: (key: TranslationKey) => string;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "da",
  t: (k) => translations.da[k],
  toggle: () => {},
});

const STORAGE_KEY = "atelier-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("da");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "da" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, t, toggle: () => setLang((l) => (l === "da" ? "en" : "da")) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
