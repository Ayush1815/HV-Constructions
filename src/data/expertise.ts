import { Building2, Droplets, Route, Cable, Home, TowerControl, Briefcase, Palette, Layers, type LucideIcon } from "lucide-react";

export interface ExpertiseSubCategory {
  title: string;
  items: string[];
}

export interface ExpertiseArea {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
  subCategories?: ExpertiseSubCategory[];
  accentColor: string;
  image: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "gov-infra",
    slug: "government-infrastructure",
    number: "01",
    title: "Government & Public Infrastructure",
    tagline: "Quality, compliance, safety and timely execution for public infrastructure.",
    icon: Building2,
    description: "Delivering reliable civil construction projects for government and public infrastructure needs.",
    capabilities: [
      "Government civil construction projects",
      "Public infrastructure development",
      "Utility infrastructure",
      "Water infrastructure",
      "Roads and transportation infrastructure",
      "Government buildings and facilities",
      "Institutional construction",
      "Infrastructure maintenance and development works"
    ],
    accentColor: "#1e3a8a", // Navy
    image: "/media/infrastructure/city-center-metro-station.webp"
  },
  {
    id: "jal-jeevan",
    slug: "jal-jeevan-mission",
    number: "02",
    title: "Jal Jeevan Mission & Water Infrastructure",
    tagline: "Building efficient and durable water infrastructure that supports communities.",
    icon: Droplets,
    description: "Developing robust water supply and distribution networks for sustainable living.",
    capabilities: [
      "Pipeline distribution networks",
      "Water supply pipelines",
      "Overhead water tanks",
      "Water storage infrastructure",
      "Distribution systems",
      "Civil works associated with water infrastructure",
      "Supporting utility and site development works"
    ],
    accentColor: "#0284c7", // Blue
    image: "/media/water/jal-jeevan-overhead-tank.webp"
  },
  {
    id: "roads",
    slug: "roads-transportation",
    number: "03",
    title: "Roads & Transportation Infrastructure",
    tagline: "Connecting people and places with world-class transportation infrastructure.",
    icon: Route,
    description: "Expertise in highway construction, road widening, and related civil works.",
    capabilities: [
      "Highway construction",
      "Expressway-related civil works",
      "Roads and internal roads",
      "Rural and urban roads",
      "Road widening and development",
      "Road infrastructure and allied civil works",
      "Drainage and road-side infrastructure",
      "Supporting structures and civil works"
    ],
    accentColor: "#475569", // Slate
    image: "/media/infrastructure/highway-interchange-aerial.webp"
  },
  {
    id: "telecom",
    slug: "optical-fibre-telecom",
    number: "04",
    title: "Optical Fibre & Telecom Infrastructure",
    tagline: "Empowering communication through robust telecom infrastructure.",
    icon: Cable,
    description: "Specialized civil works for optical fibre networks and telecom infrastructure.",
    capabilities: [
      "Optical fibre network infrastructure",
      "Fibre cable route development",
      "Underground and associated civil works",
      "Ducting and utility works",
      "Telecom infrastructure support",
      "Trenching and reinstatement works",
      "Associated civil and site development works"
    ],
    accentColor: "#ea580c", // Orange
    image: "/media/telecom/nhai-digital-highway-fibre.webp"
  },
  {
    id: "buildings-civil",
    slug: "buildings-civil",
    number: "05",
    title: "Buildings & Civil Construction",
    tagline: "Constructing enduring residential, commercial, and institutional spaces.",
    icon: Home,
    description: "Comprehensive civil construction services across various building sectors.",
    capabilities: [],
    subCategories: [
      {
        title: "Residential",
        items: ["Independent houses", "Luxury residences", "Villas", "Residential buildings", "Apartment developments", "Private properties", "Residential redevelopment"]
      },
      {
        title: "Commercial",
        items: ["Commercial buildings", "Offices", "Corporate spaces", "Retail properties", "Showrooms", "Business establishments", "Mixed-use developments"]
      },
      {
        title: "Institutional & Government",
        items: ["Government buildings", "Educational facilities", "Institutional buildings", "Public facilities", "Administrative buildings", "Other civil infrastructure"]
      }
    ],
    accentColor: "#059669", // Emerald
    image: "/media/high-rise/commercial-frame-scaffolding.webp"
  },
  {
    id: "high-rise",
    slug: "high-rise",
    number: "06",
    title: "High-Rise Buildings",
    tagline: "Reaching new heights with structurally sound and visually striking skyscrapers.",
    icon: TowerControl,
    description: "Executing complex multi-storey and high-rise construction projects with precision.",
    capabilities: [
      "Multi-storey residential buildings",
      "High-rise commercial buildings",
      "Mixed-use developments",
      "Structural and civil works",
      "Building infrastructure",
      "Finishing works",
      "External development",
      "Allied construction works"
    ],
    accentColor: "#4f46e5", // Indigo
    image: "/media/high-rise/curved-skyscraper-aerial.webp"
  },
  {
    id: "private-dev",
    slug: "private-development",
    number: "07",
    title: "Private Property Development",
    tagline: "End-to-end solutions for transforming private properties into dream spaces.",
    icon: Briefcase,
    description: "Managing private development projects from initial planning to final handover.",
    capabilities: [
      "Planning",
      "Civil Construction",
      "Structural Works",
      "MEP Coordination",
      "Finishing",
      "Interiors",
      "Final Handover"
    ],
    accentColor: "#b45309", // Amber
    image: "/media/residential/luxury-white-villa-residence.webp"
  },
  {
    id: "interior-design",
    slug: "interior-design",
    number: "08",
    title: "Interior Design & Luxury Decor",
    tagline: "Transforming residential and commercial spaces with bespoke luxury decor, false ceilings, modular woodwork, and turnkey execution.",
    icon: Palette,
    description: "Delivering end-to-end interior design and decor execution from initial 3D visualization to final handcrafted installation.",
    capabilities: [
      "Luxury residential interior design & decor",
      "Designer false ceilings & architectural lighting",
      "Bespoke modular kitchens & dining spaces",
      "Master bedroom suites & custom wardrobes",
      "Italian marble, hardwood & premium flooring",
      "Acoustic wall paneling & fluted woodwork",
      "Commercial & corporate executive fitouts",
      "End-to-end turnkey interior execution with 3D design"
    ],
    subCategories: [
      {
        title: "Residential Decor & Living",
        items: [
          "Luxury living rooms & lounges",
          "Contemporary master bedroom suites",
          "Bespoke modular kitchens with islands",
          "High-end dining spaces & bar counters",
          "Custom walk-in wardrobes & dressers",
          "Grand entrance foyers & private lobbies",
          "Home theatres & entertainment dens",
          "Turnkey villa & penthouse interiors"
        ]
      },
      {
        title: "Architectural Finishes & Craftsmanship",
        items: [
          "Multi-level gypsum false ceilings",
          "Concealed LED cove & magnetic track lights",
          "Italian marble flooring & brass inlays",
          "Fluted timber wall louvers & acoustic panels",
          "Custom handcrafted millwork & furniture",
          "Minimalist glass & metal room partitions",
          "Designer wallpaper, textured paints & veneers",
          "Complete electrical, automation & HVAC coordination"
        ]
      },
      {
        title: "Commercial & Executive Fitouts",
        items: [
          "Corporate headquarters & boardrooms",
          "Executive director cabins & lounges",
          "Luxury retail boutiques & showrooms",
          "Hospitality & restaurant interiors",
          "Acoustic office partitions & glass cabins",
          "Turnkey commercial interior execution"
        ]
      }
    ],
    accentColor: "#c026d3", // Fuchsia
    image: "/media/interiors/luxury-living-room-decor.webp"
  },
  {
    id: "turnkey",
    slug: "turnkey-solutions",
    number: "09",
    title: "Turnkey Project Solutions",
    tagline: "Seamless project delivery with a single point of responsibility.",
    icon: Layers,
    description: "Delivering complete projects with integrated planning, execution, and handover.",
    capabilities: [
      "Design & Planning",
      "Engineering",
      "Procurement",
      "Civil & Structural Works",
      "MEP & Utility Coordination",
      "Finishing",
      "Interior Works",
      "Quality Inspection",
      "Project Handover"
    ],
    accentColor: "#e11d48", // Rose
    image: "/media/turnkey/turnkey-epc-project-management.webp"
  }
];

export function getExpertiseBySlug(slug: string): ExpertiseArea | undefined {
  const normalizedSlug = slug.trim().toLowerCase();
  return expertiseAreas.find((area) => area.slug === normalizedSlug);
}
