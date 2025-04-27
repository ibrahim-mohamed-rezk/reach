import {
  aboutHeroFloatingImages,
  aboutHeroFloatingTexts,
} from "@/libs/helpers/aboutPageData";

const FloatingImages = () => {
  return (
    <div className="w-full">
      {aboutHeroFloatingImages.map((image, index) => (
        <div
          key={index}
          className={`absolute rounded-3xl inline-flex justify-start items-start  overflow-hidden showOnHover`}
          style={{
            width: image.width,
            height: image.height,
            left: image.left,
            top: image.top,
          }}
        >
          <img
            className={`"w-full h-full rounded-[clamp(1px,1.302vw,50px)]`}
            src={image.url}
          />
        </div>
      ))}
      {aboutHeroFloatingTexts.map((text, index) => (
        <div
          key={index}
          className="text-neutral-800 showOnHover absolute text-[clamp(5px,1.5625vw,300px)] font-semibold font-['Nunito'] px-2.5 bg-white rounded-tl-[5px] rounded-tr-[5px]"
          style={{
            left: text.left,
            top: text.top,
          }}
        >
          {text.title}
        </div>
      ))}
    </div>
  );
};

export default FloatingImages;