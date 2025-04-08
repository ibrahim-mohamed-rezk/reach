import { Link } from "@/i18n/navigation";
import { FeaturedPost } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";

const BlogCard = ({ blog }: { blog: FeaturedPost }) => {
  const imageUrl = useImageUrl();
  return (
    <Link href={`/blogs/${blog?.slug}`}>
      <div className="w-full h-auto relative rounded-xl gap-[clamp(10px,2.08333vw,40px)] flex flex-col">
        <img
          loading="lazy"
          className="w-full h-auto aspect-[16/9] object-cover rounded-xl"
          src={imageUrl(blog?.featured_image) || "https://placehold.co/759x427"}
          alt={blog?.title || "Blog post thumbnail"}
        />
        <h2 className="text-stone-50 w-full line-clamp-2 text-[clamp(10px,2.5vw,48px)] font-medium font-['Inter'] leading-tight">
          {blog?.title ||
            "What Should You Be Charging For Your Freelance Work?"}
        </h2>
        <p className="text-neutral-400 w-full line-clamp-4 text-[clamp(7px,1.04166665vw,20px)] font-normal font-['Inter'] leading-relaxed">
          {blog?.short_description ||
            "Unfortunately, this is too complicated of a question to get a short answer to! There are so many freelance industries and the going rates are different for each..."}
        </p>
        <div className="w-full line-clamp-1 text-neutral-400 text-[clamp(5px,0.9375vw,18px)] font-normal font-['Inter'] leading-snug">
          {"Reach Agency"}, {blog?.published_at}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
