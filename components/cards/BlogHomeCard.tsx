import { Link } from "@/i18n/navigation";
import { FeaturedPost } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";

const BlogHomeCard = ({ blog }: { blog: FeaturedPost }) => {
  const imageUrl = useImageUrl();
  return (
    <Link href={`/blogs/${blog?.slug}`}>
      <div className="h-full flex flex-col bg-black rounded-[clamp(10px,1.04166665vw,20px)] shadow-[0px_0px_22.2px_0px_rgba(243,128,30,1.00)] overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="p-2 sm:p-6 flex flex-col gap-[clamp(14px,1.25vw,34px)]">
          <img
            className="w-full h-auto aspect-[1.7/1] rounded-[clamp(6px,0.625vw,20px)] object-cover"
            src={imageUrl(blog?.featured_image)}
            alt="Blog post thumbnail"
          />
          <div className="flex flex-col gap-[clamp(5px,0.41666667vw,20px)]">
            <div className="text-[#ffffffb7] text-[clamp(7px,0.833334vw,100px)] font-normal font-['Inter']">
              {blog?.published_at}
            </div>
            <h3 className="text-white text-[clamp(10px,1.04166665vw,100px)] font-bold font-['Plus_Jakarta_Sans']">
              {blog?.title}
            </h3>
            <p className="text-[#d6d3d1] text-[clamp(8px,0.9375vw,100px)] font-normal font-['Inter']">
              {blog?.short_description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogHomeCard;
