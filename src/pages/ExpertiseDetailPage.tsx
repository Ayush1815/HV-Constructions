import { useParams, Navigate, Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { getExpertiseBySlug, expertiseAreas } from "../data/expertise";
import { Reveal } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/ButtonLink";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Trophy, ChevronRight } from "lucide-react";

const galleryImages: Record<string, { src: string; caption: string }[]> = {
  "government-infrastructure": [
    { src: "/media/infrastructure/bridge-pier-construction.webp", caption: "Bridge Pier & Deep Foundation Works" },
    { src: "/media/infrastructure/flyover-construction.webp", caption: "Multi-Span Flyover Structural Deck" },
    { src: "/media/infrastructure/crushing-plant.webp", caption: "Aggregate & Batching Infrastructure" },
  ],
  "jal-jeevan-mission": [
    { src: "/media/water/circular-reservoir-construction.webp", caption: "Reinforced Concrete Storage Reservoir" },
    { src: "/media/water/hilltop-water-storage-reservoir.webp", caption: "Elevated Water Distribution Tank" },
    { src: "/media/water/pipeline-trenching-installation.webp", caption: "Bulk Transmission Pipeline Laying" },
  ],
  "roads-transportation": [
    { src: "/media/infrastructure/road-paving.webp", caption: "Heavy-Duty Bituminous Paving Works" },
    { src: "/media/infrastructure/highway-interchange-aerial.webp", caption: "Multi-Lane Expressway Interchange" },
    { src: "/media/infrastructure/flyover-construction.webp", caption: "Elevated Corridor & Bridge Works" },
  ],
  "optical-fibre-telecom": [
    { src: "/media/telecom/bharatnet-hdd-trenchless-drilling.webp", caption: "HDD Trenchless Cable Ducting" },
    { src: "/media/telecom/hdpe-duct-laying-work.webp", caption: "Multi-Duct Underground Telecom Route" },
    { src: "/media/telecom/ofc-cable-blowing-manhole-installation.webp", caption: "Manhole Construction & Splicing Chambers" },
  ],
  "buildings-civil": [
    { src: "/media/high-rise/commercial-frame-scaffolding.webp", caption: "Institutional RCC Framed Structure" },
    { src: "/media/residential/luxury-white-villa-residence.webp", caption: "Premium Architectural Residential Build" },
    { src: "/media/residential/modern-cantilever-luxury-villa.webp", caption: "Engineered Cantilever Framing" },
  ],
  "high-rise": [
    { src: "/media/high-rise/curved-skyscraper-aerial.webp", caption: "Commercial High-Rise Curved Elevation" },
    { src: "/media/high-rise/residential-tower-cranes.webp", caption: "Multi-Tower High-Rise Core Climbing" },
    { src: "/media/high-rise/skyscraper-top-skyline.webp", caption: "Skyline Tower Structural Completion" },
  ],
  "private-development": [
    { src: "/media/residential/grand-private-estate-courtyard.webp", caption: "Bespoke Luxury Estate Development" },
    { src: "/media/residential/independent-home-under-construction.webp", caption: "Civil Framing & Wall Work Execution" },
    { src: "/media/residential/contemporary-timber-facade-home.webp", caption: "Modern Architectural Finishing" },
  ],
  "interior-design": [
    { src: "/media/interiors/luxury-atrium-lobby-interiors.webp", caption: "Grand Atrium Reception & Lobby" },
    { src: "/media/interiors/executive-director-cabin.webp", caption: "Corporate Boardroom & Executive Cabins" },
    { src: "/media/interiors/luxury-retail-showroom-fitout.webp", caption: "High-End Commercial Retail Fit-Out" },
  ],
  "turnkey-solutions": [
    { src: "/media/turnkey/integrated-manufacturing-facility.webp", caption: "Industrial Manufacturing Campus" },
    { src: "/media/turnkey/turnkey-epc-project-management.webp", caption: "End-to-End Turnkey Site Supervision" },
    { src: "/media/infrastructure/city-center-metro-station.webp", caption: "Major Metro Terminal Civil Works" },
  ],
};

export default function ExpertiseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getExpertiseBySlug(slug) : undefined;

  if (!area) {
    return <Navigate to="/404" replace />;
  }

  useSeo({
    title: `${area.title} | HV Construction Pvt. Ltd.`,
    description: area.description,
    path: `/expertise/${area.slug}`,
  });

  const Icon = area.icon;
  const relatedAreas = expertiseAreas.filter((a) => a.id !== area.id).slice(0, 3);
  const gallery = slug && galleryImages[slug] ? galleryImages[slug] : [];

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      {/* Hero Section with Large Image */}
      <section className="relative overflow-hidden py-12 sm:py-20 border-b border-[var(--border-soft)]">
        <div 
          className="absolute inset-0 opacity-5 -z-10" 
          style={{ backgroundColor: area.accentColor }} 
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-[var(--brand-gold)] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link to="/expertise" className="hover:text-[var(--brand-gold)] transition-colors">Expertise</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-bold truncate max-w-[200px] sm:max-w-none">{area.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl font-black text-slate-200 dark:text-slate-800">
                    {area.number}
                  </span>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-800"
                    style={{ color: area.accentColor }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white mb-5">
                  {area.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                  {area.tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink to="/contact">
                    Request Project Consultation
                  </ButtonLink>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white/70 dark:bg-slate-900/70 px-6 py-3 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    View Completed Works
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden rounded-3xl border-2 border-[var(--border-soft)] shadow-2xl bg-slate-950">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-80 sm:h-96 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span 
                      className="inline-block px-3 py-1 text-xs font-bold rounded-md mb-1 shadow-md"
                      style={{ backgroundColor: area.accentColor }}
                    >
                      Division {area.number}
                    </span>
                    <p className="text-xs text-slate-300">HV Construction Execution Capability</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Overview</h2>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-12">
                  {area.description}
                </p>
              </Reveal>

              {area.capabilities.length > 0 && (
                <Reveal delay={0.1}>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">Key Capabilities</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-12">
                    {area.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-[var(--border-soft)]">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: area.accentColor }} />
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{cap}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {area.subCategories && area.subCategories.length > 0 && (
                <Reveal delay={0.2}>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">Sectors &amp; Solutions</h2>
                  <div className="space-y-6 mb-12">
                    {area.subCategories.map((sub, idx) => (
                      <div key={idx} className="rounded-2xl border border-[var(--border-soft)] p-6 bg-white dark:bg-slate-900/70 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{sub.title}</h3>
                        <ul className="grid sm:grid-cols-2 gap-2.5">
                          {sub.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                              <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: area.accentColor }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Turnkey process visual */}
              {area.slug === "turnkey-solutions" && (
                <Reveal delay={0.3}>
                  <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl border border-white/10">
                    <h3 className="text-xl font-black mb-6 text-[var(--brand-gold)]">Integrated Turnkey Delivery Model</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "01. Design & Master Planning",
                        "02. Engineering & Structural Specs",
                        "03. Procurement & Supply Chain",
                        "04. Civil & Structural Execution",
                        "05. MEP & Utility Integration",
                        "06. Architectural Finishing",
                        "07. Turnkey Interior Execution",
                        "08. QA/QC & Regulatory Clearance",
                        "09. Commissioning & Final Handover"
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                          <CheckCircle2 className="h-4 w-4 text-[var(--brand-gold)] flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-200">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <Reveal delay={0.3}>
                <div className="rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 p-6 sticky top-24 shadow-lg space-y-6">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                      Partner With Us
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      Need seasoned execution for your upcoming {area.title.toLowerCase()} project? Our engineering teams deliver with precision, safety, and speed.
                    </p>
                  </div>

                  <ButtonLink to="/contact" className="w-full justify-center text-center">
                    Get Project Estimate
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Project Execution Gallery */}
      {gallery.length > 0 && (
        <section className="py-16 border-t border-[var(--border-soft)] bg-slate-100/50 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">Visual Showcase</p>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">Division Execution Gallery</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">On-site captures showcasing scale, structural precision, and high standard workmanship.</p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {gallery.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 shadow-md">
                    <div className="h-56 sm:h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img 
                        src={item.src} 
                        alt={item.caption} 
                        loading="lazy" 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-200 line-clamp-1">{item.caption}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">HV Construction Project Site</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose HV Construction for this sector */}
      <section className="py-16 border-t border-[var(--border-soft)] bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">Our Advantage</p>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">Why Choose HV Construction</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Our deep institutional experience and direct operational supervision ensure uncompromised project delivery.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-slate-50 dark:bg-slate-900/60 p-6 flex flex-col h-full shadow-sm hover:border-[var(--brand-gold)] transition-colors">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 text-[var(--brand-gold)] flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Proven Track Record</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Successfully delivered high-stakes projects across multiple government departments and private developers with strict quality adherence.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-slate-50 dark:bg-slate-900/60 p-6 flex flex-col h-full shadow-sm hover:border-[var(--brand-gold)] transition-colors">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Expert In-House Teams</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full-time project managers, civil engineers, and MEP specialists dedicated to precise execution without sub-tier dilution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-slate-50 dark:bg-slate-900/60 p-6 flex flex-col h-full shadow-sm hover:border-[var(--brand-gold)] transition-colors">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Safety &amp; Compliance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Zero-compromise safety protocols, IS code compliance, and systematic material testing laboratories at project sites.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Areas with Thumbnails */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950/40 border-t border-[var(--border-soft)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-black text-slate-950 dark:text-white mb-8">Other Divisions &amp; Capabilities</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedAreas.map((relArea, index) => {
              const RelIcon = relArea.icon;
              return (
                <Reveal key={relArea.id} delay={index * 0.1}>
                  <Link
                    to={`/expertise/${relArea.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/60"
                  >
                    <div className="h-36 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={relArea.image}
                        alt={relArea.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold" style={{ color: relArea.accentColor }}>
                        <RelIcon className="h-4 w-4" />
                        <span>Division {relArea.number}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-950 dark:text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                        {relArea.title}
                      </h3>
                      <div className="mt-auto flex items-center font-bold text-xs text-[var(--brand-gold)]">
                        View division
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
