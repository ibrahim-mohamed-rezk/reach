const About = () => {
  return (
    <div className=" w-full relative bg-[#F3801E]">
      <div className="container mx-auto">
        <div className="w-full bg-[#F3801E] py-[clamp(20px,2.08333vw,40px)] px-[clamp(15px,1.5625vw,30px)]">
          <div className="w-full bg-black px-[clamp(10px,5.20834vw,100px)] rounded-[clamp(17px,1.875vw,36px)] flex flex-col md:flex-row justify-start items-center gap-[26.67px] pt-[clamp(50px,7.42188vw,150px)] pb-[clamp(50px,4.5052083vw,91.5px)]">
            <div className="w-full md:w-1/2 flex-col justify-start items-start gap-[33.33px] inline-flex">
              <div className="text-[clamp(32px,3.33333vw,64px)] font-['Inter'] leading-tight">
                <span className="text-white font-normal">About </span>
                <span className="text-[#f3801e] font-medium">Reach</span>
              </div>
              <div className="self-stretch">
                <p className="text-white/80 text-[clamp(16px,1.11111vw,21.33px)] font-normal font-['Inter'] leading-relaxed tracking-tight">
                  At <span className="font-bold">Reach</span> Agency, we understand that every business is unique. But when it comes to achieving lasting growth, we believe in a core set of principles that drive success. We&apos;re not just about delivering results - we&apos;re about building genuine partnerships that unlock your full potential. We envision a future where we are the catalyst for transformative business growth. By pioneering cutting-edge programming and marketing strategies, we empower our clients to become industry leaders who leave a lasting legacy of innovation.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-wrap justify-around items-center gap-8">
              {[
                { title: "Innovation", icon: (
                  <div className="w-[158px] h-[158px] relative">
                    <div className="w-[52.67px] h-[52.67px] left-[85.58px] top-[26.33px] absolute rounded-full border-4 border-[#f3801e]" />
                    <div className="w-[39.50px] h-[39.50px] left-[59.25px] top-[92.17px] absolute rounded-full border-4 border-[#f3801e]" />
                    <div className="w-[32.92px] h-[32.92px] left-[26.33px] top-[46.08px] absolute rounded-full border-4 border-[#f3801e]" />
                  </div>
                )},
                { title: "Technology", icon: (
                  <div className="w-[158.67px] h-[158.67px] relative">
                    <div className="left-[30.39px] top-[30.39px] absolute">
                      <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M92.0078 25.3498C87.6087 17.5392 81.1274 11.0578 73.3168 6.65872C72.0128 7.88881 70.9589 9.3811 70.2394 11.0513C77.5614 15.0585 83.6081 21.1052 87.6152 28.4272C89.2855 27.7077 90.7777 26.6538 92.0078 25.3498ZM57.7934 6.54289C55.0564 6.00478 52.2274 5.72274 49.3326 5.72274C25.2469 5.72274 5.72152 25.2481 5.72152 49.3338C5.72152 73.4196 25.2469 92.945 49.3326 92.945C73.4184 92.945 92.9437 73.4196 92.9437 49.3338C92.9437 46.4391 92.6617 43.6102 92.1236 40.8732C93.856 40.1869 95.4987 39.3228 97.0291 38.3035C97.8456 41.8485 98.2771 45.5408 98.2771 49.3338C98.2771 76.3651 76.3639 98.2783 49.3326 98.2783C22.3014 98.2783 0.388184 76.3651 0.388184 49.3338C0.388184 22.3026 22.3014 0.389404 49.3326 0.389404C53.1257 0.389404 56.818 0.820885 60.3632 1.63744C59.3438 3.16781 58.4798 4.81046 57.7934 6.54289Z" fill="#F3801E"/>
                      </svg>
                    </div>
                    <div className="w-[26.44px] h-[26.44px] left-[99.17px] top-[33.06px] absolute bg-[#f3801e] rounded-full" />
                  </div>
                )},
                { title: "Growth", icon: (
                  <svg width="159" height="159" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M138.918 39.8337L104.073 74.6786C101.502 77.2496 97.334 77.2496 94.7631 74.6786L84.3233 64.2389C81.7524 61.6679 77.584 61.6679 75.0131 64.2389L46.7516 92.5004" stroke="#33363F" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M138.918 39.8337L104.073 74.6786C101.502 77.2496 97.334 77.2496 94.7631 74.6786L84.3233 64.2389C81.7524 61.6679 77.584 61.6679 75.0131 64.2389L46.7516 92.5004" stroke="#F3801E" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.4182 20.0837V117.517C20.4182 124.891 20.4182 128.578 21.8533 131.395C23.1156 133.872 25.1299 135.886 27.6073 137.149C30.4238 138.584 34.1109 138.584 41.4849 138.584H138.918" stroke="#33363F" strokeWidth="5.33333" strokeLinecap="round"/>
                    <path d="M20.4182 20.0837V117.517C20.4182 124.891 20.4182 128.578 21.8533 131.395C23.1156 133.872 25.1299 135.886 27.6073 137.149C30.4238 138.584 34.1109 138.584 41.4849 138.584H138.918" stroke="#F3801E" strokeWidth="5.33333" strokeLinecap="round"/>
                  </svg>
                )}
              ].map((item, index) => (
                <div key={index} className="flex-col justify-center items-center gap-2 inline-flex">
                  {item.icon}
                  <div className="text-white text-[clamp(18px,1.25vw,24px)] font-semibold font-['Inter'] leading-normal">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
