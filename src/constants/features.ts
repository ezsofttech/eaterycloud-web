export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "order" | "inventory" | "locations" | "analytics" | "security" | "support";
}

export const KEY_FEATURES: FeatureItem[] = [
  {
    id: "order-mgmt",
    title: "Order Management",
    description: "Handle dine-in, takeaway and delivery orders with ease.",
    icon: "order",
  },
  {
    id: "inventory-ctrl",
    title: "Inventory Control",
    description: "Track stock, reduce waste and plan better.",
    icon: "inventory",
  },
  {
    id: "multi-location",
    title: "Multi-Location Support",
    description: "Manage multiple outlets and franchises seamlessly.",
    icon: "locations",
  },
  {
    id: "analytics-reports",
    title: "Analytics & Reports",
    description: "Get real-time insights to make smarter decisions.",
    icon: "analytics",
  },
  {
    id: "secure-platform",
    title: "Secure Platform",
    description: "Your data and business are always protected.",
    icon: "security",
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "We're here whenever you need us.",
    icon: "support",
  },
];

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: "1",
    title: "Choose Your Portal",
    description: "Login as Admin, Franchise or POS based on your role.",
  },
  {
    stepNumber: "2",
    title: "Configure Your Business",
    description: "Set up your restaurant, menu, branches and more.",
  },
  {
    stepNumber: "3",
    title: "Start Managing",
    description: "Take control of your operations and grow your business.",
  },
];

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  icon: "scalable" | "cost" | "friendly" | "updates";
}

export const WHY_CHOOSE_CARDS: ValueCard[] = [
  {
    id: "scalable",
    title: "Scalable Solution",
    description: "Grows with your business from single store to multi-location.",
    icon: "scalable",
  },
  {
    id: "cost-effective",
    title: "Cost Effective",
    description: "Reduce operational costs and increase profitability.",
    icon: "cost",
  },
  {
    id: "user-friendly",
    title: "User Friendly",
    description: "Simple interface for your team, no technical skills required.",
    icon: "friendly",
  },
  {
    id: "always-updated",
    title: "Always Up to Date",
    description: "Regular updates with new features and improvements.",
    icon: "updates",
  },
];

