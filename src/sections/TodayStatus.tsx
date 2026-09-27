import { motion } from "framer-motion";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function TodayStatus() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-plum via-purple/80 to-plum relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="TODAY'S STATUS"
          subtitle="Live updates from the Mahi control center."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {birthdayData.todayStatus.map((status, i) => (
            <Reveal key={status.label} delay={i * 0.1}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center border border-white/10 hover:bg-white/15 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl md:text-3xl mb-2 block">{status.icon}</span>
                <p className="text-[10px] md:text-xs text-ivory/60 tracking-wider uppercase mb-1">
                  {status.label}
                </p>
                <p className="text-xs md:text-sm font-bold text-gold">
                  {status.value}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
