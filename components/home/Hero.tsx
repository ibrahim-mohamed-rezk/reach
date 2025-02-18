"use client";


const Hero = () => {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-center flex-col pt-[195px] pb-[390px]">
          <div className="w-full max-w-[clamp(749px,39.0104167vw,749px)] h-[clamp(125px,6.5104167vw,125px)] relative flex items-center justify-center">
            <span className="text-white text-[clamp(103.53px,5.39218vw,103.53px)] font-semibold font-['Inter']">
              Reach
            </span>
            <div className="w-[2px] h-[clamp(79px,4.11458vw,79px)] bg-[#FF9437] mx-4"></div>
            <span className="text-white text-[clamp(103.53px,5.39218vw,103.53px)] font-normal font-['Inter']">
              Agency
            </span>
          </div>
          <div className="text-center text-white text-3xl font-normal mt-[25px] font-['Inter']">
            Crafting Digital Masterpieces, Daily
          </div>
          <div className="mt-[40px] cursor-pointer hover:scale-105 duration-300 rotate-animation">
            <svg
              width="126"
              height="126"
              viewBox="0 0 126 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.2212 62.9239L54.4994 49.1868L54.4994 43.5738L59.5897 43.5738L78.9182 62.9239L59.5897 82.2741L54.4994 82.2741L54.4994 76.661L68.2212 62.9239Z"
                fill="white"
                className=""
              />
              <path
                d="M58.9456 112.782L59.8264 113.609L57.9782 115.446L60.2451 116.615L59.7201 117.659L57.466 116.492L57.0771 119.048L55.8505 118.861L56.2393 116.306L53.7402 116.749L53.5496 115.596L56.0615 115.154L54.8432 112.851L55.9301 112.324L57.1229 114.623L58.9456 112.782Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M42.7073 107.717L38.6661 115.783L33.6164 113.253L34.1606 112.167L37.9162 114.048L39.0915 111.703L35.4746 109.89L36.0189 108.804L39.6357 110.616L40.8689 108.155L37.1134 106.273L37.6576 105.187L42.7073 107.717Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M29.6115 99.2142L30.8967 100.235L30.5866 102.267L30.2742 104.198L30.3349 104.246L32.1653 103.521L34.1046 102.784L35.3088 103.741L30.2649 105.643L29.5654 110.7L28.2802 109.679L28.5667 107.843L28.8752 105.959L28.8246 105.918L27.0589 106.645L25.305 107.315L24.1008 106.358L28.8785 104.542L29.6115 99.2142Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M26.2858 95.8351L19.2709 101.508L17.1498 98.8846C16.608 98.2146 16.3838 97.5537 16.4773 96.9019C16.5653 96.2434 16.9377 95.6487 17.5943 95.1177C18.2509 94.5868 18.9103 94.3471 19.5727 94.3988C20.2296 94.4438 20.829 94.8013 21.3708 95.4713L22.5817 96.9688L25.3756 94.7095L26.2858 95.8351ZM21.647 97.7246L20.5743 96.398C20.0108 95.7012 19.4075 95.6128 18.7643 96.133L18.3321 96.4824C17.6956 96.9971 17.6591 97.6029 18.2226 98.2997L19.2953 99.6263L21.647 97.7246Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M19.9581 87.0157L11.9535 91.1765L11.2858 89.8921L18.2125 86.2916L16.3169 82.6448L17.3949 82.0845L19.9581 87.0157Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M15.594 76.23C15.7332 76.7814 15.7543 77.2871 15.6572 77.7471C15.5496 78.2008 15.3374 78.6099 15.0206 78.9743C14.7018 79.3303 14.2783 79.6417 13.7502 79.9084C13.2221 80.175 12.5989 80.3991 11.8804 80.5806C11.1703 80.7599 10.5196 80.8576 9.92817 80.8736C9.32844 80.8918 8.80373 80.8199 8.35403 80.658C7.90222 80.4877 7.52543 80.2274 7.22366 79.877C6.91142 79.5204 6.68567 79.0664 6.54641 78.5151C6.40716 77.9637 6.39132 77.4611 6.4989 77.0074C6.59601 76.5474 6.80401 76.1394 7.1229 75.7834C7.43967 75.419 7.86627 75.1024 8.40271 74.8336C8.93079 74.5669 9.54988 74.3439 10.26 74.1646C10.9784 73.9831 11.6334 73.8844 12.2247 73.8683C12.8161 73.8523 13.3377 73.9294 13.7895 74.0996C14.2392 74.2616 14.6202 74.5208 14.9324 74.8774C15.2342 75.2278 15.4547 75.6787 15.594 76.23ZM14.4286 76.5244C14.2703 75.8978 13.9246 75.5141 13.3913 75.3733C12.8497 75.2346 12.1738 75.2676 11.3634 75.4722L9.89726 75.8425C9.09526 76.0451 8.49305 76.3349 8.09062 76.712C7.67984 77.0913 7.55358 77.5942 7.71182 78.2207C7.87006 78.8473 8.21998 79.2299 8.76158 79.3687C9.29481 79.5095 9.96243 79.4786 10.7644 79.2761L12.2431 78.9026C13.0451 78.7001 13.6515 78.4092 14.0623 78.0299C14.4647 77.6528 14.5868 77.1509 14.4286 76.5244Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M13.5484 64.1056L13.5525 65.5402L4.53109 65.5661L4.5214 62.1928C4.51893 61.3311 4.75831 60.6756 5.23954 60.2262C5.72075 59.7681 6.38356 59.5379 7.22797 59.5354C7.91728 59.5335 8.48645 59.6998 8.93547 60.0346C9.38449 60.3693 9.6616 60.8511 9.7668 61.4798L13.5348 59.3881L13.5394 60.9907L9.90017 62.914L9.90362 64.116L13.5484 64.1056ZM8.73543 62.3875C8.73286 61.4914 8.32229 61.0445 7.50373 61.0468L6.94797 61.0484C6.12941 61.0508 5.72141 61.5 5.72399 62.3961L5.72896 64.128L8.7404 64.1194L8.73543 62.3875Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M14.0905 54.9806L5.24488 53.2082L6.35456 47.6701L7.5458 47.9088L6.72053 52.0275L9.29311 52.543L10.0879 48.5764L11.2792 48.8151L10.4844 52.7817L13.1837 53.3225L14.0089 49.2039L15.2002 49.4426L14.0905 54.9806Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M17.4367 34.0675L15.1598 32.5897L15.1047 32.6772L18.0692 36.6791L13.1781 35.7407L13.1231 35.8282L15.4413 37.2404L19.0956 39.5385L18.4144 40.6217L10.7776 35.8189L11.7203 34.32L15.4872 35.0553L15.5353 34.9787L13.2478 31.8911L14.1354 30.4798L21.7722 35.2825L21.091 36.3656L17.4367 34.0675Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M28.9959 26.9003C28.5711 27.2783 28.1322 27.5305 27.6794 27.6567C27.2272 27.7708 26.7664 27.7714 26.2969 27.6587C25.8339 27.5402 25.3622 27.3083 24.8818 26.963C24.4014 26.6176 23.9149 26.1682 23.4223 25.6147C22.9354 25.0676 22.5483 24.5355 22.261 24.0183C21.968 23.4947 21.7895 22.9961 21.7255 22.5224C21.668 22.043 21.7249 21.5886 21.8964 21.1592C22.0686 20.7175 22.3671 20.3077 22.7919 19.9296C23.2167 19.5515 23.6552 19.3055 24.1073 19.1914C24.5602 19.0652 25.0181 19.0613 25.4812 19.1798C25.9507 19.2926 26.4284 19.5248 26.9145 19.8766C27.3949 20.2219 27.8785 20.6681 28.3655 21.2152C28.8581 21.7687 29.2481 22.3041 29.5353 22.8212C29.8226 23.3384 29.995 23.8367 30.0526 24.3161C30.1165 24.7897 30.0624 25.2474 29.8903 25.689C29.7188 26.1184 29.4207 26.5222 28.9959 26.9003ZM28.1967 26.0024C28.6795 25.5727 28.8602 25.0889 28.7389 24.5509C28.6119 24.0064 28.2706 23.422 27.7149 22.7977L26.7096 21.6681C26.1596 21.0502 25.6245 20.6498 25.1042 20.467C24.5781 20.2777 24.0737 20.3979 23.591 20.8275C23.1083 21.2571 22.9304 21.7442 23.0574 22.2886C23.1787 22.8267 23.5143 23.4046 24.0642 24.0225L25.0782 25.1618C25.6281 25.7797 26.1661 26.1833 26.6922 26.3726C27.2125 26.5554 27.714 26.432 28.1967 26.0024Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M38.8065 19.4879L37.5358 20.1539L33.3479 12.1634L36.3357 10.5974C37.0989 10.1974 37.7909 10.1071 38.4117 10.3265C39.0402 10.5419 39.5504 11.0235 39.9424 11.7715C40.2624 12.382 40.3776 12.9637 40.288 13.5165C40.1983 14.0694 39.899 14.5376 39.3898 14.9212L42.9849 17.2979L41.5654 18.0419L38.1792 15.7017L37.1145 16.2597L38.8065 19.4879ZM38.1085 14.4254C38.9022 14.0094 39.1091 13.4389 38.7291 12.7139L38.4711 12.2216C38.0911 11.4966 37.5042 11.3421 36.7105 11.7581L35.1765 12.5621L36.5745 15.2294L38.1085 14.4254Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M47.1512 15.7555L44.6396 7.09073L50.0644 5.51828L50.4026 6.68516L46.3682 7.85461L47.0986 10.3746L50.9841 9.24833L51.3223 10.4152L47.4368 11.5415L48.2033 14.1856L52.2377 13.0162L52.576 14.183L47.1512 15.7555Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M60.8523 12.5876L59.8571 11.9026L61.4081 9.80881L58.9911 8.99455L59.353 7.88303L61.757 8.69729V6.11234H62.9978V8.69729L65.4018 7.88303L65.7637 8.99455L63.3468 9.80881L64.8977 11.9026L63.9025 12.5876L62.3774 10.4938L60.8523 12.5876Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M68.9631 12.6008L68.107 11.7483L70.0086 9.96686L67.7771 8.732L68.3326 7.70348L70.5514 8.93603L71.0154 6.39307L72.236 6.61578L71.772 9.15874L74.2832 8.78922L74.4397 9.94765L71.9158 10.3149L73.0658 12.653L71.9638 13.1483L70.8393 10.8147L68.9631 12.6008Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M80.5688 16.4179L84.1443 8.13526L89.3299 10.3738L88.8484 11.4892L84.9918 9.82441L83.952 12.2333L87.6661 13.8366L87.1846 14.952L83.4704 13.3487L82.3793 15.8762L86.2359 17.541L85.7543 18.6564L80.5688 16.4179Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M94.1272 24.161L92.786 23.2147L92.9799 21.1687L93.1819 19.2233L93.1186 19.1786L91.3324 20.0063L89.4382 20.8528L88.1815 19.9661L93.1089 17.7798L93.5195 12.6915L94.8607 13.6378L94.6792 15.4869L94.4784 17.3857L94.5312 17.4229L96.2527 16.5971L97.9656 15.8283L99.2223 16.715L94.5557 18.8006L94.1272 24.161Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M97.6398 27.345L104.32 21.2824L106.587 23.7804C107.167 24.4185 107.428 25.0656 107.372 25.7216C107.321 26.3841 106.983 26.999 106.358 27.5665C105.733 28.134 105.088 28.4107 104.424 28.3968C103.765 28.3893 103.147 28.0665 102.568 27.4284L101.273 26.0023L98.6126 28.417L97.6398 27.345ZM102.164 25.1945L103.31 26.4579C103.912 27.1215 104.52 27.1754 105.132 26.6195L105.544 26.246C106.15 25.6959 106.152 25.0891 105.55 24.4255L104.403 23.1621L102.164 25.1945Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M104.459 35.79L112.214 31.1803L112.954 32.4246L106.243 36.4136L108.343 39.9465L107.299 40.5673L104.459 35.79Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M109.43 46.3102C109.26 45.7676 109.21 45.264 109.281 44.7992C109.363 44.3401 109.551 43.9196 109.847 43.5378C110.145 43.1642 110.55 42.8292 111.062 42.5329C111.574 42.2366 112.183 41.9774 112.89 41.7554C113.589 41.5359 114.233 41.4013 114.823 41.3516C115.42 41.2993 115.948 41.3412 116.407 41.4773C116.867 41.6216 117.258 41.86 117.58 42.1926C117.912 42.5309 118.163 42.9713 118.333 43.5139C118.504 44.0564 118.548 44.5573 118.467 45.0164C118.396 45.4812 118.211 45.9004 117.913 46.274C117.618 46.6558 117.21 46.9962 116.69 47.295C116.177 47.5913 115.572 47.8492 114.873 48.0687C114.166 48.2908 113.518 48.4266 112.929 48.4763C112.339 48.526 111.814 48.4787 111.353 48.3344C110.895 48.1984 110.5 47.9612 110.168 47.623C109.847 47.2903 109.601 46.8528 109.43 46.3102ZM110.577 45.95C110.771 46.5665 111.138 46.9299 111.678 47.0402C112.227 47.1478 112.9 47.0764 113.697 46.826L115.14 46.3728C115.929 46.125 116.514 45.8013 116.894 45.4019C117.283 44.9999 117.38 44.4906 117.186 43.8741C116.993 43.2575 116.622 42.8954 116.073 42.7878C115.533 42.6775 114.868 42.7463 114.079 42.9942L112.624 43.4512C111.835 43.6991 111.246 44.024 110.857 44.4261C110.477 44.8255 110.384 45.3335 110.577 45.95Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M112.163 58.2988L112.077 56.8667L121.082 56.3273L121.284 59.6947C121.335 60.5548 121.134 61.2229 120.679 61.699C120.225 62.1837 119.576 62.4513 118.733 62.5018C118.045 62.543 117.467 62.4093 117 62.1006C116.533 61.7919 116.228 61.3268 116.088 60.7051L112.445 63.0079L112.349 61.4081L115.873 59.2807L115.801 58.0809L112.163 58.2988ZM117.066 59.7401C117.119 60.6347 117.555 61.0574 118.372 61.0085L118.926 60.9753C119.744 60.9263 120.125 60.4546 120.072 59.5601L119.968 57.8313L116.962 58.0113L117.066 59.7401Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M112.141 67.4402L121.074 68.7062L120.281 74.2984L119.078 74.1279L119.667 69.969L117.07 69.6008L116.502 73.6062L115.299 73.4357L115.867 69.4303L113.141 69.0439L112.552 73.2029L111.349 73.0324L112.141 67.4402Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M109.99 88.5093L112.348 89.8551L112.398 89.7646L109.21 85.9379L114.147 86.5964L114.197 86.5059L111.802 85.228L108.023 83.1416L108.641 82.0214L116.539 86.3816L115.683 87.9318L111.881 87.4121L111.837 87.4913L114.296 90.4437L113.491 91.9033L105.593 87.5431L106.211 86.4229L109.99 88.5093Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M98.8584 96.323C99.261 95.9214 99.6848 95.6447 100.13 95.4929C100.575 95.3532 101.035 95.3264 101.51 95.4122C101.979 95.5042 102.463 95.7088 102.962 96.0263C103.461 96.3437 103.973 96.7647 104.496 97.2893C105.013 97.8077 105.43 98.317 105.746 98.817C106.069 99.323 106.275 99.8107 106.366 100.28C106.451 100.755 106.42 101.212 106.273 101.651C106.126 102.101 105.852 102.528 105.449 102.929C105.047 103.331 104.623 103.602 104.178 103.741C103.733 103.893 103.276 103.923 102.807 103.831C102.332 103.745 101.842 103.54 101.336 103.217C100.837 102.899 100.329 102.481 99.8114 101.963C99.2881 101.438 98.8683 100.926 98.552 100.426C98.2358 99.9262 98.0353 99.4385 97.9506 98.9632C97.8597 98.4939 97.8877 98.034 98.0344 97.5833C98.1812 97.1448 98.4558 96.7247 98.8584 96.323ZM99.7074 97.174C99.2499 97.6304 99.097 98.1237 99.2487 98.654C99.4065 99.1903 99.7805 99.7543 100.371 100.346L101.439 101.417C102.023 102.002 102.58 102.371 103.11 102.524C103.646 102.683 104.143 102.535 104.6 102.078C105.058 101.622 105.208 101.125 105.05 100.589C104.898 100.059 104.53 99.501 103.946 98.9154L102.869 97.8357C102.285 97.2501 101.724 96.8778 101.188 96.7187C100.659 96.5658 100.165 96.7175 99.7074 97.174Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M89.4857 104.282L90.7165 103.544L95.3525 111.284L92.4586 113.017C91.7195 113.46 91.0337 113.589 90.4014 113.406C89.7617 113.226 89.2248 112.775 88.7909 112.05C88.4367 111.459 88.2886 110.885 88.3466 110.328C88.4046 109.771 88.6768 109.286 89.1633 108.874L85.4388 106.706L86.8136 105.882L90.3276 108.026L91.3587 107.408L89.4857 104.282ZM90.4708 109.296C89.702 109.757 89.528 110.338 89.9487 111.04L90.2343 111.517C90.6549 112.219 91.2496 112.34 92.0183 111.88L93.5041 110.99L91.9565 108.406L90.4708 109.296Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M81.3667 108.483L84.3674 116.991L79.0409 118.869L78.6368 117.724L82.5982 116.327L81.7255 113.852L77.9104 115.198L77.5063 114.052L81.3213 112.706L80.4056 110.11L76.4443 111.507L76.0402 110.362L81.3667 108.483Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M65.7783 112.824L66.8653 113.352L65.6469 115.655L68.1588 116.096L67.9682 117.25L65.4691 116.806L65.8579 119.362L64.6313 119.548L64.2425 116.993L61.9883 118.159L61.4633 117.115L63.7303 115.946L61.882 114.11L62.7628 113.283L64.5855 115.123L65.7783 112.824Z"
                fill="white"
                fill-opacity="0.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
