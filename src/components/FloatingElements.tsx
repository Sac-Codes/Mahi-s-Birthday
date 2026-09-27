import { motion } from "framer-motion";
import { useMemo } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface FloatingElementsProps {
  count?: number;
  variant?: "hearts" | "stars" | "notes" | "mixed";
}

const symbols = {
  hearts: ["\u2764", "\uD83D\uDC96", "\uD83D\uDC95"],
  stars: ["\u2B50", "\uD83C\uDF1F", "\u2728"],
  notes: ["\uD83C\uDFB5", "\uD83C\uDFB6", "\uD83D\uDC68\u200D\uD83C\uDF93"],
  mixed: ["\u2764", "\u2B50", "\uD83C\uDFB5", "\uD83C\uDF1F", "\uD83D\uDC96", "\u2728"],
};

export function FloatingElements({ count = 8, variant = "mixed" }: FloatingElementsProps) {
  const prefersReducedMotion = useReducedMotion();
  const items = symbols[variant];

  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      symbol: items[i % items.length],
      left: ((i * 37) % 100),
      top: ((i * 53) % 100),
      size: 12 + ((i * 7) % 16),
      delay: (i * 0.7) % 5,
      duration: 15 + ((i * 3) % 10),
    }));
  }, [count, items]);

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className="absolute select-none"
          style={{ left: `${el.left}%`, top: `${el.top}%`, fontSize: `${el.size}px` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.15, 0.15, 0],
            y: [0, -20, -10, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.symbol}
        </motion.span>
      ))}
    </div>
  );
}
