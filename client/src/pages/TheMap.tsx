/*
 * The Map — ASM Website (formerly The Calendar)
 * A StorySmith's guide to events worth showing up for.
 */
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const events = [
  {
    name: "PitchBoulder",
    schedule: "Every Wednesday, 8:30 AM",
    location: "Galvanize Boulder",
    url: "https://pitchboulder.co",
    domain: "pitchboulder.co",
  },
  {
    name: "SeriesFest Denver",
    schedule: "Annual",
    location: "Denver, CO",
    url: "https://seriesfest.com",
    domain: "seriesfest.com",
  },
  {
    name: "Boulder Startup Week",
    schedule: "Annual · May",
    location: "Boulder, CO",
    url: "https://boulderstartupweek.com",
    domain: "boulderstartupweek.com",
  },
  {
    name: "Colorado Startup Week",
    schedule: "Annual",
    location: "Colorado",
    url: "https://coloradostartupweek.com",
    domain: "coloradostartupweek.com",
  },
  {
    name: "American Film Market",
    schedule: "Annual · November",
    location: "Las Vegas, NV",
    url: "https://americanfilmmarket.com",
    domain: "americanfilmmarket.com",
  },
  {
    name: "NOCOVA (Makeshift Entertainment Media Education)",
    schedule: "Recurring monthly",
    location: "Colorado",
    url: "https://meme.ngo/nocova",
    domain: "meme.ngo/nocova",
  },
  {
    name: "Makeshift Film Group",
    schedule: "Screenings and events",
    location: "Colorado",
    url: "https://makeshiftfilmgroup.com",
    domain: "makeshiftfilmgroup.com",
  },
];

export default function TheMap() {
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
              Events & Happenings
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              The Map
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/60 italic mb-10 leading-relaxed">
              A StorySmith's guide to events worth showing up for.
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
                Not a schedule of where to find me — a curated collection of events I think are worth knowing about. Startups, film, creative industry, and adventure. In Colorado, across the country, and eventually around the world.
              </p>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-condensed uppercase tracking-[0.15em] text-teal text-xs">Events being added regularly</span>
            </div>

            {/* Event list */}
            <div className="space-y-0">
              {events.map((event, i) => (
                <motion.a
                  key={event.name}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-5 border-b border-white/5 hover:bg-slate-card/30 transition-colors"
                  aria-label={`${event.name} — ${event.schedule} at ${event.location} (opens ${event.domain} in new tab)`}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-teal transition-colors">
                      {event.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                      <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {event.schedule}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-condensed uppercase tracking-[0.1em] text-teal/60 group-hover:text-teal transition-colors shrink-0">
                    {event.domain}
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
