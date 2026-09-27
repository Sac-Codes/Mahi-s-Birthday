import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Sparkle } from "../components/Graphics";

export function Lore() {
  return (
    <section id="lore" className="py-20 md:py-32 bg-gradient-to-b from-peach/20 to-cream/50 relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <Sparkle className="w-12 h-12 text-coral" size={48} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="THE LORE"
          subtitle="Some memories deserve to be archived. Some incidents demand evidence."
          color="coral"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral/30 via-purple/30 to-gold/30" />

          <div className="space-y-8 md:space-y-12">
            {birthdayData.lore.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <Reveal
                  key={item.id}
                  direction={isLeft ? "left" : "right"}
                  className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-coral rounded-full -translate-x-1/2 mt-6 ring-4 ring-peach/50" />

                  <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                    <motion.div
                      className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all border border-coral/10"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-[10px] font-bold tracking-widest text-coral bg-peach px-2 py-1 rounded-full">
                          {item.tag}
                        </span>
                        <span className="text-xs text-warm-gray/60">{item.date}</span>
                      </div>

                      <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-coral/50" />
                        {item.title}
                      </h4>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="text-center mt-16">
          <p className="font-handwritten text-xl text-warm-gray/60">
            ...and many more stories yet to be documented.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
