import { Navbar } from "@/components/layout/Navbar";
import { Countdown } from "@/sections/Countdown";
import { Event } from "@/sections/Event";
import { Hero } from "@/sections/Hero";
import { Story } from "@/sections/Story";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Countdown />
      <Event />
    </main>
  );
}