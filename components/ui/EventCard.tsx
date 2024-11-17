import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

interface EventCardProps {
  physioName: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  duration: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ title,physioName, eventTitle, eventDate, eventTime, duration }) => {
  return (
    <div className="bg-white rounded-md px-6 pt-4 flex flex-col justify-start items-center h-full border border-gray-200">
      <p className="text-[20px] font-bold text-primary-color">{title}</p>
      <div className='w-[70%]'>
      <div className="text-center my-4">
        <div className="text-[19px] font-semibold">{physioName}</div>
        <div className="text-gray-500 text-[16px]">{eventTitle}</div>
      </div>
      <div className='flex flex-col items-start py-3'>
        <div className="flex items-center justify-center mb-2 text-[17px]">
          <FaCalendarAlt className="text-primary-color mr-2" />
          <span>{eventDate}, {eventTime}</span>
        </div>
        <div className="flex items-center justify-center mb-2 text-[17px]">
          <FaClock className="text-primary-color mr-2" />
          <span>{duration}</span>
        </div>
      </div>

      <div className="flex justify-between w-full space-x-2 pt-4">
        <button className="flex-1 text-[15px] py-[6px] px-[2px] text-primary-color border border-primary-color rounded-sm hover:bg-primary-color hover:text-white">
          Details
        </button>
        <button className="flex-1 text-[15px] py-[6px] px-[2px] text-white bg-primary-color rounded-sm hover:bg-primary-color">
          Join Event
        </button>
      </div>
      </div>
    </div>
  );
};




export default EventCard;
















