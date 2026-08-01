import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES } from "../../lib/config";
import { Reveal, MaskLines } from "./Reveal";

function Parallax({ src, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img style={{ y, scale: 1.2 }} src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default function Storia() {
  const { t } = useLang();
  const s = t.story;

  return (
    <section id="storia" className="relative bg-crema py-24 sm:py-36" data-testid="storia">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal as="p" className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
              {s.label}
            </Reveal>
            <h2 className="font-serif text-5xl font-medium leading-[0.95] text-marrone sm:text-7xl lg:text-8xl">
              <MaskLines lines={s.title.split("\n")} lineClass="block" />
            </h2>
            <Reveal delay={0.2} className="mt-10 max-w-xl text-base font-light leading-relaxed text-nero/80">
              {s.intro}
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Parallax src={IMAGES.buildingWindows} className="h-[380px] w-full rounded-sm sm:h-[520px]" />
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-nero/50">Dumenza · Valdumentina</p>
          </div>
        </div>

        {/* Numbered manifesto chapters */}
        <div className="mt-28 space-y-px">
          {s.chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05}>
              <div className="group grid grid-cols-1 items-start gap-6 border-t border-beige py-10 hover-warm hover:bg-beige/30 sm:grid-cols-12 sm:gap-8 sm:px-4">
                <div className="sm:col-span-2">
                  <span className="font-serif text-6xl italic text-terracotta/40 transition-colors duration-500 group-hover:text-terracotta sm:text-7xl">
                    {c.n}
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-marrone sm:col-span-4 sm:text-4xl">{c.title}</h3>
                <p className="text-base font-light leading-relaxed text-nero/75 sm:col-span-6">{c.body}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-beige" />
        </div>

        {/* Cucina / Pizza split screen */}
        <div className="mt-28 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-sm bg-nero text-crema">
              <img src={IMAGES.dishFlame} alt="" className="h-72 w-full object-cover opacity-90 sm:h-96" />
              <div className="p-8 sm:p-10">
                <h3 className="font-serif text-3xl sm:text-4xl">{s.kitchenTitle}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-crema/70">{s.kitchenBody}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-sm bg-mattone text-crema">
              <img src={IMAGES.ovenFlame} alt="" className="h-72 w-full object-cover opacity-90 sm:h-96" />
              <div className="p-8 sm:p-10">
                <h3 className="font-serif text-3xl sm:text-4xl">{s.pizzaTitle}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-crema/80">{s.pizzaBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
