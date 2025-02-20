import Hero from "@/components/home/Hero";
import MoveFast from "@/components/home/MoveFast";
import "@/public/css/home.css";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <MoveFast />
    </div>
  );
}
