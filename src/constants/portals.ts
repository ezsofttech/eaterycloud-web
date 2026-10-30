export interface PortalItem {
  id: string;
  title: string;
  role: string;
  description: string;
  buttonText: string;
  href: string;
  imageSrc: string;
  iconName: "admin" | "franchise" | "pos";
  badge: string;
}

export const PORTAL_LINKS = {
  admin: "https://superadmin.eaterycloud.com/auth/login",
  franchise: "http://admin.eaterycloud.com/auth/login",
  pos: "https://kiosk.eaterycloud.com/login",
} as const;

export const PORTALS: PortalItem[] = [
  {
    id: "admin",
    title: "Admin Portal",
    role: "System Administrator",
    description: "Manage your business, users, menus, reports and settings.",
    buttonText: "Admin Login →",
    href: PORTAL_LINKS.admin,
    imageSrc: "/images/03_admin_portal_card_image.png",
    iconName: "admin",
    badge: "Super Admin",
  },
  {
    id: "franchise",
    title: "Franchise Portal",
    role: "Franchise & Branch Manager",
    description: "Oversee your branches, performance, outlet details and sales reports.",
    buttonText: "Franchise Login →",
    href: PORTAL_LINKS.franchise,
    imageSrc: "/images/04_franchise_portal_card_image.png",
    iconName: "franchise",
    badge: "Branch Outlets",
  },
  {
    id: "pos",
    title: "POS Login",
    role: "Front-of-House & Cashier",
    description: "Take orders, process payments and manage bills.",
    buttonText: "POS Login →",
    href: PORTAL_LINKS.pos,
    imageSrc: "/images/05_pos_portal_card_image.png",
    iconName: "pos",
    badge: "Live Billing",
  },
];

