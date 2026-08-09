import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES, CONTACT } from "../../lib/config";
import { MaskLines } from "./Reveal";
import { IS_STATIC } from "../../lib/static";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-mattone" data-testid="hero">
      {/* Parallax background image */}
      <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-0">
        <img src={IMAGES.heroVillage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-mattone/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-nero/50 via-transparent to-nero/80" />
        {/* amber glow like string lights */}
        <div className="absolute left-1/2 top-2/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-terracotta/25 blur-[120px]" />
      </motion.div>

      {/* Established line, top */}
      <motion.div
        style={{ opacity }}
        initial={IS_STATIC ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute inset-x-0 top-[16vh] z-10 flex items-center justify-center gap-4 px-6"
      >
        <span className="hidden h-px w-16 bg-beige/50 sm:block" />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-beige" data-testid="hero-established">
          {t.hero.established}
        </span>
        <span className="hidden h-px w-16 bg-beige/50 sm:block" />
      </motion.div>

      {/* Main tagline */}
      <motion.div style={{ y: yText, opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif font-medium leading-[0.86] text-crema" data-testid="hero-title" aria-label={`${t.hero.line1} ${t.hero.line2} ${t.hero.line3}`}>
          <MaskLines
            lines={[t.hero.line1, t.hero.line2, t.hero.line3]}
            lineClass="text-[19vw] italic sm:text-[15vw] lg:text-[11rem]"
            delay={0.4}
          />
        </h1>
        <motion.p
          initial={IS_STATIC ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 max-w-md text-sm font-light leading-relaxed text-beige sm:text-base"
        >
          {t.hero.sub}
        </motion.p>
        <motion.a
          href="#contatti"
          initial={IS_STATIC ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          data-testid="hero-cta"
          className="mt-10 rounded-full border border-crema/60 bg-crema/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-crema backdrop-blur-sm transition-colors duration-300 hover:bg-crema hover:text-mattone"
        >
          {t.hero.cta}
        </motion.a>
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
