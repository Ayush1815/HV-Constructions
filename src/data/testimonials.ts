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
    quote: "Their team transformed our corporate office space completely. From meticulous space planning and modern interior design to flawless execution, the turnkey interior solutions they provided exceeded all our expectations.",
    author: "Siddharth Verma",
    role: "Chief Executive Officer",
    company: "NovaSpace Private Ltd.",
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
