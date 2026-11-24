export interface ApartmentDetail {
  id: number;
  title: string;
  price: string;
  priceSub: string;
  size: string;
  bhk: string;
  furnished: string;
  facilities: string;
  frontImage: string;
  overlayGradient: string;
  link: string;
}

export interface DetailSectionData {
  tagline: string;
  headline: string;
  apartments: ApartmentDetail[];
}

export const detailData: DetailSectionData = {
  tagline: "FEATURED PROPERTIES",
  headline: "Karumannil Living",
  apartments: [
    {
      id: 1,
      title: "Karumannil Apartment",
      price: "25 LAKH",
      priceSub: "onwards per flat",
      size: "1800 sqft",
      bhk: "Two Bedroom, Hall, Kitchen, Bathroom, Etc..",
      furnished: "Bedroom, Kitchen, Office Room",
      facilities: "Wifi, Water, Cleaning, etc...",
      frontImage: "/images/z1.png",
      overlayGradient: "bg-gradient-to-t from-[#5a1b1e]/98 via-[#471518]/92 to-[#380e10]/85",
      link: "/contact",
    },
    {
      id: 2,
      title: "Karumannil Apartment",
      price: "25 LAKH",
      priceSub: "onwards per flat",
      size: "1800 sqft",
      bhk: "Two Bedroom, Hall, Kitchen, Bathroom, Etc..",
      furnished: "Bedroom, Kitchen, Office Room",
      facilities: "Wifi, Water, Cleaning, etc...",
      frontImage: "/images/z2.png",
      overlayGradient: "bg-gradient-to-t from-[#5a1b1e]/98 via-[#471518]/92 to-[#380e10]/85",
      link: "/contact",
    },
    {
      id: 3,
      title: "Karumannil Apartment",
      price: "25 LAKH",
      priceSub: "onwards per flat",
      size: "1800 sqft",
      bhk: "Two Bedroom, Hall, Kitchen, Bathroom, Etc..",
      furnished: "Bedroom, Kitchen, Office Room",
      facilities: "Wifi, Water, Cleaning, etc...",
      frontImage: "/images/z3.png",
      overlayGradient: "bg-gradient-to-t from-[#5a1b1e]/98 via-[#471518]/92 to-[#380e10]/85",
      link: "/contact",
    },
    {
      id: 4,
      title: "Karumannil Apartment",
      price: "25 LAKH",
      priceSub: "onwards per flat",
      size: "1800 sqft",
      bhk: "Two Bedroom, Hall, Kitchen, Bathroom, Etc..",
      furnished: "Bedroom, Kitchen, Office Room",
      facilities: "Wifi, Water, Cleaning, etc...",
      frontImage: "/images/z4.png",
      overlayGradient: "bg-gradient-to-t from-[#5a1b1e]/98 via-[#471518]/92 to-[#380e10]/85",
      link: "/contact",
    },
  ],
};
