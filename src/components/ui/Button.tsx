import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#FF710D] hover:bg-[#E65E00] text-white shadow-md shadow-[#FF710D]/20 focus-visible:ring-[#FF710D]",
    outline:
      "border-2 border-[#FF710D] text-[#FF710D] hover:bg-[#FF710D] hover:text-white bg-transparent focus-visible:ring-[#FF710D]",
    white:
      "bg-white hover:bg-gray-50 text-[#102B46] border border-[#F0E4D8] shadow-xs focus-visible:ring-[#102B46]",
    ghost:
      "bg-transparent text-[#102B46] hover:bg-black/5 focus-visible:ring-[#102B46]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          <span>{children}</span>
          {withArrow && <i className="bi bi-arrow-right text-xs shrink-0 transition-transform group-hover:translate-x-1"></i>}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {withArrow && <i className="bi bi-arrow-right text-xs shrink-0 transition-transform group-hover:translate-x-1"></i>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {withArrow && <i className="bi bi-arrow-right text-xs shrink-0 transition-transform group-hover:translate-x-1"></i>}
    </button>
  );
}

