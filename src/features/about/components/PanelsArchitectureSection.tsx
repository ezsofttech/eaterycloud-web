import React from "react";
import Link from "next/link";

interface PanelFeature {
  title: string;
  role: string;
  badge: string;
  badgeColor: string;
  icon: string;
  loginPath: string;
  summary: string;
  points: string[];
}

const PANELS: PanelFeature[] = [
  {
    title: "Admin Panel",
    role: "Centralized Control",
    badge: "Platform Oversight",
    badgeColor: "bg-[#FFF4EA] text-[#FF710D] border-orange-200",
    icon: "bi-shield-lock-fill",
    loginPath: "/login",
    summary:
      "The Admin Panel provides a dedicated space for overseeing the platform and managing its overall operations. It is designed to help administrators maintain a clear view of the system, organize important information, and manage access according to their responsibilities.",
    points: [
      "Dedicated space for overarching platform administration and system governance.",
      "Maintains a transparent, real-time view of system performance and activity.",
      "Organizes critical restaurant data, menu catalogs, and enterprise settings.",
      "Manages fine-grained user permissions and role-based access control.",
    ],
  },
  {
    title: "Franchise Panel",
    role: "Connected Business Management",
    badge: "Multi-Outlet Network",
    badgeColor: "bg-[#FFF4EA] text-[#FF710D] border-orange-200",
    icon: "bi-diagram-3-fill",
    loginPath: "/login",
    summary:
      "For franchise-based businesses, consistency and coordination matter. The Franchise Panel provides a dedicated workspace for managing franchise-related activities, helping businesses organize their operations while maintaining a connected approach across their restaurant network.",
    points: [
      "Dedicated workspace tailored for franchise executives and regional managers.",
      "Ensures brand standards, recipe specifications, and operational consistency.",
      "Coordinates activities, inventory demands, and business metrics across outlets.",
      "Maintains a unified, connected approach throughout your growing restaurant network.",
    ],
  },
  {
    title: "POS Panel",
    role: "Everyday Restaurant Operations",
    badge: "Frontline POS & Kitchen",
    badgeColor: "bg-[#FFF4EA] text-[#FF710D] border-orange-200",
    icon: "bi-display-fill",
    loginPath: "/login",
    summary:
      "The POS Panel serves as the operational workspace for restaurant staff. It connects order management with compatible restaurant devices, helping teams coordinate the customer ordering experience and the kitchen workflow from a common operational environment.",
    points: [
      "Operational workspace designed for swift counter staff and waitstaff usage.",
      "Seamlessly connects active order management with compatible restaurant devices.",
      "Coordinates customer ordering experience directly with real-time kitchen preparation.",
      "Enables all front-of-house and back-of-house teams to work from a single common environment.",
    ],
  },
];

export function PanelsArchitectureSection() {
  return (
    <section id="panels" className="py-20 lg:py-24 bg-white border-b border-[#F0E4D8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
            SYSTEM ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-[1.2] mb-4">
            Built Around the Way Restaurants Operate
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Every layer of your restaurant business requires focused tools. Eatery Cloud divides
            responsibilities into three dedicated panels so administrators, franchise leaders, and
            store teams excel with clarity.
          </p>
        </div>

        {/* 3 Dedicated Panel Cards (Point-wise, clean typography, NO images) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PANELS.map((panel) => (
            <div
              key={panel.title}
              className="flex flex-col justify-between rounded-2xl bg-[#FFFDF9] border border-[#F0E4D8] p-7 sm:p-8 hover:border-[#FF710D]/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#F0E4D8] flex items-center justify-center text-[#FF710D] text-xl shadow-2xs">
                    <i className={`bi ${panel.icon}`}></i>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${panel.badgeColor}`}
                  >
                    {panel.badge}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="text-xl font-bold text-[#102B46] tracking-tight">
                  {panel.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF710D] uppercase tracking-wider mt-1 mb-4">
                  {panel.role}
                </p>

                {/* Core Summary Paragraph */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 pb-5 border-b border-[#F0E4D8]/80">
                  {panel.summary}
                </p>

                {/* Point-wise Highlights Checklist */}
                <div className="space-y-3 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#102B46]">
                    Key Operational Capabilities:
                  </p>
                  {panel.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="shrink-0 w-4 h-4 rounded-full bg-[#FFF4EA] text-[#FF710D] flex items-center justify-center text-[10px] mt-0.5 font-bold">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <span className="text-xs text-[#475569] leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-[#F0E4D8]/80">
                <Link
                  href={panel.loginPath}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#FFF4EA] border border-[#F0E4D8] hover:border-[#FF710D]/40 text-[#102B46] hover:text-[#FF710D] text-xs font-bold transition-all shadow-2xs group"
                >
                  <span>Access {panel.title}</span>
                  <i className="bi bi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

