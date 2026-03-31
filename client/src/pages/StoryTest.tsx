/*
 * StoryTest — ASM Website
 * Redesigned educational page for The Story Test service
 * Dark charcoal background (#1e1e2e) matching site design
 * 2D faceless illustrations per section, teal accents, section dividers
 */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

/* ─── CDN illustration URLs ─── */
const HERO_FORK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-hero-fork-XAjajbRZYLKjtEsqjcguNU.webp";
const PROBLEM_BUBBLES_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-problem-bubbles-hM6hkF8SzxnJAwLnCd2vmt.webp";
const ANALYSIS_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-analysis-erNavcuhmLjYwrRqSXXqJm.webp";
const WHO_FOR_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-who-for-SHDCC6rpQxVMkT2gAta82H.webp";
const HANDOFF_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-handoff-B88eQfCkkkVBCQafuCBfsD.webp";

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
  {
    text: "You just pitched and want to know if it actually landed the way you think it did.",
    label: "The Pitcher",
  },
  {
    text: "You\u2019re about to spend on ads, fundraising, or a launch and want to derisk it first.",
    label: "The Strategist",
  },
  {
    text: "You\u2019ve been getting vague rejections and want to know what\u2019s really standing in the way.",
    label: "The Skeptic",
  },
];

export default function StoryTest() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e2e] via-[#1a2a2a] to-[#1e1e2e]" aria-hidden="true" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <FadeIn>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-teal transition-colors mb-10 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>

                <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-6 block">
                  Market Research &amp; Testing
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-white mb-6">
                  The Story{" "}
                  <span className="text-teal">Test</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed italic font-serif max-w-xl">
                  Most pitches don&rsquo;t fail because the idea is bad. They fail because the real barriers never get named.
                </p>
              </FadeIn>
            </div>

            {/* Right — hero illustration */}
            <FadeIn delay={0.2}>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-teal/5 rounded-full blur-3xl scale-90" aria-hidden="true" />
                <img
                  src={HERO_FORK_URL}
                  alt="Faceless figure at a fork in the road — one path lit in teal representing clarity, the other in shadow representing confusion"
                  className="relative w-full max-w-lg object-contain drop-shadow-[0_0_30px_rgba(0,166,147,0.08)]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SECTION 1 — The Problem ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
          01
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text — left */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-condensed text-teal/50 text-sm tabular-nums">01</span>
                  <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  The Problem
                </h2>
                <p className="font-serif text-lg md:text-xl text-white/65 leading-relaxed">
                  Every founder, filmmaker, brand, and entrepreneur faces the same challenge: you&rsquo;re too close to your own story to see it clearly. You know every reason your idea is good. Your audience only knows the reasons they&rsquo;re not convinced yet. That gap &mdash; between what you think you&rsquo;re communicating and what your audience actually hears &mdash; is where most pitches, campaigns, and launches quietly die.
                </p>
              </FadeIn>
            </div>

            {/* Illustration — right */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-teal/5 rounded-full blur-2xl scale-110" aria-hidden="true" />
                  <img
                    src={PROBLEM_BUBBLES_URL}
                    alt="Faceless figure surrounded by floating speech bubbles with question marks — mixed signals from an audience"
                    className="relative w-full max-w-sm object-contain"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SECTION 2 — What The Story Test Is + Clarity Report ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
          02
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Illustration — left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FadeIn delay={0.15}>
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-teal/5 rounded-full blur-2xl scale-110" aria-hidden="true" />
                  <img
                    src={ANALYSIS_URL}
                    alt="Faceless figure holding a magnifying glass toward a group of diverse seated figures — audience analysis"
                    className="relative w-full max-w-sm object-contain"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Text — right */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeIn>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-condensed text-teal/50 text-sm tabular-nums">02</span>
                  <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  What The Story Test Is &mdash; And What{" "}
                  <span className="text-teal">The Clarity Report</span>{" "}
                  Delivers
                </h2>
                <div className="space-y-6">
                  <p className="font-serif text-lg md:text-xl text-white/65 leading-relaxed">
                    The Story Test is my approach to market research and market testing &mdash; figuring out whether your story actually lands with the people you need to reach. It can take many forms depending on what you need and where you are.
                  </p>
                  <p className="font-serif text-lg md:text-xl text-white/65 leading-relaxed">
                    The flagship version is <span className="text-teal font-semibold">The Clarity Report</span>: AI-powered audience research using a structured panel of AI twin respondents, each modeled from real people and behavioral data. You submit your pitch, deck, concept, or campaign. They tell you exactly what they think &mdash; not what you hoped they&rsquo;d think.
                  </p>
                  <p className="font-serif text-lg md:text-xl text-white/65 leading-relaxed">
                    You get back quantitative scores on receptivity and interest, qualitative written responses, and the specific objections standing between you and a yes. Think of it as a structured focus group &mdash; without the $10,000 price tag or the six-week wait.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SECTION 3 — Who This Is For ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
          03
        </div>

        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-condensed text-teal/50 text-sm tabular-nums">03</span>
              <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Who This Is For
            </h2>
          </FadeIn>

          {/* Illustration spanning full width */}
          <FadeIn delay={0.1}>
            <div className="relative flex justify-center mb-12">
              <img
                src={WHO_FOR_URL}
                alt="Three faceless figures — one mid-pitch, one at a laptop looking uncertain, one with arms crossed looking skeptical"
                className="w-full max-w-2xl object-contain opacity-90"
              />
            </div>
          </FadeIn>

          {/* Use case cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative border border-white/5 bg-white/[0.02] p-8 h-full flex flex-col group hover:border-teal/20 transition-colors">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-px bg-teal/40" aria-hidden="true" />
                  <div className="absolute top-0 left-0 w-px h-8 bg-teal/40" aria-hidden="true" />

                  <span className="font-condensed text-teal/50 text-sm tabular-nums mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-condensed uppercase tracking-[0.15em] text-teal/70 text-xs mb-4">
                    {item.label}
                  </span>
                  <p className="font-serif text-white/60 leading-relaxed flex-1">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SECTION 4 — What Happens Next ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
          04
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text — left */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-condensed text-teal/50 text-sm tabular-nums">04</span>
                  <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  What Happens Next
                </h2>
                <div className="space-y-6">
                  <p className="font-serif text-lg md:text-xl text-white/65 leading-relaxed">
                    Every Story Test starts with a conversation. We figure out what you&rsquo;re trying to learn, who your real audience is, and what questions will actually give you useful signal. Then I run the test and walk you through what we find.
                  </p>
                  <p className="font-serif text-lg md:text-xl text-white/55 leading-relaxed italic">
                    No pricing on this page &mdash; every project is different and I&rsquo;d rather have the right conversation than send you a number that doesn&rsquo;t fit your situation.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Illustration — right */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-teal/5 rounded-full blur-2xl scale-110" aria-hidden="true" />
                  <img
                    src={HANDOFF_URL}
                    alt="Two faceless figures facing each other, one handing a glowing document to the other — the handoff of clarity"
                    className="relative w-full max-w-sm object-contain"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="relative border border-white/5 bg-white/[0.02] p-10 md:p-14">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-px bg-teal/50" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-px h-12 bg-teal/50" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-12 h-px bg-teal/50" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-px h-12 bg-teal/50" aria-hidden="true" />

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to find out if your story lands?
              </h3>
              <p className="font-serif text-white/50 leading-relaxed mb-8 max-w-xl">
                Book a discovery call and we&rsquo;ll figure out the right approach together.
              </p>

              <a
                href="https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-8 py-4 hover:bg-teal-glow transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                aria-label="Book a Discovery Call on Calendly (opens in new tab)"
              >
                Book a Discovery Call
                <ExternalLink className="w-4 h-4 opacity-60" aria-hidden="true" />
              </a>
              <p className="mt-6 text-sm text-white/40 flex items-center gap-2">
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
