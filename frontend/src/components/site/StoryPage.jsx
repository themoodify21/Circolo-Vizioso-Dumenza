import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { STORY } from "../../data/story";
import { IMAGES, CONTACT } from "../../lib/config";
import LanguageSwitcher from "./LanguageSwitcher";
import Footer from "./Footer";
import { Reveal } from "./Reveal";

export default function StoryPage() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-crema" data-testid="story-page">
      {/* top bar */}
      <div className="fixed inset-x-0 top-0 z-[9990] flex items-center justify-between border-b border-beige bg-crema/85 px-5 py-3 backdrop-blur-xl sm:px-8">
        <Link to="/" data-testid="story-back" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-marrone transition-opacity hover:opacity-60">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
          {t.story.back}
        </Link>
        <Link to="/">
          <img src="/logo-dark.png" alt="Circolo Vizioso" className="h-7 w-auto sm:h-8" />
        </Link>
        <LanguageSwitcher tone="dark" />
      </div>

      {/* header */}
      <header className="relative flex min-h-[70vh] items-end overflow-hidden bg-mattone pt-20">
        <motion.img
          src={IMAGES.circoloSunset}
          alt=""
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nero/85 via-mattone/40 to-mattone/30" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-beige">{t.story.pageKicker}</p>
          <h1 className="font-serif text-5xl font-medium italic leading-[0.95] text-crema sm:text-7xl lg:text-8xl">
            {t.story.label}
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-crema/80 sm:text-base">
            {CONTACT.address}
          </p>
        </div>
      </header>

      {/* full story */}
      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        {STORY.map((block, bi) => (
          <section key={bi} className="mb-16 last:mb-0" data-testid={`story-block-${bi}`}>
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-terracotta" />
                <h2 className="font-serif text-3xl italic text-mattone sm:text-4xl">{block.heading}</h2>
              </div>
            </Reveal>
            <div className="space-y-6">
              {block.paragraphs.map((p, pi) => (
                <Reveal key={pi} delay={Math.min(pi * 0.03, 0.2)}>
                  <p
                    className={`text-base leading-[1.9] text-nero/85 sm:text-lg ${
                      pi === 0
                        ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.75] first-letter:text-mattone"
                        : ""
                    }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <Reveal className="mt-20 border-t border-beige pt-10">
          <Link
            to="/"
            data-testid="story-bottom-back"
            className="inline-flex items-center gap-2 rounded-full bg-mattone px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-crema transition-colors duration-300 hover:bg-terracotta"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
            {t.story.back}
          </Link>
        </Reveal>
      </article>

      <Footer />
    </div>
  );
}
