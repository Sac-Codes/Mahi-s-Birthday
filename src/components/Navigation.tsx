import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Star } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "MAHI", href: "#profile" },
  { label: "LORE", href: "#lore" },
  { label: "MEMORIES", href: "#memories" },
  { label: "HER PEOPLE", href: "#friends" },
  { label: "WISHES", href: "#wishes" },
  { label: "FINALE", href: "#finale" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [starClicks, setStarClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStarClick = () => {
    const newCount = starClicks + 1;
    setStarClicks(newCount);
    if (newCount >= 5) {
      setShowSecret(true);
      setStarClicks(0);
      setTimeout(() => setShowSecret(false), 4000);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-dark shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavClick("#home")}
              className="font-display text-sm font-bold tracking-widest text-ivory hover:text-coral transition-colors cursor-pointer"
            >
              MAHI
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-xs font-medium tracking-wider transition-colors rounded-full cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? "text-coral bg-coral/20"
                      : "text-ivory/60 hover:text-ivory hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <motion.button
                  onClick={handleStarClick}
                  className="p-2 text-gold/60 hover:text-gold transition-colors cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label="Secret star"
                  title="A secret star"
                >
                  <Star className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showSecret && (
                    <motion.div
                      className="absolute top-10 right-0 bg-ivory rounded-xl p-4 shadow-xl min-w-[220px] z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    >
                      <p className="font-display font-bold text-plum text-sm mb-1">
                        SECRET UNLOCKED
                      </p>
                      <p className="text-xs text-warm-gray">
                        Unfortunately, there is still no known cure for Mahi's chaos.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                className="lg:hidden p-2 text-ivory hover:text-coral transition-colors cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-deep-plum/95 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-6 py-3 text-sm font-medium tracking-wider transition-colors rounded-full cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? "text-coral bg-coral/20"
                      : "text-ivory/70 hover:text-ivory"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
