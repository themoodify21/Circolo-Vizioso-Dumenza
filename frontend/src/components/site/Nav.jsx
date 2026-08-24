import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { IS_STATIC } from "../../lib/static";

const links = [
  { id: "/storia", key: "story", route: true },
  { id: "#menu", key: "menu" },
  { id: "/eventi", key: "events", route: true },
  { id: "#contatti", key: "contact" },
];

export default function Nav() {
  const { t } = useLang();
  const scrolled = true; // no hero behind the nav — keep it solid from the top
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={IS_STATIC ? false : { y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[9990] flex justify-center px-4 pt-4 sm:pt-6"
        data-testid="site-nav"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-colors duration-500 sm:px-6 ${
            scrolled
              ? "border-beige bg-crema/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(47,33,26,0.6)]"
              : "border-crema/20 bg-crema/10 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-2" data-testid="nav-logo">
            <img
              src={scrolled ? "/logo-dark.png" : "/logo-white.png"}
              alt="Circolo Vizioso"
              className="h-7 w-auto sm:h-8 transition-opacity duration-500"
            />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                {l.route ? (
                  <Link
                    to={l.id}
                    data-testid={`nav-link-${l.key}`}
                    className={`text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${
                      scrolled ? "text-marrone" : "text-crema"
                    }`}
                  >
                    {t.nav[l.key]}
                  </Link>
                ) : (
                  <a
                    href={l.id}
                    data-testid={`nav-link-${l.key}`}
                    className={`text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${
                      scrolled ? "text-marrone" : "text-crema"
                    }`}
                  >
                    {t.nav[l.key]}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <LanguageSwitcher tone={scrolled ? "dark" : "light"} />
            <a
              href="#contatti"
              data-testid="nav-reserve-button"
              className="hidden rounded-full bg-terracotta px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-crema transition-colors duration-300 hover:bg-mattone sm:inline-block"
            >
              {t.nav.reserve}
            </a>
            <button
              className={`lg:hidden ${scrolled ? "text-marrone" : "text-crema"}`}
              onClick={() => setOpen(true)}
              data-testid="mobile-menu-open"
              aria-label="Open menu"
            >
              <Menu strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9995] bg-mattone lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <img src="/logo-white.png" alt="Circolo Vizioso" className="h-8 w-auto" />
              <button onClick={() => setOpen(false)} data-testid="mobile-menu-close" aria-label="Close menu" className="text-crema">
                <X strokeWidth={1.5} />
              </button>
            </div>
            <ul className="mt-16 flex flex-col gap-2 px-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {l.route ? (
                    <Link
                      to={l.id}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-nav-link-${l.key}`}
                      className="block border-b border-crema/15 py-4 font-serif text-4xl text-crema"
                    >
                      {t.nav[l.key]}
                    </Link>
                  ) : (
                    <a
                      href={l.id}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-nav-link-${l.key}`}
                      className="block border-b border-crema/15 py-4 font-serif text-4xl text-crema"
                    >
                      {t.nav[l.key]}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pt-10">
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-crema px-8 py-3 text-sm font-semibold uppercase tracking-widest text-mattone"
              >
                {t.nav.reserve}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
