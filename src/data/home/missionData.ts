export interface ValueItem {
  id: string;
  label: string;
  text: string;
  icon: "integrity" | "innovation" | "excellence" | "collaboration" | "responsibility";
}

export interface MissionData {
  tagline: string;
  vision: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    items: ValueItem[];
  };
  quickCall: {
    label: string;
    phoneNumber: string;
    href: string;
  };
}

export const missionData: MissionData = {
  tagline: "CORE PURPOSE & PHILOSOPHY",
  vision: {
    title: "Vision",
    description:
      "To be a leading business group recognized for integrity, innovation, and impact, shaping industries and inspiring future generations.",
  },
  mission: {
    title: "Mission",
    description:
      "To drive sustainable growth through strategic investments, operational excellence, and value-driven leadership.",
  },
  values: {
    title: "Values",
    items: [
      {
        id: "integrity",
        label: "Integrity",
        text: "We uphold transparency and honesty in everything we do.",
        icon: "integrity",
      },
      {
        id: "innovation",
        label: "Innovation",
        text: "We embrace new ideas to stay ahead in dynamic markets.",
        icon: "innovation",
      },
      {
        id: "excellence",
        label: "Excellence",
        text: "We strive for quality and professionalism across all ventures.",
        icon: "excellence",
      },
      {
        id: "collaboration",
        label: "Collaboration",
        text: "We believe success is built on strong partnerships and shared goals.",
        icon: "collaboration",
      },
      {
        id: "responsibility",
        label: "Responsibility",
        text: "We act with purpose, respecting people, communities, and the environment.",
        icon: "responsibility",
      },
    ],
  },
  quickCall: {
    label: "Quick Call",
    phoneNumber: "+971 4 000 0000",
    href: "tel:+97140000000",
  },
};
