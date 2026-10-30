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
    sm: { classNames: "h-7 w-auto", iconSize: 28 },
    md: { classNames: "h-9 w-auto", iconSize: 36 },
    lg: { classNames: "h-11 w-auto", iconSize: 44 },
  };

  const { classNames, iconSize } = sizeMap[size];
  const logoSrc =
    variant === "light"
      ? "/images/eatery-logo-white.png"
      : "/images/eatery-logo.png";

  const content = (
    <div className={`inline-flex items-center select-none ${className}`}>
      {iconOnly ? (
        <div className="relative shrink-0 flex items-center justify-center">
          <Image
            src="/icons/logo_orange.png"
            alt="Eatery Cloud Emblem"
            width={iconSize}
            height={iconSize}
            className="w-auto h-auto object-contain"
            priority
          />
        </div>
      ) : (
        <Image
          src={logoSrc}
          alt="Eatery Cloud Logo"
          width={814}
          height={179}
          className={`${classNames} object-contain shrink-0`}
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

