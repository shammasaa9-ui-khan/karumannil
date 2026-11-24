export interface ContactInfoItem {
  id: string;
  icon: "address" | "phone" | "email";
  label: string;
  value: string;
  href?: string;
}

export interface ContactMapData {
  title: string;
  locationName: string;
  embedUrl: string;
  externalUrl: string;
}

export interface ContactData {
  tagline: string;
  headlineBlack: string;
  headlineRed: string;
  description: string;
  contactInfo: ContactInfoItem[];
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButtonText: string;
    quickCallButtonText: string;
    quickCallNumber: string;
  };
  map: ContactMapData;
}

export const contactData: ContactData = {
  tagline: "GET IN TOUCH",
  headlineBlack: "Contact",
  headlineRed: "Info",
  description:
    "Have a question, project, or collaboration in mind?\nWe'd love to hear from you.",
  contactInfo: [
    {
      id: "address",
      icon: "address",
      label: "ADDRESS",
      value: "Kottakkal, Malappuram, Kerala, India – 676503",
    },
    {
      id: "phone",
      icon: "phone",
      label: "PHONE",
      value: "(+97) 55 233 3135",
      href: "tel:+971552333135",
    },
    {
      id: "email",
      icon: "email",
      label: "EMAIL",
      value: "info@yourmail.com",
      href: "mailto:info@yourmail.com",
    },
  ],
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    submitButtonText: "SUBMIT NOW",
    quickCallButtonText: "QUICK CALL",
    quickCallNumber: "+971552333135",
  },
  map: {
    title: "Our Location — Kottakkal, Kerala",
    locationName: "Kottakkal, Malappuram, Kerala, India",
    embedUrl:
      "https://maps.google.com/maps?q=Kottakkal%2C%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed",
    externalUrl:
      "https://www.google.com/maps/place/Kottakkal,+Keralam/@11.0015913,75.9989975,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba7b4a66b9e1243:0x57ad4731fa4b1279!8m2!3d10.9989697!4d75.9917634!16zL20vMDhrZzc0",
  },
};

export default contactData;
