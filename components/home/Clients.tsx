import React from "react";

const Clients = () => {
  return (
    <div id="clients" className="w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      <div className=" mx-[5px] md:mx-[100px] px-4 py-16 relative">
        <div className="z-10 absolute overflow-hidden w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <h2
            style={{ WebkitTextStroke: "1px #ffffff7d" }}
            className="w-full h-full opacity-10 text-center text-nowrap ml-[-33.33%] text-[#ffffff0a] text-[525px] font-bold font-['Inter'] leading-[525px]"
          >
            Our Clients
          </h2>
        </div>


        <div className="max-w-3xl mx-auto text-center mb-12 px-4">
          <h2 className="text-center text-white text-[clamp(40px,5vw,85px)] font-bold font-['Inter'] leading-[1.1]">
            Our Clients
          </h2>
          <p className="text-center text-white text-[clamp(16px,2vw,18px)] font-normal font-['Inter'] mt-4 max-w-[756px] mx-auto">
            Wisdom new and valley answer. Contented it so is discourse
            recommend. Man its upon him call mile. An pasture he himself believe
            ferrars besides cottage.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 w-full relative">
          <div className="w-full z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[290px] bg-[#f3801e] rounded-full blur-[160px]" />

          <div className="grid grid-cols-2 z-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[5/3] relative bg-white rounded-lg shadow-md flex items-center justify-center p-4"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 116 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.1899 9.30008L51.0399 8.90009C49.5499 7.97009 45.3799 6.90008 41.9199 5.83008L44.1199 6.70007C43.6499 6.99007 45.5299 7.79008 45.3899 8.14008C45.5499 7.33008 48.4799 8.89008 50.1899 9.30008Z"
                    fill="#424242"
                  />
                  {/* Add all other path elements here */}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
