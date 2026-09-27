import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Tape, Scribble } from "../components/Graphics";

export function FinalMessage() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-cream/50 to-blush/10 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ONE LAST THING..."
          subtitle="A personal message, written with love."
          color="pink"
        />

        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-coral/10 rounded-full blur-xl" />

            <motion.div
              className="relative bg-white rounded-2xl p-8 md:p-12 card-shadow border border-pink/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Tape className="top-0 left-8 -translate-y-1/2" width={80} />
              <Tape className="top-0 right-8 -translate-y-1/2" width={60} />

              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-5 h-5 text-pink" />
                <span className="text-xs font-bold tracking-widest text-warm-gray uppercase">
                  Personal Letter
                </span>
              </div>

              <div className="prose prose-charcoal max-w-none">
                {birthdayData.finalMessage.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-charcoal/80 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-charcoal/5 text-right">
                <p className="font-handwritten text-xl text-pink">
                  With love and chaos
                </p>
                <Scribble className="text-coral/30 ml-auto mt-2" />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
