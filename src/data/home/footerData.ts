export interface SocialLink {
  id: string;
  name: string;
  icon: "facebook" | "twitter" | "tripadvisor" | "instagram" | "youtube";
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  contact: {
    title: string;
    phone: string;
    phoneHref: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
  };
  chat: {
    title: string;
    subtitle: string;
    defaultMessage: string;
    whatsappNumber: string;
  };
  socialLinks: SocialLink[];
  navLinks: NavLink[];
  copyright: {
    year: number;
    text: string;
    developerName: string;
    developerHref: string;
  };
}

export const footerData: FooterData = {
  logo: "/images/logo.png",
  logoAlt: "Karumannil Holding",
  contact: {
    title: "CONTACT US",
    phone: "(+971) 55 233 3135",
    phoneHref: "tel:+971552333135",
    email: "info@karumannil.com",
    addressLine1: "Kottakkal, Malappuram, Kerala, India-",
    addressLine2: "676503",
  },
  chat: {
    title: "CHAT US",
    subtitle: "Get the latest updates and offers.",
    defaultMessage: "hello",
    whatsappNumber: "971552333135",
  },
  socialLinks: [
    { id: "facebook", name: "Facebook", icon: "facebook", href: "https://facebook.com" },
    { id: "twitter", name: "Twitter", icon: "twitter", href: "https://twitter.com" },
    { id: "tripadvisor", name: "TripAdvisor", icon: "tripadvisor", href: "https://tripadvisor.com" },
    { id: "instagram", name: "Instagram", icon: "instagram", href: "https://instagram.com" },
    { id: "youtube", name: "YouTube", icon: "youtube", href: "https://youtube.com" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  copyright: {
    year: 2026,
    text: "Copyright ©2026 All Right Reserved. | Developed by",
    developerName: "seabran ai",
    developerHref: "https://seabrantech.com",
  },
};
