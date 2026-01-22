import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import WhatIsWayond from "@/components/sections/WhatIsWayond";
import WhoCanBenefit from "@/components/sections/WhoCanBenefit";

import Bonuses from "@/components/sections/Bonuses";
import Pricing from "@/components/sections/Pricing";

import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      <Hero />
      <Benefits />
      <WhatIsWayond />
      <WhoCanBenefit />
      <Bonuses />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
