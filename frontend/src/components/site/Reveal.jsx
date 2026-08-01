import React from "react";
import { motion } from "framer-motion";
import { IS_STATIC } from "../../lib/static";

// Scroll-triggered reveal. Wrap any block.
export function Reveal({ children, delay = 0, y = 40, className = "", as = "div" }) {
  const M = motion[as] || motion.div;
  if (IS_STATIC) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}

// Word/line masked reveal for editorial headings.
export function MaskLines({ lines, className = "", lineClass = "", delay = 0 }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span
            className={`block ${lineClass}`}
            initial={IS_STATIC ? false : { y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
