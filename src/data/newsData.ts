export interface EventGalleryImage {
  id: number;
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface NewsHeroData {
  badge: string;
  title: string;
  image: string;
  subtitle?: string;
}

export interface CommentItem {
  id: number;
  avatar: string;
  date: string;
  author: string;
  text: string;
}

export interface RecommendedItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  link?: string;
  objectPosition?: string;
}

export interface NewsContent {
  topParagraph1: string;
  topParagraph2: string;
  gallery: EventGalleryImage[];
  subheading: string;
  bottomParagraph: string;
  tags: string[];
  commentsCountText: string;
  comments: CommentItem[];
  recommendedHeadline: string;
  recommended: RecommendedItem[];
}

export interface NewsData {
  hero: NewsHeroData;
  content: NewsContent;
}

export const newsData: NewsData = {
  hero: {
    badge: "GREATEST ACHIEVEMENT 2025 BEGINNING",
    title: "India Most Recognized Business Group Globally",
    image: "/images/news.png",
    subtitle:
      "Recognized for visionary leadership, cross-border investments, and impactful contributions to global enterprise.",
  },
  content: {
    topParagraph1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    topParagraph2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [
      {
        id: 1,
        src: "/images/b1.png",
        alt: "Karumannil Group Annual Leadership Summit & Conference",
        objectPosition: "object-top",
      },
      {
        id: 2,
        src: "/images/b3.png",
        alt: "International Business Convention and Delegations Assembly",
        objectPosition: "object-center",
      },
      {
        id: 3,
        src: "/images/b5.png",
        alt: "Global Strategic Partnership & Executive Forum",
        objectPosition: "object-top",
      },
    ],
    subheading: "Lorem ipsum dolor sit amet.",
    bottomParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["ACHIEVEMENT", "BUSINESS", "2025 BIZZ"],
    commentsCountText: "2 Comments",
    comments: [
      {
        id: 1,
        avatar: "/images/pro1.png",
        date: "27 APR 2025",
        author: "Brandon Kelley",
        text:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.",
      },
      {
        id: 2,
        avatar: "/images/pro2.png",
        date: "27 APR 2025",
        author: "Brandon",
        text:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.",
      },
    ],
    recommendedHeadline: "Recommended",
    recommended: [
      {
        id: 1,
        category: "ACHIEVEMENT",
        title: "Tremblant In Canada",
        date: "15TH APRIL, 2025",
        image: "/images/b4.png",
        objectPosition: "object-top",
        link: "#",
      },
      {
        id: 2,
        category: "CAMPING",
        title: "Choosing A Static Caravan",
        date: "15TH APRIL, 2025",
        image: "/images/b2.png",
        objectPosition: "object-top",
        link: "#",
      },
      {
        id: 3,
        category: "EVENT",
        title: "Copper Canyon",
        date: "15TH APRIL, 2025",
        image: "/images/b3.png",
        objectPosition: "object-center",
        link: "#",
      },
    ],
  },
};

export default newsData;
