import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}