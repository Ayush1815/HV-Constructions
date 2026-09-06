export interface ProjectInquiry {
  name: string;
  email: string;
  phone: string;
  organization: string;
  projectType: string[];
  projectLocation: string;
  estimatedBudget: string;
  projectTimeline: string;
  description: string;
  website: string; // honeypot
}

export const initialInquiryForm: ProjectInquiry = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  projectType: [],
  projectLocation: "",
  estimatedBudget: "",
  projectTimeline: "",
  description: "",
  website: "", // honeypot
};

export const budgetOptions = [
  "Under ₹50 Lakhs",
  "₹50 Lakhs - ₹1 Crore",
  "₹1 Crore - ₹5 Crores",
  "₹5 Crores - ₹20 Crores",
  "Above ₹20 Crores"
];

export const timelineOptions = [
  "Immediate (0-3 months)",
  "Short-term (3-6 months)",
  "Medium-term (6-12 months)",
  "Long-term (1+ years)"
];

export const projectTypeOptions = [
  "Government Infrastructure",
  "Water Infrastructure",
  "Roads & Transportation",
  "Telecom Infrastructure",
  "Residential Building",
  "Commercial Building",
  "High-Rise Construction",
  "Private Development",
  "Interior Execution",
  "Turnkey Solution"
];
