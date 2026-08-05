export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#F8F6F2]" />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[radial-gradient(circle_at_top,#ffffff,transparent_65%)]
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#B8C5A0]/20
          blur-[140px]
          -z-10
        "
      />
    </>
  );
}