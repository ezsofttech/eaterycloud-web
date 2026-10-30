import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  className?: string;
  href?: string;
}

export function Logo({
  variant = "dark",
  size = "md",
  iconOnly = false,
  className = "",
  href = "/",
}: LogoProps) {
  const sizeMap = {
    sm: { height: 28, width: 127, iconSize: 28 },
    md: { height: 36, width: 164, iconSize: 36 },
    lg: { height: 44, width: 200, iconSize: 44 },
  };

  const { height, width, iconSize } = sizeMap[size];
  const logoSrc =
    variant === "light"
      ? "/images/eatery-logo-white.png"
      : "/images/eatery-logo.png";

  const content = (
    <div className={`inline-flex items-center select-none ${className}`}>
      {iconOnly ? (
        <div className="relative shrink-0 flex items-center justify-center">
          <Image
            src="/images/logo_orange.png"
            alt="Eatery Cloud Emblem"
            width={iconSize}
            height={iconSize}
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <Image
          src={logoSrc}
          alt="Eatery Cloud Logo"
          width={width}
          height={height}
          style={{ height: `${height}px`, width: "auto" }}
          className="object-contain shrink-0"
          priority
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D] rounded-md inline-flex items-center"
        aria-label="Eatery Cloud Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}

