import { useSeo } from "../hooks/useSeo";
import { InquiryFormSection } from "../components/sections/InquiryFormSection";
import { Reveal } from "../components/ui/Reveal";
import { Phone, Mail, MapPin, Clock, Download, FileText } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  useSeo({
    title: "Contact Us | HV Construction Pvt. Ltd.",
    description: "Get in touch with HV Construction for your next infrastructure or construction project.",
    path: "/contact",
  });

  return (
    <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-4">
                Get In Touch
              </p>
              <h1 className="text-4xl font-black text-slate-950 dark:text-white sm:text-5xl mb-6">
                Let's Discuss Your Project
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
                Whether you have a specific project in mind or want to explore how our expertise can benefit your upcoming development, we are ready to build with you.
              </p>

              {/* Key Executive Contacts from Business Card */}
              <div className="mb-10 space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Key Executive Contacts
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteConfig.contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="rounded-2xl border border-[var(--border-soft)] bg-white/70 p-5 shadow-sm backdrop-blur-xl dark:bg-[var(--surface-dark-elevated)]/60 transition-transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                            {contact.name}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            Executive Contact
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5">
                        <a
                          href={`tel:${contact.phoneClean}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[var(--brand-gold)] transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
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
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Headquarters</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Email Inquiries</h3>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand-gold)] transition-colors inline-flex items-center font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Working Hours</h3>
                    <p className="text-slate-600 dark:text-slate-300">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Corporate Pillars Badge Strip */}
              <div className="mt-8 rounded-2xl border border-[var(--border-soft)] bg-slate-50/80 dark:bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-3">
                  Our Corporate Commitment
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {siteConfig.pillars.map((pillar) => (
                    <div key={pillar.label} className="p-2">
                      <p className="text-xs font-black text-slate-900 dark:text-white">{pillar.label}</p>
                      <p className="text-[0.7rem] text-slate-500 dark:text-slate-400 mt-0.5">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RCC Works & Civil Contractor Brochure Download Card */}
              <div className="mt-8 rounded-2xl border border-[var(--brand-gold)]/40 bg-gradient-to-br from-amber-500/10 via-slate-900/30 to-slate-950 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[var(--brand-gold)]/20 px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--brand-gold)] flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      Official Company Dossier
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">PDF • 2 Pages • A4</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    RCC Works & Civil Contractor Brochure
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Includes 12 core capabilities, BOQ contract options, plant & machinery fleet, and IS code quality standards.
                  </p>
                </div>
                <a
                  href="/documents/HV-Construction-RCC-Civil-Brochure.pdf"
                  download="HV-Construction-RCC-Civil-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:from-amber-400 hover:to-amber-500 transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Google Map Embed (Lucknow Headquarters) */}
              <div className="mt-8 w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-[var(--border-soft)]">
                <iframe 
                  src="https://maps.google.com/maps?q=Amity+University+Malhaur+Lucknow+Uttar+Pradesh+226028&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H.V Construction Office Location - Lucknow"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Right Column */}
          <div className="h-full">
            <InquiryFormSection hideText={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
