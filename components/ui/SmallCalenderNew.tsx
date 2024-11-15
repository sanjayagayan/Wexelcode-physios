import React, { useState } from 'react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, addWeeks, subWeeks, isSameDay } from 'date-fns';
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SmallCalendarNewProps {
  onSelectDate: (date: Date) => void;
  selectedDate: Date | null;
}

const SmallCalendarNew: React.FC<SmallCalendarNewProps> = ({ onSelectDate, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    onSelectDate(date);
  };

  const handlePreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <p className="text-primary-color font-bold text-[17px]">{format(currentDate, 'MMMM')}</p>
        <select
          className="text-primary-color font-bold text-[17px]"
          value={format(currentDate, 'yyyy')}
          onChange={(e) => setCurrentDate(new Date(currentDate.setFullYear(Number(e.target.value))))}
        >
          {[2023, 2024, 2025].map(year => (
            <option key={year} value={year} >{year}</option>
          ))}
        </select>
      </div>
      <button className="text-primary-color font-semibold flex items-center">
        <span className="mr-2"><FaCirclePlus /></span> Add reminder
      </button>
    </div>
  );

  const renderDaysOfWeek = () => {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
    const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

    return (
      <div className="flex overflow-hidden hide-scrollbar">
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={`py-2 text-center cursor-pointer flex-shrink-0 w-16 ${
              selectedDate && isSameDay(day, selectedDate)
                ? 'bg-primary-color text-white rounded-[12px] w-[14%] lg:w-[15%] '
                : 'text-black'
            }`}
            onClick={() => handleDateChange(day)}
          >
            <div
              className={`text-sm font-medium ${
                selectedDate && isSameDay(day, selectedDate)
                  ? 'text-white'
                  : 'text-[#726C6C]'
              } mb-3`}
            >
              {format(day, 'EEE')}
            </div>
            <div className="text-lg">{format(day, 'd')}</div>
          </div>
        ))}
    </div>
    );
  };

  return (
    <div>
      {renderHeader()}
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePreviousWeek} className='p-1'><IoIosArrowBack className='text-2xl' /></button>
        <div className="flex-1 flex overflow-hidden px-3">
          {renderDaysOfWeek()}
        </div>
        <button onClick={handleNextWeek} className='p-1'><IoIosArrowForward className='text-2xl' /></button>
      </div>
    </div>
  );
};

export default SmallCalendarNew;