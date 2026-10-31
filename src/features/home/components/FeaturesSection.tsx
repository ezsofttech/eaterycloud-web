import React from "react";
import Link from "next/link";
import { KEY_FEATURES, FeatureItem } from "@/constants/features";

export function FeaturesSection() {
  const getFeatureIcon = (iconType: FeatureItem["icon"]) => {
    switch (iconType) {
      case "order":
        return <i className="bi bi-cart3 text-[#FF710D] text-lg"></i>;
      case "inventory":
        return <i className="bi bi-box-seam text-[#FF710D] text-lg"></i>;
      case "locations":
        return <i className="bi bi-geo-alt-fill text-[#FF710D] text-lg"></i>;
      case "analytics":
        return <i className="bi bi-bar-chart-line-fill text-[#FF710D] text-lg"></i>;
      case "security":
        return <i className="bi bi-shield-check text-[#FF710D] text-lg"></i>;
      case "support":
        return <i className="bi bi-headset text-[#FF710D] text-lg"></i>;
      default:
        return <i className="bi bi-check2-circle text-[#FF710D] text-lg"></i>;
    }
  };

  return (
    <section id="products" className="py-20 lg:py-24 bg-white scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading and Overview */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
                KEY FEATURES
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-[1.2] mb-5">
                Everything You Need <br />
                for Restaurant Success
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
                Our complete software platform helps you manage every aspect of
                your restaurant business — from front of house to back of
                house, with powerful tools and real-time insights.
              </p>
            </div>

            <div>
              <Link
                href="/login"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#FF710D] text-[#FF710D] hover:bg-[#FF710D] hover:text-white text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
              >
                <span>Explore All Features</span>
                <i className="bi bi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Columns x 2 Rows Grid matching reference image */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
              {KEY_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  id={feature.id === "inventory-ctrl" ? "inventory" : undefined}
                  className={`flex flex-col items-start ${
                    feature.id === "inventory-ctrl" ? "scroll-mt-32" : ""
                  }`}
                >
                  {/* Circular Orange Icon Container */}
                  <div className="w-11 h-11 rounded-full bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center mb-4">
                    {getFeatureIcon(feature.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#102B46] mb-1.5">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {feature.description}
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

