"use client";

import { FeaturedPost } from "@/libs/helpers/types";
import BlogHomeCard from "../cards/BlogHomeCard";

const Blogs = ({ blogs }: { blogs: FeaturedPost[] }) => {
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
        {blogs?.map((blog, index) => (
          <BlogHomeCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
