export interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  link: string;
  objectPosition?: string;
}

export interface BlogData {
  tagline: string;
  headline: string;
  posts: BlogPost[];
}

export const blogData: BlogData = {
  tagline: "TRENDING NEWS",
  headline: "Our Blog & Event",
  posts: [
    {
      id: 1,
      category: "ACHIEVEMENT",
      title: "2025 In UAE Event",
      date: "15TH APRIL, 2025",
      image: "/images/b4.png",
      objectPosition: "object-top",
      link: "#",
    },
    {
      id: 2,
      category: "ACHIEVEMENT",
      title: "2025 In UAE Event",
      date: "15TH APRIL, 2025",
      image: "/images/b2.png",
      objectPosition: "object-top",
      link: "#",
    },
    {
      id: 3,
      category: "ACHIEVEMENT",
      title: "2025 In UAE Event",
      date: "15TH APRIL, 2025",
      image: "/images/b3.png",
      objectPosition: "object-center",
      link: "#",
    },
    {
      id: 4,
      category: "ACHIEVEMENT",
      title: "2025 In UAE Event",
      date: "15TH APRIL, 2025",
      image: "/images/b5.png",
      objectPosition: "object-top",
      link: "#",
    },
    {
      id: 5,
      category: "ACHIEVEMENT",
      title: "2025 In UAE Event",
      date: "15TH APRIL, 2025",
      image: "/images/b1.png",
      objectPosition: "object-top",
      link: "#",
    },
  ],
};
