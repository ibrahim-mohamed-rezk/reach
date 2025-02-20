"use client";

import { useState } from "react";

const Services = () => {
  const [openedService, setOpenedService] = useState(
    "Web Design & Development"
  );

  const services = [
    { label: "Web Design & Development" },
    { label: "Digital Marketing & Advertising" },
    { label: "Data Analysis & Performance Optimization" },
    { label: "Content & Social Media Management" },
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-[103.53px] font-semibold font-['Inter'] mb-12">
          Our Services
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-start items-start gap-4 mb-8">
            {services.map((item) => {
              if (item.label === openedService) {
                return (
                  <div
                    key={item.label}
                    onClick={() => setOpenedService(item.label)}
                    data-svg-wrapper
                  >
                    <svg
                      width="274"
                      height="90"
                      viewBox="0 0 274 114"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_137_241)">
                        <mask id="path-1-inside-1_137_241" fill="white">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M254 49C254 32.9837 241.016 20 225 20H49C32.9837 20 20 32.9837 20 49C20 65.0163 32.9837 78 49 78H62.2872C72.6479 78 82.2216 83.5274 87.4019 92.5C88.5566 94.5 91.4434 94.5 92.5981 92.5C97.7784 83.5274 107.352 78 117.713 78H225C241.016 78 254 65.0163 254 49Z"
                          />
                        </mask>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
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
                  </div>
                );
              } else
                return (
                  <div
                    key={item.label}
                    className="h-[58.18px] px-[26.45px] py-[21.16px] bg-[#303030] rounded-[29.09px] border border-[#b0b0b0] justify-center items-center gap-[6.61px] inline-flex"
                  >
                    <div className="text-white text-[clamp(12px,1vw,16px)] font-semibold font-['Inter']">
                      {item.label}
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="w-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1692 781"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_137_236)">
                <mask id="path-1-inside-1_137_236" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M382.006 97.8065C380.82 96.0059 378.18 96.0059 376.994 97.8065L370.222 108.094C362.453 119.896 349.27 127 335.141 127H139C115.804 127 97 145.804 97 169V642C97 665.196 115.804 684 139 684H1553C1576.2 684 1595 665.196 1595 642V169C1595 145.804 1576.2 127 1553 127H423.859C409.73 127 396.547 119.896 388.778 108.094L382.006 97.8065Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M382.006 97.8065C380.82 96.0059 378.18 96.0059 376.994 97.8065L370.222 108.094C362.453 119.896 349.27 127 335.141 127H139C115.804 127 97 145.804 97 169V642C97 665.196 115.804 684 139 684H1553C1576.2 684 1595 665.196 1595 642V169C1595 145.804 1576.2 127 1553 127H423.859C409.73 127 396.547 119.896 388.778 108.094L382.006 97.8065Z"
                  fill="black"
                />
                <path
                  d="M376.994 97.8065L376.159 97.2566L376.994 97.8065ZM382.006 97.8065L381.171 98.3563L382.006 97.8065ZM370.222 108.094L369.386 107.544L370.222 108.094ZM377.829 98.3563C378.62 97.156 380.38 97.156 381.171 98.3563L382.841 97.2566C381.261 94.8559 377.739 94.8559 376.159 97.2566L377.829 98.3563ZM371.057 108.644L377.829 98.3563L376.159 97.2566L369.386 107.544L371.057 108.644ZM139 128H335.141V126H139V128ZM98 642V169H96V642H98ZM1553 683H139V685H1553V683ZM1594 169V642H1596V169H1594ZM423.859 128H1553V126H423.859V128ZM381.171 98.3563L387.943 108.644L389.614 107.544L382.841 97.2566L381.171 98.3563ZM423.859 126C410.066 126 397.198 119.065 389.614 107.544L387.943 108.644C395.897 120.726 409.393 128 423.859 128V126ZM1596 169C1596 145.252 1576.75 126 1553 126V128C1575.64 128 1594 146.356 1594 169H1596ZM1553 685C1576.75 685 1596 665.748 1596 642H1594C1594 664.643 1575.64 683 1553 683V685ZM96 642C96 665.748 115.252 685 139 685V683C116.356 683 98 664.643 98 642H96ZM139 126C115.252 126 96 145.251 96 169H98C98 146.356 116.356 128 139 128V126ZM369.386 107.544C361.802 119.065 348.934 126 335.141 126V128C349.607 128 363.103 120.726 371.057 108.644L369.386 107.544Z"
                  fill="#F5811F"
                  mask="url(#path-1-inside-1_137_236)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_137_236"
                  x="0.900002"
                  y="0.356056"
                  width="1690.2"
                  height="779.744"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="48.05" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.960784 0 0 0 0 0.509804 0 0 0 0 0.117647 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_137_236"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_137_236"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
