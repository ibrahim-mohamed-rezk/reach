"use client";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "example@example.com";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f3801e]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f3801e]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#f3801e]/5 to-[#f3801e]/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`max-w-xl w-full relative z-10 transform transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }`}
      >
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-black/60 border border-[#f3801e]/20 rounded-2xl shadow-2xl overflow-hidden hover:shadow-[#f3801e]/20 hover:shadow-2xl transition-all duration-500">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#f3801e]/20 via-[#f3801e]/30 to-[#f3801e]/20 px-8 py-6 border-b border-[#f3801e]/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f3801e]/10 to-transparent"></div>
            <h2 className="text-center text-3xl font-bold text-white relative z-10 tracking-tight">
              <span className="bg-gradient-to-r from-[#f3801e] via-orange-400 to-[#f3801e] bg-clip-text text-transparent">
                Unsubscribed Successfully
              </span>
            </h2>
          </div>

          <div className="px-8 py-10 text-center relative">
            {/* Success icon with animation */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 animate-ping">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#f3801e]/20"></div>
              </div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#f3801e] to-orange-500 flex items-center justify-center shadow-lg shadow-[#f3801e]/25">
                  <svg
                    className="w-10 h-10 text-white animate-bounce-subtle"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main content */}
            <h4 className="text-2xl font-semibold mb-4 text-white">
              You've been unsubscribed
            </h4>

            <div className="space-y-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                The email address{" "}
                <span className="inline-block px-3 py-1 bg-[#f3801e]/10 rounded-lg text-[#f3801e] font-medium border border-[#f3801e]/30 backdrop-blur-sm">
                  {email}
                </span>{" "}
                has been successfully removed from our newsletter.
              </p>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#f3801e]/50 to-transparent mx-auto"></div>

              <p className="text-gray-400 text-sm">
                If you change your mind, you can always subscribe again using
                our subscription form.
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-4">
              <Link href="/" className="block w-full group">
                <button className="w-full relative overflow-hidden bg-gradient-to-r from-[#f3801e] to-orange-600 hover:from-[#f3801e] hover:to-orange-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#f3801e]/25 hover:shadow-[#f3801e]/40 hover:scale-[1.02] active:scale-[0.98] group">
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 group-hover:animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Return to Homepage
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </Link>
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-6 border-t border-[#f3801e]/20">
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                You can manage your preferences anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.3;
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
