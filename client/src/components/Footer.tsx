/*
 * Footer — ASM Website
 * Design: "The Forge" — Dark Industrial Craft
 * Background: #1e1e2e dark charcoal
 * Clean, minimal, with teal accent line at top.
 */
import { Link } from "wouter";

const LOGO_VERTICAL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/dx6BLXbwNNpmvxc2tsroRQ/ASM_Logo_Original_SkyandPersiangreen_e1c4fdcc.webp";
const LINKEDIN_URL = "https://www.linkedin.com/in/sindbad-horizon-b19b4a264";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="relative border-t border-white/5">
      {/* Teal accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" aria-hidden="true" />

      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-4">
            <img
              src={LOGO_VERTICAL_URL}
              alt="Adventure Storytelling Media — vertical logo"
              className="h-20 w-auto brightness-0 invert opacity-80 mb-6"
            />
            <p className="font-serif text-white/40 text-sm italic leading-relaxed max-w-xs">
              "The most powerful stories aren't just told — they are tested."
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h4 className="font-condensed uppercase tracking-[0.2em] text-white/30 text-xs mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "The Field", href: "/#field" },
                { label: "What I Do", href: "/#services" },
                { label: "Connect", href: "/#connect" },
                { label: "The Story Test", href: "/story-test" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-teal transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="font-condensed uppercase tracking-[0.2em] text-white/30 text-xs mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Field Notes", href: "/field-notes" },
                { label: "The Arsenal", href: "/arsenal" },
                { label: "The Map", href: "/map" },
                { label: "Let's Connect", href: "/connect" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-teal transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-condensed uppercase tracking-[0.2em] text-white/30 text-xs mb-4">Contact</h4>
            <a
              href="mailto:sindbad@advstmedia.com"
              className="text-sm text-teal hover:text-teal-glow transition-colors block mb-3"
              aria-label="Email Sindbad at sindbad@advstmedia.com"
            >
              sindbad@advstmedia.com
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-teal transition-colors"
              aria-label="Sindbad Horizon's LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {year} Adventure Storytelling Media
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>adventurestorytellingmedia.com</span>
            <span className="text-teal/30" aria-hidden="true">&middot;</span>
            <span>advstmedia.com</span>
            <span className="text-teal/30" aria-hidden="true">&middot;</span>
            <span>sindbad@advstmedia.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
