'use client';

import React,{ useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { RiBillFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { RiCloseFill } from 'react-icons/ri';
import Modal from '../../components/ui/Modal';

import { FaStethoscope } from "react-icons/fa";
import PersonalInformationForm from "./PersonalInformationForm";
import MedicalForm from "./MedicalInformationForm";
import ImageUploadForm from "./ImageUploadForm";
import PaymentInformationForm from "./PaymentInformationForm";
interface ProfileProps {
  name: string;
  age: number;
  country: string;
  languages: string;
  phoneNumber: string;
  address: string;
  email: string;
  dob: string;
  gender: string;
  weight: number;
  height: number;
  activityLevel: string;
  creditCard: string;
  tokens: number;
  screeningProgress: number;
}

const CircularProgress: React.FC<{
  screeningProgress: number;
  size?: number;
  strokeWidth?: number;
}> = ({ screeningProgress, size = 100, strokeWidth = 8 }) => {
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

  const [isProgressActive, setIsProgressActive] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: name,
    email: email,
    country: country,
    age: age,
    languages: languages,
    phoneNumber:phoneNumber,
    address:address,
  });


  const [medicalData, setMedicalData] = useState({
    age: age,
    dob:dob,
    gender:gender,
    weight:gender,
    height:height,
    activityLevel:activityLevel,
  });

  const [paymentData, setPaymentData] = useState({
    age: age,
    dob:dob,
    gender:gender,
    weight:gender,
    height:height,
    activityLevel:activityLevel,
  });


  const handleButtonClick = () => {
    // setIsProgressActive((prevState) => !prevState);
  };

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  // Function to open the modal with specific content
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const updatePersonalData = (data: React.SetStateAction<{ name: string; email: string; country: string; age: number; languages: string; phoneNumber: string; address: string; }>) => {
    setPersonalData(data);
    closeModal(); // Close the modal after updating
  };

  const updateMedicalData = (data: React.SetStateAction<{ age: number; dob: string; gender: string; weight: string; height: number; activityLevel: string; }>) => {
    setMedicalData(data);
    closeModal(); // Close the modal after updating
  };

  const [imageData, setImageData] = useState({
    image: null,
  });

  // Save updated image data
  const handleSaveImage = (data: { image: File | null }) => {
    setImageData(data);
    alert('Image uploaded successfully');
  };


  function handleSavePaymentInfo(data: { creditCardNumber: string; tokens: number; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full ">
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      <div className="flex space-x-6 mb-6 w-[70%]">
        <div className="w-3/5 bg-white rounded-lg flex items-center space-x-2 p-3 border border-black">
          <div className=" flex-1 w-1/2  ">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/300"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 w-1/2 space-y-3">
            <h2 className="text-xl font-semibold">{personalData.name}</h2>
            <p>Age: {personalData.age}</p>
            <p>Country: {personalData.country}</p>
            <p>Language/s: {personalData.languages}</p>
          </div>
        </div>
        {/* Medical Screening Card */}
        <div className="w-2/5 bg-white p-4 rounded-lg border border-black">
          <h2 className="text-xl font-semibold text-primary-color mb-4 text-center">
            Medical Screening
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              {isProgressActive ? (
                  <div className="w-24 h-24 rounded-full border-4 border-primary-color flex items-center justify-center">
                  <CircularProgress
                    screeningProgress={screeningProgress}
                    size={90}
                    strokeWidth={10}
                  />
                </div>
              ) : (
                <FaStethoscope className="mr-2 w-24 h-12 bg-primary-color/20 p-2 rounded-lg" />
              )}
              
            </div>
          </div>
          <button
            className="bg-primary-color text-white py-2 px-4 rounded w-full "
            aria-label="Go to medical screening"
            onClick={handleButtonClick}
          >
            {isProgressActive ? (
              "Go to screening"
            ) : (
              <>
                 Start screening now
              </>
            )}
          </button>
        </div>
      </div>
      <div className="space-y-6">
        {/* Personal Information Section */}
        <div className="p-4 bg-white rounded-lg border border-black ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <button className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3" 
             onClick={() => openModal(<PersonalInformationForm
              initialData={personalData}
              onSave={updatePersonalData}
            />)}
             >
              Edit
              <FiEdit3 />
            </button>
          </div>
          <div className="grid gap-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Name</p>
                <p>{personalData.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Pronouns</p>
                <p>
                  {gender === "male"
                    ? "He/Him"
                    : gender === "female"
                    ? "She/Her"
                    : "They/Them"}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Age</p>
                <p>{personalData.age}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Phone Number</p>
                <p>{personalData.phoneNumber}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Address</p>
                <p>{personalData.address}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Email</p>
                <p>{personalData.email}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overview Medical Information Section */}
        <div className="p-4 bg-white rounded-lg border border-black ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Overview Medical Information
            </h2>
            <button className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3"
            onClick={() => openModal(<MedicalForm
              initialData={medicalData}
              onSave={updateMedicalData}
            />)}>
              Edit
              <FiEdit3 />
            </button>
          </div>
          <div className="grid gap-4 mb-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Date Of Birth</p>
                <p>{medicalData.dob}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Age</p>
                <p>{medicalData.age}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Gender</p>
                <p>{medicalData.gender}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Weight</p>
                <p>{weight} Kg</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Height</p>
                <p>{height} cm</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Activity level</p>
                <p>{activityLevel}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className=" bg-white  p-4 rounded-lg mb-6 border border-black">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Payment method</h2>
            
            <button className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3" 
            onClick={() => openModal(<PaymentInformationForm
              initialData={paymentInfo}
              onSave={handleSavePaymentInfo}
            />)}>
              Edit
              <FiEdit3 />
            </button>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                {creditCard ? (
                  <p>Credit card: {creditCard}</p>
                ) : (
                  <p>No credit card information available</p>
                )}
              </div>
              <div className="flex flex-col">
                <p>n° Tokens: {tokens}</p>
              </div>
            </div>
          </div>
        </div>


         {/* Upload Image Section */}
        <div className="flex w-full space-x-6">
          <div className="flex w-1/2 flex-col space-y-6">
            <button className="bg-white text-black py-3 px-4 rounded-lg border border-black flex-1 flex items-center justify-between">
              <div className="bg-[#ECD0CF] rounded-full w-16 h-16 flex justify-center items-center">
                <RiBillFill className="w-full h-[60%]" />
              </div>
              <p className="text-xl "> Billing</p>
              <div className="h-10 flex items-center justify-center">
                <IoIosArrowForward className="w-full h-[70%]" />
              </div>
            </button>
            <button className="bg-white text-black py-3 px-4 rounded-lg border border-black flex-1 flex items-center justify-between">
              <div className="bg-[#ECD0CF] rounded-full w-16 h-16 flex justify-center items-center">
                <RiBillFill className="w-full h-[60%]" />
              </div>
              <p className="text-xl "> Start a new Session</p>
              <div className="h-10 flex items-center justify-center">
                <IoIosArrowForward className="w-full h-[70%]" />
              </div>
            </button>
          </div>
          <div className="flex w-1/2 ">
            <button className="bg-white text-black py-2 px-4 rounded flex-2 border border-black flex flex-col space-y-1 items-center justify-center"
              onClick={() => openModal(<ImageUploadForm
                initialData={imageData}
                onSave={handleSaveImage}
              />)}
            >
              <div className="w-12 h-12">
                <LuFiles className="w-full h-full text-green-500" />
              </div>
              <p className="text-[18px] w-[70%] font-semibold">
                Upload medical files
              </p>
              <p className="text-sm ">Left 348.45mb</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};



export default Profile;
