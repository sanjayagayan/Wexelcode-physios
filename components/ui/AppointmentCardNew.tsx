import React from 'react';
import { FaCalendarAlt, FaClock, FaStickyNote } from 'react-icons/fa';
import { GrEdit } from "react-icons/gr";

interface AppointmentCardNewProps {
  title: string;
  name: string;
  date: string;
  time: string;
}

const AppointmentCardNew: React.FC<AppointmentCardNewProps> = ({ title,name,date, time }) => {
  return (
    <div className="px-3 py-2 bg-white w-full rounded-lg mb-4 flex justify-between items-center">
      <div className="flex items-center">
        <FaCalendarAlt className="text-primary-color mr-4" size={24} />
        <div>
          <div className="font-medium text-[18px]">{title}</div>
          <div className="text-gray-700 text-[15px] font-normal">with {name}</div>
          <div className="text-gray-500 text-[13px] font-light">{date}</div>
          <div className="text-gray-500 text-[13px] font-light">{time}</div>
        </div>
      </div>
      <button className="flex ml-auto items-center p-2 text-primary-color border border-primary-color rounded-md hover:bg-primary-color hover:text-white">
        <GrEdit  className="mr-1" /> Notes
      </button>
    </div>
  );
};

export default AppointmentCardNew;