export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "/#products",
    children: [
      {
        label: "POS & Billing",
        href: "/#pos-billing",
        icon: "bi-receipt-cutoff",
      },
      {
        label: "Inventory",
        href: "/#inventory",
        icon: "bi-box-seam",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_FEATURE_LINKS = [
  { label: "POS & Billing", href: "/#pos-billing" },
  { label: "Inventory", href: "/#inventory" },
  { label: "Order Management", href: "/#products" },
  { label: "Reports & Analytics", href: "/#products" },
  { label: "Multi-Location Support", href: "/#products" },
];

export { CONTACT_INFO } from "./contact";
