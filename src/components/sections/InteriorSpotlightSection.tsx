import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, Sofa, Bed, Utensils, Lightbulb, DoorOpen } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/ButtonLink";

interface InteriorSpace {
  id: string;
  tabLabel: string;
  icon: typeof Sofa;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const interiorSpaces: InteriorSpace[] = [
  {
    id: "living",
    tabLabel: "Living & Lounges",
    icon: Sofa,
    title: "Luxury Living Rooms & Private Lounges",
    subtitle: "Sophisticated social spaces crafted with timeless Italian marble & bespoke finishes.",
    image: "/media/interiors/luxury-living-room-decor.webp",
    description:
      "We design and execute expansive living spaces that create an immediate statement. Featuring multi-tier gypsum false ceilings with warm 3000K cove lighting, fluted oak accent paneling, and custom curved furniture arrangements.",
    features: [
      "Custom curved textured fabric sectionals",
      "Italian Calacatta & Botticino marble flooring",
      "Multi-level false ceiling with concealed LED cove lighting",
      "Fluted timber accent walls with brushed brass inlays",
    ],
    specs: [
      { label: "Turnaround", value: "45–60 Days" },
      { label: "Execution", value: "100% Turnkey" },
      { label: "Finishes", value: "Italian Marble & Oak" },
    ],
  },
  {
    id: "bedroom",
    tabLabel: "Master Suites",
    icon: Bed,
    title: "Contemporary Master Bedroom Suites",
    subtitle: "Sanctuaries of serene comfort with acoustic design and integrated wardrobes.",
    image: "/media/interiors/contemporary-master-suite.webp",
    description:
      "A harmonious blend of acoustic wall paneling, natural herringbone oak wood flooring, and floor-to-ceiling tinted glass modular wardrobes with automated internal lighting.",
    features: [
      "Floor-to-ceiling upholstered acoustic headboard feature wall",
      "Smoked glass modular wardrobes with concealed warm illumination",
      "Natural herringbone European oak wooden flooring",
      "Seamless magnetic ceiling tracks with directional spotlights",
    ],
    specs: [
      { label: "Flooring", value: "Herringbone Oak" },
      { label: "Lighting", value: "Magnetic Track & Profiles" },
      { label: "Storage", value: "Custom Modular Wardrobes" },
    ],
  },
  {
    id: "kitchen",
    tabLabel: "Modular Kitchens",
    icon: Utensils,
    title: "Bespoke Modular Kitchens & Islands",
    subtitle: "High-performance culinary studios designed with quartz waterfall counters & smart storage.",
    image: "/media/interiors/designer-modular-kitchen.webp",
    description:
      "State-of-the-art modular kitchen environments engineered for effortless utility. Featuring bookmatched quartz waterfall islands, handleless matte acrylic cabinetry, and integrated high-end appliances.",
    features: [
      "Calacatta quartz waterfall island with barstool seating",
      "Soft-close handleless matte acrylic & walnut cabinetry",
      "Integrated under-cabinet ambient LED task lighting",
      "Concealed appliance garages & modular pantry pull-outs",
    ],
    specs: [
      { label: "Hardware", value: "German Blum / Hettich" },
      { label: "Counters", value: "Quartz Waterfall Island" },
      { label: "Warranty", value: "10-Year Hardware" },
    ],
  },
  {
    id: "dining",
    tabLabel: "Dining Suites",
    icon: Utensils,
    title: "Refined Dining Suites & Private Bars",
    subtitle: "Memorable entertaining spaces with statement chandeliers and architectural screens.",
    image: "/media/interiors/luxury-dining-room.webp",
    description:
      "Crafted for memorable dining experiences. We combine polished dark marble dining tables with custom velvet upholstered chairs, suspended crystal-brass chandeliers, and acoustic fluted room partitions.",
    features: [
      "Polished marble top 8-seater custom dining suite",
      "Suspended linear crystal and brushed brass chandelier",
      "Fluted architectural partition screens with recessed floor lighting",
      "Designer credenza with concealed wine storage & glassware display",
    ],
    specs: [
      { label: "Table Top", value: "Nero Marquina / Calacatta" },
      { label: "Seating", value: "Custom Velvet & Brass" },
      { label: "Chandelier", value: "Bespoke Linear Crystal" },
    ],
  },
  {
    id: "foyer",
    tabLabel: "Grand Foyers",
    icon: DoorOpen,
    title: "Grand Entrance Foyers & Penthouse Lobbies",
    subtitle: "Inspiring first impressions with sculptural consoles, geometric mirrors & brass inlays.",
    image: "/media/interiors/luxury-penthouse-foyer.webp",
    description:
      "The entrance sets the tone for the entire residence. Our foyer designs incorporate double-height ceiling treatments, marble console tables, geometric bronze mirrors, and brass inlay marble floors.",
    features: [
      "Custom Italian marble entrance consoles",
      "Oversized bronze-tinted geometric statement mirror decor",
      "Minimalist black-framed glass partition doors",
      "Polished marble flooring with geometric brass inlay motifs",
    ],
    specs: [
      { label: "Mirror Art", value: "Bespoke Bronze Geometric" },
      { label: "Partitions", value: "Slimline Metal & Glass" },
      { label: "Consoles", value: "Handcrafted Marble" },
    ],
  },
  {
    id: "ceilings",
    tabLabel: "Ceilings & Lights",
    icon: Lightbulb,
    title: "Architectural False Ceilings & Lighting",
    subtitle: "Precision-engineered ambient, task & accent lighting tailored to each space.",
    image: "/media/interiors/architectural-ceiling-lighting.webp",
    description:
      "Lighting is the soul of luxury decor. We execute precision gypsum false ceilings featuring perimeter shadow gaps, warm 3000K profile strips, magnetic track lights, and acoustic wooden louvers.",
    features: [
      "Perimeter shadow-gap architectural false ceilings",
      "Magnetic track lighting with swiveling spot & flood modules",
      "Concealed warm 3000K LED profile cove illumination",
      "Acoustic fluted timber wall-to-ceiling transition details",
    ],
    specs: [
      { label: "Color Temp", value: "3000K Warm Ambient" },
      { label: "Ceiling", value: "Saint-Gobain Gypsum" },
      { label: "Tracks", value: "Low-Voltage Magnetic" },
    ],
  },
];

export function InteriorSpotlightSection() {
  const [activeTab, setActiveTab] = useState(interiorSpaces[0].id);
  const currentSpace = interiorSpaces.find((s) => s.id === activeTab) || interiorSpaces[0];

  return (
    <section id="interior-decor-spotlight" className="relative py-20 sm:py-28 overflow-hidden bg-slate-50/60 dark:bg-slate-950/50 border-t border-[var(--border-soft)]">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(192,38,211,0.06),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(239,191,4,0.06),transparent_35%)] dark:bg-[radial-gradient(circle_at_15%_25%,rgba(192,38,211,0.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(239,191,4,0.08),transparent_35%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-600 dark:text-fuchsia-400 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
              Signature Living &amp; Turnkey Execution
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Interior Design &amp; Luxury Decor
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              From bespoke living rooms and modular kitchens to executive suites, H.V Construction delivers turnkey interior decor where design elegance meets master craftsmanship.
            </p>
          </Reveal>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/80 p-2 shadow-sm border border-[var(--border-soft)] dark:bg-[var(--surface-dark-elevated)]/80 backdrop-blur-xl">
            {interiorSpaces.map((space) => {
              const Icon = space.icon;
              const isActive = space.id === activeTab;
              return (
                <button
                  key={space.id}
                  onClick={() => setActiveTab(space.id)}
                  className={`relative flex items-center gap-2 rounded-xl px-3.5 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all focus-visible:outline-none whitespace-nowrap ${
                    isActive
                      ? "text-white shadow-md"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeInteriorTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-600 to-amber-500 shadow-[0_4px_16px_rgba(192,38,211,0.35)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {space.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Space Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpace.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Image */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-3xl border-2 border-[var(--border-soft)] shadow-2xl bg-slate-950">
                <img
                  src={currentSpace.image}
                  alt={currentSpace.title}
                  className="w-full h-[320px] sm:h-[440px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Specs Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-md bg-fuchsia-600 text-white mb-1 shadow">
                      {currentSpace.tabLabel}
                    </span>
                    <p className="text-base sm:text-lg font-bold drop-shadow">
                      {currentSpace.title}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-3">
                    {currentSpace.specs.map((spec) => (
                      <div key={spec.label} className="rounded-xl bg-slate-900/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-center">
                        <p className="text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider">{spec.label}</p>
                        <p className="text-xs font-bold text-white">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white leading-tight mb-3">
                {currentSpace.title}
              </h3>
              <p className="text-sm font-semibold text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-4">
                {currentSpace.subtitle}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {currentSpace.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                {currentSpace.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ButtonLink to="/contact" className="w-full sm:w-auto">
                  Book Interior Consultation
                </ButtonLink>
                <Link
                  to="/expertise/interior-design"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-soft)] bg-white/70 dark:bg-slate-900/70 px-6 py-3.5 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span>Explore Interior Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Value Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-[var(--border-soft)]">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-base font-black text-slate-950 dark:text-white">3D Visual Design</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full 3D photorealistic walk-throughs before work begins.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-base font-black text-slate-950 dark:text-white">Turnkey Execution</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Single-point ownership from civil prep to final soft furnishing.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-base font-black text-slate-950 dark:text-white">Bespoke Millwork</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">In-house carpentry, factory-finished cabinetry &amp; veneers.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-base font-black text-slate-950 dark:text-white">On-Time Handover</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Committed milestone schedules with weekly site reports.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
