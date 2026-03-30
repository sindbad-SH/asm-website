/*
 * Navigation — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 * Background: #1e1e2e dark charcoal
 * Transparent on top, solid on scroll. Horizontal logo in header.
 */
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/ASM_Logo_MarkandTextStacked_CharcoalandAqua_d479d70d.webp";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Field", href: "/#field" },
  { label: "What I Do", href: "/#services" },
  { label: "Connect", href: "/#connect" },
];

const moreItems = [
  { label: "Field Notes", href: "/field-notes", desc: "Stories, insights & field dispatches" },
  { label: "The Arsenal", href: "/arsenal", desc: "Gear, tools & recommendations" },
  { label: "The Map", href: "/map", desc: "Events worth showing up for" },
  { label: "Let's Connect", href: "/connect", desc: "Book a call or start a conversation" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMoreOpen(false);
      setMobileOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      } else {
        window.location.href = href;
        return;
      }
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1e1e2e]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Adventure Storytelling Media — Home">
            <img
              src={LOGO_URL}
              alt="Adventure Storytelling Media logo"
              className="h-10 md:h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-sm font-medium tracking-wide text-white/70 hover:text-teal transition-colors relative group focus-visible:text-teal"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setMoreOpen(!moreOpen);
                  }
                }}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className="text-sm font-medium tracking-wide text-white/70 hover:text-teal transition-colors flex items-center gap-1 focus-visible:text-teal"
              >
                More
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                    className="absolute top-full right-0 mt-3 w-56 bg-[#252538] border border-white/8 shadow-2xl"
                    onMouseLeave={() => setMoreOpen(false)}
                  >
                    {moreItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 focus-visible:bg-white/5"
                      >
                        <span className="text-sm font-medium text-white/90">{item.label}</span>
                        <span className="text-xs text-white/40 block mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 hover:text-teal transition-colors p-2"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-label="Mobile navigation menu"
            className="fixed inset-0 z-40 bg-[#1e1e2e]/98 backdrop-blur-xl pt-20"
          >
            <div className="container flex flex-col gap-1 py-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => handleNavClick(item.href), 100);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className="text-2xl font-semibold text-white/90 hover:text-teal py-3 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-xs font-condensed uppercase tracking-[0.2em] text-white/30 mb-4 block">Explore</span>
                {moreItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + i) * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg text-white/60 hover:text-teal py-2 block transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
