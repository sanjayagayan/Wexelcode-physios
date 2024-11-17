'use client';

import { useState } from 'react';
import { FaFlag } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

interface Patient {
  initials: string;
  name: string;
  appointmentType: string;
  time: string;
  details?: {
    age: number;
    lastChecked: string;
    observation: string;
    treatment: string;
  };
}

const patients: Patient[] = [
  {
    initials: 'DW',
    name: 'Denzel White',
    appointmentType: 'Follow up',
    time: '9:00 AM',
    details: {
      age: 28,
      lastChecked: 'Physio\'s name on 21 April 2021',
      observation: 'High fever and cough. Sent to Doctor',
      treatment: '-',
    },
  },
  {
    initials: 'SM',
    name: 'Stacy Mitchell',
    appointmentType: 'Initial talk',
    time: '9:15 AM',
  },
  {
    initials: 'AD',
    name: 'Amy Dunham',
    appointmentType: 'Initial talk',
    time: '9:30 AM',
  },
  {
    initials: 'DJ',
    name: 'Demi Joan',
    appointmentType: 'Follow up',
    time: '9:50 AM',
  },
  {
    initials: 'SM',
    name: 'Susan Myers',
    appointmentType: 'Follow up',
    time: '10:15 AM',
  },
];

interface PatientListProps {
    result: "Green" | "Yellow" | "Red";
}


const PatientList: React.FC<PatientListProps> = ({result}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screenn w-full ">
      <div className="mx-auto bg-white border border-gray-200  rounded-md p-4">
        <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-semibold mb-4">Patient List</h1>
            <p className='flex justify-center items-center gap-x-2 text-[18px] font-semibold'>Today<IoIosArrowDown /></p>
        </div>
        {patients.map((patient, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex items-center justify-between p-4 cursor-pointer ${expandedIndex === index ? 'bg-red-100' : 'bg-gray-50'}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold mr-4">
                  {patient.initials}
                </div>
                <div>
                  <div className="font-bold">{patient.name}</div>
                  <div className="text-gray-600">{patient.appointmentType}</div>
                </div>
              </div>
              <div className="text-white bg-primary-color px-3 py-1 rounded-lg font-semibold">{patient.time}</div>
            </div>
            {expandedIndex === index && patient.details && (
              <div className="p-4 border border-red-200  ">
                <div className="flex justify-between">
                  <div className='flex justify-between items-center w-[70%]'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                       <div className="text-gray-600">Male - {patient.details.age} Years</div>
                       <div className='flex flex-col justify-center items-center'>
                            <FaFlag className={`${
                                    result === "Green"
                                    ? "text-green-600"
                                    : result === "Yellow"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                                } flex items-center w-6 h-6`} />
                            {result} Flag
                        </div>
                    </div>
                    <div className='flex-col space-y-2'>
                        <div className="text-gray-600">Last Checked: {patient.details.lastChecked}</div>
                        <div className="text-gray-600">Observation: {patient.details.observation}</div>
                        <div className="text-gray-600">Treatment: {patient.details.treatment}</div>
                    </div>
                    
                  </div>
                   <div className='flex items-end'>
                      <a href="#" className="text-primary-color underline">Go to profile</a>
                   </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
