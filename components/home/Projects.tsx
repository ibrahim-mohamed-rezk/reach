const Projects = () => {
  return (
    <section className="w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      <h2 className="self-stretch text-center italic text-white text-[clamp(35px,5vw,200px)] font-semibold font-['Inter']">
        Our Projects
      </h2>

      <div className=" flex w-full flex-col gap-[clamp(20px,3.125vw,80px)]">
        {[1, 2, 3].map((item) => (
          <div className="flex items-center justify-between gap-[clamp(10px,4.0104167vw,100px)]">
            <div className="w-[35%]">
              <div className="flex items-center gap-4 mb-6">
                <img
                  className="w-12 h-12 md:w-16 md:h-14 rounded-md"
                  src="https://placehold.co/61x55"
                  alt="Project logo"
                />
                <h3 className="text-2xl md:text-3xl text-white font-normal">
                  Reach Agency
                </h3>
              </div>

              <p className="text-white text-base font-semibold mb-8">
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

            <div className="overflow-hidden w-[55%] rounded-3xl p-6 relative">
              <img
                className="w-full h-auto aspect-[16/9] rounded-[clamp(6px,0.625vw,20px)] object-cover"
                src="https://placehold.co/496x279"
                alt="Project thumbnail"
              />
              <div className="absolute top-0 left-6 flex space-x-4">
                <div className="bg-black rounded py-4 px-2 shadow-md -mt-5">
                  <div className="text-white text-center font-bold">
                    Branding
                  </div>
                </div>
                <div className="bg-black rounded py-4 px-2 shadow-md -mt-5">
                  <div className="text-white text-center font-bold">
                    Programing
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
