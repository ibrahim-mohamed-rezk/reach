import BlogCard from "@/components/cards/BlogCard";
import Pagination from "@/components/pagination/Pagination";
import { Link } from "@/i18n/navigation";
import { getApi } from "@/libs/axios/backend";
import { FeaturedPost, Meta } from "@/libs/helpers/types";


const Page = async ({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { page?: string };
}) => {
  const { locale } = params;
  const page = parseInt(searchParams?.page || "1");
  let loading = true;

  const getBlogs = async () => {
    try {
      const response = await getApi(
        "/api/posts",
        {
          page,
        },
        {
          "Accept-Language": locale,
        }
      );
      loading = false;
      return { data: response.data, meta: response.meta };
    } catch (error) {
      throw error;
    }
  };

  const { data, meta }: { data: FeaturedPost[]; meta: Meta } = await getBlogs();

  console.log(locale, page);
  return loading ? (
    <div className="w-full flex items-center justify-center text-white">
      Loading...
    </div>
  ) : (
    <div className="w-full">
      {/* banner */}
      <div className="w-full h-auto py-[clamp(40px,4.20834vw,80px)] relative overflow-hidden bg-orange-500">
        <div className="w-full px-[clamp(10px,2.08333vw,40px)] flex flex-col items-center justify-center gap-[clamp(10px,1.125vw,50px)]">
          <div className="text-center text-neutral-950 text-[clamp(18px,3.645835vw,90px)] font-semibold font-['Inter'] leading-[1.2]">
            Welcome to the <br /> Hasten blog
          </div>
          <div className="text-center text-neutral-700 text-[clamp(10px,1.25vw,30px)] font-normal font-['Inter'] leading-relaxed max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
            Invoicing and Business tips for small businesses <br /> and
            freelancers.
          </div>
        </div>
      </div>

      {/* first blog in first page */}
      <div className="w-full mt-[clamp(10px,4.5625vw,80px)] px-[5px] md:px-[clamp(0px,2.08333vw,40px)] pb-[clamp(50px,7.15625vw,150px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,80px)]">
        {meta?.current_page === 1 && (
          <Link
            href={`/blogs/${data && data[0]?.slug}`}
            className="w-full px-[5px] md:px-[clamp(0px,7.2916667vw,140px)] flex items-start justify-center rounded-xl"
          >
            <div className="w-[clamp(80px,39.4791664vw,1800px)] h-auto aspect-[758.81/520.52] gap-[clamp(5px,1.19791667vw,40px)] p-[8px] md:p-[clamp(5px,2.86458vw,100px)] mt-[6%] z-10 relative -me-[10%] bg-white rounded-lg md:rounded-xl flex flex-col items-start justify-center">
              <div className="w-full justify-start text-neutral-950 text-[clamp(6px,3.125vw,90px)] font-semibold font-['Inter'] leading-[1.15]">
                {data && data[0]?.title}
              </div>
              <div className="w-full justify-start line-clamp-4 text-neutral-700 text-[clamp(6px,1.04166665vw,30px)] font-normal font-['Inter'] leading-relaxed">
                {data && data[0]?.short_description}
              </div>
              <div className="w-full md:mt-3 justify-start text-neutral-700 text-[clamp(4px,0.9375vw,24px)] font-normal font-['Inter'] leading-snug">
                {"Reach Agency"}, {data && data[0]?.published_at}
              </div>
            </div>

            <img
              loading="lazy"
              alt="blog"
              className="w-[clamp(100px,53.3854164vw,2000px)] h-auto aspect-[1025.06/553.80] rounded-xl"
              src={
                `https://dashboard.reachksa.com${
                  data && data[0]?.featured_image
                }` || "https://placehold.co/759x427"
              }
            />
          </Link>
        )}

        {/* blog cards */}
        <div className="self-stretch grid grid-cols-2 px-[5px] md:px-[clamp(0px,7.2916667vw,140px)]  gap-[clamp(8px,2.08333vw,60px)]">
          {data?.map((blog: FeaturedPost, index) => {
            if (index === 0 && meta?.current_page === 1) return null;
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>

      {/* pagination */}
      <Pagination meta={meta} baseUrl="/blogs" />
    </div>
  );
};

export default Page;
