export interface InventoryModule {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  tagline: string;
  image: string;
  alt: string;
  highlights: {
    icon: string;
    title: string;
    desc: string;
  }[];
  quickStats: {
    label: string;
    value: string;
  }[];
}

export const INVENTORY_MODULES: InventoryModule[] = [
  {
    id: "stock-summary",
    tabLabel: "Stock Summary",
    badge: "Live Balances",
    title: "Real-Time Stock Levels",
    tagline: "Total stock visibility across all central and franchise warehouses.",
    image: "/images/inventory/stock_summary.jpg",
    alt: "Eatery Cloud Inventory Stock Summary Interface showing raw materials, disposables, and live stock statuses across warehouses",
    highlights: [
      {
        icon: "bi-building-check",
        title: "Multi-Warehouse Sync",
        desc: "Monitor raw food materials, disposables, and drink supplies across central kitchens and franchise branches simultaneously.",
      },
      {
        icon: "bi-exclamation-triangle-fill",
        title: "Low Stock & Out-of-Stock Alerts",
        desc: "Color-coded indicators flag depletion (such as packaging disposables, cups, and straws reaching 0) before rush hours.",
      },
      {
        icon: "bi-tags-fill",
        title: "SKU & Category Sorting",
        desc: "Track raw food supplies, packaging disposables (JF Sipper Glasses, pouches, boxes), and consumables across 6,250+ active catalog SKUs.",
      },
      {
        icon: "bi-rulers",
        title: "Standard Base Units",
        desc: "Exact unit conversions in grams (g), kilograms (kg), milliliters (ml), and single pieces (pcs) for seamless recipe accounting.",
      },
    ],
    quickStats: [
      { label: "Active SKUs", value: "6,250+" },
      { label: "Warehouse Sync", value: "Instant" },
      { label: "Stock Visibility", value: "100%" },
    ],
  },
  {
    id: "stock-ledger",
    tabLabel: "Consumption Ledger",
    badge: "POS Auto-Sync",
    title: "Automated Recipe Deductions",
    tagline: "Ingredients deduct automatically the instant a bill is settled at POS.",
    image: "/images/inventory/stock_ledger.jpg",
    alt: "Eatery Cloud Inventory Consumption Ledger Interface showing automatic POS order deductions per gram and piece",
    highlights: [
      {
        icon: "bi-lightning-charge-fill",
        title: "Zero Manual Entry",
        desc: "Bill payment at POS immediately triggers background recipe deductions (e.g. French Fries, Salt, Sipper Glasses, Beverage Syrups).",
      },
      {
        icon: "bi-receipt",
        title: "Bill Reference Link",
        desc: "Every gram, milliliter, and piece deducted is directly tied to its source POS order code (#POS-001563, #POS-001552).",
      },
      {
        icon: "bi-graph-down-arrow",
        title: "Live Running Balances",
        desc: "Audit exactly when stock was consumed with date, time, and precise balance logs across central kitchen and franchise locations.",
      },
      {
        icon: "bi-arrow-left-right",
        title: "In / Out Flow Tracking",
        desc: "Distinct color-coded badges for inward supplier purchases, POS recipe consumption, and inter-branch warehouse transfers.",
      },
    ],
    quickStats: [
      { label: "POS Orders Synced", value: "300K+" },
      { label: "Deduction Delay", value: "< 1s" },
      { label: "Auto Accuracy", value: "99.9%" },
    ],
  },
  {
    id: "stock-adjustment",
    tabLabel: "Stock Adjustments",
    badge: "Audit & Variance",
    title: "Audit & Discrepancy Control",
    tagline: "Easily log physical inventory counts, damage, expiry, and reconciliations.",
    image: "/images/inventory/stock_adjustment.png",
    alt: "Eatery Cloud Inventory Stock Adjustment Interface showing sequence codes and warehouse roles",
    highlights: [
      {
        icon: "bi-shield-check",
        title: "Sequential Audit Codes",
        desc: "Permanent record keeping with trackable adjustment codes (e.g., ADJ-0001 through ADJ-0010) for full transparency.",
      },
      {
        icon: "bi-shop",
        title: "Central vs. Franchise Roles",
        desc: "Distinct segregation of company-owned central warehouses (SunBun) vs franchise store locations (Mishra Franchise Warehouse).",
      },
      {
        icon: "bi-check2-circle",
        title: "Completed Status Tracking",
        desc: "Verify reconciled quantities and items before finalizing stock changes to protect against unauthorized shrinkage.",
      },
      {
        icon: "bi-calendar-event",
        title: "Date-Filtered Audits",
        desc: "Filter adjustments by custom date ranges and specific warehouse locations for streamlined month-end accounting.",
      },
    ],
    quickStats: [
      { label: "Audit Codes", value: "Automated" },
      { label: "Variance Reconciled", value: "1-Click" },
      { label: "Discrepancy Audit", value: "Auditable" },
    ],
  },
];
