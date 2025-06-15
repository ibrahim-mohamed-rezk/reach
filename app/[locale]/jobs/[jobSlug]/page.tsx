import { getApi } from "@/libs/axios/backend";
import EmailForJobs from "@/components/jobs/EmailForJobs";
import GetNoticedFaster from "@/components/jobs/GetNoticedFaster";
import { Link } from "@/i18n/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import JobForm from "./components/JobForm";

const page = async ({
  params,
}: {
  params: Promise<{ locale: string; jobSlug: string }>;
}) => {
  let loading = true;
  const { locale, jobSlug } = await params;

  const getJob = async () => {
    try {
      const response = await getApi(
        `/api/jobs/${jobSlug}`,
        {},
        {
          "Accept-Language": locale,
        }
      );
      loading = false;
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const job = await getJob();

  return loading ? (
    <div className="w-full flex items-center justify-center text-white p-8">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="w-full min-h-screen relative bg-black text-white">
      {/* Header section */}
      <div className="w-full relative bg-gradient-to-b from-black/0 to-orange-500/20 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/3 mb-8 md:mb-0">
              <Link
                href="/jobs"
                className="text-orange-500 text-lg md:text-xl font-bold mb-4 inline-block"
              >
                View All open positions
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-4 mb-6">
                {job.title}
              </h1>
              <div className="text-xl md:text-2xl font-semibold">
                {job.location} · {job.type}
              </div>
            </div>

            <div className="w-full md:w-1/3 space-y-4">
              <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
                <a
                  href="#applicationForm"
                  className="w-full bg-orange-500 text-white font-bold py-4 px-6 rounded-xl mb-4 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                </a>
                <button className="w-full border-2 border-orange-500 text-orange-500 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2">
                  <span>Share job</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="mb-12">
              <p
                className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="text-orange-500">📅</div>
                  <div className="text-white text-lg font-bold">
                    {new Date(job.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-orange-500">📍</div>
                    <div className="text-white text-lg font-bold">Location</div>
                  </div>
                  <div className="text-white text-lg">{job.location}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-orange-500">⏰</div>
                    <div className="text-white text-lg font-bold">
                      Work Type
                    </div>
                  </div>
                  <div className="text-white text-lg">{job.type}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-orange-500">💰</div>
                    <div className="text-white text-lg font-bold">Salary</div>
                  </div>
                  <div className="text-white text-lg">
                    {job.salary_min}k ~ {job.salary_max}k $
                  </div>
                </div>
              </div>
            </div>
            <EmailForJobs />
            <GetNoticedFaster />
          </div>
        </div>
      </div>

      {/* Application form */}
      <div id="applicationForm" className="w-full bg-gradient-to-b py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white z-10 relative rounded-lg shadow-lg p-6 md:p-12">
            <JobForm job_id={job.id} />
          </div>
        </div>
      </div>
      {/* wave shape in the background */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          width="100%"
          viewBox="0 0 1917 705"
          fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className="pt-1"
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
  );
};

export default page;
