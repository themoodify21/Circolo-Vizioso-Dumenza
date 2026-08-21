import React from "react";
import { Calendar } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { FESTA } from "../../data/festa";
import { CONTACT } from "../../lib/config";
import { Reveal } from "./Reveal";

// Single current event: poster + clear translation in the selected language.
export default function FestaEvent({ tone = "light" }) {
  const { lang } = useLang();
  const f = FESTA[lang] || FESTA.it;
  const dark = tone === "dark";
  const text = dark ? "text-crema" : "text-marrone";
  const sub = dark ? "text-crema/75" : "text-nero/75";
  const card = dark ? "border-crema/15 bg-nero/30" : "border-beige bg-crema";

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2" data-testid="festa-event">
      <Reveal>
        <img
          src={FESTA.image}
          alt={f.title}
          className="w-full rounded-sm shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
          data-testid="festa-poster"
        />
      </Reveal>

      <Reveal delay={0.12} className={`rounded-sm border p-8 sm:p-10 ${card}`}>
        <div className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-beige" : "text-terracotta"}`}>
          <Calendar className="h-4 w-4" strokeWidth={1.6} />
          {f.date}
        </div>
        <h3 className={`font-serif text-3xl italic sm:text-4xl ${text}`} data-testid="festa-title">{f.title}</h3>
        <p className={`mt-4 text-base font-light leading-relaxed ${sub}`}>{f.tagline}</p>

        <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-beige" : "text-terracotta"}`}>{f.menuLabel}</p>
        <ul className={`mt-3 space-y-2 text-sm font-light ${sub}`}>
          {f.items.map((it, i) => (
            <li key={i} className="border-b border-beige/40 pb-2">{it}</li>
          ))}
        </ul>

        <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-beige" : "text-terracotta"}`}>{f.drinksLabel}</p>
        <p className={`mt-2 text-sm font-light ${sub}`}>{f.drinks.join(" · ")}</p>

        <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-1 text-sm ${sub}`}>
          <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-terracotta">{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-terracotta">@{CONTACT.instagram}</a>
          <span>{CONTACT.address}</span>
        </div>
      </Reveal>
    </div>
  );
}
