import { getTranslations } from "next-intl/server";
import ContactForm from "./components/ContactForm";

const page = async () => {
  const t = await getTranslations("contactPage");
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full relative bg-orange-500/10 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-12 md:gap-24">
            {/* Content text */}
            <div className="w-full flex flex-col justify-start items-start gap-6 md:gap-9">
              <div className="w-full flex flex-col justify-start items-start gap-3.5">
                <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold font-['Satoshi_Variable'] capitalize">
                  {t("title")}
                </h1>
                <p className="text-neutral-200 text-base md:text-xl font-normal font-['Satoshi_Variable']">
                  {t("subtitleLine1")}
                  <br className="hidden md:block" />
                  {t("subtitleLine2")}
                </p>
              </div>
              <a
                href="mailto:info@reachksa.com"
                target="_blank"
                className="text-neutral-200 text-base md:text-xl font-normal font-['Satoshi_Variable']"
              >
                info@reachksa.com
              </a>
              <div className="text-neutral-200 text-base md:text-xl font-normal font-['Satoshi_Variable']">
                +201551039398
              </div>
              <a
                href="https://wa.me/201551039398"
                target="_blank"
                className="text-white text-base md:text-xl font-bold font-['Satoshi_Variable'] underline capitalize"
              >
                {t("customerSupport")}
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/Reach.agency12/"
                target="_blank"
                className="bg-[#111111] w-[66px] h-[66px] flex items-center justify-center rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"
              >
                <svg
                  width="13"
                  height="26"
                  viewBox="0 0 13 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49333 14.82H11.5267L12.74 9.96663H8.49333V7.53997C8.49333 6.98992 8.5176 6.59357 8.56613 6.3509C8.6632 5.96264 8.87351 5.66335 9.19707 5.45303C9.58533 5.22655 10.1596 5.1133 10.92 5.1133H12.74V1.0365C12.465 1.00415 12.0282 0.97179 11.4296 0.939436C10.6854 0.890902 9.96551 0.866634 9.26987 0.866634C8.1536 0.866634 7.1708 1.08908 6.32147 1.53397C5.47213 1.97886 4.82098 2.61383 4.368 3.4389C3.88267 4.32868 3.64 5.37214 3.64 6.5693V9.96663H0V14.82H3.64V25.1333H8.49333V14.82Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/reach_agency.eg?fbclid=IwY2xjawIfP_5leHRuA2FlbQIxMAABHQGgNFCr2_zH0WQThH-2Am4f-_rEvcg4Xs6yoIvyi1aHuQoWq5SNj3JiMA_aem_QHBn8jT-MkKjwI6bCrxvxQ"
                target="_blank"
                className="bg-[#111111] w-[66px] h-[66px] flex items-center justify-center rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"
              >
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3709 0.866634C14.6004 0.866634 15.4902 0.874723 16.0403 0.890902L17.1323 0.939434C18.2647 0.987968 19.2435 1.17401 20.0685 1.49757C20.8936 1.82112 21.6135 2.29028 22.2283 2.90504C22.843 3.51979 23.3122 4.2397 23.6357 5.06477C23.9593 5.88984 24.1453 6.86859 24.1939 8.00103L24.2424 9.09303C24.2586 9.65926 24.2667 10.549 24.2667 11.7624V14.2376C24.2667 15.4671 24.2586 16.3569 24.2424 16.9069L24.1939 17.9989C24.1453 19.1313 23.9593 20.1101 23.6357 20.9352C23.3122 21.7602 22.843 22.4801 22.2283 23.0949C21.6135 23.7097 20.8936 24.1788 20.0685 24.5024C19.2435 24.8259 18.2647 25.012 17.1323 25.0605L16.0403 25.109C15.474 25.1252 14.5843 25.1333 13.3709 25.1333H10.8957C9.66622 25.1333 8.77644 25.1252 8.2264 25.109L7.1344 25.0605C6.00196 25.012 5.0232 24.8259 4.19813 24.5024C3.37307 24.1788 2.65316 23.7097 2.0384 23.0949C1.42364 22.4801 0.954489 21.7602 0.630933 20.9352C0.307378 20.1101 0.121333 19.1313 0.0728 17.9989L0.0242667 16.9069C0.00808889 16.3407 0 15.4509 0 14.2376V11.7624C0 10.5329 0.00808889 9.64308 0.0242667 9.09303L0.0728 8.00103C0.121333 6.86859 0.307378 5.88984 0.630933 5.06477C0.954489 4.2397 1.42364 3.51979 2.0384 2.90504C2.65316 2.29028 3.37307 1.82112 4.19813 1.49757C5.0232 1.17401 6.00196 0.987968 7.1344 0.939434L8.2264 0.890902C8.79262 0.874723 9.6824 0.866634 10.8957 0.866634H13.3709ZM12.1333 6.9333C11.0332 6.9333 10.0181 7.20428 9.08787 7.74623C8.15764 8.28819 7.42156 9.02428 6.8796 9.9545C6.33764 10.8847 6.06667 11.8999 6.06667 13C6.06667 14.1001 6.33764 15.1152 6.8796 16.0454C7.42156 16.9757 8.15764 17.7117 9.08787 18.2537C10.0181 18.7957 11.0332 19.0666 12.1333 19.0666C13.2334 19.0666 14.2486 18.7957 15.1788 18.2537C16.109 17.7117 16.8451 16.9757 17.3871 16.0454C17.929 15.1152 18.2 14.1001 18.2 13C18.2 11.8999 17.929 10.8847 17.3871 9.9545C16.8451 9.02428 16.109 8.28819 15.1788 7.74623C14.2486 7.20428 13.2334 6.9333 12.1333 6.9333ZM12.1333 9.35997C12.7966 9.35997 13.4073 9.52175 13.9655 9.8453C14.5236 10.1689 14.9644 10.6097 15.288 11.1678C15.6116 11.726 15.7733 12.3367 15.7733 13C15.7733 13.6633 15.6116 14.274 15.288 14.8321C14.9644 15.3902 14.5236 15.8311 13.9655 16.1546C13.4073 16.4782 12.7966 16.64 12.1333 16.64C11.47 16.64 10.8593 16.4782 10.3012 16.1546C9.74307 15.8311 9.30222 15.3902 8.97867 14.8321C8.65511 14.274 8.49333 13.6633 8.49333 13C8.49333 12.3367 8.65511 11.726 8.97867 11.1678C9.30222 10.6097 9.74307 10.1689 10.3012 9.8453C10.8593 9.52175 11.47 9.35997 12.1333 9.35997ZM18.4912 5.1133C18.0868 5.1133 17.7349 5.26295 17.4356 5.56223C17.1363 5.86152 16.9867 6.21743 16.9867 6.62997C16.9867 7.0425 17.1363 7.39841 17.4356 7.6977C17.7349 7.99699 18.0908 8.14664 18.5033 8.14664C18.9159 8.14664 19.2718 7.99699 19.5711 7.6977C19.8704 7.39841 20.02 7.0425 20.02 6.62997C20.02 6.21743 19.8704 5.86152 19.5711 5.56223C19.2718 5.26295 18.9118 5.1133 18.4912 5.1133Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/reach-agency-company/posts/?feedView=all"
                target="_blank"
                className="bg-[#111111] w-[66px] h-[66px] flex items-center justify-center rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:info@reachksa.com"
                target="_blank"
                className="bg-[#111111] w-[66px] h-[66px] flex items-center justify-center rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={"26"}
                  height={"26"}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/+201551039398"
                target="_blank"
                className="bg-[#111111] w-[66px] h-[66px] flex items-center justify-center rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0005 0.866634C14.6507 0.866634 16.228 1.1821 17.7325 1.81303C19.1723 2.42779 20.4544 3.29735 21.5788 4.4217C22.7031 5.54606 23.5727 6.82815 24.1875 8.26797C24.8184 9.7725 25.1339 11.3498 25.1339 13C25.1339 14.6501 24.8184 16.2274 24.1875 17.732C23.5727 19.1718 22.7031 20.4539 21.5788 21.5782C20.4544 22.7026 19.1723 23.5721 17.7325 24.1869C16.228 24.8178 14.6507 25.1333 13.0005 25.1333C11.9004 25.1333 10.8367 24.9917 9.80945 24.7086C8.78217 24.4255 7.80745 24.017 6.88532 23.4832L0.867188 25.1333L2.51732 19.1152C1.98345 18.193 1.57497 17.2183 1.29185 16.191C1.00874 15.1637 0.867188 14.1001 0.867188 13C0.867188 11.3498 1.18265 9.7725 1.81359 8.26797C2.42834 6.82815 3.2979 5.54606 4.42225 4.4217C5.54661 3.29735 6.8287 2.42779 8.26852 1.81303C9.77305 1.1821 11.3504 0.866634 13.0005 0.866634ZM8.63252 7.2973C8.45457 7.31348 8.30088 7.35392 8.17145 7.41863C8.07439 7.46717 7.95305 7.56424 7.80745 7.70984C7.72656 7.79072 7.63759 7.89588 7.54052 8.0253L7.49199 8.07384C7.03901 8.67241 6.81252 9.35188 6.81252 10.1122C6.81252 10.6623 6.95003 11.2366 7.22505 11.8352C7.74274 12.9838 8.53545 14.092 9.60319 15.1597L9.72452 15.281C10.0157 15.5722 10.2341 15.7825 10.3797 15.912C11.7387 17.1091 13.2917 17.9342 15.0389 18.3872L15.7427 18.5085C15.8721 18.5085 16.0662 18.5004 16.3251 18.4842H16.4221C16.778 18.4681 17.1097 18.3791 17.4171 18.2173C17.595 18.1202 17.7568 18.0313 17.9024 17.9504L18.048 17.829C18.1936 17.7158 18.323 17.6025 18.4363 17.4893C18.5495 17.3761 18.6385 17.2547 18.7032 17.1253C18.8003 16.8988 18.8731 16.5995 18.9216 16.2274C18.9378 16.0818 18.9459 15.9362 18.9459 15.7906V15.7664C18.9459 15.7017 18.9216 15.641 18.8731 15.5844C18.8245 15.5277 18.7679 15.4833 18.7032 15.4509L16.3008 14.3832C16.2361 14.3508 16.1633 14.3346 16.0824 14.3346C15.8883 14.3185 15.7346 14.367 15.6213 14.4802C15.6051 14.4802 15.2897 14.8604 14.6749 15.6208C14.5617 15.734 14.4403 15.7906 14.3109 15.7906L14.2139 15.7664C14.1491 15.7502 14.0763 15.7259 13.9955 15.6936L13.68 15.5722C12.9843 15.2649 12.3453 14.8523 11.7629 14.3346L11.3261 13.9221C10.8246 13.4368 10.4121 12.9272 10.0885 12.3933L10.0157 12.272C9.95101 12.1587 9.91057 12.0697 9.89439 12.005C9.87821 11.9403 9.8863 11.8675 9.91865 11.7866L9.96719 11.6896L10.404 11.2042C10.5334 11.0425 10.6386 10.8888 10.7195 10.7432C10.8812 10.5005 10.9217 10.2821 10.8408 10.088C10.5011 9.2629 10.1451 8.43783 9.77305 7.61277C9.7407 7.54806 9.68003 7.48739 9.59105 7.43077C9.50208 7.37415 9.40905 7.33775 9.31199 7.32157L9.11785 7.2973C8.95608 7.2973 8.7943 7.2973 8.63252 7.2973Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* contact Form */}
          <ContactForm />
        </div>
      </div>

      <div className="w-full py-[clamp(30px,3.333335vw,200px)] md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 md:px-8 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <a
              target="_blank"
              href="https://maps.app.goo.gl/rLS51fveCVWVtw8G9?g_st=aw"
              className="w-full lg:w-3/5 h-[300px] md:h-[500px] lg:h-[756px] bg-black/20 rounded-[30px] relative"
            >
              <img src="/images/map.png" alt="map" className="w-full h-full" />
              {/* map link */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 md:w-56 flex flex-col justify-center items-center gap-1.5">
                  <div className="w-full h-36 md:h-44 bg-white rounded-3xl shadow-md outline outline-1 outline-offset-[-1px] outline-zinc-100 p-4 md:p-5">
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <img
                        className="w-8 h-7 md:w-10 md:h-9 rounded-md"
                        src="/images/squareLogo.svg"
                        alt="Location"
                      />
                      <div className="text-black text-3xl md:text-5xl font-bold font-['Satoshi_Variable']">
                        Reach
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-black text-xs md:text-sm font-semibold font-['Inter'] leading-tight md:leading-7">
                        Damietta - New Damitta
                      </div>
                      <div className="text-zinc-500 text-[10px] md:text-xs font-normal font-['Inter']">
                        End street 456{" "}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-black text-xs md:text-sm font-semibold font-['Inter']">
                        {t("openGoogleMap")}
                      </div>
                      <div className="w-0 h-4 md:h-6 relative">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.86658 20.3848C8.53899 20.104 8.50105 19.6108 8.78184 19.2832L14.596 12.4999L8.78185 5.71671C8.50105 5.38911 8.53899 4.89591 8.86658 4.61511C9.19418 4.33431 9.68739 4.37225 9.96818 4.69985L16.2182 11.9915C16.469 12.2841 16.469 12.7158 16.2182 13.0084L9.96818 20.3C9.68738 20.6276 9.19418 20.6656 8.86658 20.3848Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-blue-500 rounded-xl"></div>
                </div>
              </div>
            </a>

            {/* map text */}
            <div className="w-full lg:w-2/5 flex flex-col gap-8 md:gap-12">
              <div>
                <h3 className="text-white text-xl md:text-3xl font-medium font-['Satoshi_Variable'] mb-4">
                  {t("ourLocation")}
                </h3>
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Satoshi_Variable'] capitalize">
                  {t("connectingNearFar")}
                </h2>
              </div>

              <div className="space-y-8 md:space-y-12">
                <div>
                  <h4 className="text-white text-xl md:text-2xl font-bold font-['Satoshi_Variable'] mb-2">
                    {t("headquarters")}
                  </h4>
                  <p className="text-stone-300 text-lg md:text-2xl font-normal font-['Inter'] leading-relaxed">
                    {t("addressLine1")} {t("addressLine2")}
                  </p>
                  <p className="text-stone-300 mt-[20px] text-lg md:text-2xl font-normal font-['Inter'] leading-relaxed">
                    {t("addressLine3")} {t("addressLine4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* wave shape in the background */}
        <div className="absolute top-[60%] mt-[1px] left-0 w-full">
          <svg
            width="100%"
            viewBox="0 0 1917 829"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1917"
              height="828.037"
              transform="matrix(1 0 0 -1 0 828.038)"
              fill="url(#paint0_linear_778_2247)"
              fill-opacity="0.2"
            />
            <mask
              id="mask0_778_2247"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1917"
              height="829"
            >
              <rect
                width="1917"
                height="828.037"
                transform="matrix(1 0 0 -1 0 828.038)"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_778_2247)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1917 -23.9624H0V169.069C319.5 98.0689 639 62.5688 958.5 62.5688C1278 62.5688 1597.5 98.0689 1917 169.069V-23.9624Z"
                fill="black"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_778_2247"
                x1="0"
                y1="0"
                x2="0"
                y2="828.037"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.01" />
                <stop offset="1" stop-color="#F3801E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default page;
