import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES, CONTACT } from "../../lib/config";
import { IS_STATIC } from "../../lib/static";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-nero" data-testid="hero">
      {/* Full-bleed: whole image (logo visible) with blurred fill on the sides */}
      <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-0">
        <img
          src={IMAGES.heroVillage}
          aria-hidden
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl"
        />
        <img src={IMAGES.heroVillage} alt="" className="relative h-full w-full object-contain object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-nero/35 via-transparent to-nero/65" />
        {/* amber glow like string lights */}
        <div className="absolute left-1/2 top-2/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-terracotta/25 blur-[120px]" />
      </motion.div>

      {/* Tagline removed per request — image shows its own Circolo Vizioso logo */}

      {/* Established line, top */}
      <motion.div
        style={{ opacity }}
        initial={IS_STATIC ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute inset-x-0 bottom-24 z-10 flex items-center justify-center gap-4 px-6"
      >
        <span className="hidden h-px w-16 bg-beige/50 sm:block" />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-beige" data-testid="hero-established">
          {t.hero.established}
        </span>
        <span className="hidden h-px w-16 bg-beige/50 sm:block" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={IS_STATIC ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-beige"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* corner address, editorial detail */}
      <div className="absolute bottom-6 left-6 z-10 hidden max-w-[180px] text-[0.65rem] uppercase leading-relaxed tracking-[0.15em] text-beige/70 md:block">
        {CONTACT.address}
      </div>
    </section>
  );
}
