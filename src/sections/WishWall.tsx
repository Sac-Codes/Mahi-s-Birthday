import { motion } from "framer-motion";
import { StickyNote } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";

const noteColors = [
  "bg-soft-coral/40 border-coral/30",
  "bg-soft-purple/40 border-purple/30",
  "bg-soft-gold/40 border-gold/30",
  "bg-soft-pink/40 border-pink/30",
];

export function WishWall() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="LITTLE THINGS PEOPLE SAID"
          subtitle="Short notes. Big feelings."
          color="gold"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {birthdayData.wishWall.map((wish, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                className={`${noteColors[i % noteColors.length]} border rounded-xl p-4 md:p-5 text-center card-shadow hover:card-shadow-hover transition-all h-full flex flex-col items-center justify-center gap-2`}
                whileHover={{ scale: 1.03, rotate: prefersReducedMotion ? 0 : ((i % 5) - 2) * 1.5 }}
                animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              >
                <StickyNote className="w-4 h-4 text-charcoal/30" />
                <p className="font-handwritten text-sm md:text-base text-charcoal/70 leading-tight">
                  {wish}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
