"use client";

import React from "react";

interface MedicalScreeningFormProps {
  onComplete: () => void;
}


const MedicalScreeningForm: React.FC<MedicalScreeningFormProps> = ({ onComplete }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="xl:w-[70%] md:w-full w-full ">
        <form onSubmit={handleSubmit}>
          <h2 className="text-[22px] font-bold text-primary-color mb-2">Medical screening</h2>
          <div className="mb-4 space-y-3">
              <p className="text-[18px] font-semibold">Quality Care with Transparency</p>
              <p className="text-[15px]">At WexelCode, we prioritize quality and fairness.</p>
              <p className="text-[15px]">Our physios are dedicated to providing the right treatment for you, ensuring you only pay for what you need.</p>
          </div>
          <div className="mb-6 space-y-2">
              <p className="text-[18px] font-semibold">Commitment to Excellence</p>
              <p className="text-[15px]">We adhere to the highest standards of medical screening to determine the best care plan.</p>
              <p className="text-[15px]">Complete your profile after our thorough screening to ensure our services are suitable for you.</p>
              <p className="text-[15px]">If not, we&apos;ll recommend a specialized doctor.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicalScreeningForm;
