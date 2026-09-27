import { User, Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  variant?: "profile" | "card" | "polaroid" | "avatar";
  label?: string;
}

export function ImagePlaceholder({
  src,
  alt,
  className = "",
  variant = "card",
  label,
}: ImagePlaceholderProps) {
  const sizeMap = {
    profile: "w-64 md:w-80 aspect-[3/4]",
    card: "w-full aspect-[4/5]",
    polaroid: "w-full aspect-[3/4]",
    avatar: "w-16 h-16 md:w-20 md:h-20 aspect-square",
  };

  if (src) {
    return (
      <div className={`${sizeMap[variant]} ${className} overflow-hidden rounded-[20px] bg-ivory`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center block"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeMap[variant]} ${className} flex flex-col items-center justify-center bg-gradient-to-br from-peach/30 to-pink/20 border-2 border-dashed border-coral/30 rounded-[20px] overflow-hidden`}
      role="img"
      aria-label={alt}
    >
      {variant === "avatar" ? (
        <User className="w-8 h-8 text-coral/50" />
      ) : (
        <ImageIcon className="w-10 h-10 text-coral/40 mb-2" />
      )}
      {label && (
        <span className="text-xs text-coral/60 font-handwritten text-center px-2">
          {label}
        </span>
      )}
    </div>
  );
}
