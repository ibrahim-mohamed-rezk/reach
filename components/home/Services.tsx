"use client";

import { useState } from "react";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  const [openedService, setOpenedService] = useState("Programming");

  const services = [
    { label: "Programming" },
    { label: "Digital Marketing " },
    { label: "Advertising" },
    { label: "Social Media" },
  ];

  return (
    <div
      id="services"
      className=" bg-black w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-center items-center gap-[clamp(40px,4.1666666vw,150px)]"
    >
      <div className="w-full flex flex-col pt-[clamp(100px,5.15625vw,200px)] justify-center items-center">
        <h2 className="text-center  text-white text-4xl sm:text-5xl md:text-6xl lg:text-[103.53px] font-semibold font-['Inter'] mb-12">
          Our Services
        </h2>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-wrap relative z-20 justify-center items-center gap-[clamp(2px,0.833334vw,100px)] mb-[clamp(10px,1.667vw,100px)] w-full">
            {services.map((item) => {
              if (item.label === openedService) {
                return (
                  <div
                    key={item.label}
                    onClick={() => setOpenedService(item.label)}
                    className="cursor-pointer w-[20%] relative "
                    data-svg-wrapper
                  >
                    <svg
                      className="w-full -mb-[clamp(0px,1.04166665vw,20px)]"
                      viewBox="0 0 274 114"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_137_241)">
                        <mask id="path-1-inside-1_137_241" fill="white">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M254 49C254 32.9837 241.016 20 225 20H49C32.9837 20 20 32.9837 20 49C20 65.0163 32.9837 78 49 78H62.2872C72.6479 78 82.2216 83.5274 87.4019 92.5C88.5566 94.5 91.4434 94.5 92.5981 92.5C97.7784 83.5274 107.352 78 117.713 78H225C241.016 78 254 65.0163 254 49Z"
                          />
                        </mask>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M254 49C254 32.9837 241.016 20 225 20H49C32.9837 20 20 32.9837 20 49C20 65.0163 32.9837 78 49 78H62.2872C72.6479 78 82.2216 83.5274 87.4019 92.5C88.5566 94.5 91.4434 94.5 92.5981 92.5C97.7784 83.5274 107.352 78 117.713 78H225C241.016 78 254 65.0163 254 49Z"
                          fill="black"
                        />
                        <path
                          d="M49 21H225V19H49V21ZM62.2872 77H49V79H62.2872V77ZM86.5359 93C88.0755 95.6667 91.9245 95.6667 93.4641 93L91.732 92C90.9622 93.3333 89.0378 93.3333 88.268 92L86.5359 93ZM225 77H117.713V79H225V77ZM225 79C241.569 79 255 65.5685 255 49H253C253 64.464 240.464 77 225 77V79ZM62.2872 79C72.2906 79 81.5342 84.3368 86.5359 93L88.268 92C82.909 82.718 73.0052 77 62.2872 77V79ZM19 49C19 65.5685 32.4314 79 49 79V77C33.536 77 21 64.464 21 49H19ZM93.4641 93C98.4658 84.3368 107.709 79 117.713 79V77C106.995 77 97.091 82.718 91.732 92L93.4641 93ZM225 21C240.464 21 253 33.536 253 49H255C255 32.4315 241.569 19 225 19V21ZM49 19C32.4315 19 19 32.4315 19 49H21C21 33.536 33.536 21 49 21V19Z"
                          fill="#F5811F"
                          mask="url(#path-1-inside-1_137_241)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_137_241"
                          x="0"
                          y="0"
                          width="274"
                          height="114"
                          filterUnits="userSpaceOnUse"  
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="10" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.960784 0 0 0 0 0.509804 0 0 0 0 0.117647 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_137_241"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_137_241"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <div className="text-white  text-center text-[clamp(5px,1vw,100px)] font-semibold font-['Inter'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20 px-2">
                      {item.label}
                    </div>
                  </div>
                );
              } else
                return (
                  <div
                    key={item.label}
                    onClick={() => setOpenedService(item.label)}
                    className="w-[20%] bg-[#303030] rounded-full border border-[#b0b0b0] justify-center items-center inline-flex cursor-pointer transition-colors hover:bg-[#444444]"
                  >
                    <div className="text-white py-[clamp(5px,1.433334vw,100px)] text-[clamp(5px,1vw,100px)] font-semibold font-['Inter'] text-center">
                      {item.label}
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="w-full">
            <ServiceCard label={openedService} />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
