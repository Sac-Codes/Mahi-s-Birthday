import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function ThingsWeLove() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blush/15 to-cream/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="WHY WE LOVE YOU"
          subtitle="The real reasons. No chaos-related incidents included."
          color="pink"
        />

        <div className="space-y-4">
          {birthdayData.thingsWeLove.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                className="flex items-start gap-4 bg-white rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all border border-pink/10"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-full bg-blush flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-pink" />
                </div>
                <p className="text-charcoal/80 leading-relaxed">{item}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-warm-gray/60">
            <Sparkles className="w-4 h-4" />
            <span>These are the things that make you, you.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
