"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getInitials, getAvatarColor } from "@/utils/avatar";

export interface AvatarProps {
  src?: string | null;
  name: string;
  size?: "sm" | "md" | "lg" | "xl" | number;
  className?: string;
  border?: boolean;
  variant?: "orange-white" | "white-orange";
}

const SIZE_MAP: Record<
  "sm" | "md" | "lg" | "xl",
  { dimension: number; textClass: string; containerClass: string }
> = {
  sm: { dimension: 32, textClass: "text-xs font-bold", containerClass: "w-8 h-8" },
  md: { dimension: 40, textClass: "text-sm font-bold", containerClass: "w-10 h-10" },
  lg: { dimension: 48, textClass: "text-base font-bold", containerClass: "w-12 h-12" },
  xl: { dimension: 64, textClass: "text-lg font-bold tracking-wider", containerClass: "w-16 h-16" },
};

export function Avatar({
  src,
  name,
  size = "md",
  className = "",
  border = true,
  variant = "orange-white",
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  const isPresetSize = typeof size === "string" && size in SIZE_MAP;
  const preset = isPresetSize ? SIZE_MAP[size as "sm" | "md" | "lg" | "xl"] : null;
  const dimension = preset ? preset.dimension : typeof size === "number" ? size : 48;

  const initials = getInitials(name);
  const colorTheme = getAvatarColor(name);

  const borderClass = border ? "border-2 border-white/80 ring-1 ring-[#FF710D]/20 shadow-xs" : "";
  const sizeStyle = !preset ? { width: dimension, height: dimension } : undefined;
  const containerClass = preset ? preset.containerClass : "";

  const showImage = Boolean(src && src.trim().length > 0 && !hasError);

  const isWhiteOrange = variant === "white-orange";

  return (
    <div
      style={sizeStyle}
      className={`relative rounded-full overflow-hidden shrink-0 select-none flex items-center justify-center ${containerClass} ${borderClass} ${className}`}
      title={name}
      aria-label={name}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={name}
          fill
          sizes={`${dimension}px`}
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center font-bold tracking-wide transition-transform duration-200"
          style={
            isWhiteOrange
              ? { backgroundColor: "#FFFFFF", color: "#FF710D" }
              : {
                  background: `linear-gradient(135deg, ${colorTheme.gradientFrom} 0%, ${colorTheme.gradientTo} 100%)`,
                  color: "#FFFFFF",
                }
          }
        >
          <span className={preset?.textClass || "text-sm font-bold"}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
