"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/libs/hooks/reduxHooks";
import { fetchBlogBySlug } from "@/libs/store/slices/blogsSlice";
import { RootState } from "@/libs/store/store";
import useImageUrl from "@/libs/hooks/useImageUrl";
import { useParams } from "next/navigation";

const BlogPage = () => {
  const { blogs, loading, error } = useAppSelector(
    (state: RootState) => state.blogs
  );
  const dispatch = useAppDispatch();
  const imageUrl = useImageUrl();

  const { blogSlug } = useParams();

  useEffect(() => {
    dispatch(fetchBlogBySlug(blogSlug as string));
  }, [dispatch, blogSlug]);

  const blog = blogs[0];

  if (loading)
    return <div className="text-center text-white py-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!blog)
    return <div className="text-center text-white py-20">Blog not found</div>;

  return (
    <div className="w-full mt-[clamp(10px,1.5625vw,300px)] px-[clamp(10px,2.08333vw,40px)] md:px-[clamp(10px,7.08333vw,400px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      {blog.featured_image && (
        <img
          src={imageUrl(blog.featured_image)}
          alt={blog.title}
          className="w-full rounded-[clamp(10px,1.04166665vw,500px)] object-cover aspect-[1.7/1]"
        />
      )}

      <div className="w-full">
        <h1 className="text-white text-[clamp(20px,2.5vw,500px)] font-bold font-['Plus_Jakarta_Sans']">
          {blog.title}
        </h1>
        <div className="text-[#ffffffb7] text-[clamp(10px,1.041666vw,500px)]">
          {blog.published_at}
        </div>
      </div>

      <div
        className="text-[#d6d3d1] text-[clamp(11px,1.195833vw,500px)] w-full font-normal font-['Inter'] "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogPage;
