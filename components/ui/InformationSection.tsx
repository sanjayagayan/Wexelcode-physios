import React, { useState, useEffect } from 'react'

const InformationSection = () => {
//   const [infoList, setInfoList] = useState<string[]>([]); 
//   const [error, setError] = useState<string | null>(null); 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://your-backend-api-url.com/information'); 
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setInfoList(data); 
//       } catch (e) {
//         // setError(e.message);
//       }
//     };
    
//     fetchData();
//   }, []);
    const infoList = [
        "Physio's notes exercises",
        "Recommendations",
        "Blog posts"
    ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-full ">
      <h1 className="text-[18px] sm:text-2xl font-semibold mb-2 sm:mb-4">Information</h1>
      <ul className="list-disc list-inside space-y-2">
        {infoList.map((item, index) => (
          <li key={index} className="text-gray-700 text-[13px] sm:text-2xl">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default InformationSection;
