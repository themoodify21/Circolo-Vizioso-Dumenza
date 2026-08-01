import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES } from "../../lib/config";
import { Reveal, MaskLines } from "./Reveal";

const shots = [
  { src: IMAGES.dishFlame, span: "row-span-2", label: "Gnocchi in fiamma" },
  { src: IMAGES.pizzaOven, span: "", label: "Forno a legna" },
  { src: IMAGES.steak, span: "", label: "Tagliata" },
  { src: IMAGES.mountains, span: "row-span-2", label: "Valdumentina" },
  { src: IMAGES.interiorKitchen, span: "", label: "La sala" },
  { src: IMAGES.steakFries, span: "", label: "Grigliata" },
  { src: IMAGES.stringLights, span: "", label: "Luci d'ambra" },
  { src: IMAGES.interiorTables, span: "", label: "A tavola" },
  { src: IMAGES.pizzaMargherita, span: "", label: "Margherita" },
];

export default function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  const [active, setActive] = useState(null);

  return (
    <section id="foto" className="relative bg-nero py-24 text-crema sm:py-32" data-testid="gallery">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal as="p" className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
              {g.label}
            </Reveal>
            <h2 className="font-serif text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">
              <MaskLines lines={g.title.split("\n")} lineClass="block italic" />
            </h2>
          </div>
          <Reveal delay={0.15} className="max-w-xs text-sm font-light text-crema/60">
            {g.sub}
          </Reveal>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] lg:grid-cols-4">
          {shots.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(s)}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-sm ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-nero/0 transition-colors duration-500 group-hover:bg-nero/40" />
              <span className="absolute bottom-3 left-3 translate-y-2 text-xs uppercase tracking-widest text-crema opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {s.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9996] flex items-center justify-center bg-nero/95 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
            data-testid="lightbox"
          >
            <button
              className="absolute right-6 top-6 text-crema hover:text-terracotta"
              onClick={() => setActive(null)}
              data-testid="lightbox-close"
              aria-label="Close"
            >
              <X className="h-7 w-7" strokeWidth={1.4} />
            </button>
            <motion.img
              key={active.src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={active.src}
              alt={active.label}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-sm object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
