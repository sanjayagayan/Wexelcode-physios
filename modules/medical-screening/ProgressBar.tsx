import React from "react";

interface ProgressBarProps {
  completedSections: number;
  totalSections: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  completedSections,
  totalSections,
}) => {
  const completedPercentage = (completedSections / totalSections) * 100;
  const sectionsArray = Array.from({ length: totalSections }, (_, i) => i + 1);

  return (
    <div>
      <div className="relative">
        <div className="w-full h-6 bg-[#E0E0E0] rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-color rounded-full"
            style={{ width: `${completedPercentage}%` }} 
          ></div>

          {sectionsArray.map((section) => (
            <div
              key={section}
              className="absolute top-0 transform -translate-x-[110%] translate-y-1/3 w-4 h-4 bg-white border border-primary-color rounded-full"
              style={{ left: `${(section / totalSections) * 100}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
