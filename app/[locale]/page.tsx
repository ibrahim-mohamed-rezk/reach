import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MoveFast from "@/components/home/MoveFast";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import { getApi } from "@/libs/axios/backend";
import "@/public/css/home.css";

export default async function Home() {
  // feach HomeData from api
  const fetchHomeData = async () => {
    try {
      const response = await getApi("/api/home");
      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  };

  const homeData = await fetchHomeData();

  return (
    <div className="w-full">
      <Hero />
      <div className="sticky w-full top-0 z-[1] max-h-screen hide-scrollbar">
        <MoveFast />
      </div>
      <div className="z-[2] sticky top-0 max-h-screen hide-scrollbar">
        <About bg={true} shpes={true} />
      </div>
      <div className="z-[3] relative bg-black">
        <Services />
        <Clients />
        <Projects projects={homeData?.featured_projects || []} />
        <Blogs blogs={homeData?.featured_posts || []} />
      </div>
      <div className="z-[4] sticky top-0 max-h-screen hide-scrollbar"></div>
    </div>
  );
}
