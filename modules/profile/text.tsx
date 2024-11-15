'use client';

import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";
import Modal from "../../components/ui/Modal";
import PersonalInformationForm from "./PersonalInformationForm";
import MedicalForm from "./MedicalInformationForm";
import ImageUploadForm from "./ImageUploadForm";
import PaymentInformationForm from "./PaymentInformationForm";
import { CircularProgressProps, ProfileProps } from './types';

const CircularProgress: React.FC<CircularProgressProps> = ({ screeningProgress, size = 100, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (screeningProgress / 100) * circumference;

  return (
    <svg width={size} height={size} className="relative">
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke="currentColor"
      />
      <circle
        className="text-primary-color"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-lg font-semibold text-gray-700"
      >
        {Math.round(screeningProgress)}%
      </text>
    </svg>
  );
};

const Profile: React.FC<ProfileProps> = ({
  name,
  age,
  country,
  languages,
  phoneNumber,
  address,
  email,
  dob,
  gender,
  weight,
  height,
  activityLevel,
  creditCard,
  tokens,
  screeningProgress,
}) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const [profileData, setProfileData] = useState({
    personal: {
      name,
      email,
      country,
      age,
      languages,
      phoneNumber,
      address,
    },
    medical: {
      age,
      dob,
      gender,
      weight,
      height,
      activityLevel,
    },
    payment: {
      creditCard,
      tokens,
    },
  });

  // Open the modal with dynamic content
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  // Update personal data and close modal
  const updatePersonalData = (data: typeof profileData['personal']) => {
    setProfileData(prevData => ({ ...prevData, personal: data }));
    closeModal();
  };

  // Update medical data and close modal
  const updateMedicalData = (data: typeof profileData['medical']) => {
    setProfileData(prevData => ({ ...prevData, medical: data }));
    closeModal();
  };

  const handleSaveImage = (data: { image: File | null }) => {
    alert('Image uploaded successfully');
  };

  return (
    <div className="w-full">
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      
      <div className="flex space-x-6 mb-6 w-[70%]">
        <div className="w-3/5 bg-white rounded-lg flex items-center space-x-2 p-3 border border-black">
          <div className="flex-1 w-1/2">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/300" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="flex-1 w-1/2 space-y-3">
            <h2 className="text-xl font-semibold">{profileData.personal.name}</h2>
            <p>Age: {profileData.personal.age}</p>
            <p>Country: {profileData.personal.country}</p>
            <p>Language/s: {profileData.personal.languages}</p>
          </div>
        </div>
        
        {/* Medical Screening Card */}
        <div className="w-2/5 bg-white p-4 rounded-lg border border-black">
          <h2 className="text-xl font-semibold text-primary-color mb-4 text-center">Medical Screening</h2>
          <div className="flex items-center justify-center mb-4">
            {screeningProgress ? (
              <div className="w-24 h-24 rounded-full border-4 border-primary-color flex items-center justify-center">
                <CircularProgress screeningProgress={screeningProgress} size={90} strokeWidth={10} />
              </div>
            ) : (
              <FaStethoscope className="mr-2 w-24 h-12 bg-primary-color/20 p-2 rounded-lg" />
            )}
          </div>
          <button className="bg-primary-color text-white py-2 px-4 rounded w-full">
            {screeningProgress ? "Go to screening" : "Start screening now"}
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="p-4 bg-white rounded-lg border border-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button
            className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3"
            onClick={() => openModal(<PersonalInformationForm initialData={profileData.personal} onSave={updatePersonalData} />)}
          >
            Edit
            <FiEdit3 />
          </button>
        </div>
        <div className="grid gap-4 mb-6">
          {Object.entries(profileData.personal).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <p className="font-semibold text-gray-600">{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Medical Information Section */}
      <div className="p-4 bg-white rounded-lg border border-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Overview Medical Information</h2>
          <button
            className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3"
            onClick={() => openModal(<MedicalForm initialData={profileData.medical} onSave={updateMedicalData} />)}
          >
            Edit
            <FiEdit3 />
          </button>
        </div>
        <div className="grid gap-4 mb-6">
          {Object.entries(profileData.medical).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <p className="font-semibold text-gray-600">{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Section (Optional) */}
      <div className="bg-white p-4 rounded-lg mb-6 border border-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Payment Information</h2>
          <button
            className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3"
            onClick={() => openModal(<PaymentInformationForm initialData={profileData.payment} onSave={() => {}} />)}
          >
            Edit
            <FiEdit3 />
          </button>
        </div>
        {/* Additional Payment Info Display */}
      </div>

      {/* Upload Image Section */}
      <div className="bg-white p-4 rounded-lg mb-6 border border-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upload Profile Image</h2>
          <button
            className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3"
            onClick={() => openModal(<ImageUploadForm onSave={handleSaveImage} />)}
          >
            Upload
            <FiEdit3 />
          </button>
        </div>
        {/* Image Upload Preview (If any) */}
      </div>
    </div>
  );
};

export default Profile;
