"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import { NavItem } from "./NavItem";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-6 left-0 z-50 w-full">

      <Container>

        <motion.nav

          initial={{
            y: -80,
            opacity: 0,
          }}

          animate={{
            y: 0,
            opacity: 1,
          }}

          transition={{
            duration: .8,
          }}

          className="
            glass
            flex
            h-20
            items-center
            justify-between
            rounded-full
            px-8
          "
        >

         <Image
  src="/images/logo/logo.png"
  alt="Logo Guilherme + Raul"
  width={190}
  height={85}
  priority
  className="h-auto w-[190px]"
/>
          <div className="hidden items-center gap-10 lg:flex">

            <NavItem href="#historia">
              História
            </NavItem>

            <NavItem href="#evento">
              Evento
            </NavItem>

            <NavItem href="#galeria">
              Galeria
            </NavItem>

            <NavItem href="#presentes">
              Presentes
            </NavItem>

          </div>

          <Button>

            RSVP

          </Button>

        </motion.nav>

      </Container>

    </header>
  );
}