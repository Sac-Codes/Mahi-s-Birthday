import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Star, Heart, Sparkle, SmileyFace, DoodleArrow, FloatingObject } from "../components/Graphics";

interface HeroProps {
  onEnter: () => void;
}

export function Hero({ onEnter }: HeroProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [currentRoast, setCurrentRoast] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoast((prev) => (prev + 1) % birthdayData.heroRoasts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onEnter, prefersReducedMotion ? 0 : 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #21172b 0%, #3d2b3d 50%, #4a2c4a 100%)",
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coral/20 blur-3xl"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple/20 blur-3xl"
              animate={prefersReducedMotion ? {} : { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>

          {/* Floating graphics */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingObject className="absolute top-16 left-[15%]" delay={0}>
              <Star className="w-6 h-6 text-gold/60" size={24} />
            </FloatingObject>
            <FloatingObject className="absolute top-32 right-[20%]" delay={0.5}>
              <Heart className="w-5 h-5 text-coral/60" size={20} />
            </FloatingObject>
            <FloatingObject className="absolute bottom-32 left-[25%]" delay={1}>
              <Sparkle className="w-5 h-5 text-purple/60" size={20} />
            </FloatingObject>
            <FloatingObject className="absolute bottom-48 right-[15%]" delay={0.3}>
              <SmileyFace className="w-6 h-6 text-pink/50" size={24} />
            </FloatingObject>
            <FloatingObject className="absolute top-1/3 left-[8%]" delay={0.7}>
              <DoodleArrow className="text-gold/40" size={40} />
            </FloatingObject>
            <FloatingObject className="absolute top-2/3 right-[10%]" delay={1.2}>
              <Star className="w-4 h-4 text-coral/40" size={16} />
            </FloatingObject>
            <FloatingObject className="absolute top-1/4 right-[30%]" delay={0.8}>
              <Heart className="w-4 h-4 text-pink/40" size={16} />
            </FloatingObject>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-ivory/60 uppercase">
                <Sparkles className="w-3 h-3" />
                A VERY IMPORTANT BIRTHDAY DOCUMENT
                <Sparkles className="w-3 h-3" />
              </span>
            </motion.div>

            {/* Main name */}
            <motion.h1
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight text-ivory mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {birthdayData.name.toUpperCase()}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-coral font-medium max-w-2xl mx-auto mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {birthdayData.heroSubtitle}
            </motion.p>

            {/* Additional lines */}
            <motion.div
              className="space-y-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <p className="text-sm md:text-base text-ivory/50 italic">
                "{birthdayData.heroLine1}"
              </p>
              <p className="text-sm md:text-base text-ivory/50 italic">
                "{birthdayData.heroLine2}"
              </p>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-coral text-white rounded-full font-bold text-sm tracking-wider hover:bg-soft-coral transition-colors cursor-pointer shadow-lg shadow-coral/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{birthdayData.heroCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Rotating roast */}
            <motion.div
              className="h-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoast}
                  className="text-sm text-ivory/40 italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {birthdayData.heroRoasts[currentRoast]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Birthday note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="mt-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium tracking-wider border border-gold/30">
                {birthdayData.birthdayNote}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
