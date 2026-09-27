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
    profile: "w-64 h-80 md:w-80 md:h-96",
    card: "w-full h-64 md:h-80",
    polaroid: "w-full h-48 md:h-56",
    avatar: "w-16 h-16 md:w-20 md:h-20",
  };

  if (src) {
    return (
      <div className={`${sizeMap[variant]} ${className} overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeMap[variant]} ${className} flex flex-col items-center justify-center bg-gradient-to-br from-peach/30 to-pink/20 border-2 border-dashed border-coral/30 rounded-xl overflow-hidden`}
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
