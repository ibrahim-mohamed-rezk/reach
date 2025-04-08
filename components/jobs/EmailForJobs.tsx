"use client";

const EmailForJobs = () => {
  return (
    <div className="w-full">
      <div className="self-stretch p-4 md:p-6 lg:p-8 bg-neutral-800 rounded-[10.12px] shadow-[0px_1.2652438879013062px_2.5304877758026123px_0px_rgba(0,0,0,0.03)] outline outline-[1.27px] outline-offset-[-1.27px] outline-white/5 inline-flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5">
          <div className="self-stretch justify-start text-white text-xl md:text-2xl font-bold font-['DM_Sans'] leading-7 md:leading-9">📨  Email me for jobs</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5">
          <div className="self-stretch justify-start text-white/80 text-base md:text-lg font-normal font-['DM_Sans'] leading-relaxed">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-3 md:gap-4">
          <input 
            type="email" 
            placeholder="name@mail.com" 
            className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-neutral-800 rounded-[5.06px] shadow-[0px_1.2652438879013062px_2.5304877758026123px_0px_rgba(0,0,0,0.03)] outline outline-[1.27px] outline-offset-[-1.27px] outline-white/20 text-white text-base md:text-xl font-normal font-['DM_Sans'] leading-loose"
          />
          <div className="w-full pl-4 md:pl-5 pr-5 md:pr-6 py-2 md:py-2.5 bg-orange-500 rounded-[5.06px] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base md:text-xl font-medium font-['DM_Sans'] leading-loose">Subcribe</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailForJobs