"use client";

import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MoveFast from "@/components/home/MoveFast";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import { getApi } from "@/libs/axios/backend";
import { HomeData } from "@/libs/helpers/types";
import "@/public/css/home.css";
import { useEffect, useRef, useState } from "react";

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

  const [homeData, setHomeData] = useState<HomeData>({});
  // feach HomeData from api
  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await getApi("/api/home");
      const data = await response.data;
      setHomeData(data);
    };
    fetchHomeData();
  }, []);

  console.log(homeData);

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
        <Projects />  
        <Blogs blogs={homeData?.featured_posts || []} />
      </div>
      <div className="z-[4] sticky top-0 max-h-screen hide-scrollbar"></div>
    </div>
  );
}
