'use client';

import Achievements from "@/components/ui/Achievements";
import Calender from "@/components/ui/Calender";
import InformationSection from "@/components/ui/InformationSection";
import MedicalScreeningCard from "@/components/ui/MedicalScreeningCard";
import TreatmentGoals from "@/components/ui/TreatmentGoals";
import { useState } from "react";

const data = {
  labels: ["Min", "Hr", "Min", "Hrs"],
  datasets: [
    {
      data: [10, 60, 20, 60],
      backgroundColor: ["#1AB0B0", "#FF844B", "#F85C7F", "#8676FE"],
    },
  ],
};

export default function DashboardPage1() {
  // Placeholder for medical screening completion status
  const [isMedicalScreeningComplete, setMedicalScreeningComplete] = useState(
    false // Assume false means incomplete
  );

  return (
    <>
    <div >
          <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-10">Dashboard</h1>
        </div> 
      <div>
          {!isMedicalScreeningComplete && (
            <div className="bg-[#ECD0CF] p-4  text-center text-2xl flex justify-between items-center w-full">
              <div className="flex"><p className="font-black text-black">Reminder:</p><p className="font-medium ">Finish the Medical screening to use full service functionality</p></div>
              <div className="flex justify-center items-center">
              <button 
              className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px] px-16"
              
            >
              Go to screening
            </button>
              </div>
            </div>
          )}
      </div>

        <div className="flex flex-col gap-10 sm:gap-12 px-8 sm:px-10 my-10">
      
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 md:gap-20 w-full 2xl:w-[70%] xl:w-[80%]">
        <div className="flex-1">
          <MedicalScreeningCard />
        </div>
        <div className="flex-1">
          <Calender />
        </div>
      </div>
      <div className="flex-1 w-full md:w-full lg:w-[85%]">
        <InformationSection />
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 sm:gap-16">
        <div className="flex-1">
          <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
        </div>
        <div className="flex-1">
          <Achievements hours={2} reps={8} totalReps={10} />
        </div>
      </div>
    </div>
    </>
    
  );
}
