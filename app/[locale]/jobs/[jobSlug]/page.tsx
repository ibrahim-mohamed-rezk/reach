import React from "react";
import { getApi } from "@/libs/axios/backend";
import EmailForJobs from "@/components/jobs/EmailForJobs";
import GetNoticedFaster from "@/components/jobs/GetNoticedFaster";
import { Link } from "@/i18n/navigation";

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
      Loading...
    </div>
  ) : (
    <div className="w-full min-h-screen bg-black text-white">
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
                  <span>Share now</span>
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
              <div className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
                {job.description}
              </div>
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
      <div
        id="applicationForm"
        className="w-full bg-gradient-to-b from-black to-slate-50 py-12"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-slate-500 font-semibold">
                  Full name *
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-500 font-semibold">
                  Contact email *
                </label>
                <input
                  type="email"
                  className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-500 font-semibold">
                  Subject *
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5"
                  placeholder="UI Designer"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-500 font-semibold">
                  Resume *
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full h-14 bg-white rounded-l-lg border border-slate-300 px-5"
                    placeholder="Choose file"
                    readOnly
                  />
                  <button className="w-36 h-14 bg-slate-200 rounded-r-lg text-slate-500 font-bold">
                    Choose
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-slate-500 font-semibold">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5"
                  placeholder="+20 01018260856"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-slate-500 font-semibold">
                  Tell us a bit about you *
                </label>
                <textarea
                  className="w-full h-36 bg-white rounded-lg border border-slate-300 p-5"
                  placeholder="Let us know"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-slate-500 text-sm">
                By submitting this form you agree to our terms and conditions
                and our Privacy Policy which explains how we may collect, use
                and disclose your personal information including to third
                parties.
              </div>

              <div>
                <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg">
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
