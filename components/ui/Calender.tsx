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
    <div className="bg-white rounded-2xl px-6 py-3 flex flex-col justify-between shadow-md ">
      <div className="flex items-center justify-between pb-1 sm:pb-0">
        <h2 className="text-[17px] sm:text-[18px] font-semibold text-black">Calender</h2>
        <button className="flex justify-center text-[12px] sm:text-[15px] items-center space-x-0 sm:space-x-1 rounded-lg font-semibold">
          <span className="text-primary-color">View All</span>
          <ChevronRightIcon className="text-black/30 mt-[2px] p-[2px]" style={{ fontSize: 18 }} />
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-gray-100 rounded-md px-2 sm:px-3 pb-3 flex flex-col justify-start">
        <div className="flex items-center justify-between py-2">
          <h5 className="text-[12px] sm:text-[12px] lg:text-[13px] font-medium text-gray-900">
            {currentDate.format("MMMM YYYY")}
          </h5>
          <div className="flex">
            <button
              className="text-gray-500 hover:text-black/70 rounded transition-all hover:text-black"
              onClick={handlePrevMonth}
            >
              <ChevronLeftIcon style={{ fontSize: 15, margin: 5 }} />
            </button>
            <button
              className="text-gray-500 hover:text-black/70 rounded transition-all hover:text-black"
              onClick={handleNextMonth}
            >
              <ChevronRightIcon style={{ fontSize: 15, margin: 5 }} />
            </button>
          </div>
        </div>

        {/* Days of the Week Header */}
        <div className="grid grid-cols-7 ">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="text-center text-[8px] sm:text-[12px] lg:text-[14px] font-medium text-gray-500"
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
                className={`text-center text-[6px] sm:text-[8px] lg:text-[10px] mx-1 p-[4px] lg:mx-7 md:mx-4 xl:mx-10 sm:p-1   ${
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


      {/* No Upcoming Appointments */}
      <div className="flex flex-col items-center justify-center w-full p-3 gap-y-[2px]">
        <CalendarTodayOutlinedIcon
          className="text-primary-color"
          style={{ fontSize: 22, margin: 2 }}
        />
        <p className="text-[10px] text-center sm:text-xs text-gray-600 font-semibold">No upcoming appointments</p>
      </div>

      {/* Make Appointment Button */}
      <div className="w-full">
        <button className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px]  ">
          Make an appointment
        </button>
      </div>
    </div>
  );
}

