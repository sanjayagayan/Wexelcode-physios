"use client";

import React, { useState } from "react";
import StepNavigator from "./StepNavigator";
import PersonalInformationInForm from "./PersonalInformationForm";
import MedicalInformationInForm from "./MedicalInformationInForm";
import MedicalScreeningForm from "./MedicalScreeningForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const ProfileForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const router = useRouter();

  const steps = [
    { id: 1, name: "Personal Information" },
    { id: 2, name: "Medical Information" },
    { id: 3, name: "Medical Screening" },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      mobile: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      gender: Yup.string().required("Gender is required"),
      mobile: Yup.string().required("Mobile number is required"),
      zipCode: Yup.string().required("Zip Code is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      console.log("Personal Information data submitted:", values);
    },
  });

  const formik2 = useFormik({
    initialValues: {
      dateOfBirth: "",
      gender: "",
      height: "",
      heightUnit: "",
      weight: "",
      weightUnit: "",
      occupation: "",
      sportsActivities: "",
    },
    validationSchema: Yup.object({
      dateOfBirth: Yup.date().required("Date of birth is required"),
      gender: Yup.string().required("Please select a gender"),
      height: Yup.number()
        .required("Height is required")
        .min(0, "Height must be positive"),
      weight: Yup.number()
        .required("Weight is required")
        .min(0, "Weight must be positive"),
    }),
    onSubmit: (values) => {
      console.log("Medical Information data submitted:", values);
    },
  });

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInformationInForm formik={formik} />;
      case 1:
        return <MedicalInformationInForm formik={formik2} />;
      case 2:
        return <MedicalScreeningForm onComplete={() => goQuestionarie()} />;
      default:
        return null;
    }
  };

  const goToStep = async (step: number) => {
    if (step === 1) {
      // Validate the first form
      await formik.validateForm();
      if (formik.isValid && !formik.isSubmitting) {
        await formik.submitForm();
        setCurrentStep(step);
      }
    } else if (step === 2) {
      // Validate the second form
      await formik2.validateForm();
      if (formik2.isValid && !formik2.isSubmitting) {
        await formik2.submitForm();
        setCurrentStep(step);
      }
    } else {
      goQuestionarie();
    }
  };

  const goBackStep = (step: number) => {
    router.push("/profile");
  };

  const isCurrentStepCompleted = completedSteps.includes(currentStep + 1);

  const canProceedToNextStep = (step: number): boolean => {
    return completedSteps.includes(step);
  };

  const goQuestionarie = () => {
    router.push("/medical-screening/questionnaire");
  };

  return (
    <div className="xl:px-32 xl:py-10 sm:px-4 sm:py-4 p-8 md:px-[55px] md:py-10 min-h-screen bg-[#F9F5F5]">
      <div className="sm:px-8 sm:py-3">
        <div className="mt-2 sm:space-y-2 space-y-1 sm:mb-6 mb-2">
          <h2 className="text-xl font-bold text-primary-color">Welcome</h2>
          <h2 className="text-xl font-bold text-black">Create your Profile</h2>
        </div>
        <div className="sm:py-3 py-2">
          <StepNavigator
            currentStep={currentStep}
            steps={steps}
            setCurrentStep={goToStep}
            canProceedToNextStep={canProceedToNextStep}
          />
        </div>

        <div className="py-4">{renderStepContent()}</div>

        <div className="w-full flex justify-center items-center sm:pt-[30px] pt-2">
          <div className="xl:w-[70%] md:w-full w-full flex justify-between sm:gap-x-16 gap-x-8">
            <button
              className="bg-transparent border-[1px] border-primary-color text-primary-color p-[12px] px-4 rounded w-full"
              onClick={() => goBackStep(currentStep - 1)}
            >
              {currentStep === 2 ? "Remind me later" : "Cancel"}
            </button>
            <button
              onClick={() => goToStep(currentStep + 1)}
              className={`p-[12px] px-4 rounded w-full border-2 ${
                isCurrentStepCompleted
                  ? "bg-primary-color text-white border-primary-color"
                  : "bg-gray-400 text-white border-gray-300"
              }`}
            >
              {currentStep === 2 ? "Start Screening Now" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
