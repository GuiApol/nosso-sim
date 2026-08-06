"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { MobileMenu } from "./MobileMenu";
import { NavItem } from "./NavItem";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "História", href: "#historia" },
  { label: "O grande dia", href: "#local" },
  { label: "Galeria", href: "#galeria" },
  { label: "Presentes", href: "#presentes" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/5 bg-[#f8f6f2]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-12 ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          <Link
            href="#inicio"
            aria-label="Voltar ao início"
            className="relative z-10"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Guilherme e Raul"
              width={190}
              height={90}
              priority
              className={`h-auto w-[125px] transition duration-500 sm:w-[145px] ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                scrolled={scrolled}
              />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#confirmacao"
              className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-[#6d1f32] text-white hover:bg-[#581827]"
                  : "border border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1f1f1f]"
              }`}
            >
              Confirmar presença
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              scrolled
                ? "bg-[#6d1f32]/10 text-[#6d1f32]"
                : "bg-black/15 text-white backdrop-blur-md"
            }`}
          >
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        links={[
          ...links,
          {
            label: "Confirmar presença",
            href: "#confirmacao",
          },
        ]}
      />
    </>
  );
}