import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "./sections/Hero";
import { Navigation } from "./components/Navigation";
import { Profile } from "./sections/Profile";
import { RoastGenerator } from "./sections/RoastGenerator";
import { Gravity } from "./sections/Gravity";
import { Lore } from "./sections/Lore";
import { Music } from "./sections/Music";
import { MemoryWall } from "./sections/MemoryWall";
import { Friends } from "./sections/Friends";
import { Wishes } from "./sections/Wishes";
import { WishWall } from "./sections/WishWall";
import { ThingsWeLove } from "./sections/ThingsWeLove";
import { FunFacts } from "./sections/FunFacts";
import { TodayStatus } from "./sections/TodayStatus";
import { IITian } from "./sections/IITian";
import { FinalMessage } from "./sections/FinalMessage";
import { Finale } from "./sections/Finale";
import { MusicControl } from "./components/MusicControl";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-ivory">
      <AnimatePresence>
        {!entered && <Hero onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <>
          <Navigation />
          <main>
            <section id="home" className="min-h-[60vh] flex items-center justify-center bg-ivory pt-16">
              <div className="text-center px-4">
                <p className="font-handwritten text-xl text-warm-gray/60 mb-2">
                  Welcome to Mahi’s birthday archive
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                  THE BIRTHDAY FILES
                </h1>
                <p className="text-warm-gray max-w-md mx-auto">
                  A very dramatic, very adorable, very chaos-approved documentation of the queen herself.
                </p>
              </div>
            </section>
            <Profile />
            <RoastGenerator />
            <Gravity />
            <Lore />
            <Music />
            <MemoryWall />
            <Friends />
            <Wishes />
            <WishWall />
            <ThingsWeLove />
            <FunFacts />
            <TodayStatus />
            <IITian />
            <FinalMessage />
            <Finale />
          </main>
          <MusicControl />
        </>
      )}
    </div>
  );
}

export default App;
