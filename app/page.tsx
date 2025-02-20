import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import MoveFast from "@/components/home/MoveFast";
import Services from "@/components/home/Services";
import "@/public/css/home.css";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="sticky top-0 z-[1] max-h-screen overflow-x-auto hide-scrollbar">
        <MoveFast />
      </div>
      <div className="z-[2] sticky top-0 max-h-screen overflow-x-auto hide-scrollbar">
        <About />
      </div>
      <div className="z-[3] sticky top-0 max-h-screen overflow-x-auto hide-scrollbar">
        <Services />
      </div>
    </div>
  );
}
