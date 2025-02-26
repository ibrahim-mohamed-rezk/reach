"use client";

import About from "@/components/home/About";
import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MoveFast from "@/components/home/MoveFast";
import Services from "@/components/home/Services";
import "@/public/css/home.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const aboutContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (element: React.RefObject<HTMLDivElement | null>) => {
      if (element.current) {
        const topOffset = element.current.getBoundingClientRect().top;
        element.current.style.overflow = topOffset <= 0 ? "auto" : "hidden";
      }
    };

    window.addEventListener("scroll", () => handleScroll(aboutContainerRef));
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <div className="sticky top-0 z-[1] max-h-screen hide-scrollbar">
        <MoveFast />
      </div>
      <div
        ref={aboutContainerRef}
        className="z-[2] sticky top-0 max-h-screen hide-scrollbar"
      >
        <About />
      </div>
      <div className="z-[3] relative bg-black">
        <Services />
        <Clients />
      </div>
      <div className="z-[4] sticky top-0 max-h-screen hide-scrollbar"></div>
    </div>
  );
}
