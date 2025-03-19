"use client";

import { RootState } from "@/libs/store/store";
import BlogCard from "../cards/BlogCard";
import { useAppSelector, useAppDispatch } from "@/libs/hooks/reduxHooks";
import { fetchBlogs } from "@/libs/store/slices/blogsSlice";
import { useEffect } from "react";

const BlogsPagination = () => {
  const { blogs, loading, error } = useAppSelector(
    (state: RootState) => state.blogs
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="w-full mt-[clamp(10px,1.5625vw,300px)] px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="self-stretch grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(8px,2.08333vw,40px)]">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPagination;
