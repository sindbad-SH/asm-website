/*
 * StoryTestButton — Floating sticky button linking to /story-test
 * Appears in bottom-right corner on scroll, hidden on /story-test itself
 * Subtle animations: pulsing glow ring + gentle arrow nudge to draw attention
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryTestButton() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on the /story-test page itself
  if (location === "/story-test") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Pulsing glow ring behind the button */}
          <span
            className="absolute inset-0 rounded-sm animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] bg-teal/20"
            aria-hidden="true"
          />

          <Link
            href="/story-test"
            className="relative inline-flex items-center gap-2 bg-teal/90 backdrop-blur-sm text-background font-semibold text-sm px-5 py-3 shadow-lg shadow-teal/20 hover:bg-teal hover:shadow-teal/40 hover:shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-teal rounded-sm group"
          >
            The Story Test
            {/* Arrow nudges right on idle cycle + on hover */}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="inline-flex group-hover:translate-x-1 transition-transform"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
