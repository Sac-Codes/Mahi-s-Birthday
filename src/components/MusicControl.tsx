import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { birthdayData } from "../data/birthday";

export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current) {
        audioRef.current = new Audio(birthdayData.songs[currentSong].audio);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 bg-plum/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-white/10"
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Mute soundtrack" : "Play soundtrack"}
      title={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
    >
      <div className="flex items-center gap-2">
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-coral" />
        ) : (
          <VolumeX className="w-5 h-5 text-ivory/50" />
        )}
        <span className="text-xs font-medium text-ivory/70 pr-1">
          SOUNDTRACK
        </span>
      </div>
    </motion.button>
  );
}
