import { motion } from "framer-motion";
import { Drama, Zap, ArrowDownToLine, Heart, MessageCircle, Rocket } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Sparkle, Star } from "../components/Graphics";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  drama: Drama,
  gravity: ArrowDownToLine,
  chaos: Zap,
  adorable: Heart,
  banter: MessageCircle,
  iit: Rocket,
};

const colorMap: Record<string, string> = {
  coral: "bg-peach text-coral border-coral/30",
  purple: "bg-lavender text-purple border-purple/30",
  gold: "bg-soft-gold text-gold border-gold/30",
  pink: "bg-blush text-pink border-pink/30",
  lavender: "bg-lavender text-purple border-purple/20",
};

function PersonalityMeter({ label, value, delay }: { label: string; value: number; delay: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium tracking-wider text-charcoal/70">{label}</span>
        <span className="text-xs font-bold text-coral">{value}%</span>
      </div>
      <div className="h-3 bg-charcoal/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-coral via-pink to-purple"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Profile() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="profile" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-20">
        <Sparkle className="w-8 h-8 text-gold" size={32} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <Star className="w-6 h-6 text-purple" size={24} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="WHO IS MAHI?"
          subtitle="A very small biography of a very complicated human."
          color="coral"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="left" className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-coral/20 to-purple/20 rounded-2xl blur-2xl" />
              <div className="relative">
                <ImagePlaceholder
                  src={birthdayData.profileImage}
                  alt="Mahi's portrait"
                  variant="profile"
                  label="Mahi"
                />
                <motion.div
                  className="absolute -right-8 top-8 bg-white rounded-lg px-3 py-2 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="font-handwritten text-sm text-coral">that's her!</span>
                </motion.div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal direction="right">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                {birthdayData.name.toUpperCase()}
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-coral font-medium">{birthdayData.goal}.</p>
                <p className="text-lg text-purple font-medium">Professional chaos generator.</p>
                <p className="text-lg text-gold font-medium">Part-time gravity victim.</p>
                <p className="text-lg text-pink font-medium">Full-time lovable human.</p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <p className="text-warm-gray leading-relaxed">
                She is the kind of person who turns a normal Tuesday into an unforgettable story.
                Slightly dramatic, accidentally clumsy, and overwhelmingly adorable.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Personality Cards */}
        <div className="mt-20 md:mt-28">
          <Reveal className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
              PERSONALITY FILE
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {birthdayData.traits.map((trait, i) => {
              const Icon = iconMap[trait.icon];
              return (
                <Reveal key={trait.title} delay={i * 0.1}>
                  <motion.div
                    className={`p-6 rounded-2xl border ${colorMap[trait.color]} card-shadow hover:card-shadow-hover transition-all h-full`}
                    whileHover={{ y: -4, rotate: prefersReducedMotion ? 0 : (i % 2 === 0 ? 1 : -1) }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-white/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm tracking-wide mb-1">
                          {trait.title}
                        </h4>
                        <p className="text-xs text-charcoal/50 font-medium mb-2">{trait.status}</p>
                        <p className="text-sm text-charcoal/60">{trait.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Personality Meters */}
        <div className="mt-20 md:mt-28 max-w-xl mx-auto">
          <Reveal className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
              OFFICIAL MEASUREMENTS
            </h3>
            <p className="text-sm text-warm-gray mt-2 italic">
              Fictional values. Real energy.
            </p>
          </Reveal>

          <div className="space-y-5 bg-white rounded-2xl p-6 md:p-8 card-shadow border border-coral/10">
            {birthdayData.personalityMeters.map((meter, i) => (
              <PersonalityMeter
                key={meter.label}
                label={meter.label}
                value={meter.value}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
