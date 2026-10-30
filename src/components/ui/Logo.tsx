import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export function Logo({
  variant = "dark",
  size = "md",
  className = "",
  href = "/",
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 34, text: "text-xl" },
    lg: { icon: 44, text: "text-2xl" },
  };

  const { icon, text } = sizeMap[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Orange Logo Mark from pic2 */}
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo_orange.png"
          alt="Eatery Cloud Logo Mark"
          width={icon}
          height={icon}
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Name Typography */}
      <div className="flex items-center tracking-tight leading-none">
        <span
          className={`font-black tracking-wider ${text} ${
            variant === "light" ? "text-white" : "text-[#102B46]"
          }`}
        >
          EATERY
        </span>
        <span
          className={`font-normal ml-1.5 tracking-wide ${text} ${
            variant === "light" ? "text-gray-300" : "text-[#102B46]/80"
          }`}
        >
          CLOUD
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D] rounded-md"
        aria-label="Eatery Cloud Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}

