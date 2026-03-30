/*
 * The Arsenal — ASM Website
 * Formerly "Tools I Use"
 * Gear, tools, platforms, and experiences worth knowing about.
 */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Arsenal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Back link */}
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-teal transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-4 block">
              Gear & Recommendations
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              The Arsenal
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/60 italic mb-10 leading-relaxed">
              Gear, tools, platforms, and experiences worth knowing about.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-teal/30 to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-teal/40" />
              <div className="flex-1 h-px bg-gradient-to-l from-teal/30 to-transparent" />
            </div>

            {/* Body */}
            <div className="space-y-6 mb-12">
              <p className="font-serif text-lg text-white/70 leading-relaxed">
                A StorySmith is only as good as what they carry into the field. The Arsenal is a curated collection of what I actually use and recommend — from camera gear and AI tools to events worth attending and communities worth joining.
              </p>
              <p className="font-serif text-lg text-white/70 leading-relaxed">
                Everything here comes with context: not just what it is, but how it fits into the work and why it earns a place in the kit.
              </p>
            </div>

            {/* Coming Soon badge */}
            <div className="bg-slate-card border border-white/5 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-condensed uppercase tracking-[0.15em] text-teal text-xs">Coming Soon</span>
              </div>
              <p className="font-serif text-white/50 italic mb-6">
                Building this out now. First recommendations coming soon.
              </p>
              <p className="text-xs text-white/30 italic">
                Some links may be affiliate links. I only recommend things I actually use.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
