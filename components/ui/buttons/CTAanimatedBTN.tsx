"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const CTAanimatedBTN = ({
  url,
  title = "seeMore",
  animationSpaceAr = "7.6",
  animationSpaceEn = "6.67",
}: {
  url: string;
  title?: string;
  animationSpaceAr?: string;
  animationSpaceEn?: string;
}) => {
  const [isRTL, setIsRTL] = useState(false);
  const t = useTranslations("projects");

  useEffect(() => {
    // Add the keyframes to the document if they don't exist
    if (!document.getElementById("cta-shadow-animation")) {
      const style = document.createElement("style");
      style.id = "cta-shadow-animation";
      style.innerHTML = `
        @keyframes rotateShadow {
          0% {
            box-shadow: 0 0 20px 8px rgba(249, 115, 22, 0.4);
          }
          25% {
            box-shadow: 8px 8px 20px 8px rgba(249, 115, 22, 0.4);
          }
          50% {
            box-shadow: 0 10px 20px 8px rgba(249, 115, 22, 0.4);
          }
          75% {
            box-shadow: -8px 8px 20px 8px rgba(249, 115, 22, 0.4);
          }
          100% {
            box-shadow: 0 0 20px 8px rgba(249, 115, 22, 0.4);
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Detect current document direction (ltr/rtl)
    const dir = document?.documentElement?.getAttribute("dir");
    setIsRTL(dir === "rtl");
  }, []);

  const ctaShift = isRTL ? `${animationSpaceAr}vw` : `${animationSpaceEn}vw`;
  return (
    <Link
      href={url}
      className="group flex relative w-fit items-center ps-[clamp(1px,4.33335vw,200px)] hover:ps-[clamp(4px,0.833334vw,100px)] hover:pe-[clamp(1px,4.33335vw,200px)] gap-[clamp(8px,0.41666667vw,80px)] text-white rounded-full px-[clamp(4px,0.833334vw,100px)] py-[clamp(2px,0.41666667vw,80px)] hover:bg-orange-500 shadow-orange-500/50 hover:scale-105 transition-all duration-[1s]"
      style={{
        animation: "rotateShadow 5s infinite linear",
      }}
    >
      <span className="text-[clamp(2px,1.25vw,100px)] font-semibold">
        {t(title)}
      </span>
      <div
        className={
          `absolute top-1/2 transform -translate-y-1/2 start-[1px] md:start-[2px] lg:start-[5px] translate-x-0 duration-[1s] ` +
          (isRTL
            ? `group-hover:-translate-x-[clamp(1px,var(--cta-shift),1500px)] `
            : `group-hover:translate-x-[clamp(1px,var(--cta-shift),1500px)] `) +
          "w-[clamp(13px,3.333335vw,200px)] h-[clamp(5px,2.395835vw,200px)] bg-white rounded-full flex items-center justify-center transition-all"
        }
        style={{ ["--cta-shift" as string]: ctaShift }}
      >
        <svg
          className="w-[clamp(4px,1.25vw,200px)] h-[clamp(4px,1.25vw,200px)]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z"
            fill="#F5811F"
          />
        </svg>
      </div>
    </Link>
  );
};

export default CTAanimatedBTN;
