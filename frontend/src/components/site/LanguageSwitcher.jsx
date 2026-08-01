import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

export default function LanguageSwitcher({ tone = "dark" }) {
  const { lang, setLang, langs } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const color = tone === "light" ? "text-crema" : "text-marrone";

  return (
    <div className="relative" ref={ref}>
      <button
        data-testid="language-switcher-button"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] ${color} transition-opacity hover:opacity-60`}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.6} />
        {lang}
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-40 overflow-hidden rounded-md border border-beige bg-crema/95 backdrop-blur-md shadow-xl"
            data-testid="language-menu"
          >
            {langs.map((l) => (
              <li key={l.code}>
                <button
                  data-testid={`lang-option-${l.code}`}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-marrone hover-warm hover:bg-beige/50"
                >
                  <span>{l.name}</span>
                  {lang === l.code && <Check className="h-3.5 w-3.5 text-terracotta" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
