import React from "react";
import Link from "next/link";
import { WHY_CHOOSE_CARDS, ValueCard } from "@/constants/features";

export function WhyChooseUsSection() {
  const getCardIcon = (icon: ValueCard["icon"]) => {
    switch (icon) {
      case "scalable":
        return <i className="bi bi-diagram-3-fill text-[#FF710D] text-xl"></i>;
      case "cost":
        return <i className="bi bi-graph-up-arrow text-[#FF710D] text-xl"></i>;
      case "friendly":
        return <i className="bi bi-people-fill text-[#FF710D] text-xl"></i>;
      case "updates":
        return <i className="bi bi-arrow-repeat text-[#FF710D] text-xl"></i>;
      default:
        return <i className="bi bi-check-circle-fill text-[#FF710D] text-xl"></i>;
    }
  };

  const highlights = [
    {
      num: "1",
      title: "Choose Your Portal",
      desc: "Login as Admin, Franchise or POS based on your role.",
    },
    {
      num: "2",
      title: "Configure Your Business",
      desc: "Set up your restaurant, menu, branches and more.",
    },
    {
      num: "3",
      title: "Start Managing",
      desc: "Take control of your operations and grow your business.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-[#F0E4D8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and 3 highlights */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-[1.2] mb-4">
              Built for Modern Restaurants
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-7">
              We combine technology, flexibility and expert support to help you
              run a smoother, more profitable restaurant.
            </p>

            {/* 3 Numbered Steps matching reference */}
            <div className="space-y-4 mb-7">
              {highlights.map((h) => (
                <div key={h.num} className="flex items-start gap-3.5">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-[#FF710D] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {h.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102B46]">{h.title}</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF710D] hover:bg-[#EA6200] text-white text-xs font-bold shadow-sm transition-all group"
            >
              <span>Explore Portals</span>
              <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          {/* Right Column: 4 Cards in balanced 2x2 Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#F0E4D8] hover:border-[#FF710D]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center mb-4 text-[#FF710D]">
                    {getCardIcon(card.icon)}
                  </div>
                  <h3 className="text-base font-bold text-[#102B46] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
