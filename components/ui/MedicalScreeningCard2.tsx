"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type ScreeningData = {
  date: string;
  status: string;
  result: string;
  nextStep: string;
};

export default function MedicalScreeningCard2() {
  const router = useRouter();

  const screeningData: ScreeningData = {
    date: "2024-10-10", 
    status: "Incomplete",
    result: "green", 
    nextStep: "Blood test", 
  };

  const goToScreening = () => {
    router.push("/screening"); 
  };

  return (
    <div className="bg-white rounded-2xl px-6 py-4 flex flex-col justify-between space-y-3 shadow-md h-[300px] ">
      <div className="flex flex-col items-start space-y-2">
        <p className="text-[18px] font-semibold text-primary-color">Medical screening</p>
        <p className="text-[16px] font-semibold text-black">Date: {screeningData.date}</p>
        <p className="text-[16px] font-semibold text-black">Status: {screeningData.status}</p>
        <p className="text-[16px] font-semibold text-[#D81FDB]">Result: {screeningData.result}</p>
        <p className="text-[16px] font-semibold text-black">Next step: {screeningData.nextStep}</p>
      </div>

      <div className="w-full bottom-0 flex flex-col">
        <button 
          className="w-full bg-primary-color rounded-sm hover:bg-red-700 font-light text-white text-[13px] py-[5px]  mt-[50px] lg:mt-0"
          onClick={goToScreening}
        >
          Go to screening
        </button>
        <p className="text-right py-2 underline text-primary-color">More</p>
      </div>
    </div>
  );
}


