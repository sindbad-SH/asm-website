/*
 * Home — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 * Background: #1e1e2e dark charcoal
 * Split hero: Part A = ASM intro, Part B = StorySmith bio with headshot
 * Scrolling river line weaves through entire page
 * DM Sans headlines + Crimson Pro body + Barlow Condensed labels.
 */
import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

// CDN URLs — provided assets
const HEADSHOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/IMG_20251115_094655_696_2011f9cc.webp";

// CDN URLs — faceless 2D illustrations (transparent bg)
const HERO_CHARACTER_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/hero-character-faceless-nobg_0b714bb7.png";
const FIELD_SCENE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/field-scene-2d-nobg_27c8823a.png";
const STORY_SCOUT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-scout-transparent-nfxqineSf7KNWtUX35hvZs.png";
const STORY_TEST_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-test-icon-nobg_1d5e4ffd.png";
const STORY_FORGE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/story-forge-new-nobg_7720e844.png";
const SMITHY_SCENE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/smithy-scene-transparent-QVG4cwzHTN4tzueXJgb5Gu.png";

// CDN URL — ASM logo mark (mountain + S, no text)
const ASM_LOGO_MARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/ASM_Logo_Mark_CharcoalandAqua_f0b0095a.webp";

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

/* ─── Illustration with glow backdrop ─── */
function IllustrationWithGlow({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full blur-2xl scale-110" style={{ backgroundColor: '#18aa99' }} aria-hidden="true" />
      <img src={src} alt={alt} className="relative w-full h-full object-contain" />
    </div>
  );
}

/* ─── Scrolling River Line (SVG path weaving through page) ─── */
function RiverLine() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 4000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 50 0 C 30 200, 70 400, 45 600 C 20 800, 75 1000, 55 1200 C 35 1400, 65 1600, 40 1800 C 15 2000, 80 2200, 50 2400 C 20 2600, 70 2800, 45 3000 C 25 3200, 60 3400, 50 3600 C 40 3800, 55 3900, 50 4000"
          stroke="url(#riverGradient)"
          strokeWidth="0.3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="riverGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.75 0.15 175)" stopOpacity="0" />
            <stop offset="5%" stopColor="oklch(0.75 0.15 175)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="oklch(0.75 0.15 175)" stopOpacity="0.15" />
            <stop offset="95%" stopColor="oklch(0.75 0.15 175)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 175)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO PART A — Adventure Storytelling Media Intro
   ═══════════════════════════════════════════════════════════════ */
