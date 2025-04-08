import { Link } from "@/i18n/navigation";
import { Job } from "@/libs/helpers/types";
import React from "react";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="self-stretch p-4 md:p-6 lg:p-8 bg-neutral-800 rounded-[10.32px] shadow-[0px_1.290071964263916px_2.580143928527832px_0px_rgba(0,0,0,0.03)] outline outline-[1.29px] outline-offset-[-1.29px] outline-neutral-900/5 inline-flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 lg:gap-8"
    >
      <div className="w-full md:flex-1 inline-flex flex-col justify-start items-start gap-3 md:gap-4">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col justify-start items-start gap-[5.16px]">
            <div className="flex flex-wrap justify-start items-center gap-2 md:gap-4">
              <div className="justify-start text-white text-xl md:text-2xl lg:text-3xl font-medium font-['DM_Sans'] leading-tight md:leading-10">
                {job.title}
              </div>
              <div className="px-2 py-[2.58px] bg-orange-500/10 rounded flex justify-start items-center gap-[5.16px] overflow-hidden">
                <div className="justify-start text-orange-500 text-sm md:text-base font-medium font-['DM_Sans'] leading-normal">
                  New post
                </div>
              </div>
            </div>
          </div>
          <div className="py-[2.58px] flex flex-wrap justify-start items-center gap-3 md:gap-4 lg:gap-8">
            <div className="flex justify-start items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.83203 19.473C4.83203 19.1168 5.12082 18.828 5.47707 18.828H17.0877C17.444 18.828 17.7328 19.1168 17.7328 19.473C17.7328 19.8293 17.444 20.1181 17.0877 20.1181H5.47707C5.12082 20.1181 4.83203 19.8293 4.83203 19.473Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2828 7.21732C10.2141 7.21732 9.34769 8.0837 9.34769 9.15243C9.34769 10.2212 10.2141 11.0875 11.2828 11.0875C12.3515 11.0875 13.2179 10.2212 13.2179 9.15243C13.2179 8.0837 12.3515 7.21732 11.2828 7.21732ZM8.05762 9.15243C8.05762 7.37121 9.50158 5.92725 11.2828 5.92725C13.064 5.92725 14.508 7.37121 14.508 9.15243C14.508 10.9336 13.064 12.3776 11.2828 12.3776C9.50158 12.3776 8.05762 10.9336 8.05762 9.15243Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2829 3.34708C9.74323 3.34708 8.26662 3.95871 7.17791 5.04742C6.0892 6.13613 5.47757 7.61274 5.47757 9.1524C5.47757 11.8228 6.9688 14.2544 8.54446 16.0664C9.32442 16.9634 10.106 17.6865 10.6928 18.1853C10.9248 18.3825 11.1257 18.544 11.2829 18.6667C11.4401 18.544 11.641 18.3825 11.873 18.1853C12.4598 17.6865 13.2414 16.9634 14.0213 16.0664C15.597 14.2544 17.0882 11.8228 17.0882 9.1524C17.0882 7.61274 16.4766 6.13613 15.3879 5.04742C14.2992 3.95871 12.8226 3.34708 11.2829 3.34708ZM11.2829 19.473C10.913 20.0014 10.9128 20.0013 10.9126 20.0011L10.9121 20.0008L10.9106 19.9997L10.9058 19.9963L10.8894 19.9847C10.8755 19.9747 10.8556 19.9604 10.8301 19.9418C10.7793 19.9047 10.7062 19.8505 10.614 19.7801C10.4298 19.6393 10.1691 19.4333 9.85727 19.1682C9.23459 18.639 8.4036 17.8705 7.57097 16.9129C5.92146 15.016 4.1875 12.2873 4.1875 9.1524C4.1875 7.27059 4.93505 5.46585 6.26569 4.1352C7.59634 2.80456 9.40108 2.05701 11.2829 2.05701C13.1647 2.05701 14.9695 2.80456 16.3001 4.1352C17.6307 5.46585 18.3783 7.27059 18.3783 9.1524C18.3783 12.2873 16.6443 15.016 14.9948 16.9129C14.1622 17.8705 13.3312 18.639 12.7085 19.1682C12.3967 19.4333 12.136 19.6393 11.9518 19.7801C11.8596 19.8505 11.7865 19.9047 11.7357 19.9418C11.7102 19.9604 11.6903 19.9747 11.6764 19.9847L11.66 19.9963L11.6552 19.9997L11.6537 20.0008L11.6532 20.0011C11.653 20.0013 11.6528 20.0014 11.2829 19.473ZM11.2829 19.473L11.6528 20.0014C11.4307 20.1569 11.1351 20.1569 10.913 20.0014L11.2829 19.473Z"
                  fill="#F5811F"
                />
              </svg>

              <div className="justify-start text-white/70 text-base md:text-lg lg:text-xl font-normal font-['DM_Sans'] leading-normal md:leading-loose">
                {job.location}
              </div>
            </div>
            <div className="hidden md:block w-[2.58px] h-[2.58px] bg-white/70 rounded-full" />
            <div className="flex justify-start items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1667 3.9921C7.24804 3.9921 4.07132 7.16882 4.07132 11.0875C4.07132 15.0062 7.24804 18.1829 11.1667 18.1829C15.0854 18.1829 18.2621 15.0062 18.2621 11.0875C18.2621 7.16882 15.0854 3.9921 11.1667 3.9921ZM2.78125 11.0875C2.78125 6.45633 6.53555 2.70203 11.1667 2.70203C15.7979 2.70203 19.5522 6.45633 19.5522 11.0875C19.5522 15.7187 15.7979 19.473 11.1667 19.473C6.53555 19.473 2.78125 15.7187 2.78125 11.0875Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1675 5.92725C11.5237 5.92725 11.8125 6.21604 11.8125 6.57228V10.4425H15.6827C16.039 10.4425 16.3278 10.7313 16.3278 11.0875C16.3278 11.4438 16.039 11.7326 15.6827 11.7326H11.1675C10.8113 11.7326 10.5225 11.4438 10.5225 11.0875V6.57228C10.5225 6.21604 10.8113 5.92725 11.1675 5.92725Z"
                  fill="#F5811F"
                />
              </svg>

              <div className="justify-start text-white/70 text-base md:text-lg lg:text-xl font-normal font-['DM_Sans'] leading-normal md:leading-loose">
                {job.type}
              </div>
            </div>
            <div className="hidden md:block w-[2.58px] h-[2.58px] bg-white/70 rounded-full" />
            <div className="flex justify-start items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0532 2.05701C11.4095 2.05701 11.6983 2.3458 11.6983 2.70204V19.473C11.6983 19.8292 11.4095 20.118 11.0532 20.118C10.697 20.118 10.4082 19.8292 10.4082 19.473V2.70204C10.4082 2.3458 10.697 2.05701 11.0532 2.05701Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.70412 5.12563C7.42993 4.39982 8.41434 3.99207 9.44078 3.99207H12.3434C12.8517 3.99207 13.355 4.09217 13.8245 4.28667C14.2941 4.48116 14.7207 4.76624 15.0801 5.12563C15.4395 5.48501 15.7246 5.91166 15.9191 6.38121C16.1136 6.85077 16.2137 7.35404 16.2137 7.86228C16.2137 8.21853 15.9249 8.50732 15.5686 8.50732C15.2124 8.50732 14.9236 8.21853 14.9236 7.86228C14.9236 7.52345 14.8568 7.18794 14.7272 6.8749C14.5975 6.56187 14.4075 6.27743 14.1679 6.03784C13.9283 5.79826 13.6439 5.6082 13.3308 5.47854C13.0178 5.34888 12.6823 5.28214 12.3434 5.28214H9.44078C8.75648 5.28214 8.10021 5.55397 7.61634 6.03784C7.13247 6.52172 6.86064 7.17798 6.86064 7.86228C6.86064 8.54658 7.13247 9.20285 7.61634 9.68672C8.10021 10.1706 8.75648 10.4424 9.44078 10.4424H12.9885C14.0149 10.4424 14.9993 10.8502 15.7251 11.576C16.4509 12.3018 16.8587 13.2862 16.8587 14.3126C16.8587 15.3391 16.4509 16.3235 15.7251 17.0493C14.9993 17.7751 14.0149 18.1829 12.9885 18.1829H9.11826C8.09182 18.1829 7.10741 17.7751 6.38161 17.0493C5.6558 16.3235 5.24805 15.3391 5.24805 14.3126C5.24805 13.9564 5.53684 13.6676 5.89308 13.6676C6.24933 13.6676 6.53812 13.9564 6.53812 14.3126C6.53812 14.9969 6.80995 15.6532 7.29383 16.1371C7.7777 16.621 8.43397 16.8928 9.11826 16.8928H12.9885C13.6728 16.8928 14.329 16.621 14.8129 16.1371C15.2968 15.6532 15.5686 14.9969 15.5686 14.3126C15.5686 13.6283 15.2968 12.9721 14.8129 12.4882C14.329 12.0043 13.6728 11.7325 12.9885 11.7325H9.44078C8.41434 11.7325 7.42993 11.3247 6.70412 10.5989C5.97832 9.87313 5.57056 8.88873 5.57056 7.86228C5.57056 6.83584 5.97832 5.85143 6.70412 5.12563Z"
                  fill="#F5811F"
                />
              </svg>

              <div className="justify-start text-white/70 text-base md:text-lg lg:text-xl font-normal font-['DM_Sans'] leading-normal md:leading-loose">
                {job.salary_min}-{job.salary_max}k
              </div>
            </div>
            <div className="hidden md:block w-[2.58px] h-[2.58px] bg-white/70 rounded-full" />
            <div className="flex justify-start items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.19629 4.63712C3.19629 3.92463 3.77387 3.34705 4.48636 3.34705H17.3871C18.0996 3.34705 18.6772 3.92463 18.6772 4.63712V17.5378C18.6772 18.2503 18.0996 18.8279 17.3871 18.8279H4.48636C3.77387 18.8279 3.19629 18.2503 3.19629 17.5378V4.63712ZM17.3871 4.63712H4.48636V17.5378H17.3871V4.63712Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8071 2.05701C15.1634 2.05701 15.4522 2.3458 15.4522 2.70204V5.28219C15.4522 5.63843 15.1634 5.92722 14.8071 5.92722C14.4509 5.92722 14.1621 5.63843 14.1621 5.28219V2.70204C14.1621 2.3458 14.4509 2.05701 14.8071 2.05701Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.06691 2.05701C7.42315 2.05701 7.71195 2.3458 7.71195 2.70204V5.28219C7.71195 5.63843 7.42315 5.92722 7.06691 5.92722C6.71067 5.92722 6.42188 5.63843 6.42188 5.28219V2.70204C6.42188 2.3458 6.71067 2.05701 7.06691 2.05701Z"
                  fill="#F5811F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.19629 7.86232C3.19629 7.50608 3.48508 7.21729 3.84133 7.21729H18.0321C18.3884 7.21729 18.6772 7.50608 18.6772 7.86232C18.6772 8.21856 18.3884 8.50736 18.0321 8.50736H3.84133C3.48508 8.50736 3.19629 8.21856 3.19629 7.86232Z"
                  fill="#F5811F"
                />
              </svg>
              <div className="justify-start text-white/70 text-base md:text-lg lg:text-xl font-normal font-['DM_Sans'] leading-normal md:leading-loose">
                {(() => {
                  const createdDate = new Date(job.created_at);
                  const now = new Date();
                  const diffInMs = now.getTime() - createdDate.getTime();
                  
                  // Convert to appropriate time units
                  const diffInSecs = Math.floor(diffInMs / 1000);
                  const diffInMins = Math.floor(diffInSecs / 60);
                  const diffInHours = Math.floor(diffInMins / 60);
                  const diffInDays = Math.floor(diffInHours / 24);
                  const diffInMonths = Math.floor(diffInDays / 30);
                  
                  if (diffInSecs < 60) {
                    return `${diffInSecs} seconds ago`;
                  } else if (diffInMins < 60) {
                    return `${diffInMins} minutes ago`;
                  } else if (diffInHours < 24) {
                    return `${diffInHours} hours ago`;
                  } else if (diffInDays < 30) {
                    return `${diffInDays} days ago`;
                  } else {
                    return `${diffInMonths} months ago`;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch line-clamp-2 justify-start text-white/70 text-base md:text-lg lg:text-xl font-normal font-['DM_Sans'] leading-normal md:leading-loose">
          {job.description}
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
