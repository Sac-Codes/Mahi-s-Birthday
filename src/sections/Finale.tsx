import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, RotateCcw } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { Reveal } from "../components/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Sparkle, FloatingObject } from "../components/Graphics";

export function Finale() {
  const [showSecret, setShowSecret] = useState(false);
  const [starClicks, setStarClicks] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleStarClick = () => {
    const newCount = starClicks + 1;
    setStarClicks(newCount);
    if (newCount >= 5) {
      setShowSecret(true);
      setStarClicks(0);
      setTimeout(() => setShowSecret(false), 4000);
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="finale" className="py-24 md:py-40 bg-gradient-to-b from-deep-plum via-plum to-deep-plum text-ivory relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FloatingObject
            key={i}
            className="absolute"
            delay={i * 0.5}
            duration={4}
          >
            <Sparkle
              className="w-4 h-4 text-gold/30"
              size={16}
            />
          </FloatingObject>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <motion.h2
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            HAPPY BIRTHDAY,
            <br />
            <span className="text-gradient-coral">MAHI.</span>
          </motion.h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl mx-auto mb-6">
            Keep laughing.
            <br />
            Keep dreaming.
            <br />
            Keep being you.
            <br />
            Keep causing chaos.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="space-y-2 mb-10">
            <p className="font-display text-2xl md:text-3xl font-bold text-gold">
              FUTURE IITIAN.
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-coral">
              CURRENT CHAOS QUEEN.
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-purple">
              PERMANENTLY AT WAR WITH GRAVITY.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="font-handwritten text-lg text-ivory/50 mb-8">
            "Now go enjoy your birthday before gravity notices you again."
          </p>
        </Reveal>

        <Reveal delay={0.8} className="mt-8">
          <motion.div
            className="inline-flex"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-coral fill-coral" />
          </motion.div>
        </Reveal>

        <Reveal delay={1.0} className="mt-16">
          <motion.button
            onClick={handleReplay}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-ivory rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4" />
            REPLAY THE CHAOS
          </motion.button>
        </Reveal>

        {/* Easter egg star */}
        <div className="absolute top-8 right-8">
          <motion.button
            onClick={handleStarClick}
            className="p-2 text-gold/30 hover:text-gold transition-colors cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.8 }}
            aria-label="Secret star"
            title="A secret star"
          >
            <Star className="w-4 h-4" />
          </motion.button>

          {showSecret && (
            <motion.div
              className="absolute top-12 right-0 bg-ivory rounded-xl p-4 shadow-xl min-w-[220px] z-50"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-display font-bold text-plum text-sm mb-1">
                {birthdayData.secretMessage}
              </p>
              <p className="text-xs text-warm-gray">
                {birthdayData.secretSubMessage}
              </p>
            </motion.div>
          )}
        </div>

        <Reveal delay={1.2} className="mt-20">
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-ivory/40 tracking-wider">
              THE BIRTHDAY FILES — Made with love for Mahi
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
