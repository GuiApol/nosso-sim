"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { NavItem } from "./NavItem";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa história", href: "#historia" },
  { label: "Local", href: "#local" },
  { label: "Confirmação", href: "#confirmacao" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="#inicio"
            className="font-[var(--font-heading)] text-2xl text-white"
          >
            G + R
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        links={links}
      />
    </>
  );
}