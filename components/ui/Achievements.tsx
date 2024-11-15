import React from 'react';
import HoursSvg from '../icons/HoursSvg';
import RepsSvg from '../icons/RepsSvg';

interface AchievementsProps {
  hours: number;
  reps: number;
  totalReps: number;
}

const Achievements: React.FC<AchievementsProps> = ({ hours, reps, totalReps }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 ">
        <div className='flex flex-col justify-center text-left px-2'>
            <h2 className=" text-[18px] sm:text-xl font-semibold leading-tight">Achievements this week</h2>
            <p className=" text-gray-600 py-1">You are on fire!!!! <span role="img" aria-label="fire">🔥</span></p>
        </div>

      <div className="block md:flex justify-center sm:justify-center items-center space-y-2 sm:space-y-0 sm:items-center space-x-0 sm:space-x-12 lg:space-x-6 pl-9 lg:pl-2 sm:pl-8 pr-0 mt-3">
        <div className="flex flex-col items-center bg-[#F46483] rounded-full p-6 w-24 h-36 text-white">
          <div className='h-20'><HoursSvg/></div>
          <p className="">hours</p>
          <p className="text-2xl font-medium">{hours}</p>
        </div>
        <div className="flex flex-col items-center bg-[#FEA8A5] rounded-full p-6 w-24 h-36  text-white">
          <div className='h-20 mt-[10px]'><RepsSvg/></div>
          <p className="">Reps</p>
          <p className="text-2xl font-medium">{reps}/{totalReps}</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;