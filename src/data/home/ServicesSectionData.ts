export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon:
    | "trademark"
    | "investment"
    | "find-investor"
    | "business-solution"
    | "hire-staff"
    | "business-plan";
}

export interface ServicesSectionData {
  tagline: string;
  headline: string;
  services: ServiceItem[];
}

export const servicesSectionData: ServicesSectionData = {
  tagline: "WHAT WE DO",
  headline: "Discover Our Services",
  services: [
    {
      id: 1,
      title: "Trade Mark Registration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: "trademark",
    },
    {
      id: 2,
      title: "Investment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: "investment",
    },
    {
      id: 3,
      title: "Find Investor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: "find-investor",
    },
    {
      id: 4,
      title: "Business Solution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: "business-solution",
    },
    {
      id: 5,
      title: "Hire Staff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: "hire-staff",
    },
    {
      id: 6,
      title: "Business Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: "business-plan",
    },
  ],
};
