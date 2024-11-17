'use client';

import { FC, useState } from 'react';
import MedicalScreeningView from './MedicalScreeningView';

interface PatientDetailProps {
  name: string;
  age: number;
  gender: string;
  languages: string[];
  screeningResult: string;
  dateOfBirth: string;
  salutation: string;
  lastAppointment: string;
  nextAppointment: string;
  email: string;
  weight: string;
  height: string;
  activityLevel: string;
}

const PatientDetail: FC<PatientDetailProps> = ({
  name,
  age,
  gender,
  languages,
  screeningResult,
  dateOfBirth,
  salutation,
  lastAppointment,
  nextAppointment,
  email,
  weight,
  height,
  activityLevel,
}) => {
  
  const [activeTab, setActiveTab] = useState<string>('Overview');


  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className='w-full 2xl:w-[80%] xl:w-[70%]  border border-primary-color p-12'>
            <div className="flex items-center mb-2 gap-4">
              <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5v-7.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14L5.84 10.578A12.083 12.083 0 0112 21.5v-7.5z" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                  <div className="font-semibold text-[22px]">{name}</div>
                  <div className="text-gray-600">
                    {gender} - {age} Years
                  </div>
                  <div className="flex space-x-2 pt-2">
                    {languages.map((language) => (
                      <span
                        key={language}
                        className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full pt-4">
                <div className="text-gray-600 mb-1 flex flex-col">
                  <p className="font-bold text-gray-800">Screening result</p>
                  <span
                    className={`font-semibold ${
                      screeningResult === "Green"
                        ? "text-green-600"
                        : screeningResult === "Red"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {screeningResult}
                  </span>
                </div>
                <div className="text-gray-600 flex flex-col">
                   <p className="font-bold text-gray-800">Date of Birth</p>
                  <span>{dateOfBirth}</span> 
                </div>
              </div>
              <div className="flex justify-between w-full pt-4">
                <div className="text-gray-600 mb-1 flex flex-col">
                  <p className="font-bold text-gray-800">Salutation</p>
                  <span>
                    {salutation}
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-full pt-4">
                <div className="text-gray-600 mb-1 flex flex-col">
                  <p className="font-bold text-gray-800">Last Appointment</p>
                  <span>
                    {lastAppointment}
                  </span>
                </div>
                <div className="text-gray-600 flex flex-col">
                   <p className="font-bold text-gray-800">Next Appointment</p>
                  <span>{nextAppointment}</span> 
                </div>
              </div>
              <div className="flex justify-between w-full pt-4">
                <div className="text-gray-600 mb-1 flex flex-col">
                  <p className="font-bold text-gray-800">Contact Information</p>
                  <span>
                    {email}
                  </span>
                </div>
              </div>
              <div className='pt-4'>
                 <p className='text-gray-800 font-semibold'>Medical Information</p>
                 <div className="flex justify-between w-full pt-2">
                    <div className="text-gray-600 mb-1 flex flex-col">
                      <p className="font-bold text-gray-800">Weight</p>
                      <span>
                        {weight}
                      </span>
                    </div>
                    <div className="text-gray-600 flex flex-col">
                      <p className="font-bold text-gray-800">Height</p>
                      <span>{height}</span> 
                    </div>
                    <div className="text-gray-600 flex flex-col">
                      <p className="font-bold text-gray-800">Activity Level</p>
                      <span>{activityLevel}</span> 
                    </div>
                </div>
              </div>
              
            </div>         
        );
      case 'Appointments':
        return (
          <div>
            <div className="text-gray-600">Last Appointment</div>
            <div className="font-semibold">{lastAppointment}</div>
            <div className="text-gray-600">Next Appointment</div>
            <div className="font-semibold">{nextAppointment}</div>
          </div>
        );
      case 'Treatment':
        return <div>Treatment content goes here...</div>;
      case 'Medical Screening':
        return <div><MedicalScreeningView
        date="2024-11-13"
        status="Completed"
        result="Green"
        summary={[
          { color: 'red', count: 2 },
          { color: 'green', count: 5 },
          { color: 'yellow', count: 3 },
        ]}
        actions={['Follow-up appointment', 'Prescribe medication', 'Schedule therapy']}
        questions={[
          {
            title: 'General Health Check',
            checkedInAppointment: true,
            questions: [
              { question: 'Do you experience frequent headaches?', answer: true, type: 'boolean' },
              { question: 'How many hours of sleep do you get per night?', answer: '7-8 hours', type: 'text' },
            ],
          },
          {
            title: 'Diet and Nutrition',
            checkedInAppointment: false,
            questions: [
              { question: 'Do you follow a balanced diet?', answer: false, type: 'boolean' },
              { question: 'How many meals do you eat per day?', answer: '3 meals', type: 'text' },
            ],
          },
        ]}
      />
      </div>;  // MedicalScreeningComponent
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-[80%]">
      <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-5">
          Patient&apos;s Name
        </h1>
      </div>
      <div className="px-8 sm:px-10 rounded-md ">
        {/* Top Navigation */}
        <div className="border-b border-gray-200 mb-4">
          <ul className="flex cursor-pointer no-text-cursor" >
            {['Overview','Medical Screening', 'Appointments', 'Treatment'].map((tab) => (
              <li
                key={tab}
                className={`px-3 py-2 cursor-pointer ${
                  activeTab === tab ? 'text-white bg-primary-color font-semibold' : 'text-white bg-primary-color/30 font-medium'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        <div className=" border border-red-600 p-4 bg-white ">{renderContent()}</div>
      </div>
    </div>
  );
};

export default PatientDetail;
