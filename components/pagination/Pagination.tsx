"use client";

import { Meta } from "@/libs/helpers/types";
import { useRouter } from "next/navigation";

const Pagination = ({ meta, baseUrl }: { meta: Meta; baseUrl: string }) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page === 1) {
      router.push(baseUrl);
    } else {
      router.push(`${baseUrl}?page=${page}`);
    }
  };

  if(meta?.current_page === 1 && meta?.last_page === 1) return null

  return (
    <div className="inline-flex justify-center items-center gap-2 w-full pb-[clamp(30px,3.15625vw,80px)]">
      <button
        className={`px-4 py-2 rounded-md flex justify-center items-center ${
          meta?.current_page === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-orange-500 hover:bg-orange-50"
        }`}
        disabled={meta?.current_page === 1}
        onClick={() =>
          meta?.current_page > 1 && handlePageChange(meta.current_page - 1)
        }
      >
        <span className="text-center text-xs font-semibold font-['Inter'] leading-3">
          Previous
        </span>
      </button>

      {Array.from({ length: meta?.last_page || 6 }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-md flex justify-center items-center ${
              meta?.current_page === page
                ? "bg-orange-500 text-white"
                : "text-slate-500 hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(page)}
          >
            <span className="text-sm font-semibold font-['Inter'] leading-none">
              {page}
            </span>
          </button>
        )
      )}

      <button
        className={`px-4 py-2 rounded-md flex justify-center items-center ${
          meta?.current_page === meta?.last_page
            ? "text-gray-300 cursor-not-allowed"
            : "text-orange-500 hover:bg-orange-50"
        }`}
        disabled={meta?.current_page === meta?.last_page}
        onClick={() =>
          meta?.current_page < meta?.last_page &&
          handlePageChange(meta.current_page + 1)
        }
      >
        <span className="text-center text-xs font-semibold font-['Inter'] leading-3">
          Next
        </span>
      </button>
    </div>
  );
};

export default Pagination;
