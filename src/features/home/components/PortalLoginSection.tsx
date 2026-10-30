import React from "react";
import { PORTALS } from "@/constants/portals";
import { PortalCard } from "./PortalCard";

export function PortalLoginSection() {
  return (
    <section id="portals" className="py-20 lg:py-24 bg-[#FFF7EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
            ACCESS YOUR PORTAL
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight mb-3">
            Choose Your Login
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Select your role to continue to your respective dashboard.
          </p>
        </div>

        {/* 3 Portal Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {PORTALS.map((portal) => (
            <PortalCard key={portal.id} portal={portal} />
          ))}
        </div>
      </div>
    </section>
  );
}

