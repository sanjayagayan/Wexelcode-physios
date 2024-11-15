import React from 'react';

interface ProgressBarProps {
  totalDays: number;
  completedDays: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalDays, completedDays }) => {
  const completedPercentage = (completedDays / totalDays) * 100;
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="p-3 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">Your progress</span>
        <span className="text-gray-500 text-sm">{totalDays} days</span>
      </div>
      <div className="text-primary-color font-bold text-lg mb-2">{completedPercentage}% completed</div>
      <div className="relative">
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-color rounded-full"
            style={{ width: `${completedPercentage}%` }}
          />
        </div>
        {daysArray.map((day) => (
          <div
            key={day}
            className="absolute top-0 transform -translate-x-[110%] translate-y-1/2 w-2 h-2 bg-white border border-primary-color rounded-full"
            style={{ left: `${(day / totalDays) * 100}%` }}
          >
            {day <= completedDays && (
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 mt-1 bg-[#ECD0CF] text-primary-color text-xs font-semibold rounded px-3 py-2">
                <div className='inline-flex space-x-1'>
                    <p>Day</p>
                    <p>{day}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;