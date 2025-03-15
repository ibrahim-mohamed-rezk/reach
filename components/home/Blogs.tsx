import React from "react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]"> 
      <div className="w-full flex flex-col justify-start items-center gap-[clamp(10px,2.08333vw,30px)]">
        <div className="self-stretch text-center italic text-white text-[clamp(35px,5vw,200px)] font-semibold font-['Inter']">
          Latest blog posts
        </div>
        <div className="self-stretch text-center text-white text-[clamp(11px,1.04166665vw,100px)] font-normal font-['Inter']">
          Thoughts on design, software and productivity.
        </div>
      </div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(8px,2.08333vw,40px)]">
        {[1, 2, 3].map((item, index) => (
          <Link href="/blogs/post-slug" key={index}>
            <div className="h-full flex flex-col bg-black rounded-[clamp(10px,1.04166665vw,20px)] shadow-[0px_0px_22.2px_0px_rgba(243,128,30,1.00)] overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="p-2 sm:p-6 flex flex-col gap-[clamp(14px,1.25vw,34px)]">
                <img
                  className="w-full h-auto aspect-[16/9] rounded-[clamp(6px,0.625vw,20px)] object-cover"
                  src="https://placehold.co/496x279"
                  alt="Blog post thumbnail"
                />
                <div className="flex flex-col gap-[clamp(5px,0.41666667vw,20px)]">
                  <div className="text-[#ffffffb7] text-[clamp(7px,0.833334vw,100px)] font-normal font-['Inter']">
                    Oct 19, 2022
                  </div>
                  <h3 className="text-white text-[clamp(10px,1.04166665vw,100px)] font-bold font-['Plus_Jakarta_Sans']">
                    Why organize icon styles with Figma Variants
                  </h3>
                  <p className="text-[#d6d3d1] text-[clamp(8px,0.9375vw,100px)] font-normal font-['Inter']">
                    Analyzing all the pros and cons of this method compared
                    to the classic approach with individual icon components.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
