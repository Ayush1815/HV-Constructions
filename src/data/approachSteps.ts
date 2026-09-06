import { Lightbulb, NotebookPen, HardHat, Activity, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ApproachStep = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

export const approachSteps: ApproachStep[] = [
  {
    title: "Understand",
    text: "We begin by understanding the client's requirements, project objectives and site conditions.",
    Icon: Lightbulb,
  },
  {
    title: "Plan",
    text: "Our team develops the appropriate execution strategy, resources and project schedule.",
    Icon: NotebookPen,
  },
  {
    title: "Execute",
    text: "Construction and associated works are executed through coordinated teams and systematic supervision.",
    Icon: HardHat,
  },
  {
    title: "Control",
    text: "Quality, safety, materials, workmanship and progress are continuously monitored.",
    Icon: Activity,
  },
  {
    title: "Deliver",
    text: "We complete the project with attention to finishing, quality and client requirements before handover.",
    Icon: PackageCheck,
  },
];
