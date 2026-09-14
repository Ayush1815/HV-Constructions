import type { LucideIcon } from "lucide-react";
import {
  Building2, Droplets, Route, Home, TowerControl, Palette, HardHat, Cog, Truck, Hammer, Ruler, CheckCircle2
} from "lucide-react";

export type ServiceCarouselSlideId =
  | "government-infrastructure"
  | "jal-jeevan-mission"
  | "roads-transportation"
  | "buildings-civil"
  | "high-rise"
  | "interior-design";

export type ServiceCarouselSlide = {
  id: ServiceCarouselSlideId;
  eyebrow: string;
  routePath: string;
  routeLabel: string;
  images: {
    light: string;
    dark: string;
  };
  imageAlt: string;
  Icon: LucideIcon;
  headline: Array<{
    text?: string;
    before?: string;
    accent?: string;
    after?: string;
  }>;
  description: string;
  cta: string;
  proof: {
    value: string;
    text: string;
  };
  accent: string;
  accentRgb: string;
  secondaryAccent: string;
  features: Array<{
    label: string;
    Icon: LucideIcon;
  }>;
};

export const serviceCarouselSlides: ServiceCarouselSlide[] = [
  {
    id: "government-infrastructure",
    eyebrow: "Government & Public Infrastructure",
    routePath: "/expertise/government-infrastructure",
    routeLabel: "Metro, Utilities, Civic Facilities",
    images: {
      light: "/media/carousel/carousel_govt_infrastructure.webp",
      dark: "/media/carousel/carousel_govt_infrastructure.webp",
    },
    imageAlt: "Government infrastructure and metro transit construction",
    Icon: Building2,
    headline: [
      { text: "Building the foundation for" },
      { accent: "public growth." },
    ],
    description:
      "Executing large-scale government civil construction and public infrastructure development with strict compliance and safety standards.",
    cta: "Explore Infrastructure",
    proof: {
      value: "100+",
      text: "Government projects completed.",
    },
    accent: "#1e3a8a",
    accentRgb: "30 58 138",
    secondaryAccent: "#0f172a",
    features: [
      { label: "Civil works", Icon: HardHat },
      { label: "Transit & Metro", Icon: Building2 },
      { label: "Roadways", Icon: Route },
      { label: "Quality Check", Icon: CheckCircle2 },
    ],
  },
  {
    id: "interior-design",
    eyebrow: "Interior Design & Luxury Decor",
    routePath: "/expertise/interior-design",
    routeLabel: "Luxury Living, Kitchens, Suites & Turnkey Fitouts",
    images: {
      light: "/media/carousel/carousel_interior_design.webp",
      dark: "/media/carousel/carousel_interior_design.webp",
    },
    imageAlt: "Luxury living room and bespoke interior decor execution",
    Icon: Palette,
    headline: [
      { text: "Crafting bespoke interiors with" },
      { accent: "luxury decor." },
    ],
    description:
      "End-to-end luxury residential & commercial interiors. From custom false ceilings and ambient lighting to bespoke modular kitchens, Italian marble, and turnkey execution.",
    cta: "Explore Luxury Interiors",
    proof: {
      value: "Bespoke",
      text: "3D design to turnkey delivery.",
    },
    accent: "#c026d3",
    accentRgb: "192 38 211",
    secondaryAccent: "#a21caf",
    features: [
      { label: "Luxury Living", Icon: Home },
      { label: "Modular Kitchens", Icon: Cog },
      { label: "False Ceilings", Icon: Ruler },
      { label: "Turnkey Decor", Icon: Palette },
    ],
  },
  {
    id: "jal-jeevan-mission",
    eyebrow: "Water Infrastructure",
    routePath: "/expertise/jal-jeevan-mission",
    routeLabel: "JJM Overhead Tanks, Pipelines, WTP",
    images: {
      light: "/media/carousel/carousel_water_infrastructure.webp",
      dark: "/media/carousel/carousel_water_infrastructure.webp",
    },
    imageAlt: "Jal Jeevan Mission overhead water tank construction",
    Icon: Droplets,
    headline: [
      { text: "Connecting communities to" },
      { accent: "safe water." },
    ],
    description:
      "Expert execution of pipeline distribution networks, overhead water storage towers, and comprehensive water distribution under Jal Jeevan Mission.",
    cta: "View Water Projects",
    proof: {
      value: "500+",
      text: "km of pipelines laid.",
    },
    accent: "#0284c7",
    accentRgb: "2 132 199",
    secondaryAccent: "#0369a1",
    features: [
      { label: "Overhead Tanks", Icon: Building2 },
      { label: "Pipelines", Icon: Route },
      { label: "Distribution", Icon: Truck },
      { label: "Site Development", Icon: Ruler },
    ],
  },
  {
    id: "roads-transportation",
    eyebrow: "Roads & Transportation",
    routePath: "/expertise/roads-transportation",
    routeLabel: "Highways, Expressways, Flyovers",
    images: {
      light: "/media/carousel/carousel_roads_transportation.webp",
      dark: "/media/carousel/carousel_roads_transportation.webp",
    },
    imageAlt: "Highway interchange and expressway construction",
    Icon: Route,
    headline: [
      { text: "Paving the way for" },
      { accent: "better connectivity." },
    ],
    description:
      "Developing robust expressway interchanges, national highways, and complete transportation infrastructure with precision engineering.",
    cta: "Explore Roads",
    proof: {
      value: "Premium",
      text: "quality asphalt and concrete.",
    },
    accent: "#475569",
    accentRgb: "71 85 105",
    secondaryAccent: "#334155",
    features: [
      { label: "Expressways", Icon: Route },
      { label: "Flyovers", Icon: Building2 },
      { label: "Paving", Icon: Ruler },
      { label: "Drainage", Icon: Droplets },
    ],
  },
  {
    id: "buildings-civil",
    eyebrow: "Buildings & Civil Construction",
    routePath: "/expertise/buildings-civil",
    routeLabel: "Commercial, Residential, Institutional",
    images: {
      light: "/media/carousel/carousel_buildings_civil.webp",
      dark: "/media/carousel/carousel_buildings_civil.webp",
    },
    imageAlt: "Commercial and institutional building construction",
    Icon: Home,
    headline: [
      { text: "Constructing spaces that" },
      { accent: "inspire." },
    ],
    description:
      "Comprehensive civil construction for commercial offices, institutions, and residential developments built to last for generations.",
    cta: "View Buildings",
    proof: {
      value: "End-to-End",
      text: "construction management.",
    },
    accent: "#059669",
    accentRgb: "5 150 105",
    secondaryAccent: "#047857",
    features: [
      { label: "Commercial", Icon: Building2 },
      { label: "Residential", Icon: Home },
      { label: "Institutional", Icon: Building2 },
      { label: "Civil works", Icon: Hammer },
    ],
  },
  {
    id: "high-rise",
    eyebrow: "High-Rise Buildings",
    routePath: "/expertise/high-rise",
    routeLabel: "Multi-Storey Towers, Core Structures",
    images: {
      light: "/media/carousel/carousel_high_rise.webp",
      dark: "/media/carousel/carousel_high_rise.webp",
    },
    imageAlt: "High-rise skyscraper engineering construction",
    Icon: TowerControl,
    headline: [
      { text: "Scaling heights with" },
      { accent: "engineering excellence." },
    ],
    description:
      "Executing complex high-rise residential and commercial developments with advanced slip-formwork engineering and structural precision.",
    cta: "Explore High-Rise",
    proof: {
      value: "Advanced",
      text: "structural capabilities.",
    },
    accent: "#4f46e5",
    accentRgb: "79 70 229",
    secondaryAccent: "#4338ca",
    features: [
      { label: "Multi-storey", Icon: TowerControl },
      { label: "Structural Core", Icon: HardHat },
      { label: "Curtain Glazing", Icon: Palette },
      { label: "Allied works", Icon: Cog },
    ],
  },
];
