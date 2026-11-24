export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavbarData {
  brand: {
    name: string;
    subtitle?: string;
    logo?: string;
  };
  navLinks: NavLink[];
  action: {
    label: string;
    href: string;
  };
}

export const navbarData: NavbarData = {
  brand: {
    name: "Karumannil",
    subtitle: "HOLDING • STRATEGIC PARTNERS",
    logo: "/images/logo.png",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  action: {
    label: "CONTACT NOW",
    href: "/contact",
  },
};

export default navbarData;
