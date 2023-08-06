"use client";

import About from "@/components/about";
import CallToAction from "@/components/calltoaction";
import Events from "@/components/events/events";
import Masthead from "@/components/masthead";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio/portfolio";
import Specialties from "@/components/specialties";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <ScrollSpy>
      <Navbar />
      <Masthead />
      <About />
      <Specialties />
      <Events />
      <Portfolio />
      <CallToAction />
      <Contact />
      <Footer />
    </ScrollSpy>
  );
}
