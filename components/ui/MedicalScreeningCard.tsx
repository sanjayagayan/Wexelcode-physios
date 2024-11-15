"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type ScreeningData = {
  date: string;
  status: string;
  result: string;
  nextStep: string;
};

export default function MedicalScreeningCard() {
  const router = useRouter();

  const screeningData: ScreeningData = {
    date: "2024-10-10", 
    status: "Incomplete",
    result: "Pending", 
    nextStep: "Blood test", 
  };

  const goToScreening = () => {
    router.push("/screening"); 
  };

  return (
    <div className="bg-white rounded-2xl px-6  pb-4 flex flex-col justify-between shadow-md h-full">
      <div className="flex flex-col items-start space-y-2 sm:space-y-7">
        <h2 className="text-[18px] sm:text-[22px] font-semibold text-primary-color pt-3">Medical screening</h2>
        
        <h2 className="text-[16px] sm:text-xl font-semibold text-black">Date: {screeningData.date}</h2>
        <h2 className="text-[16px] sm:text-xl font-semibold text-black">Status: {screeningData.status}</h2>
        <h2 className="text-[16px] sm:text-xl font-semibold text-[#D81FDB]">Result: {screeningData.result}</h2>
        <h2 className="text-[16px] sm:text-xl font-semibold text-black">Next step: {screeningData.nextStep}</h2>
      </div>

      <div className="w-full bottom-0">
        <button 
          className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px]  mt-4 sm:mt-[50px] lg:mt-0"
          onClick={goToScreening}
        >
          Go to screening
        </button>
      </div>
    </div>
  );
}


