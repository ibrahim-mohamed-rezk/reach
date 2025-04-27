"use client";

import { useEffect, useRef } from "react";

const About = ({ bg, shpes }: { bg: boolean, shpes: boolean }) => {
  const shadowRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    if (shadowRef.current) {
      const rect = shadowRef.current.parentElement!.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        shadowRef.current.style.display = "block";
        shadowRef.current.style.left = `${x}px`;
        shadowRef.current.style.top = `${y}px`;
      } else {
        shadowRef.current.style.display = "none";
      }
    }
  };

  useEffect(() => {
    const section = shadowRef.current?.parentElement;

    const handleMouseEnter = () => {
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (shadowRef.current) {
        shadowRef.current.style.display = "none";
      }
    };

    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section?.removeEventListener("mouseenter", handleMouseEnter);
      section?.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="about"
      className={` w-full relative `}
      style={{
        background: bg ? "#F3801E" : "",
      }}
    >
      <div className="w-full mx-auto">
        <div className="w-full relative  py-[clamp(20px,2.08333vw,40px)] px-[clamp(15px,1.5625vw,30px)]">
          <div className="w-full bg-black px-[clamp(10px,5.20834vw,100px)] rounded-[clamp(17px,1.875vw,36px)] flex flex-col md:flex-row justify-start items-center gap-[26.67px] pt-[clamp(50px,7.42188vw,150px)] pb-[clamp(50px,4.5052083vw,91.5px)]">
            <div className="w-full md:w-1/2 flex-col justify-start items-start gap-[33.33px] inline-flex">
              <div className="text-[clamp(20px,3.33333vw,64px)] font-['Inter'] leading-tight">
                <span className="text-white font-normal">About </span>
                <span className="text-[#f3801e] font-medium">Reach</span>
              </div>
              <div className="self-stretch">
                <p className="text-white/80 text-[clamp(8px,1.11111vw,21.33px)] font-normal font-['Inter'] leading-relaxed tracking-tight">
                  At <span className="font-bold">Reach</span> Agency, we
                  understand that every business is unique. But when it comes to
                  achieving lasting growth, we believe in a core set of
                  principles that drive success. We&apos;re not just about
                  delivering results - we&apos;re about building genuine
                  partnerships that unlock your full potential.
                  <br />
                  <br />
                  We envision a future where we are the catalyst for
                  transformative business growth. By pioneering cutting-edge
                  programming and marketing strategies, we empower our clients
                  to become industry leaders who leave a lasting legacy of
                  innovation.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-wrap justify-around items-center gap-8">
              {[
                {
                  title: "Innovation",
                  icon: (
                    <svg
                      className="w-[clamp(80px,8.2291666vw,500px)] h-[clamp(80px,8.2291666vw,500px)]"
                      viewBox="0 0 158 159"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="111.917"
                        cy="53.0003"
                        r="26.3333"
                        stroke="#33363F"
                        stroke-width="5.33333"
                      />
                      <circle
                        cx="111.917"
                        cy="53.0003"
                        r="26.3333"
                        stroke="#F3801E"
                        stroke-width="5.33333"
                      />
                      <circle
                        cx="79.0007"
                        cy="112.25"
                        r="19.75"
                        stroke="#33363F"
                        stroke-width="5.33333"
                      />
                      <circle
                        cx="79.0007"
                        cy="112.25"
                        r="19.75"
                        stroke="#F3801E"
                        stroke-width="5.33333"
                      />
                      <circle
                        cx="42.7923"
                        cy="62.8753"
                        r="16.4583"
                        stroke="#33363F"
                        stroke-width="5.33333"
                      />
                      <circle
                        cx="42.7923"
                        cy="62.8753"
                        r="16.4583"
                        stroke="#F3801E"
                        stroke-width="5.33333"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Technology",
                  icon: (
                    <div className="w-[clamp(80px,8.2291666vw,500px)] h-[clamp(80px,8.2291666vw,500px)] relative">
                      <svg
                        className="w-[clamp(80px,8.2291666vw,500px)] h-[clamp(80px,8.2291666vw,500px)]"
                        viewBox="0 0 159 159"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M122.008 55.3498C117.609 47.5392 111.127 41.0578 103.317 36.6587C102.013 37.8888 100.959 39.3811 100.239 41.0513C107.561 45.0585 113.608 51.1052 117.615 58.4272C119.285 57.7077 120.778 56.6538 122.008 55.3498ZM87.7934 36.5429C85.0564 36.0048 82.2274 35.7227 79.3326 35.7227C55.2469 35.7227 35.7215 55.2481 35.7215 79.3338C35.7215 103.42 55.2469 122.945 79.3326 122.945C103.418 122.945 122.944 103.42 122.944 79.3338C122.944 76.4391 122.662 73.6102 122.124 70.8732C123.856 70.1869 125.499 69.3228 127.029 68.3035C127.846 71.8485 128.277 75.5408 128.277 79.3338C128.277 106.365 106.364 128.278 79.3326 128.278C52.3014 128.278 30.3882 106.365 30.3882 79.3338C30.3882 52.3026 52.3014 30.3894 79.3326 30.3894C83.1257 30.3894 86.818 30.8209 90.3632 31.6374C89.3438 33.1678 88.4798 34.8105 87.7934 36.5429Z"
                          fill="#F3801E"
                        />
                        <circle
                          cx="112.39"
                          cy="46.2784"
                          r="13.2222"
                          fill="#F3801E"
                        />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Growth",
                  icon: (
                    <svg
                      className="w-[clamp(80px,8.2291666vw,500px)] h-[clamp(80px,8.2291666vw,500px)]"
                      viewBox="0 0 159 159"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M138.918 39.8337L104.073 74.6786C101.502 77.2496 97.334 77.2496 94.7631 74.6786L84.3233 64.2389C81.7524 61.6679 77.584 61.6679 75.0131 64.2389L46.7516 92.5004"
                        stroke="#33363F"
                        strokeWidth="5.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M138.918 39.8337L104.073 74.6786C101.502 77.2496 97.334 77.2496 94.7631 74.6786L84.3233 64.2389C81.7524 61.6679 77.584 61.6679 75.0131 64.2389L46.7516 92.5004"
                        stroke="#F3801E"
                        strokeWidth="5.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.4182 20.0837V117.517C20.4182 124.891 20.4182 128.578 21.8533 131.395C23.1156 133.872 25.1299 135.886 27.6073 137.149C30.4238 138.584 34.1109 138.584 41.4849 138.584H138.918"
                        stroke="#33363F"
                        strokeWidth="5.33333"
                        strokeLinecap="round"
                      />
                      <path
                        d="M20.4182 20.0837V117.517C20.4182 124.891 20.4182 128.578 21.8533 131.395C23.1156 133.872 25.1299 135.886 27.6073 137.149C30.4238 138.584 34.1109 138.584 41.4849 138.584H138.918"
                        stroke="#F3801E"
                        strokeWidth="5.33333"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-col justify-center items-center gap-2 inline-flex"
                >
                  {item.icon}
                  <div className="text-white text-[clamp(18px,1.25vw,24px)] font-semibold font-['Inter'] leading-normal">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* absolute elements */}
          {/* right icon */}
         {shpes && <div className="absolute bottom-0 right-0  ">
            <svg
              className="w-[clamp(150px,15.625vw,300px)] h-[clamp(70px,6.77083vw,130px)]"
              viewBox="0 0 428 168"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M173.246 4L1075 674.222V1356L92.3191 604.889C-101.905 346.044 65.3435 96.4444 173.246 4Z"
                stroke="#F3801E"
                stroke-opacity="0.25"
                stroke-width="5.33333"
              />
            </svg>
          </div>}
          {/* left icon */}
         {shpes && <div className="absolute bottom-0 left-0 opacity-35 ">
            <svg
              className="w-[clamp(100px,10.4166668vw,200px)px] h-[clamp(140px,11.927084vw,229px)]"
              viewBox="0 0 301 329"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M127.755 4.3335L-773.999 674.556V1356.33L208.682 605.222C402.906 346.378 235.657 96.7779 127.755 4.3335Z"
                stroke="#F3801E"
                stroke-opacity="0.3"
                stroke-width="5.33333"
              />
            </svg>
          </div>}

          {/* Mouse Shadow */}
         {shpes && <div
            ref={shadowRef}
            className="hidden duration-[50ms] sm:flex absolute translate-x-[-50%] translate-y-[-50%] z-0 w-[170px] h-[170px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, #F3801E, #BA9C83)",
              filter: "blur(80px)",
              mixBlendMode: "screen",
            }}
          />}
        </div>
      </div>
    </div>
  );
};

export default About;
