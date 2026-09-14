import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { siteConfig } from "../../config/site";
import { BrandMark } from "../brand/BrandMark";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 sm:py-16 text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8 text-sm">
          {/* Column 1 - Brand */}
          <div className="flex flex-col space-y-6">
            <div>
              <BrandMark variant="footer" />
            </div>
            <p className="leading-relaxed text-slate-300">
              Diversified construction &amp; infrastructure company delivering comprehensive solutions across
              civil construction, government infrastructure, high-rise buildings, utility infrastructure and interior works.
            </p>
            <div className="pt-2">
              <p className="mb-4 font-bold text-white">Connect With Us:</p>
              <div className="flex flex-wrap gap-3">
                {siteConfig.linkedin && (
                  <a 
                    href={siteConfig.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-md transition-transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" fill="currentColor" />
                  </a>
                )}
                {siteConfig.facebook && (
                  <a 
                    href={siteConfig.facebook} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-md transition-transform hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" fill="currentColor" />
                  </a>
                )}
                {siteConfig.instagram && (
                  <a 
                    href={siteConfig.instagram} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md transition-transform hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EA4335] text-white shadow-md transition-transform hover:-translate-y-1"
                  aria-label="Email Us"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-6 border-l-2 border-[var(--brand-gold)] pl-3 text-lg font-bold text-white">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3 text-slate-300">
              <Link to="/" className="w-fit transition hover:text-[var(--brand-gold)]">Home</Link>
              <Link to="/about" className="w-fit transition hover:text-[var(--brand-gold)]">About Us</Link>
              <Link to="/expertise" className="w-fit transition hover:text-[var(--brand-gold)]">Our Expertise</Link>
              <Link to="/projects" className="w-fit transition hover:text-[var(--brand-gold)]">Projects</Link>
              <Link to="/contact" className="w-fit transition hover:text-[var(--brand-gold)]">Contact Us</Link>
              <a 
                href="/documents/HV-Construction-Corporate-Brochure.pdf" 
                download="HV-Construction-Corporate-Brochure.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-fit transition hover:text-white font-semibold text-[var(--brand-gold)] flex items-center gap-1.5"
              >
                <span>Corporate Brochure (PDF)</span>
              </a>
              <Link to="/terms" className="w-fit transition hover:text-[var(--brand-gold)]">Terms &amp; Conditions</Link>
              <Link to="/privacy" className="w-fit transition hover:text-[var(--brand-gold)]">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 3 - Our Expertise */}
          <div>
            <h3 className="mb-6 border-l-2 border-[var(--brand-gold)] pl-3 text-lg font-bold text-white">
              Our Expertise
            </h3>
            <div className="flex flex-col space-y-3 text-slate-300">
              <Link to="/expertise/government-infrastructure" className="w-fit transition hover:text-[var(--brand-gold)]">Government Infrastructure</Link>
              <Link to="/expertise/jal-jeevan-mission" className="w-fit transition hover:text-[var(--brand-gold)]">Water Infrastructure</Link>
              <Link to="/expertise/roads-transportation" className="w-fit transition hover:text-[var(--brand-gold)]">Roads &amp; Transportation</Link>
              <Link to="/expertise/buildings-civil" className="w-fit transition hover:text-[var(--brand-gold)]">Buildings &amp; Civil</Link>
              <Link to="/expertise/high-rise" className="w-fit transition hover:text-[var(--brand-gold)]">High-Rise Buildings</Link>
              <Link to="/expertise/interior-design" className="w-fit transition hover:text-[var(--brand-gold)]">Interior Design</Link>
              <Link to="/expertise/turnkey-solutions" className="w-fit transition hover:text-[var(--brand-gold)]">Turnkey Solutions</Link>
            </div>
          </div>

          {/* Column 4 - Contact Details */}
          <div>
            <h3 className="mb-6 border-l-2 border-[var(--brand-gold)] pl-3 text-lg font-bold text-white">
              Contact Details
            </h3>
            <div className="flex flex-col space-y-4 text-slate-300">
              <div className="flex flex-col space-y-2">
                <span className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                  <span className="leading-relaxed flex flex-col">
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="transition hover:text-[var(--brand-gold)] font-medium">
                      {siteConfig.phone} <span className="text-xs text-slate-400">(Mr. Anand Mishra)</span>
                    </a>
                    <a href={`tel:${siteConfig.secondaryPhone.replace(/\s+/g, '')}`} className="transition hover:text-[var(--brand-gold)] font-medium mt-1">
                      {siteConfig.secondaryPhone} <span className="text-xs text-slate-400">(Mr. Sandeep Goswami)</span>
                    </a>
                  </span>
                </span>
              </div>
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--brand-gold)]">
                  {siteConfig.email}
                </a>
              </span>
              <span className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                <span className="leading-relaxed">
                  {siteConfig.address}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="hidden md:block">Building Tomorrow Together</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10 hover:border-[var(--brand-gold)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
