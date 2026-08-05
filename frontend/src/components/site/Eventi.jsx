import React from "react";
import { Music, Mic2, Sparkles, PartyPopper } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { whatsappLink } from "../../lib/config";
import { Reveal, MaskLines } from "./Reveal";
import EventsCarousel from "./EventsCarousel";

const icons = [Music, Mic2, Sparkles, PartyPopper];

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

        {/* auto-rotating events carousel */}
        <Reveal delay={0.1} className="mt-16">
          <EventsCarousel />
        </Reveal>

        {/* event type blocks */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-crema/15 sm:grid-cols-2 lg:grid-cols-4">
          {e.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="group h-full bg-mattone p-8 hover-warm hover:bg-terracotta"
                  data-testid={`event-block-${i}`}
                >
                  <Icon className="h-7 w-7 text-beige transition-colors group-hover:text-crema" strokeWidth={1.4} />
                  <h3 className="mt-6 font-serif text-2xl">{item.t}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-crema/70">{item.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="events-cta"
            className="inline-block rounded-full border border-crema/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-crema transition-colors duration-300 hover:bg-crema hover:text-mattone"
          >
            {e.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
