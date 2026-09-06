import { useSeo } from "../hooks/useSeo";
import { InquiryFormSection } from "../components/sections/InquiryFormSection";
import { Reveal } from "../components/ui/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  useSeo({
    title: "Contact Us | HV Construction Pvt. Ltd.",
    description: "Get in touch with HV Construction for your next infrastructure or construction project.",
    path: "/contact",
  });

  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Office</h3>
                    <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Working Hours</h3>
                    <p className="text-slate-600 dark:text-slate-300">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-12 w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[var(--border-soft)]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120610.15064619965!2d72.78453488219438!3d19.14717142416801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e9c609d57%3A0x6b47c0b62e49c7f9!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714152865243!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Right Column */}
          <Reveal delay={0.2} className="h-full">
            <InquiryFormSection />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
