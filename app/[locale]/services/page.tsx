import ServicesCard from "@/components/cards/ServicesCard";
import { getApi } from "@/libs/axios/backend";
import { FeaturedService } from "@/libs/helpers/types";

const page = async () => {
  const feachData = async () => {
    try {
      const response = await getApi("api/services", {}, {});
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const services = await feachData();

  console.log(services);
  return (
    <div className="w-full min-h-screen relative bg-black ">
      <div className="w-full bg-black relative px-[5px] lg:px-[clamp(0px,6.25vw,120px)] p-4 md:p-8">
        <div className="flex flex-row justify-center items-center">
          <div className="w-[clamp(100px,36.4583vw,850px)] ">
            <img
              className="w-full h-full"
              src="/images/servicesHero.png"
              alt="Services Hero"
            />
          </div>

          <div className="text-white font-Inter flex leading-tight flex-col text-center md:text-start text-[clamp(10px,4.20834vw,120px)] -ms-[clamp(20px,6.20834vw,200px)]">
            <span className="font-bold">We Offer</span>
            <span className="font-bold">Smart,</span>
            <span className="font-bold">Scalable</span>
            <span className="font-bold">Digital</span>
            <span className="font-bold">Solutions</span>
          </div>

          {/* Small text at bottom right */}
          <div className="text-stsrt font-Inter text-white self-end mb-4 ms-[clamp(0px,6.25vw,200px)] ">
            <p className="text-[clamp(8px,1.19791667vw,50px)]">
              From branding to mobile apps
              <br />- all in one place
            </p>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="w-full py-8 md:py-16 px-[5px] lg:px-[clamp(0px,6.25vw,120px)] overflow-hidden">
        {services.map((sercive: FeaturedService, index: number) => (
          <ServicesCard key={index} service={sercive} />
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full py-16 px-[5px] lg:px-[clamp(0px,6.25vw,120px)] relative ">
        <div className="flex flex-col mt-3 lg:flex-row items-end justify-between z-10 relative mb-10">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold font-['Inter'] leading-tight">
              WHY <br /> CHOOSE <br /> US?
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="text-gray-400 text-2xl md:text-3xl lg:text-5xl list-disc gap-10 flex flex-col items-start justify-start font-normal font-['Inter'] leading-relaxed">
              <li>Custom Solutions</li>
              <li>Technical Expertise</li>
              <li>Marketing + Development under one roof</li>
            </ul>
          </div>
        </div>
        {/* wave shape in the background */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            width="100%"
            viewBox="0 0 1917 829"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1917"
              height="828.037"
              transform="matrix(1 0 0 -1 0 828.038)"
              fill="url(#paint0_linear_778_2247)"
              fill-opacity="0.2"
            />
            <mask
              id="mask0_778_2247"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1917"
              height="829"
            >
              <rect
                width="1917"
                height="828.037"
                transform="matrix(1 0 0 -1 0 828.038)"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_778_2247)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1917 -23.9624H0V169.069C319.5 98.0689 639 62.5688 958.5 62.5688C1278 62.5688 1597.5 98.0689 1917 169.069V-23.9624Z"
                fill="black"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_778_2247"
                x1="0"
                y1="0"
                x2="0"
                y2="828.037"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.01" />
                <stop offset="1" stop-color="#F3801E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default page;
