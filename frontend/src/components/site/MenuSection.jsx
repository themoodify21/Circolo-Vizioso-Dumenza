import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { cucina, pizza, vini } from "../../data/menu";
import { IMAGES } from "../../lib/config";
import { Reveal, MaskLines } from "./Reveal";
import { SECTION_LABELS, translateDesc } from "../../i18n/menuI18n";

const DATASETS = { cucina, pizza, vini };

function FoodRow({ it, lang }) {
  return (
    <div className="group flex items-baseline gap-3 py-3" data-testid="menu-item">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-serif text-lg text-marrone transition-colors duration-300 group-hover:text-terracotta">
            {it.n}
            {it.star && <span className="align-super text-[0.6em] text-terracotta">*</span>}
          </h4>
        </div>
        {it.d && <p className="mt-0.5 text-sm font-light leading-snug text-nero/60">{translateDesc(it.d, lang)}</p>}
      </div>
      <div className="flex-shrink-0 border-b border-dotted border-beige/0 font-sans text-sm tabular-nums text-nero/70">
        {it.p !== "—" ? `€ ${it.p}` : ""}
      </div>
    </div>
  );
}

function WineRow({ it, bottle, glass }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5" data-testid="menu-item">
      <h4 className="font-serif text-base text-marrone">{it.n}</h4>
      <div className="flex gap-6 text-xs tabular-nums text-nero/60">
        <span title={bottle}>{it.bottle}</span>
        <span className="text-terracotta" title={glass}>{it.glass}</span>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const { t, lang } = useLang();
  const m = t.menu;
  const [tab, setTab] = useState("cucina");
  const data = DATASETS[tab];

  return (
    <section id="menu" className="relative overflow-hidden bg-crema py-24 sm:py-32" data-testid="menu-section">
      {/* header */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
              {m.label}
            </Reveal>
            <h2 className="font-serif text-5xl font-medium leading-[0.92] text-marrone sm:text-7xl lg:text-8xl">
              <MaskLines lines={m.title.split("\n")} lineClass="block italic" />
            </h2>
          </div>
          <Reveal delay={0.15} className="flex items-end lg:col-span-5">
            <p className="max-w-sm text-base font-light leading-relaxed text-nero/75">{m.intro}</p>
          </Reveal>
        </div>

        {/* tabs */}
        <div className="mt-14 flex flex-wrap gap-3" data-testid="menu-tabs">
          {["cucina", "pizza", "vini"].map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              data-testid={`menu-tab-${k}`}
              className={`rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                tab === k
                  ? "border-mattone bg-mattone text-crema"
                  : "border-beige bg-transparent text-marrone hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {m.tabs[k]}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-nero/50">
          <Package className="h-3.5 w-3.5 text-terracotta" strokeWidth={1.6} />
          <span>{m.takeaway} · {m.coperto}</span>
        </div>
      </div>

      {/* menu body */}
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {tab === "pizza" && (
              <div className="mb-10 overflow-hidden rounded-sm">
                <img src={IMAGES.pizzaMargherita} alt="" className="h-56 w-full object-cover sm:h-72" />
              </div>
            )}
            <div className="columns-1 gap-14 md:columns-2 [&>*]:break-inside-avoid">
              {data.map((group) => (
                <div key={group.section} className="mb-12">
                  <div className="mb-3 flex items-center gap-4">
                    <h3 className="font-serif text-2xl italic text-mattone sm:text-3xl">
                      {(SECTION_LABELS[group.section] && SECTION_LABELS[group.section][lang]) || group.section}
                    </h3>
                    <span className="h-px flex-1 bg-beige" />
                    {group.wine && (
                      <span className="text-[0.65rem] uppercase tracking-widest text-nero/40">
                        {m.bottle} / {m.glass}
                      </span>
                    )}
                  </div>
                  <div className="divide-y divide-beige/60">
                    {group.items.map((it, i) =>
                      group.wine ? (
                        <WineRow key={i} it={it} bottle={m.bottle} glass={m.glass} />
                      ) : (
                        <FoodRow key={i} it={it} lang={lang} />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 max-w-2xl border-t border-beige pt-5 text-xs font-light leading-relaxed text-nero/50">
          {m.allergenNote}
        </p>
      </div>
    </section>
  );
}
