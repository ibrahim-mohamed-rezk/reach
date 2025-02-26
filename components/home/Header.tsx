"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className=" mx-auto w-full h-[clamp(90px,7.34375vw,120px)] bg-black flex justify-center items-center overflow-hidden">
      <div className="container mx-auto">
        <div className="grow px-[8px] md:px-0 w-full shrink basis-0 h-[59.68px] justify-between items-center inline-flex">
          {/* logo */}
          <Link
            href="/"
            className="w-[clamp(100px,7.55208vw,145px)] h-[clamp(35px,3.07291665vw,59px)] flex items-center justify-center rounded-[9px]"
          >
            <img className="w-full h-full" src="/images/logo.svg" />
          </Link>
          {/* navigation links */}
          <div className="py-[0.22px] hidden lg:flex justify-center items-center ">
            <div className="self-stretch p-[7.79px] justify-start items-center gap-[54.51px] inline-flex">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`text-white flex items-center rounded-[5px] justify-center  m-0 text-base font-normal font-['Archivo'] hover:scale-110 duration-300 hover:bg-[#ff9437] px-[15px] py-[3px]  ${
                    pathname === item.href
                      ? " text-white  bg-[#f3801e]"
                      : "text-white"
                  }
                  `}
                >
                  <Link href={item.href}>{item.label}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* contact us button */}
          <button className="px-[30px] py-[16px] hover:scale-110 duration-300 bg-[#f3801e] rounded-[30px] justify-start items-start hidden lg:flex">
            <span className="text-white text-lg font-semibold font-['Archivo']">
              Contact Us
            </span>
          </button>

          {/* mobile menu icon */}
          <div
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center"
          >
            <svg
              fill="#f3801e"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#0f0f0f] shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden z-50`}
          >
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-md text-gray-700 hover:text-[var(--color-green)] hover:bg-gray-100"
            >
              <svg
                fill="#f3801e"
                width={24}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </button>

            {/* Mobile navigation links */}
            <div className="px-2 pt-16 pb-3 space-y-1 flex flex-col items-start justify-center w-full sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`w-[80%] mx-auto flex items-center rounded-[15px] justify-center hover:bg-[#ff9437] px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? " text-white  bg-[#f3801e]"
                      : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="w-[90%] !mt-5 mx-auto border-b border-[#f3811e70]"></div>

              {/* mobile contact us button */}
              <div className="px-[15px] py-[10px] mx-auto !mt-[30px] bg-[#f3801e] rounded-[15px] justify-start items-start flex">
                <div className="text-white text-lg font-bold font-['Archivo']">
                  Contact Us
                </div>
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-20 md:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
