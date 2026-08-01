import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Signature on-load moment: warm curtain with logo, then lifts to reveal hero.
export default function Preloader() {
  const skip = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("static");
  const [done, setDone] = useState(skip);
  useEffect(() => {
    if (skip) return;
    const el = document.documentElement;
    el.classList.add("lenis-stopped");
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-mattone"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          data-testid="preloader"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/30 blur-[120px]" />
          <motion.img
            src="/logo-white.png"
            alt="Circolo Vizioso"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-24 w-auto sm:h-32"
          />
          <motion.div
            className="absolute bottom-16 left-1/2 h-px -translate-x-1/2 bg-crema/50"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
