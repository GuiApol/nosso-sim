import { ReactNode } from "react";
import clsx from "clsx";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export function Paragraph({
  children,
  className,
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        "text-gray-600 leading-8",
        className
      )}
    >
      {children}
    </p>
  );
}