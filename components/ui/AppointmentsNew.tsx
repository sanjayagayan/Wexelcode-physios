import React, { useState } from "react";
import SmallCalendarNew from "./SmallCalenderNew";
import AppointmentCardNew from "./AppointmentCardNew";
import { format } from "date-fns";
import { GrEdit } from "react-icons/gr";

const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const upcomingAppointments = [
    {
      title: "1st Consultation",
      name: "Sam Lewis",
      date: "2024-03-11",
      time: "09:20 AM - 11:30 AM",
    },
    {
      title: "Follow up",
      name: "Suzie Smith",
      date: "2024-03-20",
      time: "11:40 AM - 01:30 PM",
    },
  ];

  const appointments = [
    {
      id: 1,
      title: "1st Consultation",
      with: "Sam Lewis",
      date: new Date(2024, 2, 11, 9, 20),
      end: new Date(2024, 2, 11, 11, 30),
    },
    {
      id: 2,
      title: "Follow up",
      with: "Suzie Smith",
      date: new Date(2024, 2, 20, 11, 40),
      end: new Date(2024, 2, 20, 13, 30),
    },
    {
      id: 3,
      title: "Review",
      with: "Sam Lewis",
      date: new Date(2024, 2, 11, 9, 20),
      end: new Date(2024, 2, 11, 11, 30),
    },
    {
      id: 4,
      title: "Follow up",
      with: "Suzie Smith",
      date: new Date(2024, 2, 20, 11, 40),
      end: new Date(2024, 2, 20, 13, 30),
    },
    {
      id: 5,
      title: "Review",
      with: "Sam Lewis",
      date: new Date(2024, 2, 11, 9, 20),
      end: new Date(2024, 2, 11, 11, 30),
    },
    {
      id: 6,
      title: "Follow up",
      with: "Suzie Smith",
      date: new Date(2024, 2, 20, 11, 40),
      end: new Date(2024, 2, 20, 13, 30),
    },
  ];

  const filteredAppointments = selectedDate
    ? upcomingAppointments.filter(
        (appointment) =>
          format(new Date(appointment.date), "yyyy-MM-dd") ===
          format(selectedDate, "yyyy-MM-dd")
      )
    : [];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-primary-color font-semibold text-lg text-center mb-4">
        Upcoming appointment
      </h2>
      <SmallCalendarNew
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      {selectedDate && (
        <div className="mb-4">
          <h3 className="text-center font-medium text-gray-700 mb-2 text-sm pt-3">
            Appointments on {format(selectedDate, "MMMM dd, yyyy")}
          </h3>
          <div className="overflow-y-auto max-h-64">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((upcomingAppointments, index) => (
                <AppointmentCardNew
                  key={index}
                  title={upcomingAppointments.title}
                  name={upcomingAppointments.name}
                  date={format(
                    new Date(upcomingAppointments.date),
                    "EEEE, MMMM dd, yyyy"
                  )}
                  time={upcomingAppointments.time}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">
                No appointments for this date.
              </div>
            )}
          </div>
        </div>
      )}

      <h2 className="text-primary-color font-semibold text-lg text-center mt-4 mb-4">
        Appointment history
      </h2>
      {/* List Section */}
      <div
        className="max-h-64 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-[#F0F0F2]
  dark:[&::-webkit-scrollbar-thumb]:bg-primary-color"
      >
        <div className="max-h-full pr-8 relative" style={{ paddingRight: "15px" }}>
          <div
            className="absolute left-3 top-0 h-full"
            style={{ borderLeft: "2px solid #A51008", paddingRight: "5px" }}
          ></div>

          {appointments.map((appointment) => (
            <div key={appointment.id} className="mb-8 flex items-start relative">
              <div className="w-6 h-6 bg-primary-color rounded-full flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-black/70 font-medium">
                  with <span className="underline">{appointment.with}</span>
                </p>
                <div className="text-gray-500 text-[13px] font-light">
                  {format(appointment.date, "EEEE, dd MMMM yyyy")} <br />
                  {format(appointment.date, "hh:mm a")} -{" "}
                  {format(appointment.end, "hh:mm a")}
                </div>
              </div>
              <button className="flex ml-auto items-center p-2 text-primary-color border border-primary-color rounded-md hover:bg-primary-color hover:text-white">
                <GrEdit className="mr-1" /> Notes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
