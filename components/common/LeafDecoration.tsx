import Image from "next/image";

type LeafDecorationProps = {
  variant?: "left" | "right";
  className?: string;
  opacity?: number;
};

export function LeafDecoration({
  variant = "left",
  className = "",
  opacity = 0.1,
}: LeafDecorationProps) {
  const isLeft = variant === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${
        isLeft
          ? "-left-16 top-[10%] sm:-left-10"
          : "-right-16 bottom-[8%] sm:-right-10"
      } ${className}`}
    >
      <Image
        src={
          isLeft
            ? "/images/decor/leaf-1.png"
            : "/images/decor/leaf-2.png"
        }
        alt=""
        width={360}
        height={520}
        style={{ opacity }}
        className={`h-auto w-[180px] sm:w-[240px] lg:w-[310px] ${
          isLeft ? "animate-leaf-left" : "animate-leaf-right"
        }`}
      />
    </div>
  );
}