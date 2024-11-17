"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);

const highlightedDates = ["2024-10-10", "2024-10-15", "2024-10-20"];

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  // Check if a date is highlighted
  const isDateHighlighted = (date: Dayjs): boolean => {
    return highlightedDates.some((highlightedDate) =>
      dayjs(highlightedDate).isSame(date, "day")
    );
  };

  // Generate the days in the current month
  const generateDaysInMonth = () => {
    const startOfMonth = currentDate.startOf("month").day();
    const daysInMonth = currentDate.daysInMonth();
    const daysArray = [];

    // Adding blank days for alignment
    for (let i = 0; i < (startOfMonth === 0 ? 6 : startOfMonth - 1); i++) {
      daysArray.push(null);
    }

    // Filling in actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = currentDate.date(i);
      daysArray.push(currentDay);
    }

    return daysArray;
  };

  // Handle selecting a day
  const handleDayClick = (day: Dayjs) => {
    setSelectedDate(day);
  };

  // Handle month navigation
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const daysInMonth = generateDaysInMonth();

  return (
    <div className="bg-white rounded-md px-6 py-3 flex flex-col justify-center border border-gray-200">
      <div className="flex">
        <p className="text-[18px] sm:text-[20px] font-bold text-primary-color">Calender</p>
      </div>
      <div className="flex items-center justify-between py-3">
          <p className="text-[15px] sm:text-[15px] lg:text-[15px] font-medium text-gray-900">
            {currentDate.format("MMMM YYYY")}
          </p>
          <div className="flex space-x-2">
            <button
              className="text-gray-500 hover:text-black/70 rounded transition-all hover:text-black bg-gray-50"
              onClick={handlePrevMonth}
            >
              <ChevronLeftIcon style={{ fontSize: 15, margin: 5 }} />
            </button>
            <button
              className="text-gray-500 hover:text-black/70 rounded transition-all hover:text-black bg-gray-50"
              onClick={handleNextMonth}
            >
              <ChevronRightIcon style={{ fontSize: 15, margin: 5 }} />
            </button>
          </div>
      </div>
      {/* Calendar */}
      <div className="bg-white rounded-md  pb-3 flex flex-col justify-center">
        
        {/* Days of the Week Header */}
        <div className="grid grid-cols-7 space-x-2 ">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="text-center text-[8px] sm:text-[15px] lg:text-[15px] font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 space-y-2 sm:space-y-2 space-x-0 ">
          {daysInMonth.map((day, index) => {
            if (!day) {
              return <div key={index} className="text-center"></div>; // Placeholder for empty days
            }

            const isHighlighted = isDateHighlighted(day);
            const isSelected = selectedDate && day.isSame(selectedDate, "day");

            return (
              <button
                key={day.toString()}
                onClick={() => handleDayClick(day)}
                className={`text-center text-[9px] sm:text-[12px] lg:text-[15px] mx-1 p-[4px] lg:mx-7 md:mx-4 xl:mx-10 sm:p-1   ${
                  isHighlighted
                    ? "border-[1px] border-black text-black rounded-full  font-bold "
                    : isSelected
                    ? "bg-primary-color rounded-full text-white"
                    : "text-gray-800 rounded-full"
                } hover:bg-gray-200`}
              >
                {day.date()}
              </button>
            );
          })}
        </div>
    </div>
    
    </div>
  );
}


