import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EVENT_IMAGES } from "../../lib/config";

const AUTOPLAY_MS = 4000;

// Autonomous, auto-rotating events carousel. Photos are black & white unless
// their `color` flag is true.
export default function EventsCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const n = EVENT_IMAGES.length;

  const go = useCallback(
    (d) => {
      setDir(d);
      setIndex((i) => (i + d + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % n);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [n]);

  const current = EVENT_IMAGES[index];

  return (
    <div className="relative overflow-hidden rounded-sm border border-crema/15 bg-nero" data-testid="events-carousel">
      <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={index}
            src={current.src}
            alt={current.label}
            custom={dir}
            initial={{ opacity: 0, scale: 1.08, x: dir * 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.04, x: -dir * 40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: current.color ? "none" : "grayscale(1) contrast(1.03)" }}
            data-testid={`events-slide-${index}`}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nero/70 via-transparent to-transparent" />

        {/* label */}
        <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-crema/90">
          {current.label}
        </span>

        {/* arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Prev"
          data-testid="carousel-prev"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-crema/30 bg-nero/30 text-crema backdrop-blur-sm transition-colors hover:bg-terracotta hover:border-terracotta"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          data-testid="carousel-next"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-crema/30 bg-nero/30 text-crema backdrop-blur-sm transition-colors hover:bg-terracotta hover:border-terracotta"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>

      {/* indicators */}
      <div className="flex items-center justify-center gap-2 py-4">
        {EVENT_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDir(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Slide ${i + 1}`}
            data-testid={`carousel-dot-${i}`}
            className={`h-px transition-all duration-500 ${
              i === index ? "w-10 bg-terracotta" : "w-5 bg-crema/30 hover:bg-crema/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
