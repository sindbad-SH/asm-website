/*
 * Home — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 * Background: #1e1e2e dark charcoal
 * StorySmith concept: forged precision, angular compositions, teal as forge-heat.
 * DM Sans headlines + Crimson Pro body + Barlow Condensed labels.
 */
import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

// CDN URLs — provided assets
const HEADSHOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/IMG_20251115_094655_696_2011f9cc.webp";

// CDN URLs — new faceless 2D illustrations
const HERO_CHARACTER_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/hero-character-faceless-nobg_0b714bb7.png";
const FIELD_SCENE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/field-scene-2d-nobg_27c8823a.png";
const STORY_SCOUT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-scout-icon-nobg_06ca3909.png";
const STORY_TEST_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-icon-nobg_1d5e4ffd.png";
const STORY_FORGE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-forge-icon-nobg_b35c7cee.png";

// LinkedIn
const LINKEDIN_URL = "https://www.linkedin.com/in/sindbad-horizon-b19b4a264";

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

/* ─── YouTube Embed ─── */
function YouTubeEmbed({ videoId, title, isShort = false }: { videoId: string; title: string; isShort?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden bg-[#1e1e2e] ${isShort ? "aspect-[9/16]" : "aspect-video"}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section aria-label="Hero — Sindbad Horizon, StorySmith" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — 2D illustrated mountain silhouettes */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#1e1e2e]" />
        {/* Subtle teal mountain silhouette SVG background */}
        <svg className="absolute bottom-0 left-0 right-0 h-1/3 opacity-[0.06]" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M0,400 L0,280 L120,180 L240,260 L360,140 L480,220 L600,100 L720,200 L840,80 L960,180 L1080,60 L1200,160 L1320,120 L1440,200 L1440,400 Z" fill="currentColor" className="text-teal" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] via-transparent to-[#1e1e2e]/60" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text — left 2/3 */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-condensed uppercase tracking-[0.3em] text-teal text-xs md:text-sm">
                  Adventure Storytelling Media
                </span>
                {/* Faceless 2D character — field reporter energy */}
                <img
                  src={HERO_CHARACTER_URL}
                  alt="Faceless illustrated character with camera and adventurous field reporter energy"
                  className="h-20 md:h-28 w-auto"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6">
                <span className="text-teal">StorySmith.</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium text-white/90 leading-tight block mt-2">
                  I find the entrepreneurial story inside every world I enter — and I forge it into something that works.
                </span>
              </h1>
              <p className="font-serif text-lg md:text-xl text-white/50 italic max-w-xl mb-10">
                Based in Boulder, CO. Embedded in the startup ecosystem. Always on the next adventure.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#field"
                  className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-6 py-3 hover:bg-teal-glow transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                >
                  See My Work
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#connect"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm px-6 py-3 hover:border-teal/50 hover:text-teal transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>

          {/* Headshot — right 1/3 */}
          <div className="lg:col-span-5 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden" style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)" }}>
                <img
                  src={HEADSHOT_URL}
                  alt="Sindbad Horizon — StorySmith and founder of Adventure Storytelling Media, wearing a vest and bandana at a professional event"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e]/60 via-transparent to-transparent" aria-hidden="true" />
              </div>
              {/* Teal accent corners */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-teal/30" aria-hidden="true" />
              <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-teal/30" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <ArrowDown className="w-5 h-5 text-teal/40" />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BIO SECTION
   ═══════════════════════════════════════════════════════════════ */
function BioSection() {
  return (
    <section aria-label="About Sindbad Horizon" className="py-20 md:py-28 relative">
      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
        01
      </div>

      <div className="container">
        <FadeIn>
          <div className="max-w-3xl">
            <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-8 block">
              About
            </span>
            <div className="space-y-6">
              <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed">
                I'm Sindbad Horizon — StorySmith and founder of Adventure Storytelling Media. I cover startup pitch events, luxury automotive showcases, independent film festivals, and anywhere else ambitious people are building something worth capturing.
              </p>
              <p className="font-serif text-lg md:text-xl text-white/70 leading-relaxed">
                The most powerful stories aren't just told — they are tested. I build the asset, measure its effectiveness, and feed those insights back into the next iteration. Research &rarr; Creation &rarr; Refinement. I don't just capture your story — I help you find out if it lands.
              </p>
              <p className="font-serif text-lg md:text-xl text-white/70 leading-relaxed italic">
                Boulder is home base. The world is the territory.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE FIELD SECTION — "Story Scout"
   ═══════════════════════════════════════════════════════════════ */

const fieldEntries = [
  {
    title: "Concours d'Elegance",
    location: "Pebble Beach",
    context: "A restored Shelby 427 SC Roadster. The owner's words say it better than mine.",
    testimonial: {
      text: "Working with Sindbad Horizon of Adventure Storytelling Media was a great experience. He not only captured stunning footage and photographs of the Cobra at Pebble Beach, but also brought the story and character of the car to life through his editing and creative direction. The results went far beyond documentation — they conveyed the emotion, craftsmanship, and legacy behind the machine itself. Highly recommended for anyone who values authentic, cinematic storytelling.",
      author: "Jack Bell",
      role: "Owner",
    },
    media: { type: "youtube" as const, videoId: "SvIIXnM2R70", title: "Shelby 427 SC Roadster — Pebble Beach Concours d'Elegance cinematic video" },
  },
  {
    title: "PitchBoulder",
    location: "Boulder, CO",
    context: "Every Wednesday, founders step up. I capture what happens.",
    testimonial: {
      text: "When we created the website for PitchBoulder, we needed a video to capture the spirit of our meetings and the energy in the room. I hired Sindbad Horizon to create a piece that would address these requirements. Did he ever! The video is sensational, and I could not be more pleased.",
      author: "Peter Rothschild",
      role: "Founder",
    },
    media: { type: "youtube" as const, videoId: "n7k-Bwu3KIU", title: "PitchBoulder — startup pitch event highlight video" },
  },
  {
    title: "Colorado Medieval Festival",
    location: "Loveland, CO",
    context: "Most people know the Colorado Renaissance Festival south of Denver. Fewer know about this one — tucked into the forest west of Loveland at Colorado Castle. The Knights of Mayhem brought full contact jousting front and center, with performers whose credits include Game of Thrones. Drone work, ground footage, and a story hiding in plain sight.",
    testimonial: null,
    media: { type: "youtube" as const, videoId: "2OMfPSibhvE", title: "Colorado Medieval Festival — drone and ground footage of jousting and performances" },
  },
  {
    title: "On Location — Places Worth Going",
    location: "Switzerland & Italy",
    context: "Not every story needs a client brief. Some just need someone willing to show up with a drone and a good eye. Switzerland, Italy, and counting.",
    testimonial: null,
    media: {
      type: "shorts-grid" as const,
      shorts: [
        { videoId: "NDSCqskuloU", title: "Alpine drone footage — Swiss Alps short 1" },
        { videoId: "JXRdUW44Ogc", title: "Alpine drone footage — Swiss Alps short 2" },
        { videoId: "4nCOwBhR8wY", title: "Alpine drone footage — Italian Alps short 3" },
        { videoId: "wscRbnML_U4", title: "Alpine drone footage — Alps short 4" },
      ],
    },
  },
];

function FieldSection() {
  return (
    <section id="field" aria-label="Portfolio — The Field" className="relative py-20 md:py-28">
      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
        02
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <div className="flex items-end gap-6 mb-2">
            <div>
              <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-4 block">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                The Field
              </h2>
            </div>
            {/* 2D illustrated scene — storytelling/coverage */}
            <img
              src={FIELD_SCENE_URL}
              alt="Faceless illustrated figure with camera on a mountain overlooking a landscape, representing field storytelling"
              className="h-16 md:h-24 w-auto opacity-70"
            />
          </div>
          <p className="font-serif text-lg text-white/50 italic mb-16 max-w-lg">
            Story Scout — Events I've covered. Worlds I've entered.
          </p>
        </FadeIn>

        <div className="space-y-20 md:space-y-28">
          {fieldEntries.map((entry, i) => (
            <FadeIn key={entry.title} delay={0.1}>
              <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Media */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {entry.media.type === "youtube" && (
                    <YouTubeEmbed
                      videoId={entry.media.videoId}
                      title={entry.media.title}
                    />
                  )}
                  {entry.media.type === "shorts-grid" && (
                    <div className="grid grid-cols-2 gap-2">
                      {entry.media.shorts.map((short) => (
                        <YouTubeEmbed
                          key={short.videoId}
                          videoId={short.videoId}
                          title={short.title}
                          isShort
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-condensed text-teal/50 text-sm tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {entry.title}
                  </h3>
                  <span className="font-condensed uppercase tracking-[0.15em] text-white/30 text-xs block mb-4">
                    {entry.location}
                  </span>
                  <p className="font-serif text-white/60 italic mb-6 leading-relaxed">
                    {entry.context}
                  </p>

                  {entry.testimonial && (
                    <blockquote className="border-l-2 border-teal/30 pl-5 py-2">
                      <p className="font-serif text-sm text-white/50 italic leading-relaxed mb-3">
                        "{entry.testimonial.text}"
                      </p>
                      <footer className="text-xs text-white/40">
                        <span className="text-teal/70 font-medium">{entry.testimonial.author}</span>
                        <span className="mx-2 text-white/20" aria-hidden="true">—</span>
                        {entry.testimonial.role}
                      </footer>
                    </blockquote>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}

          {/* More From The Field — editorial card replacing SeriesFest */}
          <FadeIn delay={0.1}>
            <article className="border-l-2 border-teal/40 bg-slate-card/30 p-8 md:p-12 max-w-3xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-condensed text-teal/50 text-sm tabular-nums">05</span>
                <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                More From The Field
              </h3>
              <p className="font-serif text-white/60 italic leading-relaxed mb-6">
                Not every story fits a single frame. SeriesFest Denver, the American Film Market, Boulder Startup Week, Colorado Startup Week, Pitch Boulder — if it's ambitious, interesting, and worth covering, a StorySmith belongs there. More coverage documented on LinkedIn.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-5 py-2.5 hover:bg-teal-glow transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                aria-label="View more coverage on LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                Follow on LinkedIn
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </article>
          </FadeIn>
        </div>

        {/* Follow CTA */}
        <FadeIn>
          <div className="mt-20 text-center">
            <p className="font-serif text-white/40 italic mb-4">
              More stories in progress. Follow along on LinkedIn.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-medium text-sm px-5 py-2.5 hover:border-teal/40 hover:text-teal transition-colors focus-visible:ring-2 focus-visible:ring-teal"
              aria-label="Follow Sindbad Horizon on LinkedIn (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              Follow on LinkedIn
              <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WHAT I DO (SERVICES) SECTION — "The StorySmith Process"
   ═══════════════════════════════════════════════════════════════ */

const services = [
  {
    title: "Story Scout",
    description: "I embed in high-caliber events and capture the story from the inside. Video, audio, drone, and photography — from startup pitch nights to luxury showcases to film festivals.",
    illustration: STORY_SCOUT_URL,
    illustrationAlt: "Faceless illustrated character extending a microphone toward another person, engaged interviewer energy",
    cta: { label: "Get In Touch", href: "#connect" },
  },
  {
    title: "Story Test",
    description: "AI-powered audience research that tells you who's receptive to your pitch, who isn't, and what objections are standing in the way. Available standalone or paired with any coverage package. The idea isn't the problem. The unaddressed objections are.",
    illustration: STORY_TEST_URL,
    illustrationAlt: "Faceless illustrated character facilitating a group discussion with a diverse panel of seated people",
    cta: { label: "Learn More", href: "mailto:sindbad@advstmedia.com" },
    highlight: true,
  },
  {
    title: "Story Forge",
    description: "Have something in mind that doesn't fit a box? Good. Let's talk.",
    illustration: STORY_FORGE_URL,
    illustrationAlt: "Faceless illustrated character surrounded by floating creative tools — camera, laptop, drone, pen, microphone",
    cta: { label: "Get In Touch", href: "#connect" },
  },
];

function ServicesSection() {
  return (
    <section id="services" aria-label="Services — What I Do" className="py-20 md:py-28 relative">
      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
        03
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            What I Do
          </h2>
          <p className="font-serif text-lg text-white/50 italic mb-4 max-w-lg">
            Whether you need the story captured, tested, or both — here's how I work.
          </p>
          <span className="font-condensed uppercase tracking-[0.3em] text-teal text-xs mb-16 block">
            The StorySmith Process
          </span>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className={`relative bg-background p-8 md:p-10 h-full flex flex-col hover:bg-slate-card/50 transition-colors duration-300 ${service.highlight ? "bg-slate-card" : ""}`}>
                {/* Top accent line for highlighted card */}
                {service.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-teal/60 to-transparent" aria-hidden="true" />
                )}

                {/* 2D Faceless Illustration — larger and more prominent */}
                <div className="mb-6">
                  <img
                    src={service.illustration}
                    alt={service.illustrationAlt}
                    className="h-28 md:h-36 w-auto"
                  />
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-condensed text-teal/40 text-sm tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-px bg-teal/20" aria-hidden="true" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-serif text-white/55 leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <a
                  href={service.cta.href}
                  target={service.cta.href.startsWith("mailto:") ? undefined : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-glow transition-colors group focus-visible:ring-2 focus-visible:ring-teal"
                  aria-label={`${service.cta.label} — ${service.title}`}
                >
                  {service.cta.label}
                  <span className="w-4 h-px bg-teal group-hover:w-8 transition-all" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONNECT SECTION — simplified, no form
   ═══════════════════════════════════════════════════════════════ */
function ConnectSection() {
  return (
    <section id="connect" aria-label="Contact — Let's Talk" className="py-20 md:py-28 relative">
      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
        04
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let's Talk
            </h2>
            <p className="font-serif text-lg text-white/50 italic mb-10 max-w-md">
              Whether you're a founder, event organizer, or just curious — reach out.
            </p>

            <div className="space-y-6 mb-10">
              <a
                href="mailto:sindbad@advstmedia.com"
                className="flex items-center gap-4 group"
                aria-label="Email Sindbad at sindbad@advstmedia.com"
              >
                <div className="w-12 h-12 border border-teal/30 flex items-center justify-center group-hover:border-teal/60 group-hover:bg-teal/5 transition-all">
                  <Mail className="w-5 h-5 text-teal" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <p className="text-teal font-medium group-hover:text-teal-glow transition-colors">
                    sindbad@advstmedia.com
                  </p>
                </div>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Connect with Sindbad Horizon on LinkedIn (opens in new tab)"
              >
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-teal/40 group-hover:bg-teal/5 transition-all">
                  <Linkedin className="w-5 h-5 text-white/50 group-hover:text-teal transition-colors" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-white/40">LinkedIn</p>
                  <p className="text-white/70 font-medium group-hover:text-teal transition-colors">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>
            </div>

            <p className="font-serif text-white/40 italic text-sm">
              Prefer to reach out directly? All conversations start with a message.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#field" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-teal focus:text-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold">
        Skip to main content
      </a>
      <Navigation />
      <HeroSection />
      <SectionDivider className="container" />
      <BioSection />
      <SectionDivider className="container" />
      <FieldSection />
      <SectionDivider className="container" />
      <ServicesSection />
      <SectionDivider className="container" />
      <ConnectSection />
      <Footer />
    </div>
  );
}
