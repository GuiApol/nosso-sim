"use client";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export function NavItem({
  href,
  children,
}: NavItemProps) {
  return (
    <a
      href={href}
      className="
        relative
        text-sm
        font-medium
        text-neutral-700
        transition-all
        duration-300
        hover:text-[#6D1F32]

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-[#6D1F32]
        after:transition-all
        after:duration-300

        hover:after:w-full
      "
    >
      {children}
    </a>
  );
}