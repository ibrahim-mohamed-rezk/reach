import { Link } from "@/i18n/navigation";
import { FeaturedService } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";

const ServicesCard = ({ service }: { service: FeaturedService }) => {
  const imageUrl = useImageUrl();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className=" w-[40%]">
          <div className="flex items-center gap-[clamp(8px,0.833334vw,30px)] mb-[clamp(8px,1.25vw,50px)]">
            <h3 className="text-[clamp(14px,1.8625vw,100px)] text-white font-normal">
              {service?.title}
            </h3>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: service?.short_description }}
            className="text-white text-[clamp(6px,0.833334vw,30px)] font-semibold mb-[clamp(8px,1.8625vw,50px)]"
          />

          <Link
            href={`contact-us`}
            className="flex w-fit items-center gap-[clamp(8px,0.41666667vw,80px)] bg-orange-500 text-white rounded-full px-[clamp(4px,0.833334vw,100px)] py-[clamp(2px,0.41666667vw,80px)] shadow-lg shadow-orange-500/50"
          >
            <span className=" text-[clamp(8px,1.25vw,100px)] font-semibold">
              See All
            </span>
            <div className="w-[clamp(13px,3.333335vw,200px)] h-[clamp(5px,2.395835vw,200px)] bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-[clamp(4px,1.25vw,200px)] h-[clamp(4px,1.25vw,200px)] "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z"
                  fill="#F5811F"
                />
              </svg>
            </div>
          </Link>
        </div>

        <div className="overflow-hidden w-[57%] rounded-[clamp(6px,0.625vw,20px)] p-[clamp(4px,1.25vw,60px)] relative">
          <img
            className="w-full h-auto aspect-[16/9] rounded-[clamp(6px,0.625vw,20px)] object-cover"
            src={imageUrl(service?.image || "")}
            alt="service thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