function HeroIntro() {
  return (
    <section aria-label="Adventure Storytelling Media — Introduction" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#1e1e2e]" />
        <svg className="absolute bottom-0 left-0 right-0 h-1/3 opacity-[0.06]" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M0,400 L0,280 L120,180 L240,260 L360,140 L480,220 L600,100 L720,200 L840,80 L960,180 L1080,60 L1200,160 L1320,120 L1440,200 L1440,400 Z" fill="currentColor" className="text-teal" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] via-transparent to-[#1e1e2e]/60" />
      </div>

      <div className="container relative z-10 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-6 block">
                Boulder, CO
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6">
                Adventure Storytelling{" "}
                <span className="text-teal">Media</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-6">
                A Boulder-based media and market intelligence operation at the intersection of storytelling, entrepreneurship, and adventure.
              </p>
              <p className="font-serif text-lg text-white/50 italic leading-relaxed mb-10">
                ASM exists at a simple crossroads: the stories worth telling are usually the ones attached to the most ambitious people and ideas. We find them, capture them, and test whether they actually land — then hand the founder, creator, or entrepreneur the tools to act on what we find.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#field"
                  className="inline-flex items-center gap-2 bg-teal text-background font-semibold text-sm px-6 py-3 hover:bg-teal-glow transition-colors focus-visible:ring-2 focus-visible:ring-teal"
                >
                  See The Work
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

          {/* Right — ASM logo mark with teal glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl scale-110 rounded-full"
                style={{ backgroundColor: 'rgba(66, 219, 191, 0.12)' }}
                aria-hidden="true"
              />
              <img
                src={ASM_LOGO_MARK_URL}
                alt="ASM logo mark — mountain and river S design"
                className="relative w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-[0_0_40px_rgba(66,219,191,0.2)]"
              />
            </div>
          </motion.div>
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
   HERO PART B — The StorySmith (Bio + Headshot)
   ═══════════════════════════════════════════════════════════════ */
function StorySmithSection() {
  return (
    <section aria-label="The StorySmith — About Sindbad Horizon" className="py-20 md:py-28 relative">
      <div className="absolute top-8 right-8 text-[8rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
        01
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <span className="font-condensed uppercase tracking-[0.3em] text-teal/70 text-xs mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            The StorySmith
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Bio text — left */}
          <div className="lg:col-span-7">
            <FadeIn>
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
                <p className="font-serif text-base text-teal/70 leading-relaxed mt-4">
                  The S in the logo isn't just a letter. It's a river — always moving, always finding the next story worth following.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Headshot + smithy illustration — right */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative">
                {/* Smithy scene illustration — positioned above headshot */}
                <div className="flex justify-end mb-4">
                  <img
                    src={SMITHY_SCENE_URL}
                    alt="2D illustrated smithy scene — faceless figure forging at an anvil with hammer, teal and charcoal palette"
                    className="opacity-80 drop-shadow-[0_0_12px_rgba(66,219,191,0.15)]"
                    style={{ width: '445px', height: '312px', backgroundColor: '#00cca8', borderRadius: '38px', paddingRight: '26px' }}
                  />
                </div>
                {/* Headshot */}
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
              </div>
            </FadeIn>
          </div>
        </div>
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
];

const alpsShorts = [
  { videoId: "NDSCqskuloU", title: "Alpine drone footage — Swiss Alps short 1" },
  { videoId: "JXRdUW44Ogc", title: "Alpine drone footage — Swiss Alps short 2" },
  { videoId: "4nCOwBhR8wY", title: "Alpine drone footage — Italian Alps short 3" },
  { videoId: "wscRbnML_U4", title: "Alpine drone footage — Alps short 4" },
];

// CDN URLs — event photos for "More From The Field" collage
const PHOTO_SERIESFEST = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/SeriesFest_dc6cd768.jpg";
const PHOTO_PEBBLE_BEACH = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/PebbleBeachConcorddeElegance_1405ca54.JPG";
const PHOTO_AFM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/AmericanFilmMarket_48d7bb03.jpg";
const PHOTO_PITCHBOULDER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/Pitchboulderimage_de611079.JPG";
const PHOTO_OUTSIDE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/Outsidefestival_b31f051d.jpg";
const PHOTO_FASHION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/Fashioninfocus_311448e7.jpg";

const collageItems = [
  { label: "Concours d'Elegance — Pebble Beach", image: PHOTO_PEBBLE_BEACH, alt: "Pebble Beach Concours d'Elegance — Shelby Cobra 427 SC Roadster on the lawn" },
  { label: "American Film Market", image: PHOTO_AFM, alt: "American Film Market — independent film industry event coverage" },
  { label: "PitchBoulder — Boulder, CO", image: PHOTO_PITCHBOULDER, alt: "PitchBoulder — weekly startup pitch event in Boulder, Colorado" },
  { label: "Outside Days — Outside Magazine Festival", image: PHOTO_OUTSIDE, alt: "Outside Days — Outside Magazine outdoor adventure and lifestyle festival" },
  { label: "SeriesFest Denver", image: PHOTO_SERIESFEST, alt: "SeriesFest Fashion in Focus — fashion and entertainment industry event in Denver" },
  { label: "Fashion in Focus, Denver", image: PHOTO_FASHION, alt: "SeriesFest Fashion in Focus — costume design and television craft celebration" },
];

function FieldSection() {
  return (
    <section id="field" aria-label="Portfolio — The Field" className="relative py-20 md:py-28">
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
            <IllustrationWithGlow
              src={FIELD_SCENE_URL}
              alt="Faceless illustrated figure with camera on a mountain overlooking a landscape, representing field storytelling"
              className="h-16 md:h-24 w-auto"
            />
          </div>
          <p className="font-serif text-lg text-white/50 italic mb-16 max-w-lg">
            Story Scout — Events I've covered. Worlds I've entered.
          </p>
        </FadeIn>

        <div className="space-y-20 md:space-y-28">
          {/* Standard field entries (Concours, PitchBoulder, Medieval) */}
          {fieldEntries.map((entry, i) => (
            <FadeIn key={entry.title} delay={0.1}>
              <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Media */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <YouTubeEmbed videoId={entry.media.videoId} title={entry.media.title} />
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

          {/* On Location — Places Worth Going (title ABOVE grid, full width) */}
          <FadeIn delay={0.1}>
            <article>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-condensed text-teal/50 text-sm tabular-nums">04</span>
                <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                On Location — Places Worth Going
              </h3>
              <span className="font-condensed uppercase tracking-[0.15em] text-white/30 text-xs block mb-4">
                Switzerland & Italy
              </span>
              <p className="font-serif text-white/60 italic mb-8 leading-relaxed max-w-2xl">
                Not every story needs a client brief. Some just need someone willing to show up with a drone and a good eye. Switzerland, Italy, and counting.
              </p>
              <div className="grid grid-cols-2 gap-2 max-w-3xl">
                {alpsShorts.map((short) => (
                  <YouTubeEmbed
                    key={short.videoId}
                    videoId={short.videoId}
                    title={short.title}
                    isShort
                  />
                ))}
              </div>
            </article>
          </FadeIn>

          {/* More From The Field — editorial card with collage grid */}
          <FadeIn delay={0.1}>
            <article className="border-l-2 border-teal/40 bg-slate-card/30 p-8 md:p-12">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-condensed text-teal/50 text-sm tabular-nums">05</span>
                <div className="w-8 h-px bg-teal/30" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                More From The Field
              </h3>
              <p className="font-serif text-white/60 italic leading-relaxed mb-8">
                Not every story fits a single frame. SeriesFest Denver, the American Film Market, Boulder Startup Week, Colorado Startup Week, Pitch Boulder — if it's ambitious, interesting, and worth covering, a StorySmith belongs there. More coverage documented on LinkedIn.
              </p>

              {/* 2x3 photo collage grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {collageItems.map((item, i) => (
                  <div
                    key={`${item.label}-${i}`}
                    className="relative aspect-square overflow-hidden group cursor-pointer"
                    style={{ backgroundColor: '#1e1e2e' }}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Teal hover overlay with label */}
                    <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/70 transition-all duration-300 flex items-end justify-start p-4" aria-hidden="true">
                      <span className="text-xs text-white/0 group-hover:text-white font-condensed uppercase tracking-wider leading-tight transition-colors duration-300 drop-shadow-lg">
                        {item.label}
                      </span>
                    </div>
                    {/* Subtle bottom gradient for readability */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <p className="font-serif text-sm text-white/40 italic mb-6">
                More coverage documented on LinkedIn. Follow along.
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
    cta: { label: "Get In Touch", href: "#connect" },
    highlight: true,
  },
  {
    title: "Story Forge",
    description: "Have something in mind that doesn't fit a box? Good. Let's talk.",
    illustration: STORY_FORGE_URL,
    illustrationAlt: "Faceless illustrated figure at a workbench surrounded by floating tools — camera, drone, microphone, laptop, sword, and hammer",
    cta: { label: "Get In Touch", href: "#connect" },
  },
];

function ServicesSection() {
  return (
    <section id="services" aria-label="Services — What I Do" className="py-20 md:py-28 relative">
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
              <div className={`relative p-8 md:p-10 h-full flex flex-col hover:bg-slate-card/50 transition-colors duration-300 ${service.highlight ? "bg-slate-card" : ""}`} style={{ backgroundColor: '#1e1e2e' }}>
                {service.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-teal/60 to-transparent" aria-hidden="true" />
                )}

                {/* 2D Faceless Illustration with glow backdrop — larger */}
                <IllustrationWithGlow
                  src={service.illustration}
                  alt={service.illustrationAlt}
                  className="h-32 md:h-40 w-auto mb-6"
                />

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
    <div className="min-h-screen bg-background text-foreground relative">
      <a href="#field" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-teal focus:text-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold">
        Skip to main content
      </a>
      {/* Scrolling river line — weaves through entire page */}
      <RiverLine />
      <Navigation />
      <HeroIntro />
      <SectionDivider className="container" />
      <StorySmithSection />
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
