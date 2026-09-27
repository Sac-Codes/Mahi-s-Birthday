import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import { birthdayData } from "../data/birthday";

const friendWishes = birthdayData.friendWishes;
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ImagePlaceholder } from "../components/ImagePlaceholder";

function WishModal({ wish, onClose }: { wish: typeof friendWishes[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-deep-plum/80 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-cream rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto card-shadow"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-cream/95 backdrop-blur-sm p-6 border-b border-charcoal/5 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral/20 to-purple/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-coral" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-charcoal">{wish.name}</h3>
              <p className="text-xs text-warm-gray">A message for Mahi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-charcoal/5 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-charcoal/60" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-center mb-6">
            <ImagePlaceholder
              src={wish.image}
              alt={wish.name}
              variant="avatar"
              label="Photo"
            />
          </div>

          <div className="prose prose-charcoal max-w-none">
            {wish.message.split("\n").map((line, i) => (
              <p key={i} className="text-charcoal/80 leading-relaxed mb-3 last:mb-0">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal/5 text-center">
            <Heart className="w-5 h-5 text-coral mx-auto" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WishCard({ wish, index, onOpen }: { wish: typeof friendWishes[0]; index: number; onOpen: () => void }) {
  const preview = wish.message.slice(0, 150) + "...";

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all h-full flex flex-col cursor-pointer border border-pink/10"
        whileHover={{ y: -3 }}
        onClick={onOpen}
      >
        <div className="flex items-center gap-3 mb-4">
          <ImagePlaceholder
            src={wish.image}
            alt={wish.name}
            variant="avatar"
            label="Photo"
          />
          <div>
            <h4 className="font-display font-bold text-charcoal">{wish.name}</h4>
            <p className="text-xs text-pink font-medium tracking-wider uppercase">
              A MESSAGE FOR MAHI
            </p>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-warm-gray leading-relaxed italic">
            "{preview}"
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-charcoal/5">
          <span className="inline-flex items-center gap-1 text-xs text-coral font-medium">
            READ FULL MESSAGE
            <Heart className="w-3 h-3" />
          </span>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Wishes() {
  const [selectedWish, setSelectedWish] = useState<typeof friendWishes[0] | null>(null);

  return (
    <section id="wishes" className="py-20 md:py-32 bg-gradient-to-b from-blush/15 to-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="WORDS FROM HER PEOPLE"
          subtitle="The nice things they said before the roasting started."
          color="pink"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {friendWishes.map((wish, i) => (
            <WishCard key={wish.id} wish={wish} index={i} onOpen={() => setSelectedWish(wish)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWish && (
          <WishModal wish={selectedWish} onClose={() => setSelectedWish(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
