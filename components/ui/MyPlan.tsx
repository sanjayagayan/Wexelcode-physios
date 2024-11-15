import React from 'react';
import Image from 'next/image';

interface PlanItem {
  day: string;
  activity: string;
  time: string;
  icon: string; 
  completedTasks: number;
  totalTasks: number;
  status: string;
  statusType: 'reps' | 'time';
}

const planData: PlanItem[] = [
  {
    day: 'Saturday',
    activity: 'Stretch',
    time: '08:00',
    icon: '/images/exercises/Stretch.png',
    completedTasks: 5,
    totalTasks: 10,
    status: '5/10 Rep',
    statusType: 'reps',
  },
  {
    day: 'Sunday',
    activity: 'Nek',
    time: '08:00',
    icon: '/images/exercises/Nek.png',
    completedTasks: 10,
    totalTasks: 10,
    status: '10 min',
    statusType: 'time',
  },
];

const CircularProgress: React.FC<{ completed: number; total: number }> = ({ completed, total }) => {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const progress = (completed / total) * circumference;

  return (
    <svg width="40" height="40" className="rotate-[-90deg]">
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="4"
      />
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke="#A51008"
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
      />
      <polygon points="18,14 26,20 18,26" fill="#A51008" transform="rotate(90, 20, 20)" />
    </svg>
  );
};

const MyPlan: React.FC = () => {
  return (
    <div className="bg-primary-color/15 rounded-2xl p-3 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-primary-color">My Plan</h2>
        <p className="text-primary-color hover:text-primary-color/70">View All</p>
      </div>
      {planData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-3 mb-4 flex justify-between items-center">
          <div className="flex flex-col space-y-2">
             <h3 className="text-xl font-medium text-[#475569]">{item.day}</h3>
             <div className='flex space-x-2 justify-center items-center'>
              <Image 
                  src={item.icon} 
                  alt={item.activity} 
                  width={48}
                  height={48} 
                  className=""
                />
                <div>
                    <p className="text-gray-600 text-xl">{item.activity}</p>
                    <p className="text-gray-400">At {item.time}</p>
                </div>
             </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <CircularProgress completed={item.completedTasks} total={item.totalTasks} />
            <div className='bg-[#ECD0CF] py-2 px-3 rounded-full'>
              <p className={`text-sm font-semibold ${item.statusType === 'reps' ? 'text-primary-color' : 'text-primary-color'}`}>{item.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPlan;