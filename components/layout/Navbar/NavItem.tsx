import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="relative text-sm uppercase tracking-[0.18em] text-white/85 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#7B2339] after:transition-all hover:after:w-full"
    >
      {label}
    </Link>
  );
}