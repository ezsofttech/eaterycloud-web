export interface ContactAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  demo?: string;
}

export interface ContactInfo {
  phone: string;
  phoneTel: string;
  whatsappNumber?: string;
  whatsappUrl?: string;
  email: string;
  address: ContactAddress;
  social: SocialLinks;
  location: string;
  businessHours?: string;
  mapUrl?: string;
}

export const CONTACT_INFO: ContactInfo = {
  phone: "+91-89623 70822",
  phoneTel: "tel:+918962370822",
  whatsappNumber: "+91-89623 70822",
  whatsappUrl: "https://wa.me/918962370822",
  email: "support@eaterycloud.com",
  businessHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
  mapUrl: "https://maps.google.com/?q=Infinity+Business+Park,+Vyapar+Vihar,+Bilaspur,+Chhattisgarh+495001",
  address: {
    addressLine1: "3rd Floor, Infinity Business Park, Vyapar Vihar",
    addressLine2: "",
    city: "Bilaspur",
    state: "Chhattisgarh",
    country: "India",
    pinCode: "495001",
  },
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://www.youtube.com",
    demo: "",
  },
  location: "Bilaspur, Chhattisgarh, India",
};
