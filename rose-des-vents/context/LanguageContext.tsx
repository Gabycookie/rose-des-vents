"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "fr" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "fr", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("rdv_lang") as Lang | null;
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((l) => {
      const next = l === "fr" ? "en" : "fr";
      localStorage.setItem("rdv_lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
