export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "HV Construction delivered our commercial high-rise 2 months ahead of schedule. Their attention to structural integrity and safety standards is unmatched in the industry.",
    author: "Rajesh Sharma",
    role: "Managing Director",
    company: "Pinnacle Real Estate",
    rating: 5,
  },
  {
    id: "t2",
    quote: "The Jal Jeevan Mission project in our district was executed flawlessly. They managed complex terrain and delivered a robust water distribution network that serves thousands.",
    author: "Vikram Desai",
    role: "Executive Engineer",
    company: "State Water Board",
    rating: 5,
  },
  {
    id: "t3",
    quote: "From the initial blueprint to the final interior finishes, HV Construction acted as a true partner. The turnkey execution of our manufacturing facility was seamless.",
    author: "Anita Patel",
    role: "Operations Head",
    company: "TechGlobal Industries",
    rating: 5,
  }
];
