/*
 * StoryTestButton — Floating sticky button linking to /story-test
 * Appears in bottom-right corner on scroll, hidden on /story-test itself
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href="/story-test"
            className="inline-flex items-center gap-2 bg-teal/90 backdrop-blur-sm text-background font-semibold text-sm px-5 py-3 shadow-lg shadow-teal/20 hover:bg-teal hover:shadow-teal/30 transition-all focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
          >
            The Story Test
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
