import { FeaturedProject } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";
import CTAanimatedBTN from "../ui/buttons/CTAanimatedBTN";

const ProjecCard = ({ project }: { project: FeaturedProject }) => {
  const imageUrl = useImageUrl();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className=" w-[40%]">
          <div className="flex items-center gap-[clamp(8px,0.833334vw,30px)] mb-[clamp(8px,1.25vw,50px)]">
            <img
              className="w-[clamp(25px,3.333335vw,200px)] h-[clamp(25px,3.333335vw,200px)] rounded-md"
              src={imageUrl(project?.image || "")}
              alt="Project logo"
            />

            <h3 className="text-[clamp(14px,1.8625vw,100px)] text-white font-normal">
              {project?.title}
            </h3>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: project?.description }}
            className="text-white text-[clamp(6px,0.833334vw,30px)] font-semibold mb-[clamp(8px,1.8625vw,50px)]"
          />

          <CTAanimatedBTN slug={project?.slug || ""} />
        </div>

        <div className="overflow-hidden w-[57%] rounded-[clamp(6px,0.625vw,20px)] p-[clamp(4px,1.25vw,60px)] relative">
          <img
            className="w-full h-auto aspect-[16/9] rounded-[clamp(6px,0.625vw,20px)] object-cover"
            src={imageUrl(project?.gallery[0] || "")}
            alt="Project thumbnail"
          />
          <div className="absolute top-0 left-[clamp(7px,2.6041667vw,50px)] flex space-x-4">
            <div className="relative">
              <svg
                className="w-[clamp(50px,5.15625vw,250px)] h-[clamp(40px,8.02084vw,300px)]"
                viewBox="0 0 99 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5C0 2.23858 2.23858 0 5 0H94C96.7614 0 99 2.23858 99 5V148.763C99 153.24 93.5662 155.461 90.4306 152.264L53.0694 114.176C51.1093 112.178 47.8907 112.178 45.9306 114.176L8.56942 152.264C5.43379 155.461 0 153.24 0 148.763V5Z"
                  fill="black"
                />
              </svg>
              <div className="absolute text-[clamp(5px,0.6975vw,20px)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold w-full">
                {project?.service?.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjecCard;
