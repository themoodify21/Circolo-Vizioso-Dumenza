import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES } from "../../lib/config";
import LanguageSwitcher from "./LanguageSwitcher";
import Footer from "./Footer";
import { Reveal } from "./Reveal";
import FestaEvent from "./FestaEvent";

export default function EventsPage() {
  const { t } = useLang();
  const e = t.events;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-crema" data-testid="events-page">
      {/* top bar */}
      <div className="fixed inset-x-0 top-0 z-[9990] flex items-center justify-between border-b border-beige bg-crema/85 px-5 py-3 backdrop-blur-xl sm:px-8">
        <Link to="/" data-testid="events-back" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-marrone transition-opacity hover:opacity-60">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
          {t.story.back}
        </Link>
        <Link to="/">
          <img src="/logo-dark.png" alt="Circolo Vizioso" className="h-7 w-auto sm:h-8" />
        </Link>
        <LanguageSwitcher tone="dark" />
      </div>

      {/* header */}
      <header className="relative flex min-h-[55vh] items-end overflow-hidden bg-mattone pt-20">
        <motion.img
          src={IMAGES.stringLights}
          alt=""
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nero/85 via-mattone/40 to-mattone/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-beige">{e.label}</p>
          <h1 className="font-serif text-5xl font-medium italic leading-[0.95] text-crema sm:text-7xl">
            {e.title.replace("\n", " ")}
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-crema/80 sm:text-base">{e.body}</p>
        </div>
      </header>

      {/* board */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <FestaEvent tone="light" />

        <Reveal className="mt-16 border-t border-beige pt-10">
          <Link
            to="/"
            data-testid="events-bottom-back"
            className="inline-flex items-center gap-2 rounded-full bg-mattone px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-crema transition-colors duration-300 hover:bg-terracotta"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
            {t.story.back}
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
