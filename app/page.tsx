import Hero from "@/components/home/Hero";
import "@/public/css/home.css";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full h-[200px]"></div>
    </div>
  );
}
