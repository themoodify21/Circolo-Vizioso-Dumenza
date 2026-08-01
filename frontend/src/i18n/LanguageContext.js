import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, LANGS } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== "undefined" && window.localStorage.getItem("cv-lang");
    if (saved && translations[saved]) return saved;
    return "it";
  });

  useEffect(() => {
    window.localStorage.setItem("cv-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
