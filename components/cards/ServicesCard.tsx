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
            dangerouslySetInnerHTML={{ __html: service?.description }}
            className="text-white text-[clamp(6px,0.833334vw,30px)] font-semibold mb-[clamp(8px,1.8625vw,50px)]"
          />

          <Link
            href={`services/${service?.slug}`}
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
          <div className="absolute top-0 left-[clamp(7px,2.6041667vw,50px)] flex space-x-4">
            <div className="relative">
              <svg
                className="w-[clamp(50px,5.15625vw,200px)] h-[clamp(40px,8.02084vw,300px)]"
                viewBox="0 0 99 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5C0 2.23858 2.23858 0 5 0H94C96.7614 0 99 2.23858 99 5V148.763C99 153.24 93.5662 155.461 90.4306 152.264L53.0694 114.176C51.1093 112.178 47.8907 112.178 45.9306 114.176L8.56942 152.264C5.43379 155.461 0 153.24 0 148.763V5Z"
                  fill="black"
                />
              </svg>
              <div className="absolute text-[clamp(5px,0.9975vw,20px)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold w-full">
                {service?.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
