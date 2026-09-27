import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Star, Sparkle } from "../components/Graphics";

export function IITian() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-soft-gold/30 to-ivory relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-20">
        <Star className="w-8 h-8 text-gold" size={32} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Sparkle className="w-8 h-8 text-coral" size={32} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="THE NEXT CHAPTER"
          subtitle="The chaos is temporary. The dream isn't."
          color="gold"
        />

        <Reveal>
          <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow border border-gold/20 text-center">
            {/* Rocket animation */}
            <div className="flex justify-center mb-8">
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-coral/20 flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-gold" />
                </div>
              </motion.div>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
              FUTURE IITIAN 🚀
            </h3>

            <p className="text-lg text-warm-gray mb-8 max-w-xl mx-auto">
              One day she'll solve the questions. Today we're solving the birthday.
            </p>

            {/* Progress bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold tracking-wider text-gold uppercase">Mission: IIT</span>
                <span className="text-xs font-bold text-coral">IN PROGRESS</span>
              </div>
              <div className="h-4 bg-charcoal/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold via-coral to-purple"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0 : 2, ease: "easeOut" }}
                />
              </div>
              <p className="text-[10px] text-warm-gray/60 mt-2 font-mono">████████░░ 80%</p>
            </div>

            <p className="font-handwritten text-lg text-warm-gray/60">
              "Future IITian detected. Currently surviving the plot."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
