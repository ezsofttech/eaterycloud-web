export interface PosModule {
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

export const POS_MODULES: PosModule[] = [
  {
    id: "order-list",
    tabLabel: "Live Order Management",
    badge: "Real-Time Floor",
    title: "Live Order List & Instant Dues",
    tagline: "Track table occupancy, running tabs, and collect pending dues with a single click.",
    image: "/images/pos/pos_order_list.png",
    alt: "Eatery Cloud POS Order List and Dues Settlement Screen showing live table orders and 1-click collection",
    highlights: [
      {
        icon: "bi-search",
        title: "Multi-Filter Search",
        desc: "Filter live orders by date, order ID (#POS-001563, #POS-001562), table number (T-2, T1), or customer mobile in real time.",
      },
      {
        icon: "bi-cash-coin",
        title: "1-Click Dues Collection",
        desc: "High-contrast action buttons allow cashiers to trigger checkout and settle pending amounts (e.g. ₹399.00 on Table T-2) without sub-menus.",
      },
      {
        icon: "bi-shop",
        title: "Dine-In, Takeaway & Delivery",
        desc: "Clean pill badges segregate order types instantly so runners and servers know exactly where each ticket belongs.",
      },
      {
        icon: "bi-clock-history",
        title: "Live Floor Audit Log",
        desc: "Timestamped logs capture order confirmation, paid status, and kitchen progression down to the exact second.",
      },
    ],
    quickStats: [
      { label: "Floor Latency", value: "< 0.3s" },
      { label: "Dues Visibility", value: "100%" },
      { label: "Checkout Clicks", value: "1 Click" },
    ],
  },
  {
    id: "payment-modes",
    tabLabel: "Multi-Mode Checkout",
    badge: "Flexible Settlement",
    title: "Split, Cash, Credit & UPI Checkout",
    tagline: "Zero checkout friction with instant tender options for every dining preference.",
    image: "/images/pos/pos_payment_modes.jpg",
    alt: "Eatery Cloud POS Payment Modes Selection Interface showing UPI, Cash, Split, and Customer Credit tenders",
    highlights: [
      {
        icon: "bi-qr-code-scan",
        title: "UPI & Online Wallets",
        desc: "Native support for dynamic UPI QR, PhonePe, Google Pay, debit/credit cards, and contactless wallets with instant verification.",
      },
      {
        icon: "bi-cash-stack",
        title: "Instant Cash Settlement",
        desc: "Instant change computation and register drawer triggering to handle rapid rush-hour cash transactions smoothly.",
      },
      {
        icon: "bi-pie-chart-fill",
        title: "Smart Bill Splitting",
        desc: "Effortlessly divide party checks across multiple payment methods: part cash, part UPI, and card without manual calculations.",
      },
      {
        icon: "bi-journal-bookmark-fill",
        title: "Customer Credit & Khata",
        desc: "Maintain guest credit ledgers for corporate accounts, regular diners, and hostel/membership tabs with complete audit histories.",
      },
    ],
    quickStats: [
      { label: "Payment Modes", value: "4 Tenders" },
      { label: "Reconciliation", value: "Automated" },
      { label: "Split Error Rate", value: "0.00%" },
    ],
  },
  {
    id: "touch-terminal",
    tabLabel: "Touchscreen POS",
    badge: "Sub-Second Punching",
    title: "High-Speed Touchscreen POS",
    tagline: "Designed for blistering rush hours with quick-tap categories, table maps, and add-on modifiers.",
    image: "/images/POS_Slider.jpg",
    alt: "Eatery Cloud Touchscreen Restaurant POS Terminal Interface showing food categories, item grid, and cart summary",
    highlights: [
      {
        icon: "bi-grid-3x3-gap-fill",
        title: "Visual Category Grid",
        desc: "High-contrast visual menu tiles (Burgers, Fries, Pastas, Coolers, Desserts) allow cashiers and captains to punch items in under 2 seconds.",
      },
      {
        icon: "bi-diagram-3-fill",
        title: "Interactive Table Map",
        desc: "Color-coded floor layout showing occupied tables, reserved spots, vacant tables, and open checks at a glance.",
      },
      {
        icon: "bi-sliders",
        title: "Modifiers & Special Notes",
        desc: "Quickly attach portion sizes, spice levels, extra dips, dietary tags, and kitchen prep instructions per line item.",
      },
      {
        icon: "bi-wifi-off",
        title: "Offline-First Engine",
        desc: "Keep punching orders and printing bills even if the internet drops. Everything syncs to cloud on reconnect.",
      },
    ],
    quickStats: [
      { label: "Punch Speed", value: "0.8s" },
      { label: "Offline Ready", value: "Yes" },
      { label: "Menu Items", value: "Unlimited" },
    ],
  },
  {
    id: "thermal-invoicing",
    tabLabel: "GST & Thermal Invoicing",
    badge: "Tax Compliant",
    title: "Automated KOT & GST Thermal Invoicing",
    tagline: "Generate branded, tax-compliant receipts and route kitchen order tickets to designated stations.",
    image: "/images/thermal_invoice.png",
    alt: "Eatery Cloud Thermal Print GST Invoice Receipt showing itemized taxes and dynamic UPI payment QR",
    highlights: [
      {
        icon: "bi-printer-fill",
        title: "Instant KOT Routing",
        desc: "Automatically route drink items to Bar/Beverage stations and food items to Kitchen stations the second an order is punched.",
      },
      {
        icon: "bi-file-earmark-ruled",
        title: "GST & FSSAI Formatted",
        desc: "Fully compliant receipts displaying CGST, SGST, FSSAI license numbers, outlet address, and SAC codes (e.g. Order #POS-001552).",
      },
      {
        icon: "bi-qr-code",
        title: "Dynamic UPI On Receipt",
        desc: "Print dynamic payment QR directly on guest checks for contactless tableside payment without a card machine.",
      },
      {
        icon: "bi-usb-symbol",
        title: "ESC/POS Thermal Support",
        desc: "Plug-and-play compatibility with standard 2-inch (58mm) and 3-inch (80mm) USB, LAN, Wi-Fi, and Bluetooth printers.",
      },
    ],
    quickStats: [
      { label: "Print Latency", value: "< 1s" },
      { label: "Printer Types", value: "USB / LAN / BT" },
      { label: "Compliance", value: "100% GST" },
    ],
  },
];
