import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import WhatIsWayond from "@/components/sections/WhatIsWayond";
import JoinNow from "@/components/sections/JoinNow";
import WhoCanBenefit from "@/components/sections/WhoCanBenefit";

import Bonuses from "@/components/sections/Bonuses";
import Pricing from "@/components/sections/Pricing";

import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black relative overflow-hidden">
      {/* Shared Glow Effects Layer - positioned to span across sections */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* WhatIsWayond section - top left */}
        <div className="absolute top-[2600px] md:top-[2400px] left-[5%] w-[200px] h-[200px] bg-[#FFCD01] rounded-full blur-[220px] opacity-90 animate-float mix-blend-screen" />

        {/* JoinNow section - top right */}
        <div className="absolute top-[3300px] md:top-[3100px] right-[10%] w-[200px] h-[200px] bg-[#FFCD01] rounded-full blur-[220px] opacity-90 mix-blend-screen" />

        {/* JoinNow section - bottom left */}
        <div className="absolute top-[3600px] md:top-[3400px] left-[10%] w-[200px] h-[200px] bg-[#FFCD01] rounded-full blur-[220px] opacity-90 mix-blend-screen" />

        {/* Pricing section - middle right */}
        <div className="absolute top-[4800px] md:top-[4600px] right-[5%] w-[200px] h-[200px] bg-[#FFCD01] rounded-full blur-[220px] opacity-90 mix-blend-screen" />

        {/* FAQ section - top right */}
        <div className="absolute top-[6600px] md:top-[6400px] right-[5%] w-[200px] h-[200px] bg-[#FFCD01] rounded-full blur-[220px] opacity-90 mix-blend-screen" />

        {/* FAQ section - bottom left */}
        <div className="absolute top-[7000px] md:top-[6800px] left-[5%] w-[200px] h-[200px] bg-[#FFCD01] rounded-full blur-[220px] opacity-80 mix-blend-screen" />
      </div>

      <Header />
      <Hero />
      <Benefits />
      <WhatIsWayond />
      <WhoCanBenefit />
      <JoinNow />
      <Bonuses />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
