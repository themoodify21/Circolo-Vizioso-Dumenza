import React from "react";
import { useLang } from "../../i18n/LanguageContext";
import { Reveal, MaskLines } from "./Reveal";
import FestaEvent from "./FestaEvent";

export default function Eventi() {
  const { t } = useLang();
  const e = t.events;

  return (
    <section id="eventi" className="relative overflow-hidden bg-mattone py-24 text-crema sm:py-36" data-testid="eventi">
      {/* amber glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-terracotta/40 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-beige/80">
              {e.label}
            </Reveal>
            <h2 className="font-serif text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">
              <MaskLines lines={e.title.split("\n")} lineClass="block italic" />
            </h2>
          </div>
          <Reveal delay={0.15} className="flex items-end lg:col-span-6">
            <p className="max-w-lg text-base font-light leading-relaxed text-crema/80">{e.body}</p>
          </Reveal>
        </div>

        {/* current event: poster + translated details */}
        <div className="mt-16">
          <FestaEvent tone="dark" />
        </div>
      </div>
    </section>
  );
}
