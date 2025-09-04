import { FeaturedService } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";
import CTAanimatedBTN from "../ui/buttons/CTAanimatedBTN";

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

          <CTAanimatedBTN
            animationSpaceEn="10"
            title="RequestService"
            url={"/contact-us"}
          />
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
