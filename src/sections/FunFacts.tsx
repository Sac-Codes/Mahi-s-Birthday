import { motion } from "framer-motion";
import { FileSearch } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Star } from "../components/Graphics";

export function FunFacts() {
  return (
    <section className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="THE MAHI REPORT"
          subtitle="A premium character profile. Not a government dossier."
          color="purple"
        />

        <Reveal>
          <div className="bg-white rounded-2xl card-shadow overflow-hidden border border-purple/10">
            <div className="bg-gradient-to-r from-plum to-purple px-6 py-4 flex items-center gap-3">
              <FileSearch className="w-5 h-5 text-gold" />
              <span className="text-ivory font-display font-bold tracking-wider text-sm">
                CHARACTER PROFILE — CLASSIFIED
              </span>
              <Star className="w-4 h-4 text-gold ml-auto" size={16} />
            </div>

            <div className="divide-y divide-charcoal/5">
              {birthdayData.funFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 hover:bg-lavender/20 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-xs font-bold tracking-wider text-purple uppercase sm:w-48 flex-shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-charcoal font-medium">{fact.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-lavender/20 px-6 py-3 text-center">
              <span className="text-xs text-warm-gray/60 italic">
                This profile is 100% accurate. Mahi cannot confirm nor deny.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
