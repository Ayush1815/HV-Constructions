import { Landmark, Building2, Droplets, Route, Cable, Home, Store, Factory, GraduationCap, Map, Hotel, ShoppingBag, Briefcase, Key } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Sector = {
  name: string;
  Icon: LucideIcon;
};

export const sectors: Sector[] = [
  { name: "Government & Public Sector", Icon: Landmark },
  { name: "Infrastructure", Icon: Building2 },
  { name: "Water & Utilities", Icon: Droplets },
  { name: "Roads & Transportation", Icon: Route },
  { name: "Telecom & Optical Fibre", Icon: Cable },
  { name: "Residential", Icon: Home },
  { name: "Commercial", Icon: Store },
  { name: "Industrial", Icon: Factory },
  { name: "Institutional", Icon: GraduationCap },
  { name: "Real Estate", Icon: Map },
  { name: "Hospitality", Icon: Hotel },
  { name: "Retail", Icon: ShoppingBag },
  { name: "Corporate", Icon: Briefcase },
  { name: "Private Properties", Icon: Key },
];
