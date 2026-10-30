import React from "react";
import Link from "next/link";

interface ScaleTier {
  title: string;
  scope: string;
  icon: string;
  points: string[];
}

const SCALE_TIERS: ScaleTier[] = [
  {
    title: "Single Outlet Operation",
    scope: "Independent Cafés & Dine-In Outlets",
    icon: "bi-shop",
    points: [
      "Rapid deployment with zero complicated server configuration.",
      "Direct connection between front billing counter and kitchen KOT.",
      "Clear daily sales summaries, GST tax breakdown, and inventory tracking.",
      "Focused interface keeping owner and staff fully in sync.",
    ],
  },
  {
    title: "Multi-Branch Chains",
    scope: "Expanding Regional Brands",
    icon: "bi-buildings",
    points: [
      "Centralized menu distribution and price updates across all branches.",
      "Comparative sales analytics and branch performance dashboards.",
      "Standardized order routing and inventory consumption patterns.",
      "Consolidated oversight for regional operations managers.",
    ],
  },
  {
    title: "Franchise Networks",
    scope: "Large-Scale Hospitality Enterprises",
    icon: "bi-diagram-3",
    points: [
      "Strict separation between franchisor governance and franchisee workspaces.",
      "Enforced brand recipe, pricing consistency, and audit trails.",
      "Independent franchisee portal access with tailored operational visibility.",
      "Enterprise-grade foundation designed for continuous brand expansion.",
    ],
  },
];

export function GrowthArchitectureSection() {
  return (
    <section id="growth" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
            BUSINESS SCALABILITY
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-[1.2] mb-4">
            Designed for Growing Restaurant Businesses
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
            <p>
              Every restaurant has its own way of working. Eatery Cloud is built around a structured
              approach that separates administrative responsibilities, franchise management, and
              daily restaurant operations while connecting the devices used throughout the ordering
              process.
            </p>
            <p>
              Whether a business operates a single outlet or manages a franchise network, the
              platform provides a foundation for organizing restaurant workflows in a more
              connected way.
            </p>
          </div>
        </div>

        {/* 3 Scalability Tiers (Point-wise cards, clean Bootstrap icons, NO images, NO emojis) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SCALE_TIERS.map((tier) => (
            <div
              key={tier.title}
              className="p-7 rounded-2xl bg-[#FFFDF9] border border-[#F0E4D8] hover:border-[#FF710D]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D] text-xl mb-4">
                  <i className={`bi ${tier.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mb-1">
                  {tier.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF710D] uppercase tracking-wider mb-5 pb-3 border-b border-[#F0E4D8]">
                  {tier.scope}
                </p>

                <div className="space-y-3">
                  {tier.points.map((pt, idx) => (
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
            </div>
          ))}
        </div>

        {/* Clean bottom navigation actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#F0E4D8]/80">
          <p className="text-xs text-[#64748B]">
            Eatery Cloud connects management, franchise, counter, and kitchen operations into a single ecosystem.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-xs font-bold shadow-xs transition-all active:scale-95"
            >
              <span>Explore Portals</span>
              <i className="bi bi-arrow-right text-xs"></i>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#102B46] border border-[#F0E4D8] text-xs font-bold shadow-2xs transition-all active:scale-95"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
