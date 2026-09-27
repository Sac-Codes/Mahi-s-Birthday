import { Reveal } from "./Reveal";
import { Sparkle } from "./Graphics";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
  color?: "default" | "coral" | "purple" | "gold" | "pink";
}

const colorMap = {
  default: "text-charcoal",
  coral: "text-coral",
  purple: "text-purple",
  gold: "text-gold",
  pink: "text-pink",
};

const subtitleColorMap = {
  default: "text-warm-gray",
  coral: "text-coral/70",
  purple: "text-purple/70",
  gold: "text-gold/70",
  pink: "text-pink/70",
};

const lineColorMap = {
  default: "bg-coral/40",
  coral: "bg-coral/40",
  purple: "bg-purple/40",
  gold: "bg-gold/40",
  pink: "bg-pink/40",
};

export function SectionHeading({
  title,
  subtitle,
  light = false,
  align = "center",
  color = "default",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-ivory" : colorMap[color];
  const subtitleColor = light ? "text-ivory/70" : subtitleColorMap[color];
  const lineColor = light ? "bg-gold/50" : lineColorMap[color];

  return (
    <Reveal className={`mb-12 md:mb-16 ${alignClass}`}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkle className="w-5 h-5 text-gold animate-pulse" size={20} />
        <h2
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${titleColor}`}
        >
          {title}
        </h2>
        <Sparkle className="w-5 h-5 text-gold animate-pulse" size={20} />
      </div>
      {subtitle && (
        <p
          className={`text-lg md:text-xl font-body max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full ${lineColor} ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
