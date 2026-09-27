import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface GraphicProps {
  className?: string;
  size?: number;
}

export function Star({ className = "", size = 24 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8L8 14 2 9.2h7.6L12 2z" />
    </svg>
  );
}

export function Heart({ className = "", size = 24 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function Sparkle({ className = "", size = 24 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

export function DoodleArrow({ className = "", size = 40 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M5 35C5 35 15 20 35 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M28 5L35 10L28 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Flower({ className = "", size = 24 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="8" r="4" />
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" />
      <circle cx="12" cy="16" r="4" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  );
}

export function SmileyFace({ className = "", size = 24 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <path d="M8 14C8 14 10 17 12 17C14 17 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Rocket({ className = "", size = 24 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C12 2 5 6 5 12C5 16 8 20 12 22C16 20 19 16 19 12C19 6 12 2 12 2ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
    </svg>
  );
}

export function Tape({ className = "", width = 80 }: { className?: string; width?: number }) {
  return (
    <div
      className={`absolute h-6 bg-champagne/40 backdrop-blur-sm ${className}`}
      style={{
        width: `${width}px`,
        transform: "rotate(-2deg)",
        clipPath: "polygon(2% 0%, 98% 5%, 100% 95%, 0% 100%)",
      }}
    />
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className={className}>
      <path
        d="M2 10C10 5 20 15 30 10C40 5 50 15 60 10C70 5 80 15 90 10C100 5 110 15 118 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Burst({ className = "", size = 32 }: GraphicProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16 0L18.5 8.5L27 6L24 14.5L32 16L24 17.5L27 26L18.5 23.5L16 32L13.5 23.5L5 26L8 17.5L0 16L8 14.5L5 6L13.5 8.5L16 0Z" />
    </svg>
  );
}

export function FloatingObject({
  children,
  className = "",
  delay = 0,
  duration = 3,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStars({ count = 5, className = "" }: { count?: number; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`flex gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
        >
          <Star className="w-4 h-4 text-gold" size={16} />
        </motion.div>
      ))}
    </div>
  );
}

export function HandwrittenNote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-handwritten text-lg ${className}`}>
      {children}
    </span>
  );
}

export function FallingObject({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: -50, rotate: 0, opacity: 1 }}
      animate={{ y: 300, rotate: 720, opacity: 0 }}
      transition={{ duration: 2.5, delay, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}
