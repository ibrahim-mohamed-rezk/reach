const Projects = () => {
  return (
    <section className="w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      <h2 className="self-stretch text-center italic text-white text-[clamp(35px,5vw,200px)] font-semibold font-['Inter']">
        Our Projects
      </h2>

      <div className=" flex w-full flex-col gap-[clamp(20px,3.125vw,80px)]">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex items-center justify-between">
            <div className=" w-[40%] md:w-[37%]">
              <div className="flex items-center gap-[clamp(8px,0.833334vw,30px)] mb-[clamp(8px,1.25vw,50px)]">
                <img
                  className="w-[clamp(30px,3.333335vw,20px)] h-[clamp(30px,3.333335vw,20px)] rounded-md"
                  src="/images/squareLogo.svg"
                  alt="Project logo"
                />

                <h3 className="text-[clamp(14px,1.5625vw,100px)] text-white font-normal">
                  Reach Agency
                </h3>
              </div>

              <p className="text-white text-[clamp(6px,0.833334vw,30px)] font-semibold mb-[clamp(8px,1.66666667vw,50px)]">
                We build fast, responsive, and scalable websites tailored to
                your business goals. Whether you need a corporate site,
                portfolio, or e-commerce platform, we provide comprehensive
                solutions that meet your needs.
              </p>

              <button className="flex items-center bg-orange-500 text-white rounded-full px-4 py-2 shadow-lg shadow-orange-500/50">
                <span className="mr-2 font-semibold">See All</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-orange-500"></div>
                </div>
              </button>
            </div>

            <div className="overflow-hidden w-[57%] rounded-[clamp(6px,0.625vw,20px)] p-[clamp(4px,1.25vw,60px)] relative">
              <img
                className="w-full h-auto aspect-[16/9] rounded-[clamp(6px,0.625vw,20px)] object-cover"
                src="https://placehold.co/496x279"
                alt="Project thumbnail"
              />
              <div className="absolute top-0 left-[clamp(7px,2.6041667vw,50px)] flex space-x-4">
                <div className="relative">
                  <svg
                    className="w-[clamp(50px,5.15625vw,200px)] h-[clamp(40px,8.02084vw,300px)]"
                    viewBox="0 0 99 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5C0 2.23858 2.23858 0 5 0H94C96.7614 0 99 2.23858 99 5V148.763C99 153.24 93.5662 155.461 90.4306 152.264L53.0694 114.176C51.1093 112.178 47.8907 112.178 45.9306 114.176L8.56942 152.264C5.43379 155.461 0 153.24 0 148.763V5Z"
                      fill="black"
                    />
                  </svg>
                  <div className="absolute text-[clamp(5px,0.9975vw,20px)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold w-full">
                    Branding
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
