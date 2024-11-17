"use client";

import { useState } from "react";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  languages: string[];
  screeningResult: string;
  dateOfBirth: string;
}

const patients: Patient[] = [
  {
    id: 1,
    name: "Patient 1",
    age: 28,
    gender: "Male",
    languages: ["German", "English"],
    screeningResult: "Green",
    dateOfBirth: "1987-03-10",
  },
  {
    id: 2,
    name: "Patient 2",
    age: 28,
    gender: "Male",
    languages: ["German"],
    screeningResult: "Red",
    dateOfBirth: "1987-03-10",
  },
  {
    id: 3,
    name: "Patient 3",
    age: 28,
    gender: "Male",
    languages: ["English"],
    screeningResult: "Yellow",
    dateOfBirth: "1987-03-10",
  },
  {
    id: 4,
    name: "Patient 4",
    age: 28,
    gender: "Male",
    languages: ["German", "English"],
    screeningResult: "Green",
    dateOfBirth: "1987-03-10",
  },
  {
    id: 5,
    name: "Patient 5",
    age: 28,
    gender: "Male",
    languages: ["German"],
    screeningResult: "Red",
    dateOfBirth: "1987-03-10",
  },
  {
    id: 6,
    name: "Patient 6",
    age: 28,
    gender: "Male",
    languages: ["English"],
    screeningResult: "Yellow",
    dateOfBirth: "1987-03-10",
  },
];

const PatientsCardList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full 2xl:w-[90%] xl:w-[80%]">
       <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-5">
          Patients
        </h1>
      </div>
      <div className="flex flex-col px-8 sm:px-10  ">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Patients"
            className="w-full p-[10px] border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="p-4  rounded-lg bg-white"
              style={{ border: "1px solid #A51008" }}
            >
              <div className="flex flex-row items-center mb-2">
                <div className="w-16 h-16 rounded-full bg-primary-color/20 flex items-center justify-center text-lg font-semibold mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5v-7.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14L5.84 10.578A12.083 12.083 0 0112 21.5v-7.5z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="font-semibold">{patient.name}</div>
                  <div className="text-gray-600">
                    {patient.gender} - {patient.age} Years
                  </div>
                  <div className="flex space-x-2 pt-2">
                    {patient.languages.map((language) => (
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
                      patient.screeningResult === "Green"
                        ? "text-green-600"
                        : patient.screeningResult === "Red"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {patient.screeningResult}
                  </span>
                </div>
                <div className="text-gray-600 flex flex-col">
                   <p className="font-bold text-gray-800">Date of Birth</p>
                  <span>{patient.dateOfBirth}</span> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsCardList;
