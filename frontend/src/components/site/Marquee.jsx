import React from "react";
import { useLang } from "../../i18n/LanguageContext";

// Slow editorial marquee — transparent background, site sans font (coherent
// with nav/body labels). Two copies for a seamless loop.
export default function Marquee() {
  const { t } = useLang();
  const repeated = t.marquee.repeat(4);
  return (
    <div className="overflow-hidden bg-transparent py-6" data-testid="marquee">
      <div className="marquee-track animate-marquee">
        <span className="font-sans text-2xl font-medium uppercase tracking-[0.2em] text-marrone/80 sm:text-3xl">
          {repeated}
        </span>
        <span className="font-sans text-2xl font-medium uppercase tracking-[0.2em] text-marrone/80 sm:text-3xl" aria-hidden>
          {repeated}
        </span>
      </div>
    </div>
  );
}
