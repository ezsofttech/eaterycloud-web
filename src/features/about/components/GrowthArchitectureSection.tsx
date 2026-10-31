import React from "react";

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
    <section id="growth" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Clean Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FFDEC0] text-[#FF710D] text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <i className="bi bi-graph-up-arrow text-xs"></i>
            <span>Business Scalability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight">
            Designed for Growing Restaurant Businesses
          </h2>
        </div>

        {/* 3 Scalability Tiers (Point-wise cards, clean Bootstrap icons, NO images, NO emojis) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {SCALE_TIERS.map((tier) => (
            <div
              key={tier.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-[#F0E4D8] hover:border-[#FF710D]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D] text-lg mb-3 shadow-2xs">
                  <i className={`bi ${tier.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mb-1">
                  {tier.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF710D] uppercase tracking-wider mb-4 pb-3 border-b border-[#F0E4D8]">
                  {tier.scope}
                </p>

                <div className="space-y-2.5">
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
      </div>
    </section>
  );
}
