import { Navbar } from "@/components/layout/Navbar";
import { Countdown } from "@/sections/Countdown";
import { Event } from "@/sections/Event";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";
import { Gallery } from "@/sections/Gallery";
import { Gifts } from "@/sections/Gifts";
import { Hero } from "@/sections/Hero";
import { RSVP } from "@/sections/RSVP";
import { Story } from "@/sections/Story";
import { WeddingIntro } from "@/components/Intro";

export default function Home() {
  return (
    <main>
      <WeddingIntro />

      <Navbar />
      <Hero />
      <Story />
      <Countdown />
      <Event />
      <Gallery />
      <Gifts />
      <RSVP />
      <FAQ />
      <Footer />
    </main>
  );
}