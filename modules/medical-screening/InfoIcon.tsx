import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface InfoIconProps {
  info: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({info}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleIconClick = () => {
    setShowTooltip((prev) => !prev);
  };

  return (
    <span className="relative text-primary-color cursor-pointer" onClick={handleIconClick}>
      <IoMdInformationCircleOutline className="w-10 h-10" />
      {showTooltip && (
        <div className="absolute top-full left-0 mt-2 w-64 p-2 bg-gray-200 border border-gray-300 rounded shadow-lg text-sm text-black">
          <div className="pl-4" dangerouslySetInnerHTML={{ __html: info }}/> 
        </div>
      )}
    </span>
  );
};

export default InfoIcon;
