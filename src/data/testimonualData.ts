export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role?: string;
  rating: number;
  avatar: string;
}

export interface TestimonialData {
  tagline: string;
  headline: string;
  testimonials: TestimonialItem[];
}

export const testimonialData: TestimonialData = {
  tagline: "TESTIMONIALS",
  headline: "What Our Investors Says?",
  testimonials: [
    {
      id: 1,
      quote:
        "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.",
      author: "Alexander Vasquez",
      role: "Real Estate Investor",
      rating: 5,
      avatar: "/images/avatar1.jpg",
    },
    {
      id: 2,
      quote:
        "Partnering with Karumannil Group has been one of our strongest strategic decisions. Their transparency, prompt execution, and vision for high-yield property ventures exceeded our expectations on every milestone.",
      author: "Sarah Jenkins",
      role: "Strategic Partner",
      rating: 5,
      avatar: "/images/avatar1.jpg",
    },
    {
      id: 3,
      quote:
        "The professionalism and architectural quality delivered by the Karumannil team are unmatched. Our residential investment appreciated significantly within the first year itself.",
      author: "David Sterling",
      role: "Portfolio Manager",
      rating: 5,
      avatar: "/images/avatar1.jpg",
    },
  ],
};
