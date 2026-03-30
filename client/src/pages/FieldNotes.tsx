/*
 * Field Notes — ASM Website
 * Formerly "The Dispatch"
 * Stories, insights, and field dispatches from the worlds Sindbad moves through.
 */
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LINKEDIN_URL = "https://www.linkedin.com/in/sindbad-horizon-b19b4a264";

export default function FieldNotes() {
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
              Stories & Dispatches
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Field Notes
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/60 italic mb-10 leading-relaxed">
              Observations, stories, and insights from the worlds I move through.
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
                Every event has a story beyond the highlight reel. Every pitch has a business lesson hiding in the Q&A. Every adventure has something worth documenting.
              </p>
              <p className="font-serif text-lg text-white/70 leading-relaxed">
                Field Notes is where those stories live — written from the perspective of a StorySmith embedded in the entrepreneurial, creative, and adventure worlds of Boulder and beyond.
              </p>
            </div>

            {/* Coming Soon badge */}
            <div className="bg-slate-card border border-white/5 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-condensed uppercase tracking-[0.15em] text-teal text-xs">Coming Soon</span>
              </div>
              <p className="font-serif text-white/50 italic mb-6">
                First entries coming soon. Follow along on LinkedIn in the meantime.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-5 py-2.5 hover:bg-teal-glow transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                aria-label="Follow Sindbad Horizon on LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                Follow on LinkedIn
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
