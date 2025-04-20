"use client";
import MovingLineComponent from "./MovingLineComponent";

const ProjectsHero = () => {
  const iemsLineOne = [
    { id: 11, text: "Projects" },
    { id: 12, text: "Entertainment Headlines" },
    { id: 13, text: "Projects" },
    { id: 14, text: "Hero" },
    { id: 15, text: "Breaking News" },
    { id: 16, text: "Market Updates" },
    { id: 17, text: "Technology Trends" },
    { id: 18, text: "Weather Forecast" },
    { id: 19, text: "Sports Results" },
  ];
  return (
    <div className="w-full aspect-1920/1106 relative pb-[clamp(40px,6.67vw,500px)] pt-[calc(clamp(40px,6.67vw,500px)+100px)] overflow-hidden z-[10] -mt-[200px]">
      {/* Background text */}
      <div className="absolute opacity-10 text-white/10 text-[clamp(150px,30vw,482px)] font-semibold font-['Inter'] leading-[0.85em] right-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
        Projects
      </div>

      {/* dark line */}
      <div className="w-full relative mt-16 md:mt-24 lg:mt-32">
        <div className="absolute w-[120%] h-[clamp(0px,5vw,300px)] bg-neutral-800 top-[clamp(0px,20.83336vw,1000px)] -left-[10%] -right-[10%] rotate-[-12.95deg] flex justify-start items-center gap-4 md:gap-8 lg:gap-20 whitespace-nowrap py-[clamp(2px,0.833334vw,50px)] px-[clamp(10px,3.28125vw,200px)]">
          <MovingLineComponent items={iemsLineOne} textColor="text-white" />
        </div>
      </div>

      {/* white line */}
      <div className="w-full relative block">
        <div className="absolute w-[120%] h-[clamp(0px,5vw,300px)] -top-[clamp(0px,18.29164vw,1000px)] flex items-center justify-center start-[10px] rotate-[44.71deg] whitespace-nowrap py-[clamp(2px,0.833334vw,50px)] px-[clamp(10px,3.28125vw,200px)] bg-neutral-50">
          <MovingLineComponent textColor="text-neutral-800" />
        </div>
      </div>

      {/* Main heading */}
      <div className="w-full  md:w-[80%] lg:w-[70%] px-4 md:px-8 lg:px-16 mb-[clamp(20px,11vw,500px)]">
        <h1 className="text-[clamp(10px,5vw,196px)] font-semibold font-['Inter'] leading-[clamp(20px,6.5625vw,200px)]">
          <span className="text-white capitalize">
            A Glimpse Into What <br /> We&apos;ve Created for <br /> Brands{" "}
          </span>
          <span className="text-orange-500 font-extrabold capitalize">
            Like Yours
          </span>
          <span className="text-white">.</span>
        </h1>
      </div>
    </div>
  );
};

export default ProjectsHero;
