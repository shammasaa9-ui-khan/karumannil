export interface AboutCardImage {
  src: string;
  alt: string;
}

export interface AboutParagraph {
  id: number;
  text: string;
  highlight?: string;
}

export interface AboutMainData {
  tagline: string;
  title: string;
  image: string;
  paragraphs: AboutParagraph[];
}

export interface AboutData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  paragraph1: string;
  paragraph2: string;
  readMoreButton: {
    label: string;
    href: string;
  };
  images: {
    card1: AboutCardImage;
    card2: AboutCardImage;
  };
  main: AboutMainData;
}

export const aboutData: AboutData = {
  tagline: "ABOUT US",
  headline: {
    line1: "Karumannil",
    line2: "Holding",
  },
  paragraph1:
    "Karumannil Holding is a dynamic and diversified business group committed to shaping the future through strategic investments, visionary leadership, and a steadfast dedication to excellence. Rooted in strong values and a legacy of trust, we have grown from humble beginnings into a trusted name across multiple industries.",
  paragraph2:
    "At the heart of Karumannil Holding is our belief in purposeful growth — not just for our businesses, but for people and communities.",
  readMoreButton: {
    label: "READ MORE",
    href: "/about",
  },
  images: {
    card1: {
      src: "/images/about1.png",
      alt: "Karumannil Holding Corporate Headquarters",
    },
    card2: {
      src: "/images/about2.png",
      alt: "Strategic Investments and Value Creation",
    },
  },
  main: {
    tagline: "ABOUT US",
    title: "Karumannil Holding.",
    image: "/images/a1.png",
    paragraphs: [
      {
        id: 1,
        text:
          "is a dynamic and diversified business group committed to shaping the future through strategic investments, visionary leadership, and a steadfast dedication to excellence. Rooted in strong values and a legacy of trust, we have grown from humble beginnings into a trusted name across multiple industries.",
      },
      {
        id: 2,
        text:
          "At the heart of Karumannil Holdings is our belief in purposeful growth — not just for our businesses, but for the communities we serve and the people we work with. Our ventures span across sectors including construction, trading, real estate, logistics, etc., each driven by innovation, operational integrity, and long-term value creation.",
        highlight: "construction, trading, real estate, logistics, etc.",
      },
      {
        id: 3,
        text:
          "We don't just build businesses; we build lasting partnerships. With a keen eye for opportunity and a deep understanding of evolving markets, Karumannil Holdings continuously adapts and scales with resilience. Our team of experienced professionals, combined with a forward-thinking leadership approach, allows us to navigate challenges and seize opportunities with confidence.",
      },
      {
        id: 4,
        text:
          "Whether we're launching a new venture or strengthening an existing one, our commitment remains the same: to deliver sustainable growth, empower entrepreneurs, and contribute to a better tomorrow.",
        highlight: "to a better tomorrow.",
      },
    ],
  },
};

export default aboutData;
