import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, addDays } from 'date-fns';
import { FaChevronLeft, FaChevronRight, FaPlus, FaCaretDown } from 'react-icons/fa';

const SmallCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="font-bold text-red-600 mr-2">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <FaCaretDown className="text-red-600" />
        </div>
        <button className="flex items-center px-3 py-1 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white">
          <FaPlus className="mr-2" /> Add reminder
        </button>
      </div>
    );
  };


  const renderDates = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    return (
      <div className="flex items-center">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="text-red-600 mr-2">
          <FaChevronLeft />
        </button>
        <div className="flex overflow-x-auto">
          {days.map((day) => (
            <div
              key={day.toISOString()}
              className={`p-2 text-center cursor-pointer w-12 ${format(day, 'd') === format(selectedDate, 'd') ? 'bg-red-600 text-white rounded' : 'text-gray-700'}`}
              onClick={() => handleDateChange(day)}
            >
              <div className="text-sm">{format(day, 'EEE')}</div>
              <div className="font-bold">{format(day, 'd')}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="text-red-600 ml-2">
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <div className="">
      {renderHeader()}
      {renderDates()}
    </div>
  );
};

export default SmallCalendar;

