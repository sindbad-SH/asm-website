/*
 * ComingSoon — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 * Minimal placeholder pages for upcoming sections.
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ComingSoonProps {
  title: string;
  subtitle: string;
}

export default function ComingSoon({ title, subtitle }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <span className="font-condensed uppercase tracking-[0.3em] text-teal text-xs mb-6 block">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="font-serif text-lg md:text-xl text-white/50 italic mb-10 max-w-md mx-auto">
            {subtitle}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal-glow transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
