import JobCard from "@/components/cards/JobCard";
import EmailForJobs from "@/components/jobs/EmailForJobs";
import GetNoticedFaster from "@/components/jobs/GetNoticedFaster";
import Pagination from "@/components/pagination/Pagination";
import { getApi } from "@/libs/axios/backend";
import { Job, Meta } from "@/libs/helpers/types";

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: { page?: string };
}) => {
  let loading = true;
  const { locale } = await params;
  const page = parseInt(searchParams?.page || "1");

  const getJobs = async () => {
    try {
      const response = await getApi(
        "/api/jobs/active",
        {
          page,
        },
        {
          "Accept-Language": locale,
        }
      );
      loading = false;
      return { data: response.data, meta: response.meta };
    } catch (error) {
      throw error;
    }
  };

  const { data, meta }: { data: Job[]; meta: Meta } = await getJobs();

  console.log(locale, page);
  return loading ? (
    <div className="w-full flex items-center justify-center text-white">
      Loading...
    </div>
  ) : (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      {/* banner */}
      <div className="w-full h-auto py-[clamp(40px,4.20834vw,80px)] relative overflow-hidden bg-orange-500">
        <div className="w-full px-[clamp(10px,2.08333vw,40px)] flex flex-col items-center justify-center gap-[clamp(10px,1.125vw,50px)]">
          <div className="text-center text-neutral-950 text-[clamp(18px,3.645835vw,90px)] font-semibold font-['Inter'] leading-[1.2]">
            Welcome to the <br /> Hasten Jobs
          </div>
          <div className="text-center text-neutral-700 text-[clamp(10px,1.25vw,30px)] font-normal font-['Inter'] leading-relaxed max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
            Invoicing and Business tips for small businesses <br /> and
            freelancers.
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row px-[5px] lg:px-[clamp(0px,6.25vw,120px)] pb-[clamp(50px,7.15625vw,150px)] mt-[clamp(10px,4.5625vw,80px)] gap-[clamp(10px,3.335vw,64px)]">
        <div className="w-full mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,80px)]">
          {/* Jobs cards */}
          <div className="self-stretch grid grid-cols-1 gap-[clamp(8px,2.08333vw,60px)]">
            {data?.map((job: Job, index) => {
              return <JobCard job={job} key={index} />;
            })}
          </div>
        </div>
        <div className="lg:flex flex-col justify-start items-center hidden gap-[clamp(10px,1.04166665vw,20px)] ">
          <EmailForJobs />
          <GetNoticedFaster />
        </div>
      </div>

      {/* pagination */}
      <div className="w-full flex items-center justify-center px-[50px]  md:px-0">
        <Pagination meta={meta} baseUrl="/jobs" />
      </div>
    </div>
  );
};

export default page;
