import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ImagePlaceholder } from "../components/ImagePlaceholder";

export function Friends() {
  return (
    <section id="friends" className="py-20 md:py-32 bg-gradient-to-b from-lavender/20 to-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="HER PEOPLE"
          subtitle="The people who have witnessed the chaos firsthand."
          color="purple"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {birthdayData.friends.map((friend, i) => (
            <Reveal key={friend.name} delay={i * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all h-full border border-purple/10"
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-center mb-4">
                  <ImagePlaceholder
                    src={friend.image}
                    alt={friend.name}
                    variant="avatar"
                    label="Photo"
                  />
                </div>
                <h4 className="font-display font-bold text-lg text-charcoal mb-1">
                  {friend.name}
                </h4>
                <p className="text-xs text-purple font-medium tracking-wider uppercase mb-3">
                  {friend.role}
                </p>
                <p className="text-sm text-warm-gray italic leading-relaxed">
                  "{friend.quote}"
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-warm-gray/60">
            <Users className="w-4 h-4" />
            <span>The witnesses. The hype squad. The chaos accomplices.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
