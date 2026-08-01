import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Slow-inertia custom cursor: a soft ring that trails + small dot.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 700, damping: 40 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHovering(!!(t.closest && t.closest('a, button, [data-cursor="hover"]')));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]" data-testid="custom-cursor">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute top-0 left-0"
      >
        <motion.div
          animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.9 : 0.55 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-mattone"
          style={{ borderColor: hovering ? "#A84A2D" : "#8E3721" }}
        />
      </motion.div>
      <motion.div style={{ x: dotX, y: dotY }} className="absolute top-0 left-0">
        <div className="-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-terracotta" />
      </motion.div>
    </div>
  );
}
