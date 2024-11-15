import React from "react";
// Import a tick icon from an icon library or use an SVG
import { FaCheckCircle } from "react-icons/fa";

interface StepNavigatorProps {
  steps: { id: number; name: string }[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  canProceedToNextStep: (step: number) => boolean;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({
  steps,
  currentStep,
  setCurrentStep,
  canProceedToNextStep,
}) => {
  return (
    <div className="flex items-center sm:mb-6 mb-2">
      {steps.map((step, index) => {
        const isCurrent = currentStep + 1 === step.id;
        const isCompleted = step.id < currentStep + 1;

        return (
          <React.Fragment key={step.id} >
            <button
              onClick={() => {
                if (canProceedToNextStep(step.id)) {
                  setCurrentStep(step.id);
                }
              }}
              disabled={!canProceedToNextStep(step.id)}
              className={`rounded-md  sm:text-[16px] text-[10px] ${
                isCurrent
                  ? "bg-primary-color text-white cursor-pointer"
                  : isCompleted
                  ? ""
                  : "bg-primary-color/50 text-white"
              } ${isCompleted ? "" : " w-full sm:p-[10px] p-2.5"}`}
              aria-disabled={!canProceedToNextStep(step.id)}
            >
              {isCompleted ? (
                <FaCheckCircle className="text-green-500  w-[50px] h-[50px]  " />
              ) : (
                <>
                  {step.id}. {step.name}
                </>
              )}
            </button>
            {index < steps.length - 1 && (
              <div className="h-[2px] w-full bg-primary-color" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepNavigator;
