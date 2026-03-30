/*
 * Let's Connect — ASM Website
 * Multiple contact options: email, LinkedIn, schedule via Calendly.
 */
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, CalendarDays, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LINKEDIN_URL = "https://www.linkedin.com/in/sindbad-horizon-b19b4a264";
const CALENDLY_URL = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

export default function LetsConnect() {
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let's Connect
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/60 italic mb-10 leading-relaxed">
              However you prefer to reach out — here's how.
            </p>

            {/* Primary CTA — Calendly */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal text-background font-bold text-lg px-8 py-4 hover:bg-teal-glow transition-colors mb-12 focus-visible:ring-2 focus-visible:ring-teal"
              aria-label="Schedule a conversation on Calendly (opens in new tab)"
            >
              <CalendarDays className="w-5 h-5" aria-hidden="true" />
              Schedule a Conversation
              <ExternalLink className="w-4 h-4 opacity-60" aria-hidden="true" />
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-teal/30 to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-teal/40" />
              <div className="flex-1 h-px bg-gradient-to-l from-teal/30 to-transparent" />
            </div>

            {/* Three contact options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-12">
              {/* Email */}
              <a
                href="mailto:sindbad@advstmedia.com"
                className="group bg-background p-6 md:p-8 hover:bg-slate-card/50 transition-colors text-center"
                aria-label="Email Sindbad at sindbad@advstmedia.com"
              >
                <div className="w-14 h-14 border border-teal/30 flex items-center justify-center mx-auto mb-4 group-hover:border-teal/60 group-hover:bg-teal/5 transition-all">
                  <Mail className="w-6 h-6 text-teal" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-sm text-teal group-hover:text-teal-glow transition-colors">
                  sindbad@advstmedia.com
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background p-6 md:p-8 hover:bg-slate-card/50 transition-colors text-center"
                aria-label="Connect with Sindbad on LinkedIn (opens in new tab)"
              >
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:border-teal/40 group-hover:bg-teal/5 transition-all">
                  <Linkedin className="w-6 h-6 text-white/50 group-hover:text-teal transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
                <span className="inline-flex items-center gap-1 text-sm text-white/50 group-hover:text-teal transition-colors">
                  Connect on LinkedIn
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>

              {/* Schedule */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background p-6 md:p-8 hover:bg-slate-card/50 transition-colors text-center"
                aria-label="Book a time directly on Calendly (opens in new tab)"
              >
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:border-teal/40 group-hover:bg-teal/5 transition-all">
                  <CalendarDays className="w-6 h-6 text-white/50 group-hover:text-teal transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Schedule</h3>
                <p className="text-sm text-white/50 group-hover:text-teal transition-colors">
                  Book a time directly
                </p>
              </a>
            </div>

            {/* Note */}
            <p className="font-serif text-white/40 italic text-sm text-center">
              Not sure where to start? Send an email. That's always the right first step.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
