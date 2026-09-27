import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Star, Burst, FallingObject } from "../components/Graphics";

const fallingObjects = ["📁", "📄", "⚠️", "🗑️"];

let fallCounter = 0;

function GravityBar({ label, value, display, delay }: { label: string; value: number; display: string; delay: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium tracking-wider text-ivory/70">{label}</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold to-coral"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay, ease: "easeOut" }}
        />
      </div>
      <p className="text-[10px] text-gold/60 font-mono">{display}</p>
    </div>
  );
}

export function Gravity() {
  const [incidentMessage, setIncidentMessage] = useState<string | null>(null);
  const [falling, setFalling] = useState(false);
  const [shake, setShake] = useState(false);

  const reportIncident = useCallback(() => {
    const messages = birthdayData.incidentMessages;
    const random = messages[Math.floor(Math.random() * messages.length)];
    setIncidentMessage(random);
    setFalling(true);
    setShake(true);
    setTimeout(() => setFalling(false), 2000);
    setTimeout(() => setShake(false), 500);
  }, []);

  return (
    <section id="gravity" className="py-20 md:py-32 bg-gradient-to-b from-plum to-deep-plum text-ivory relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-10">
        <Star className="w-12 h-12 text-gold" size={48} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Burst className="w-16 h-16 text-coral" size={64} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="MAHI VS. GRAVITY"
          subtitle="A rivalry with an unnecessarily long history."
          light
        />

        {/* Battlefield Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Reveal direction="left">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="font-display text-xl font-bold text-gold mb-4">MAHI</h3>
              <div className="space-y-3">
                {birthdayData.gravityStats.slice(0, 2).map((stat, i) => (
                  <GravityBar key={stat.label} label={stat.label} value={stat.value} display={stat.display} delay={i * 0.2} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <h3 className="font-display text-xl font-bold text-coral mb-4">GRAVITY</h3>
              <div className="space-y-3">
                {birthdayData.gravityStats.slice(2).map((stat, i) => (
                  <GravityBar key={stat.label} label={stat.label} value={stat.value} display={stat.display} delay={i * 0.2} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {birthdayData.gravityCounters.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-ivory/60 tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Area */}
        <Reveal className="max-w-lg mx-auto text-center">
          <motion.div
            className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden"
            animate={shake ? { x: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            {falling && (
              <FallingObject>
                <span className="text-3xl">{fallingObjects[fallCounter % fallingObjects.length]}</span>
              </FallingObject>
            )}

            <AnimatePresence mode="wait">
              {incidentMessage ? (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-coral/20 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-coral" />
                  </div>
                  <p className="font-display text-xl md:text-2xl text-ivory">
                    "{incidentMessage}"
                  </p>
                  <button
                    onClick={() => setIncidentMessage(null)}
                    className="inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Simulate another incident
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <p className="text-ivory/70 text-sm leading-relaxed">
                    Think you can survive gravity?
                    <br />
                    <span className="text-ivory/40 text-xs">(Spoiler: Nobody can.)</span>
                  </p>
                  <motion.button
                    onClick={reportIncident}
                    className="px-8 py-4 bg-gold text-plum rounded-full font-bold text-sm tracking-wider hover:bg-soft-gold transition-colors cursor-pointer shadow-lg shadow-gold/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    SIMULATE AN INCIDENT
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Reveal>

        <Reveal className="text-center mt-12">
          <p className="font-handwritten text-lg text-ivory/40">
            Gravity remains undefeated. For now.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
