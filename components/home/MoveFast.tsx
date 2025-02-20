const MoveFast = () => {
  return (
    <div className="w-full bg-black relative overflow-hidden move-fast-container">
      <div className="container mx-auto pt-[clamp(150px,14.84375vw,295px)] pb-[clamp(100px,9.0104166vw,183px)] ">
        <div className="w-full flex items-center justify-center flex-col py-[50px] move-to-top duration-[2s] ease-in-out">
          <div>
            <span className="text-white text-[clamp(20px,4.0104167vw,77px)] font-extralight font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              Move
            </span>
            <span className="text-[#f3801e] text-[clamp(20px,4.0104167vw,77px)] font-normal font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              fast.
            </span>
            <span className="text-white text-[clamp(20px,4.0104167vw,77px)] font-extralight font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              Stay
            </span>
            <span className="text-[#f3801e] text-[clamp(20px,4.0104167vw,77px)] font-normal font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              flexible
            </span>
          </div>
          <div className="max-w-7xl mx-auto text-center text-white/80 text-clamp(12px,1.04166665vw,20px) font-normal mt-[clamp(20px,2.5vw,48px)] font-DmSans leading-loose tracking-tight">
            Speed fuels innovation. Never lag behind of technology. Stay ahead
            of your time. Stay flexible.
          </div>
          <div className="h-10 justify-center items-center gap-[5.33px] mt-[clamp(20px,2.5vw,48px)] inline-flex">
            <div className="text-center text-white text-clamp(14px,1.25vw,24px) font-normal  font-LeagueSpartan leading-10">
              View Marketing Strategy
            </div>
            <div data-svg-wrapper className="relative">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33325 16.6669H25.9999"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.33325 16.6669H25.9999"
                  stroke="#F3801E"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6665 7.3335L25.9998 16.6668L16.6665 26.0002"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6665 7.3335L25.9998 16.6668L16.6665 26.0002"
                  stroke="#F3801E"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* absolute animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[clamp(300px,33.59375vw,645px)] h-[clamp(300px,33.59375vw,645px)] rounded-full border-t-4 border-b-4 border-[#f3801e] rotate-180deg duration-[2s] ease-in-out" />
      </div>
    </div>
  );
};

export default MoveFast;
