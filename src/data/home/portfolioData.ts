export interface PortfolioSpec {
  icon: "size" | "capacity" | "furnished" | "facilities";
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  badge: string;
  price: string;
  unit: string;
  image: string;
  specs: PortfolioSpec[];
}

export interface PortfolioData {
  tagline: string;
  title: string;
  items: PortfolioItem[];
}

export const portfolioData: PortfolioData = {
  tagline: "FEATURED PROPERTIES",
  title: "Our Signature Portfolio",
  items: [
    {
      id: "flat-1",
      badge: "New Project",
      price: "45 Lac.",
      unit: "/ Flat",
      image: "/images/f1.png",
      specs: [
        { icon: "size", label: "Size:", value: "2500 sqft" },
        { icon: "capacity", label: "Capacity:", value: "65 families" },
        { icon: "furnished", label: "Furnished:", value: "Mid Level" },
        {
          icon: "facilities",
          label: "Other Facilities:",
          value: "Wifi, Television, Playground,...",
        },
      ],
    },
    {
      id: "home-1",
      badge: "New Project",
      price: "1.5 Cr.",
      unit: "/ Home",
      image: "/images/f3.png",
      specs: [
        { icon: "size", label: "Size:", value: "3500 sqft" },
        { icon: "capacity", label: "Capacity:", value: "4 BHK" },
        { icon: "furnished", label: "Furnished:", value: "Fully" },
        {
          icon: "facilities",
          label: "Other Facilities:",
          value: "Wifi, Swimming Pool, Playground,...",
        },
      ],
    },
    {
      id: "flat-2",
      badge: "New Project",
      price: "45 Lac.",
      unit: "/ Flat",
      image: "/images/f2.png",
      specs: [
        { icon: "size", label: "Size:", value: "2500 sqft" },
        { icon: "capacity", label: "Capacity:", value: "65 families" },
        { icon: "furnished", label: "Furnished:", value: "Mid Level" },
        {
          icon: "facilities",
          label: "Other Facilities:",
          value: "Wifi, Television, Playground,...",
        },
      ],
    },
  ],
};
