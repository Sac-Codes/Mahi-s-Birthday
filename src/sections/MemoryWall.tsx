import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Tape } from "../components/Graphics";

export function MemoryWall() {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  return (
    <section id="memories" className="py-20 md:py-32 bg-gradient-to-b from-blush/20 to-cream/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="MEMORIES"
          subtitle="A scrapbook of moments, chaos, and very good company."
          color="pink"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {birthdayData.memories.map((memory, i) => (
            <Reveal key={memory.id} delay={i * 0.08}>
              <motion.div
                className="bg-white rounded-xl p-3 card-shadow hover:card-shadow-hover transition-all cursor-pointer relative"
                style={{ rotate: `${memory.rotation}deg` }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                onClick={() => setSelectedMemory(i)}
              >
                {i % 3 === 0 && <Tape className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" width={60} />}

                <ImagePlaceholder
                  src={memory.image}
                  alt={memory.caption}
                  variant="polaroid"
                  label="Memory"
                />
                <div className="pt-3 pb-1 px-1">
                  <p className="font-handwritten text-sm text-charcoal/70 leading-tight">
                    {memory.caption}
                  </p>
                  <p className="text-[10px] text-warm-gray/50 mt-1 uppercase tracking-wider">
                    {memory.date}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-warm-gray/60">
            <Camera className="w-4 h-4" />
            <span>Click any memory to relive the chaos.</span>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {selectedMemory !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-plum/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-lg w-full card-shadow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-lg text-charcoal">
                  {birthdayData.memories[selectedMemory].caption}
                </h3>
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="p-2 hover:bg-charcoal/5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-charcoal/60" />
                </button>
              </div>
              <ImagePlaceholder
                src={birthdayData.memories[selectedMemory].image}
                alt={birthdayData.memories[selectedMemory].caption}
                variant="card"
                label="Mahi memory"
              />
              <p className="mt-4 text-sm text-warm-gray text-center">
                {birthdayData.memories[selectedMemory].date}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
