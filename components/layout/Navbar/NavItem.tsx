import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  scrolled: boolean;
};

export function NavItem({
  href,
  label,
  scrolled,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`relative py-2 text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
        scrolled
          ? "text-[#3b3b3b] hover:text-[#6d1f32] after:bg-[#6d1f32]"
          : "text-white/85 hover:text-white after:bg-white"
      }`}
    >
      {label}
    </Link>
  );
}