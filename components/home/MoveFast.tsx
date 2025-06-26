import { useTranslations } from "next-intl";

const MoveFast = () => {
  const t = useTranslations("endUser");
  return (
    <div className="w-full bg-black relative overflow-hidden move-fast-container ">
      <div className="w-full  pt-[clamp(150px,14.84375vw,295px)] pb-[clamp(100px,9.0104166vw,183px)] ">
        <div className="w-full flex items-center z-10 relative justify-center flex-col py-[50px] move-to-top duration-[2s] ease-in-out">
          <div>
            <span className="text-white text-[clamp(20px,4.0104167vw,77px)] font-extralight font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              {t("MoveFastTitle1")}
            </span>{" "}
            <span className="text-[#f3801e] text-[clamp(20px,4.0104167vw,77px)] font-normal font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              {t("MoveFastTitle2")}
            </span>{" "}
            <span className="text-white text-[clamp(20px,4.0104167vw,77px)] font-extralight font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              {t("MoveFastTitle3")}
            </span>{" "}
            <span className="text-[#f3801e] text-[clamp(20px,4.0104167vw,77px)] font-normal font-['Inter'] leading-[clamp(20px,4.0104167vw,77px)]">
              {t("MoveFastTitle4")}
            </span>
          </div>
          <div className="max-w-7xl mx-auto text-center text-white/80 text-[clamp(12px,1.04166665vw,21px)] font-normal mt-[clamp(20px,2.5vw,48px)] font-DmSans leading-loose tracking-tight">
            {t("MoveFastDescription")}
          </div>
          <div className="h-10 justify-center items-center gap-[5.33px] mt-[clamp(20px,2.5vw,48px)] inline-flex">
            <div className="text-center  text-white text-clamp(14px,1.25vw,24px) font-normal hover:text-[#FFDC53] cursor-pointer font-LeagueSpartan leading-10">
              {t("MoveFastCTA")}
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
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.33325 16.6669H25.9999"
                  stroke="#F3801E"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6665 7.3335L25.9998 16.6668L16.6665 26.0002"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6665 7.3335L25.9998 16.6668L16.6665 26.0002"
                  stroke="#F3801E"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* absolute animation */}
      {/* centerd circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className=" w-[clamp(300px,33.59375vw,645px)] h-[clamp(300px,33.59375vw,645px)] rounded-full border-t-4 border-b-4 border-[#f3801e] rotate-180deg duration-[2s] ease-in-out" />
      </div>

      {/* left glow */}
      <div className="absolute top-0 left-0 z-0 -translate-x-full -translate-y-full duration-[2s] ease-in-out animate-glow ">
        <svg
          className="w-[clamp(150px,23.64582vw,600px)] h-[clamp(150px,24.739586vw,600px)] "
          height="475"
          viewBox="0 0 454 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_48_1247)">
            <path
              d="M149 -152.5C149 25.6118 4.61183 170 -173.5 170C-351.612 170 -496 25.6118 -496 -152.5C-496 -330.612 -351.612 -475 -173.5 -475C4.61183 -475 149 -330.612 149 -152.5Z"
              fill="#F3801E"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_48_1247"
              x="-800.3"
              y="-779.3"
              width="1253.6"
              height="1253.6"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="152.15"
                result="effect1_foregroundBlur_48_1247"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* right glow */}
      <div className="absolute bottom-0 right-0 z-0 translate-x-full translate-y-full duration-[2s] ease-in-out animate-glow">
        <svg
          className="w-[clamp(150px,23.64582vw,600px)] h-[clamp(150px,24.739586vw,600px)] "
          height="533"
          viewBox="0 0 499 533"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_22_282)">
            <path
              d="M950 627.5C950 805.612 805.612 950 627.5 950V950C449.388 950 305 805.612 305 627.5V627.5C305 449.388 449.388 305 627.5 305V305C805.612 305 950 449.388 950 627.5V627.5Z"
              fill="#F3801E"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_22_282"
              x="0.700012"
              y="0.700012"
              width="1253.6"
              height="1253.6"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="152.15"
                result="effect1_foregroundBlur_22_282"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default MoveFast;
