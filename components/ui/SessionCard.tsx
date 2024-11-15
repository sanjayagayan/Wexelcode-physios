import React from 'react';

interface SessionCardProps {
  totalSessions: number;
  usedSessions: number;
}

const SessionCard: React.FC<SessionCardProps> = ({ totalSessions, usedSessions }) => {
  const usedSessios = usedSessions;
  const percentageUsed = (usedSessions / totalSessions) * 100;

  const CircularProgress: React.FC<{ percentage: number; size?: number; strokeWidth?: number }> = ({
    percentage,
    size = 100,
    strokeWidth = 8,
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg width={size} height={size} >
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="currentColor"
        />
        <circle
          className="text-primary-color"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-lg font-semibold text-gray-700"
        >
          {totalSessions}/{usedSessios}
        </text>
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-2xl px-6 py-4 flex flex-col justify-center items-center space-y-3 shadow-md h-[300px]">
      <p className="text-[18px] font-semibold text-primary-color">Available Sessions</p>
      <div className="flex items-center justify-center">
        <CircularProgress percentage={percentageUsed} size={100} strokeWidth={10} />
      </div>
      <div className='flex flex-col items-start space-y-2'>
        <p className='text-[16px] font-semibold text-black'>Total sessions: {totalSessions}</p>
        <p className='text-[16px] font-semibold text-black'>Used sessions: {usedSessions}</p>
      </div>
      <button 
          className="w-full bg-primary-color rounded-sm hover:bg-red-700 font-light text-white text-[13px] py-[5px]  mt-[50px] lg:mt-0"
        >
          Go to screening
        </button>
    </div>
  );
};

export default SessionCard;