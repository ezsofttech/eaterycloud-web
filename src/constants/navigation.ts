export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_FEATURE_LINKS = [
  { label: "Order Management", href: "/#products" },
  { label: "Inventory Control", href: "/#products" },
  { label: "Reports & Analytics", href: "/#products" },
  { label: "Multi-Location Support", href: "/#products" },
];

export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "support@eaterycloud.com",
  location: "India",
};
