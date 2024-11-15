"use client";

import Achievements from "@/components/ui/Achievements";
import AppointmentsNew from "@/components/ui/AppointmentsNew";
import EventCard from "@/components/ui/EventCard";
import InformationSection from "@/components/ui/InformationSection";
import MedicalScreeningCard2 from "@/components/ui/MedicalScreeningCard2";
import MyPlan from "@/components/ui/MyPlan";
import ProgressBar from "@/components/ui/ProgressBar";
import SessionCard from "@/components/ui/SessionCard";
import TreatmentGoals from "@/components/ui/TreatmentGoals";

export default function DashboardPage2() {
  const totalDays = 4;
  const completedDays = 1;
  const eventData = {
    physioName: "Physio's name",
    eventTitle: "Initial talk",
    eventDate: "12.08.2024",
    eventTime: "09:00 AM",
    duration: "30 Min",
  };
  const data = {
    labels: ["Min", "Hr", "Min", "Hrs"],
    datasets: [
      {
        data: [10, 60, 20, 60],
        backgroundColor: ["#1AB0B0", "#FF844B", "#F85C7F", "#8676FE"],
      },
    ],
  };

  const data2 = {
    totalSessions: 3,
    usedSessions: 2,
  };

  return (
    <div className="py-1 space-y-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MedicalScreeningCard2 />
            <SessionCard
              totalSessions={data2.totalSessions}
              usedSessions={data2.usedSessions}
            />
            <EventCard
              physioName={eventData.physioName}
              eventTitle={eventData.eventTitle}
              eventDate={eventData.eventDate}
              eventTime={eventData.eventTime}
              duration={eventData.duration}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
            </div>
            <div className="flex-1 space-y-4">
              <Achievements hours={2} reps={8} totalReps={10} />
              <ProgressBar totalDays={totalDays} completedDays={completedDays} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3">
          <AppointmentsNew />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <MyPlan />
        </div>
        <div className="lg:col-span-2">
          <InformationSection />
        </div>
      </div>
    </div>
  );
}
