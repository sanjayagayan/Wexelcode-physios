import React from 'react'

const InformationSection = () => {
    const infoList = {
        physiosName: "Physios Name",
        number: 5
    };

  return (
    <div className="bg-white p-6 rounded-md h-full space-y-3 border border-gray-200">
      <p className="text-[12px] sm:text-[20px] font-medium mb-2 sm:mb-3">Welcome</p>
      <p className="text-[14px] sm:text-[20px] font-semibold mb-2 sm:mb-3">{infoList.physiosName}</p>
      <p className='text-[18px] sm:text-[24px] font-normal mb-2 sm:mb-3 flex gap-x-2'>You have <p className='text-primary-color font-semibold'>{infoList.number} </p>appointments today</p>
    </div>
  )
}

export default InformationSection;
