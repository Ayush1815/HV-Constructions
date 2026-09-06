export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  status: 'completed' | 'ongoing';
  year: number;
  description: string;
  highlights: string[];
  image: string;
}

export const projectCategories = [
  { id: "government-infrastructure", label: "Govt & Infra" },
  { id: "jal-jeevan-mission", label: "Water Infrastructure" },
  { id: "roads-transportation", label: "Roads" },
  { id: "buildings-civil", label: "Buildings & Civil" },
  { id: "high-rise", label: "High-Rise" },
  { id: "interior-design", label: "Interiors" },
  { id: "turnkey-solutions", label: "Turnkey" },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "City Center Metro Station Civil Works",
    category: "government-infrastructure",
    categoryLabel: "Govt & Infra",
    location: "Pune, Maharashtra",
    status: "completed",
    year: 2023,
    description: "Executed comprehensive civil works for the new metro station, including structural framing, concourse level development, and entry/exit structures.",
    highlights: ["Completed 2 months ahead of schedule", "Zero safety incidents", "Extensive coordination with electromechanical teams"],
    image: "/media/infrastructure/city-center-metro-station.webp"
  },
  {
    id: "p2",
    title: "District Hospital Expansion",
    category: "government-infrastructure",
    categoryLabel: "Govt & Infra",
    location: "Nashik, Maharashtra",
    status: "ongoing",
    year: 2024,
    description: "Construction of a new 500-bed wing for the district hospital to upgrade public healthcare infrastructure.",
    highlights: ["Turnkey civil execution", "Compliance with strict healthcare standards", "Specialized MEP coordination"],
    image: "/media/high-rise/commercial-frame-scaffolding.webp"
  },
  {
    id: "p3",
    title: "Regional Sports Complex & Stadium",
    category: "government-infrastructure",
    categoryLabel: "Govt & Infra",
    location: "Nagpur, Maharashtra",
    status: "completed",
    year: 2022,
    description: "Development of a multi-purpose sports complex featuring an indoor stadium, synthetic running tracks, and athletic facilities.",
    highlights: ["Olympic-standard athletic track", "Large span roof structure", "Seating capacity of 5,000"],
    image: "/media/infrastructure/regional-sports-complex.webp"
  },
  {
    id: "p4",
    title: "NH-48 Highway Widening (Phase 2)",
    category: "roads-transportation",
    categoryLabel: "Roads",
    location: "Surat, Gujarat",
    status: "ongoing",
    year: 2024,
    description: "Six-laning of a critical 45km stretch of the National Highway, including minor bridges, road-side drainage, and heavy bitumen paving.",
    highlights: ["High-volume traffic management", "Construction of 3 flyovers", "Use of recycled asphalt pavement (RAP)"],
    image: "/media/infrastructure/road-paving.webp"
  },
  {
    id: "p5",
    title: "MIDC Internal Road & Interchange Network",
    category: "roads-transportation",
    categoryLabel: "Roads",
    location: "Aurangabad, Maharashtra",
    status: "completed",
    year: 2021,
    description: "Construction of robust concrete roads, highway interchange connections, and storm water drainage systems for a heavy industrial zone.",
    highlights: ["20km of rigid pavement", "Integrated drainage system", "Heavy load bearing capacity"],
    image: "/media/infrastructure/highway-interchange-aerial.webp"
  },
  {
    id: "p6",
    title: "Rural Water Supply Scheme (Jal Jeevan Mission)",
    category: "jal-jeevan-mission",
    categoryLabel: "Water Infrastructure",
    location: "Jalgaon, Maharashtra",
    status: "completed",
    year: 2023,
    description: "Provided functional household tap connections to 15 villages under the Jal Jeevan Mission, including overhead storage reservoirs.",
    highlights: ["150km pipeline network", "Construction of 5 overhead tanks", "Benefiting 50,000+ rural population"],
    image: "/media/water/jal-jeevan-overhead-tank.webp"
  },
  {
    id: "p7",
    title: "Municipal Water Treatment Plant & Reservoir",
    category: "jal-jeevan-mission",
    categoryLabel: "Water Infrastructure",
    location: "Thane, Maharashtra",
    status: "ongoing",
    year: 2024,
    description: "Civil construction for a new 50 MLD circular water treatment reservoir to serve growing urban municipal demands.",
    highlights: ["Complex hydraulic structures", "Deep excavation works", "Strict water-tightness standards"],
    image: "/media/water/circular-reservoir-construction.webp"
  },
  {
    id: "p8",
    title: "Tech Park Commercial Towers",
    category: "buildings-civil",
    categoryLabel: "Buildings & Civil",
    location: "Bengaluru, Karnataka",
    status: "completed",
    year: 2023,
    description: "Civil and structural works for twin 12-storey commercial office towers in a premier IT corridor.",
    highlights: ["1.2 million sq ft built-up area", "LEED Gold certified structure", "Post-tensioned slabs"],
    image: "/media/high-rise/residential-tower-cranes.webp"
  },
  {
    id: "p9",
    title: "Luxury Private Estate & Villa Enclave",
    category: "buildings-civil",
    categoryLabel: "Buildings & Civil",
    location: "Lonavala, Maharashtra",
    status: "completed",
    year: 2022,
    description: "Construction of ultra-luxury private residences with high-end architectural finishes, cobblestone motor courts, and structural landscaping.",
    highlights: ["High-end architectural finishes", "Hilly terrain challenges overcome", "Integrated landscape civil works"],
    image: "/media/residential/grand-private-estate-courtyard.webp"
  },
  {
    id: "p10",
    title: "Skyline Residential Tower",
    category: "high-rise",
    categoryLabel: "High-Rise",
    location: "Mumbai, Maharashtra",
    status: "ongoing",
    year: 2025,
    description: "Structural execution of a 45-storey premium residential tower in South Mumbai with advanced slip-formwork.",
    highlights: ["Advanced formwork systems", "High-grade concrete pumping", "Complex wind-load engineering"],
    image: "/media/high-rise/skyscraper-top-skyline.webp"
  },
  {
    id: "p11",
    title: "Corporate HQ Interiors & Executive Boardrooms",
    category: "interior-design",
    categoryLabel: "Interiors",
    location: "Hyderabad, Telangana",
    status: "completed",
    year: 2023,
    description: "Turnkey interior execution for a 50,000 sq ft corporate headquarters with acoustic wall paneling, glass partitions, and bespoke millwork.",
    highlights: ["Modern open-plan workspace", "Acoustic specialized cabins", "Smart lighting integration"],
    image: "/media/interiors/corporate-office-conference-lounge.webp"
  },
  {
    id: "p12",
    title: "Integrated Industrial Manufacturing Facility",
    category: "turnkey-solutions",
    categoryLabel: "Turnkey",
    location: "Pune, Maharashtra",
    status: "completed",
    year: 2022,
    description: "End-to-end EPC design and build of an auto-components manufacturing unit with pre-engineered steel framing and logistics docks.",
    highlights: ["Single-point responsibility", "Delivered in 11 months", "PEB structure with heavy machine foundations"],
    image: "/media/turnkey/integrated-manufacturing-facility.webp"
  }
];
