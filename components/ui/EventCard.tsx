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
    <div className="bg-white rounded-2xl px-6 py-4 flex flex-col justify-center items-center space-y-3 shadow-md h-[300px]">
      <p className="text-[18px] font-semibold text-primary-color">{title}</p>
      <div className="text-center my-4">
        <div className="text-md font-semibold">{physioName}</div>
        <div className="text-gray-500">{eventTitle}</div>
      </div>
      <div className='flex flex-col items-start'>
        <div className="flex items-center justify-center mb-2">
          <FaCalendarAlt className="text-primary-color mr-2" />
          <span>{eventDate}, {eventTime}</span>
        </div>
        <div className="flex items-center justify-center mb-4">
          <FaClock className="text-primary-color mr-2" />
          <span>{duration}</span>
        </div>
      </div>
      
      <div className="flex justify-between w-full space-x-2">
        <button className="flex-1 text-[13px] py-[5px] text-primary-color border border-primary-color rounded-sm hover:bg-primary-color hover:text-white">
          Details
        </button>
        <button className="flex-1 text-[13px] py-[5px] text-white bg-primary-color rounded-sm hover:bg-primary-color">
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;