import { useSeo } from "../hooks/useSeo";
import { InquiryFormSection } from "../components/sections/InquiryFormSection";
import { Reveal } from "../components/ui/Reveal";
import { Phone, Mail, MapPin, Clock, Download, FileText, ShieldCheck, Handshake, Building2, Award } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  useSeo({
    title: "Contact Us | HV Construction Pvt. Ltd.",
    description: "Get in touch with HV Construction for your next infrastructure, civil construction, or turnkey interior project.",
    path: "/contact",
  });

  return (
    <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Column (Coordinates & Map) + Right Column (Inquiry Form) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Contact Coordinates & Executives & Map */}
          <Reveal className="h-full">
            <div className="space-y-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-3">
                  Get In Touch
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white leading-tight mb-4">
                  Let's Discuss Your Project
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Whether you have a specific project tender in mind or want to explore how our expertise can benefit your upcoming development, our engineering leadership is ready to assist.
                </p>
              </div>

              {/* Key Executive Contacts from Official Credentials */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Key Executive Contacts
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {siteConfig.contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="rounded-2xl border border-[var(--border-soft)] bg-white/70 dark:bg-[var(--surface-dark-elevated)]/60 p-4 shadow-sm backdrop-blur-xl transition-all hover:border-[var(--brand-gold)]/40 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base truncate leading-snug">
                            {contact.name}
                          </h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                            Executive Contact
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-white/5">
                        <a
                          href={`tel:${contact.phoneClean}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[var(--brand-gold)] transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 text-[var(--brand-gold)] shrink-0" />
                          <span>{contact.phone}</span>
                        </a>
                        <a
                          href={contact.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-[#25D366]/10 px-2.5 py-1 text-xs font-bold text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                          title="Chat on WhatsApp"
                        >
                          <span>Chat</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Contact Info */}
              <div className="space-y-4 rounded-2xl border border-[var(--border-soft)] bg-white/60 dark:bg-[var(--surface-dark-elevated)]/40 p-5 backdrop-blur-xl">
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Corporate Headquarters</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Email Inquiries</h3>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-[var(--brand-gold)] transition-colors inline-flex items-center font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Operating Hours</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed (Lucknow Headquarters) - Adjusted to fill height and align seamlessly with form */}
              <div className="w-full flex-1 min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-soft)]">
                <iframe 
                  src="https://maps.google.com/maps?q=Amity+University+Malhaur+Lucknow+Uttar+Pradesh+226028&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "260px" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H.V Construction Office Location - Lucknow"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Project Inquiry Form */}
          <div className="h-full">
            <InquiryFormSection hideText={true} />
          </div>
        </div>

        {/* Corporate Commitment & Brochure Download Grid - Placed In Line across full width */}
        <div className="mt-8 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Card 1: Corporate Commitment (Uncramped, 4 Pillars in a row) */}
            <div className="rounded-2xl border border-[var(--border-soft)] bg-white/70 dark:bg-[var(--surface-dark-elevated)]/60 p-6 sm:p-7 shadow-sm backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-[0.7rem] font-bold text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] border border-amber-500/20 uppercase tracking-wider">
                    Corporate Commitment
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Response: <strong className="text-slate-800 dark:text-slate-200">Within 1 Day</strong>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Built With Integrity
                </h3>
                
                {/* 4 Pillars In One Line on Tablet/Desktop, 2x2 on Mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-xl bg-slate-50/80 dark:bg-white/5 p-3 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-1">
                      <Award className="h-4 w-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Quality</span>
                    </div>
                    <p className="text-[0.72rem] text-slate-500 dark:text-slate-400 leading-snug">Rigorous standards &amp; premium materials</p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 dark:bg-white/5 p-3 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-1">
                      <Handshake className="h-4 w-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Trust</span>
                    </div>
                    <p className="text-[0.72rem] text-slate-500 dark:text-slate-400 leading-snug">Transparent execution &amp; lasting integrity</p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 dark:bg-white/5 p-3 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-1">
                      <Building2 className="h-4 w-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Strength</span>
                    </div>
                    <p className="text-[0.72rem] text-slate-500 dark:text-slate-400 leading-snug">Structures engineered to endure</p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 dark:bg-white/5 p-3 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-1">
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Safety</span>
                    </div>
                    <p className="text-[0.72rem] text-slate-500 dark:text-slate-400 leading-snug">Zero-compromise on-site protocols</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Compliance &amp; Execution:</span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold">IS Codes &amp; CPWD Specs</span>
              </div>
            </div>

            {/* Card 2: Corporate Brochure Download (Uncramped, In Line with Card 1) */}
            <div className="rounded-2xl border border-[var(--border-soft)] bg-white/70 dark:bg-[var(--surface-dark-elevated)]/60 p-6 sm:p-7 shadow-sm backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-[0.7rem] font-bold text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] border border-amber-500/20 uppercase tracking-wider inline-flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    Company Dossier
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">3 Pages • A4 PDF</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Master Corporate Brochure
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Complete capability dossier covering Turnkey Interiors, Jal Jeevan &amp; Telecom Infrastructure, Civil &amp; RCC Works, and BOQ contract frameworks.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                <a
                  href="/documents/HV-Construction-Corporate-Brochure.pdf"
                  download="HV-Construction-Corporate-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-hover)] text-slate-950 font-bold px-5 py-3 text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Master Brochure (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
