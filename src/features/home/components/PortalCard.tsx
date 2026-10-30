import React from "react";
import Image from "next/image";
import { PortalItem } from "@/constants/portals";

interface PortalCardProps {
  portal: PortalItem;
}

export function PortalCard({ portal }: PortalCardProps) {
  const getIcon = (iconName: PortalItem["iconName"]) => {
    switch (iconName) {
      case "admin":
        return <i className="bi bi-laptop text-white text-lg"></i>;
      case "franchise":
        return <i className="bi bi-buildings text-white text-lg"></i>;
      case "pos":
        return <i className="bi bi-credit-card text-white text-lg"></i>;
    }
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#F0E4D8] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Top Image Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        <Image
          src={portal.imageSrc}
          alt={portal.title}
          fill
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Overlapping Orange Icon Badge */}
      <div className="relative -mt-6 mx-auto z-10">
        <div className="w-12 h-12 rounded-full bg-[#FF710D] border-4 border-white flex items-center justify-center shadow-md">
          {getIcon(portal.iconName)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-3 flex flex-col flex-1 text-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#102B46] mb-2">
            {portal.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
            {portal.description}
          </p>
        </div>

        {/* Full-width Orange Button */}
        <div>
          <a
            href={portal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-xs transition-all duration-200 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
          >
            <span>{portal.buttonText}</span>
            <i className="bi bi-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

