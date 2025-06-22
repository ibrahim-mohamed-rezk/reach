"use client";

import { Client } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";
import React from "react";

const Clients = ({ clients }: { clients: Client[] }) => {
  const imageUrl =useImageUrl();
  return (
    <div
      id="clients"
      className="w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]"
    >
      <div className=" mx-[5px] md:mx-[100px] px-4 py-16 relative">
        <div className="z-10 absolute overflow-hidden w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <h2
            style={{ WebkitTextStroke: "1px #ffffff7d" }}
            className="w-full h-full opacity-10 text-center text-nowrap ml-[-33.33%] text-[#ffffff0a] text-[525px] font-bold font-['Inter'] leading-[525px]"
          >
            Our Clients
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12 px-4">
          <h2 className="text-center text-white text-[clamp(40px,5vw,85px)] font-bold font-['Inter'] leading-[1.1]">
            Our Clients
          </h2>
          <p className="text-center text-white text-[clamp(16px,2vw,18px)] font-normal font-['Inter'] mt-4 max-w-[756px] mx-auto">
            Wisdom new and valley answer. Contented it so is discourse
            recommend. Man its upon him call mile. An pasture he himself believe
            ferrars besides cottage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 w-full relative">
          <div className="w-full z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[290px] bg-[#f3801e] rounded-full blur-[160px]" />

          <div className="grid grid-cols-2 z-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="aspect-[5/3] relative rounded-lg shadow-md bg-white flex items-center justify-center p-4"
              >
                <img className="rounded-lg" src={imageUrl(client.logo)} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
