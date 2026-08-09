import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

// Stacked auto-advancing card carousel (adapted to the brand).
// Props: items [{id,title,description,imageSrc,color,href}], initialIndex,
// autoAdvance, intervalMs, pauseOnHover, showDots.
export function CardStack({
  items = [],
  initialIndex = 0,
  autoAdvance = true,
  intervalMs = 2600,
  pauseOnHover = true,
  showDots = true,
}) {
  const n = items.length;
  const [active, setActive] = useState(initialIndex);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);

  useEffect(() => {
    if (!autoAdvance || paused || n <= 1) return;
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [autoAdvance, paused, intervalMs, next, n]);

  const layer = [
    { scale: 1, y: 0, x: 0, rotate: 0, opacity: 1, z: 40 },
    { scale: 0.93, y: 30, x: 18, rotate: 2.5, opacity: 0.7, z: 30 },
    { scale: 0.86, y: 58, x: -18, rotate: -2.5, opacity: 0.4, z: 20 },
  ];

  return (
    <div
      className="relative mx-auto w-full max-w-3xl"
      data-testid="events-cardstack"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
        {items.map((item, i) => {
          const rel = (i - active + n) % n;
          const shown = rel < layer.length;
          const s = layer[Math.min(rel, layer.length - 1)];
          return (
            <motion.div
              key={item.id}
              className="absolute inset-0 origin-bottom overflow-hidden rounded-xl border border-crema/15 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]"
              style={{ zIndex: shown ? s.z : 0, pointerEvents: rel === 0 ? "auto" : "none" }}
              animate={{
                scale: shown ? s.scale : 0.8,
                y: shown ? s.y : 80,
                x: shown ? s.x : 0,
                rotate: shown ? s.rotate : 0,
                opacity: shown ? s.opacity : 0,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => rel === 0 && next()}
              data-testid={`cardstack-item-${i}`}
            >
              <img
                src={item.imageSrc}
                alt={item.title || ""}
                className="h-full w-full object-cover"
                style={{ filter: item.color ? "none" : "grayscale(1) contrast(1.03)" }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nero/85 via-nero/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                {item.title && (
                  <h3 className="font-serif text-2xl italic text-crema sm:text-3xl">{item.title}</h3>
                )}
                {item.description && (
                  <p className="mt-1.5 max-w-sm text-sm font-light text-crema/75">{item.description}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {showDots && (
        <div className="mt-16 flex items-center justify-center gap-2 sm:mt-14">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Card ${i + 1}`}
              data-testid={`cardstack-dot-${i}`}
              className={`h-px transition-all duration-500 ${
                i === active ? "w-10 bg-terracotta" : "w-5 bg-marrone/30 hover:bg-marrone/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardStack;
