"use client";
import { Link } from "@/i18n/navigation";
import { postApi } from "@/libs/axios/backend";
import axios from "axios";
import { useLocale } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "use-intl";

const Footer = () => {
  const [data, setData] = useState<{ email: string } | null>({
    email: "",
  });
  const locale = useLocale();
  const t = useTranslations("endUser");
  const e = useTranslations("Errors");
  const tHeader = useTranslations("header");
  const handleSubscribe = async () => {
    if (
      !data?.email?.trim() ||
      !data.email.includes("@") ||
      !data.email.includes(".")
    ) {
      toast.error(e("Please enter a valid email address"));
      return;
    }
    try {
      const res = await postApi("api/subscribe", data, {
        "Content-Type": "multipart/form-data",
        lang: locale,
      });
      setData({ email: "" });
      toast.success(res.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.msg || e("Something went wrong"));
      } else {
        toast.error(e("Something went wrong"));
      }
      throw error;
    }
  };

  return (
    <footer className="mt-[-10px] py-[clamp(10px,1.5625vw,100px)] z-20 relative">
      <div className="mx-[clamp(5px,5.20834vw,500px)]">
        <div className="text-white rounded-[15px] border border-[#39393B] p-[clamp(10px,1.5625vw,100px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(10px,1.5625vw,100px)]">
            <div className="mb-[clamp(10px,1.5625vw,100px)] md:mb-0">
              <Link
                href="/"
                className="flex items-center gap-2.5 mb-[clamp(8px,0.833334vw,100px)]"
              >
                <img
                  className="w-[clamp(100px,8.95834vw,500px)] h-[clamp(30px,2.86458vw,200px)]"
                  src="/images/logo.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-[#b7b7b7] text-[clamp(12px,0.9375vw,40px)] mt-[clamp(5px,0.41666667vw,20px)] font-semibold leading-normal">
                {`${t("at")}`} <span className="font-bold">Reach</span>
                {` ${t("footerDescription")}`}
              </p>
            </div>

            <div className="flex w-full items-start justify-between md:justify-center md:gap-[100px]  ">
              {/* navigations */}
              <div>
                <h3 className="text-[clamp(12px,1.04166665vw,100px)] font-bold mb-[clamp(8px,0.833334vw,100px)]">
                  {t("Links")}
                </h3>
                <ul className="gap-[clamp(10px,1.5625vw,100px)] flex flex-col items-start justify-start text-[clamp(12px,1.04166665vw,100px)]">
                  <li>
                    <Link
                      href="/"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {tHeader("home")}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blogs"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {tHeader("blog")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {tHeader("about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {tHeader("contact")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* support */}
              <div>
                <h3 className="text-[clamp(12px,1.04166665vw,100px)] font-bold mb-[clamp(8px,0.833334vw,100px)]">
                  {t("Support")}
                </h3>
                <ul className="gap-[clamp(10px,1.5625vw,100px)] flex flex-col items-start justify-start text-[clamp(12px,1.04166665vw,100px)]">
                  <li>
                    <Link
                      href="/terms"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {t("Terms")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {t("privacy policy")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jobs"
                      className="text-[#b7b7b7] hover:text-white transition"
                    >
                      {t("Join Us")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* subscripe */}
            <div>
              <h3 className="text-[clamp(12px,1.04166665vw,100px)] font-bold mb-[clamp(8px,0.833334vw,100px)]">
                {t("Get Updates")}
              </h3>
              <div className="bg-[#111111] rounded-[10px] border border-[#868686] p-[clamp(4px,0.41666667vw,50px)] flex flex-row items-center gap-[clamp(4px,0.41666667vw,50px)]">
                <input
                  type="email"
                  value={data?.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder={t("Enter your email")}
                  className="bg-transparent w-full text-[#878787] p-[clamp(4px,0.41666667vw,50px)] flex-grow"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-white text-[#4E4F5D] font-bold py-[clamp(4px,0.41666667vw,50px)] px-[clamp(8px,0.833334vw,100px)] rounded-[10px]"
                >
                  {t("Subscribe")}
                </button>
              </div>

              {/* social icons */}
              <div className="flex gap-[clamp(8px,0.833334vw,100px)] mt-[clamp(10px,1.25vw,100px)]">
                <a
                  href="https://www.facebook.com/Reach.agency12/"
                  target="_blank"
                  className="bg-[#111111] w-[clamp(50px,3.437504vw,200px)] h-[clamp(50px,3.437504vw,200px)] flex items-center justify-center rounded-full border border-[#868686] p-[clamp(8px,0.833334vw,100px)] hover:bg-[#444444] transition"
                >
                  <svg
                    className="w-[clamp(15px,1.35416667vw,100px)] h-[clamp(15px,1.35416667vw,100px)]"
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
                  className="bg-[#111111] w-[clamp(50px,3.437504vw,200px)] h-[clamp(50px,3.437504vw,200px)] flex items-center justify-center rounded-full border border-[#868686] p-[clamp(8px,0.833334vw,100px)] hover:bg-[#444444] transition"
                >
                  <svg
                    className="w-[clamp(15px,1.35416667vw,100px)] h-[clamp(15px,1.35416667vw,100px)]"
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
                  href="mailto:reachagency@reachksa.com"
                  target="_blank"
                  className="bg-[#111111] w-[clamp(50px,3.437504vw,200px)] h-[clamp(50px,3.437504vw,200px)] flex items-center justify-center rounded-full border border-[#868686] p[clamp(8px,0.833334vw,100px)] hover:bg-[#444444] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[clamp(15px,1.35416667vw,100px)] h-[clamp(15px,1.35416667vw,100px)]"
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
                  className="bg-[#111111] w-[clamp(50px,3.437504vw,200px)] h-[clamp(50px,3.437504vw,200px)] flex items-center justify-center rounded-full border border-[#868686] p-[clamp(8px,0.833334vw,100px)] hover:bg-[#444444] transition"
                >
                  <svg
                    className="w-[clamp(15px,1.35416667vw,100px)] h-[clamp(15px,1.35416667vw,100px)]"
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
          </div>
          <div className="mt-[clamp(10px,1.5625vw,100px)] pt-[clamp(10px,1.5625vw,100px)] border-t border-[#4a4a4c] text-[clamp(12px,1.04166665vw,100px)] flex flex-col sm:flex-row justify-between items-center">
            <div className="flex text-[clamp(12px,1.04166665vw,100px)] items-center gap-[clamp(4px,0.41666667vw,50px)] mb-[clamp(8px,0.833334vw,100px)] sm:mb-0">
              Reach &copy; 2024
            </div>
            <div className=" text-[clamp(12px,1.04166665vw,100px)]">
              {t("All rights reserved")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
