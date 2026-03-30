/*
 * 404 — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <span className="font-condensed uppercase tracking-[0.3em] text-teal/50 text-xs mb-4 block">
            Lost in the Field
          </span>
          <h1 className="text-7xl md:text-9xl font-bold text-white/10 mb-4">
            404
          </h1>
          <p className="font-serif text-lg text-white/50 italic mb-8 max-w-md mx-auto">
            This page doesn't exist — or hasn't been forged yet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-glow transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
