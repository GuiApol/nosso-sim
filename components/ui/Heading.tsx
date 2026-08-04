import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={clsx(
        "text-5xl font-serif text-[#1F1F1F]",
        className
      )}
    >
      {children}
    </h2>
  );
}