import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#6D1F32] text-white hover:opacity-90",

    secondary:
      "bg-[#7C8465] text-white hover:opacity-90",

    outline:
      "border border-[#6D1F32] text-[#6D1F32] hover:bg-[#6D1F32] hover:text-white",
  };

  return (
    <button
      className={clsx(
        "rounded-full px-8 py-4 transition-all duration-300 font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}