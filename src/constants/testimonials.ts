export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  avatarSrc?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "spice-villa",
    quote:
      "Eatery Cloud has completely transformed the way we manage our operations. It's simple, powerful and the support team is amazing!",
    author: "Virat Maurya",
    role: "Restaurant Owner",
    business: "Spice Villa",
    avatarSrc: "/images/virat_maurya-man-6069944.jpg",
  },
  {
    id: "bistro-delight",
    quote:
      "Switching to Eatery Cloud reduced our kitchen ticket turnaround time by 35%. Multi-outlet reporting gives us full clarity on every branch.",
    author: "Ananya Mehta",
    role: "Operations Director",
    business: "Urban Bistro Co.",
    avatarSrc: "",
  },
  {
    id: "cafe-royale",
    quote:
      "The POS interface is exceptionally intuitive. New staff learn it in minutes, and inventory alerts have practically eliminated wastage.",
    author: "Karan Patel",
    role: "General Manager",
    business: "Café Royale",
    avatarSrc: "/images/06_testimonial_avatar.png",
  },
];

