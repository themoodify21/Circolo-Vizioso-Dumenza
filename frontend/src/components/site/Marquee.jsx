import React from "react";
import { useLang } from "../../i18n/LanguageContext";

// Slow editorial marquee. Two copies for seamless loop.
export default function Marquee() {
  const { t } = useLang();
  const text = t.marquee;
  const repeated = text.repeat(4);
  return (
    <div className="overflow-hidden border-y border-beige bg-crema py-6" data-testid="marquee">
      <div className="marquee-track animate-marquee">
        <span className="font-serif text-4xl italic text-marrone sm:text-6xl">{repeated}</span>
        <span className="font-serif text-4xl italic text-marrone sm:text-6xl" aria-hidden>
          {repeated}
        </span>
      </div>
    </div>
  );
}
