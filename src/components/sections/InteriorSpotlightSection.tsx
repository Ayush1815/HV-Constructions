import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Preload all interior images on mount for instant switching
  useEffect(() => {
    interiorSpaces.forEach((space) => {
      const img = new Image();
      img.src = space.image;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [space.id]: true }));
      };
    });
  }, []);

  const currentSpace = interiorSpaces.find((s) => s.id === activeTab) || interiorSpaces[0];

  return (
    <section id="interior-decor-spotlight" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-slate-50/60 dark:bg-slate-950/50 border-t border-[var(--border-soft)]">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(192,38,211,0.06),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(239,191,4,0.06),transparent_35%)] dark:bg-[radial-gradient(circle_at_15%_25%,rgba(192,38,211,0.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(239,191,4,0.08),transparent_35%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3.5 py-1 text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400 mb-3">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-fuchsia-500" />
              Signature Living &amp; Turnkey Execution
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
              Interior Design &amp; Luxury Decor
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From bespoke living rooms and modular kitchens to executive suites, H.V Construction delivers turnkey interior decor where design elegance meets master craftsmanship.
            </p>
          </Reveal>
        </div>

        {/* Category Navigation Tabs (Optimized for Mobile Scroll) */}
        <div className="w-full mb-8 sm:mb-12">
          <div className="flex w-full overflow-x-auto no-scrollbar py-2 px-1 sm:px-0 justify-start sm:justify-center touch-pan-x">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 p-1.5 sm:p-2 shadow-sm border border-[var(--border-soft)] backdrop-blur-xl shrink-0 mx-auto sm:mx-0">
              {interiorSpaces.map((space) => {
                const Icon = space.icon;
                const isActive = space.id === activeTab;
                return (
                  <button
                    key={space.id}
                    onClick={() => setActiveTab(space.id)}
                    type="button"
                    className={`relative flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all focus-visible:outline-none shrink-0 whitespace-nowrap ${
                      isActive
                        ? "text-white bg-gradient-to-r from-fuchsia-600 to-amber-500 shadow-[0_4px_16px_rgba(192,38,211,0.3)]"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span>{space.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Space Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Image Showcase */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--border-soft)] shadow-xl bg-slate-100 dark:bg-slate-900">
              {/* Shimmer skeleton until image loads */}
              {!loadedImages[currentSpace.id] && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" />
              )}

              <img
                key={currentSpace.id}
                src={currentSpace.image}
                alt={currentSpace.title}
                loading="eager"
                decoding="async"
                onLoad={() => setLoadedImages((prev) => ({ ...prev, [currentSpace.id]: true }))}
                className={`w-full h-64 sm:h-[400px] lg:h-[480px] object-cover transition-all duration-500 ${
                  loadedImages[currentSpace.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Space Badge on Image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[0.65rem] sm:text-xs font-bold rounded-md bg-fuchsia-600 text-white mb-1 shadow">
                    {currentSpace.tabLabel}
                  </span>
                  <p className="text-sm sm:text-lg font-bold drop-shadow line-clamp-1">
                    {currentSpace.title}
                  </p>
                </div>

                {/* Specs Pills (Desktop view inside image) */}
                <div className="hidden sm:flex items-center gap-2">
                  {currentSpace.specs.map((spec) => (
                    <div key={spec.label} className="rounded-lg bg-slate-900/80 backdrop-blur-md px-2.5 py-1 border border-white/10 text-center">
                      <p className="text-[0.6rem] font-medium text-slate-400 uppercase tracking-wider">{spec.label}</p>
                      <p className="text-xs font-bold text-white whitespace-nowrap">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Specs Strip (Visible on mobile directly under the image) */}
            <div className="grid grid-cols-3 gap-2 mt-3 sm:hidden">
              {currentSpace.specs.map((spec) => (
                <div key={spec.label} className="rounded-xl bg-white dark:bg-slate-900 p-2 border border-[var(--border-soft)] text-center shadow-xs">
                  <p className="text-[0.6rem] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{spec.label}</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white mt-0.5">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Details */}
          <div className="lg:col-span-5 flex flex-col justify-center mt-2 lg:mt-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 dark:text-white leading-tight mb-2">
              {currentSpace.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-3">
              {currentSpace.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              {currentSpace.description}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2 sm:space-y-2.5 mb-6">
              {currentSpace.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <ButtonLink to="/contact" className="w-full sm:w-auto text-center justify-center">
                Book Interior Consultation
              </ButtonLink>
              <Link
                to="/expertise/interior-design"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-soft)] bg-white/70 dark:bg-slate-900/70 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center"
              >
                <span>Explore Interior Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Value Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-8 sm:pt-12 border-t border-[var(--border-soft)]">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-xs sm:text-sm lg:text-base font-black text-slate-950 dark:text-white">3D Visual Design</h4>
            <p className="text-[0.65rem] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">Full 3D photorealistic walk-throughs before work begins.</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-xs sm:text-sm lg:text-base font-black text-slate-950 dark:text-white">Turnkey Execution</h4>
            <p className="text-[0.65rem] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">Single-point ownership from civil prep to final soft furnishing.</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-xs sm:text-sm lg:text-base font-black text-slate-950 dark:text-white">Bespoke Millwork</h4>
            <p className="text-[0.65rem] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">In-house carpentry, factory-finished cabinetry &amp; veneers.</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-white/5 border border-[var(--border-soft)] text-center">
            <h4 className="text-xs sm:text-sm lg:text-base font-black text-slate-950 dark:text-white">On-Time Handover</h4>
            <p className="text-[0.65rem] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">Committed milestone schedules with weekly site reports.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
