export interface HeroData {
  tagline: string;
  headline: string;
  description: string;
  backgroundWord: string;
  discoverButton: {
    text: string;
    href: string;
  };
  exploreButton: {
    text: string;
    href: string;
  };
  characterImage: {
    src: string;
    alt: string;
  };
  sideBadge: {
    subtitle: string;
    year: string;
  };
}

export const heroData: HeroData = {
  tagline: "STRATEGIC PARTNER FOR A MODERN GENERATION.",
  headline: "Turning Business Potential into Lasting Success",
  description:
    "Karumannil Business Group is your strategic partner in scaling entrepreneurial ventures. With deep industry expertise, innovative approaches, and a commitment to long-term growth, we help turn business potential into lasting success.",
  backgroundWord: "KARUMANNIL",
  discoverButton: {
    text: "Start a Project",
    href: "#about",
  },
  exploreButton: {
    text: "Explore Portfolio",
    href: "#portfolio",
  },
  characterImage: {
    src: "/images/11.png",
    alt: "Karumannil Leadership Team",
  },
  sideBadge: {
    subtitle: "BUSINESS GROUP",
    year: "2024",
  },
};

export default heroData;
