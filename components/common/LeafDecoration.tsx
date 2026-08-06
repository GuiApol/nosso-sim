import Image from "next/image";

type LeafDecorationProps = {
  variant?: "left" | "right";
  className?: string;
};

export function LeafDecoration({
  variant = "left",
  className = "",
}: LeafDecorationProps) {
  const isLeft = variant === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 select-none ${
        isLeft
          ? "-left-16 top-[12%] sm:-left-10"
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
        className={`h-auto w-[190px] opacity-[0.12] sm:w-[250px] lg:w-[320px] ${
          isLeft ? "animate-leaf-left" : "animate-leaf-right"
        }`}
      />
    </div>
  );
}