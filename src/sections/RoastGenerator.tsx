import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Flame } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function RoastGenerator() {
  const [currentRoast, setCurrentRoast] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRoast = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      const roasts = birthdayData.roasts;
      const random = roasts[Math.floor(Math.random() * roasts.length)];
      setCurrentRoast(random);
      setIsAnimating(false);
    }, 300);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-lavender/30 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="LIGHTLY ROAST MAHI"
          subtitle="Because apparently birthday wishes aren't enough."
          color="purple"
        />

        <Reveal>
          <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow border border-purple/20 text-center">
            <AnimatePresence mode="wait">
              {currentRoast ? (
                <motion.div
                  key={currentRoast}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-peach flex items-center justify-center">
                    <Flame className="w-8 h-8 text-coral" />
                  </div>
                  <p className="font-display text-xl md:text-2xl text-charcoal leading-relaxed">
                    "{currentRoast}"
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-lavender/50 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-purple/50" />
                  </div>
                  <p className="text-warm-gray">
                    Click the button to generate a roast.
                    <br />
                    <span className="text-sm text-warm-gray/60">(All roasts are 100% affectionate.)</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={generateRoast}
              disabled={isAnimating}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-purple text-white rounded-full font-bold text-sm tracking-wider hover:bg-soft-purple transition-colors cursor-pointer disabled:opacity-50 shadow-lg shadow-purple/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className={`w-4 h-4 ${isAnimating ? "animate-spin" : ""}`} />
              {currentRoast ? "ROAST HER AGAIN" : "ROAST HER"}
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
