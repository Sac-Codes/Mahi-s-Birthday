import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music as MusicIcon, Play, Pause } from "lucide-react";
import { birthdayData } from "../data/birthday";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";

function Waveform({ isPlaying }: { isPlaying: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const bars = [12, 20, 16, 24, 18, 28, 14, 22, 16, 26, 12, 20, 18, 24, 14, 22];

  return (
    <div className="flex items-end gap-0.5 h-8" aria-hidden="true">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-coral to-purple rounded-full"
          initial={{ height: 4 }}
          animate={prefersReducedMotion || !isPlaying ? {} : { height: [4, height, 4] }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Music() {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSong = (index: number) => {
    if (currentSong === index) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(birthdayData.songs[index].audio);
      audioRef.current = audio;
      audio.play();
      setCurrentSong(index);
      setIsPlaying(true);
    }
  };

  return (
    <section id="music" className="py-20 md:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="MAHI'S SOUNDTRACK"
          subtitle="The songs that live in her playlist and in her vibe."
          color="purple"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {birthdayData.songs.map((song, i) => (
            <Reveal key={song.title} delay={i * 0.15}>
              <motion.div
                className={`bg-white rounded-2xl p-6 card-shadow transition-all group border ${
                  currentSong === i ? "border-purple/40 card-shadow-hover" : "border-purple/10"
                }`}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    currentSong === i
                      ? "bg-gradient-to-br from-purple/30 to-coral/30"
                      : "bg-gradient-to-br from-purple/20 to-coral/20 group-hover:from-purple/30 group-hover:to-coral/30"
                  }`}>
                    <MusicIcon className="w-6 h-6 text-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-lg text-charcoal truncate">
                      {song.title}
                    </h4>
                    <p className="text-sm text-warm-gray">
                      {song.artist || "Artist to be added"}
                    </p>
                    <div className="mt-3">
                      <Waveform isPlaying={currentSong === i && isPlaying} />
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSong(i)}
                    className="p-3 rounded-full bg-purple/10 text-purple hover:bg-purple/20 transition-colors cursor-pointer"
                    aria-label={currentSong === i && isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
                  >
                    {currentSong === i && isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <p className="text-sm text-warm-gray/60 italic">
            Click play to listen to Mahi's favorites.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
