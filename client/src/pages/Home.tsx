/*
 * Home — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 * StorySmith concept: forged precision, angular compositions, teal as forge-heat.
 * DM Sans headlines + Crimson Pro body + Barlow Condensed labels.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, ExternalLink, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { toast } from "sonner";

// CDN URLs
const HEADSHOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/IMG_20251115_094655_696_2011f9cc.webp";
const HERO_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/hero-bg-DDQMYazAcwoWTMBUTgs3Mq.webp";
const FIELD_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/field-section-bg-eNiiFGY5Ww4fHGnZTQ5cLC.webp";
const SERVICES_IMG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/services-accent-7qCgxRr4WShoRC4mBCTvfM.webp";
const CONNECT_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/connect-bg-HE9YroLZoiBKajJMg9hXma.webp";

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

/* ─── Placeholder for media ─── */
function MediaPlaceholder({ label, type = "photo", className = "" }: { label: string; type?: "video" | "photo"; className?: string }) {
  return (
    <div className={`relative bg-slate-card border border-white/5 flex items-center justify-center overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
      <div className="text-center z-10 p-6">
        {type === "video" && (
          <div className="w-14 h-14 rounded-full border-2 border-teal/30 flex items-center justify-center mb-4 mx-auto group-hover:border-teal/60 transition-colors">
            <Play className="w-5 h-5 text-teal/50 ml-0.5" />
          </div>
        )}
        <p className="text-xs font-condensed uppercase tracking-[0.15em] text-white/30">[Placeholder]</p>
        <p className="text-sm text-white/50 mt-1">{label}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG_URL} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
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
              <span className="font-condensed uppercase tracking-[0.3em] text-teal text-xs md:text-sm mb-6 block">
                Adventure Storytelling Media
              </span>
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
                  className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-6 py-3 hover:bg-teal-glow transition-colors"
                >
                  See My Work
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="#connect"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm px-6 py-3 hover:border-teal/50 hover:text-teal transition-colors"
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
                  alt="Sindbad Horizon — StorySmith"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Teal accent corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-teal/30" />
              <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-teal/30" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
    <section className="py-20 md:py-28 relative">
      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
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
              <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed">
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
   THE FIELD SECTION
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
    media: { type: "video" as const, label: "Shelby 427 SC Roadster — Pebble Beach video" },
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
    media: { type: "video" as const, label: "PitchBoulder — event highlight video" },
  },
  {
    title: "Renaissance Festival",
    location: "Loveland, CO",
    context: "Jousters, combat, drone work, and a story most cameras never find.",
    testimonial: null,
    media: { type: "video" as const, label: "Renaissance Festival — drone & ground footage" },
  },
  {
    title: "The Alps",
    location: "Switzerland & Italy",
    context: "Drone footage from places most people only see in photos.",
    testimonial: null,
    media: { type: "video" as const, label: "Alpine drone footage — Switzerland & Italy" },
  },
  {
    title: "SeriesFest",
    location: "Denver, CO",
    context: "Independent film's most ambitious voices. I was there.",
    testimonial: null,
    media: { type: "photo" as const, label: "SeriesFest — event photography" },
  },
];

function FieldSection() {
  return (
    <section id="field" className="relative py-20 md:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-15">
        <img src={FIELD_BG_URL} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        02
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            The Field
          </h2>
          <p className="font-serif text-lg text-white/50 italic mb-16 max-w-lg">
            Places I've been. Stories I've told.
          </p>
        </FadeIn>

        <div className="space-y-20 md:space-y-28">
          {fieldEntries.map((entry, i) => (
            <FadeIn key={entry.title} delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Media */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <MediaPlaceholder
                    label={entry.media.label}
                    type={entry.media.type}
                    className="aspect-video"
                  />
                </div>

                {/* Text */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-condensed text-teal/50 text-sm tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-teal/30" />
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
                    <div className="border-l-2 border-teal/30 pl-5 py-2">
                      <p className="font-serif text-sm text-white/50 italic leading-relaxed mb-3">
                        "{entry.testimonial.text}"
                      </p>
                      <p className="text-xs text-white/40">
                        <span className="text-teal/70 font-medium">{entry.testimonial.author}</span>
                        <span className="mx-2 text-white/20">—</span>
                        {entry.testimonial.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Follow CTA */}
        <FadeIn>
          <div className="mt-20 text-center">
            <p className="font-serif text-white/40 italic mb-4">
              More stories in progress. Follow along on LinkedIn.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-medium text-sm px-5 py-2.5 hover:border-teal/40 hover:text-teal transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Follow on LinkedIn
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WHAT I DO (SERVICES) SECTION
   ═══════════════════════════════════════════════════════════════ */

const services = [
  {
    title: "Event Coverage",
    description: "I embed in high-caliber events and capture the story from the inside. Video, audio, drone, and photography — from startup pitch nights to luxury showcases to film festivals.",
    cta: { label: "Get In Touch", href: "#connect" },
  },
  {
    title: "The Clarity Report",
    description: "AI-powered audience research that tells you who's receptive to your pitch, who isn't, and what objections are standing in the way. Available standalone or paired with any coverage package. The idea isn't the problem. The unaddressed objections are.",
    cta: { label: "Learn More", href: "#" },
    highlight: true,
  },
  {
    title: "Custom Projects",
    description: "Have something in mind that doesn't fit a box? Good. Let's talk.",
    cta: { label: "Get In Touch", href: "#connect" },
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        03
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            What I Do
          </h2>
          <p className="font-serif text-lg text-white/50 italic mb-16 max-w-lg">
            Whether you need the story captured, tested, or both — here's how I work.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className={`relative bg-background p-8 md:p-10 h-full flex flex-col hover:bg-slate-card/50 transition-colors duration-300 ${service.highlight ? "bg-slate-card" : ""}`}>
                {/* Top accent line for highlighted card */}
                {service.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-teal/60 to-transparent" />
                )}

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-condensed text-teal/40 text-sm tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-px bg-teal/20" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-serif text-white/55 leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <a
                  href={service.cta.href}
                  onClick={(e) => {
                    if (service.cta.href === "#") {
                      e.preventDefault();
                      toast("One-pager PDF link — coming soon.");
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-glow transition-colors group"
                >
                  {service.cta.label}
                  <span className="w-4 h-px bg-teal group-hover:w-8 transition-all" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Forge accent image */}
        <FadeIn>
          <div className="mt-16 relative overflow-hidden h-48 md:h-64" style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)" }}>
            <img src={SERVICES_IMG_URL} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONNECT SECTION
   ═══════════════════════════════════════════════════════════════ */
function ConnectSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => {
      toast.success("Message sent! Sindbad will be in touch.");
      setFormState({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="connect" className="py-20 md:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={CONNECT_BG_URL} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Faded section number */}
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        04
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-5">
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

              <div className="space-y-6">
                <a
                  href="mailto:sindbad@advstmedia.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-teal/30 flex items-center justify-center group-hover:border-teal/60 group-hover:bg-teal/5 transition-all">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Email</p>
                    <p className="text-teal font-medium group-hover:text-teal-glow transition-colors">
                      sindbad@advstmedia.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-teal/40 group-hover:bg-teal/5 transition-all">
                    <Linkedin className="w-5 h-5 text-white/50 group-hover:text-teal transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">LinkedIn</p>
                    <p className="text-white/70 font-medium group-hover:text-teal transition-colors">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <form onSubmit={handleSubmit} className="bg-slate-card border border-white/5 p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-condensed uppercase tracking-[0.15em] text-white/40 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white/90 placeholder:text-white/20 focus:border-teal/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-condensed uppercase tracking-[0.15em] text-white/40 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white/90 placeholder:text-white/20 focus:border-teal/50 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-condensed uppercase tracking-[0.15em] text-white/40 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white/90 placeholder:text-white/20 focus:border-teal/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or event..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-teal text-background font-semibold text-sm px-8 py-3 hover:bg-teal-glow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
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
