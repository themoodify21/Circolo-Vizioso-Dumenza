import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { CONTACT } from "../../lib/config";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="relative overflow-hidden bg-mattone pt-20 pb-10 text-crema" data-testid="footer">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center border-b border-crema/15 pb-14 text-center">
          <img src="/logo-white.png" alt="Circolo Vizioso" className="h-16 w-auto sm:h-20" />
          <p className="mt-8 font-serif text-4xl italic sm:text-6xl">{f.tagline}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-crema/60">{f.made}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-10 text-center text-sm text-crema/70 sm:grid-cols-3 sm:text-left">
          <div>{CONTACT.address}</div>
          <div className="sm:text-center">
            <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-crema">{CONTACT.phoneDisplay}</a>
            <span className="mx-2">·</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-crema">{CONTACT.email}</a>
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="footer-instagram" className="flex items-center gap-2 hover:text-crema">
              <Instagram className="h-4 w-4" strokeWidth={1.6} />
              <span className="hidden sm:inline">@{CONTACT.instagram}</span>
            </a>
            <a href={CONTACT.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="footer-facebook" className="flex items-center gap-2 hover:text-crema">
              <Facebook className="h-4 w-4" strokeWidth={1.6} />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-crema/40 sm:flex-row">
          <span>© {new Date().getFullYear()} {CONTACT.name}</span>
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}
