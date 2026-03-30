/*
 * StoryTest — ASM Website
 * Educational page for The Story Test service
 * Dark charcoal background (#1e1e2e) matching site design
 * Single-column layout, no pricing
 */
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ─── Fade-in animation wrapper ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const useCases = [
  "You just pitched and want to know if it actually landed the way you think it did.",
  "You\u2019re about to spend on ads, fundraising, or a launch and want to derisk it first.",
  "You\u2019ve been getting vague rejections and want to know what\u2019s really standing in the way.",
];

export default function StoryTest() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-teal transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-6 block">
              Service
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-white mb-6">
              The Story Test
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed italic font-serif">
              Most pitches don&rsquo;t fail because the idea is bad. They fail because the real barriers never get named.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 1 — The Problem */}
      <section className="pb-16 md:pb-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-condensed text-teal/50 text-sm tabular-nums">01</span>
              <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Problem
            </h2>
            <p className="font-serif text-lg text-white/65 leading-relaxed">
              Every founder, filmmaker, brand, and entrepreneur faces the same challenge: you&rsquo;re too close to your own story to see it clearly. You know every reason your idea is good. Your audience only knows the reasons they&rsquo;re not convinced yet. That gap &mdash; between what you think you&rsquo;re communicating and what your audience actually hears &mdash; is where most pitches, campaigns, and launches quietly die.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — What The Story Test Is */}
      <section className="pb-16 md:pb-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-condensed text-teal/50 text-sm tabular-nums">02</span>
              <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What The Story Test Is
            </h2>
            <div className="space-y-6">
              <p className="font-serif text-lg text-white/65 leading-relaxed">
                The Story Test is AI-powered audience research that maps your audience response before you go to market. You submit your pitch, deck, concept, or campaign. A structured panel of AI twin respondents &mdash; each modeled from real people and behavioral data, filtered by the demographics that matter to you &mdash; reviews it and tells you exactly what they think. Not what you hoped they&rsquo;d think. What they actually think.
              </p>
              <p className="font-serif text-lg text-white/65 leading-relaxed">
                You get back quantitative scores on receptivity and interest, qualitative written responses, and the specific objections that are standing in the way of a yes. Think of it as a structured focus group &mdash; without the $10,000 price tag or the six-week wait.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3 — Who This Is For */}
      <section className="pb-16 md:pb-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-condensed text-teal/50 text-sm tabular-nums">03</span>
              <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Who This Is For
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {useCases.map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: '#1e1e2e' }}>
                  <span className="font-condensed text-teal/40 text-sm tabular-nums mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-white/60 leading-relaxed flex-1">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — What Happens Next */}
      <section className="pb-16 md:pb-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-condensed text-teal/50 text-sm tabular-nums">04</span>
              <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Happens Next
            </h2>
            <div className="space-y-6">
              <p className="font-serif text-lg text-white/65 leading-relaxed">
                Every Story Test starts with a conversation. We figure out what you&rsquo;re trying to learn, who your real audience is, and what questions will actually give you useful signal. Then I run the test and walk you through what we find.
              </p>
              <p className="font-serif text-lg text-white/55 leading-relaxed italic">
                No pricing on this page &mdash; every project is different and I&rsquo;d rather have the right conversation than send you a number that doesn&rsquo;t fit your situation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="border-l-2 border-teal/40 bg-slate-card/30 p-8 md:p-12">
              <a
                href="https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-6 py-3 hover:bg-teal-glow transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                aria-label="Book a Discovery Call on Calendly (opens in new tab)"
              >
                Book a Discovery Call
                <ExternalLink className="w-4 h-4 opacity-60" aria-hidden="true" />
              </a>
              <p className="mt-4 text-sm text-white/40 flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/30" aria-hidden="true" />
                Or reach out directly:{" "}
                <a
                  href="mailto:sindbad@advstmedia.com"
                  className="text-teal/70 hover:text-teal transition-colors"
                >
                  sindbad@advstmedia.com
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
