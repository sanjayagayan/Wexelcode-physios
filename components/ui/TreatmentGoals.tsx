'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface TreatmentGoalsProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
  totalHours: number;
  timeFrame: string;
}

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart: any) {
    const { ctx, width, height } = chart;
    const text = chart.config.options.plugins.centerText.text;
    ctx.restore();

    const fontSize = 25; 
    ctx.font = `${fontSize}px inter font-black`; 
    ctx.textBaseline = 'middle';

    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

Chart.register(centerTextPlugin);

const TreatmentGoals: React.FC<TreatmentGoalsProps> = ({ data, totalHours, timeFrame }) => {
  const options = {
    plugins: {
      centerText: {
        text: `${totalHours} hrs`,
      },
      legend: {
        display: false,
      },
    },
    cutout: '65%', 
  };

  return (
    <div className="bg-white rounded-2xl shadow py-3 px-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className=" text-[17px] sm:text-[22px] font-semibold leading-tight">Treatment goals</h2>
        <div className="bg-gray-100 text-gray-600 rounded-full px-3 sm:px-3 py-2 sm:py-2 text-[10px] sm:text-sm ">
          <p className='text-nowrap'>{timeFrame}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 sm:space-y-0 space-y-3 w-full ">
        <div className=" w-full p-0 sm:p-2 flex justify-center items-center h-[160px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="w-full flex justify-center items-center text-[12px] sm:text-[13px] space-x-6 px-4  ">
          <div className=" w-full space-y-4">
            <div className="flex items-center mb-2">
              <span className="block w-2 h-2 bg-[#1AB0B0] rounded-full mr-2"></span>
              <span >Nek</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="block w-2 h-2 bg-[#FF844B] rounded-full mr-2"></span>
              <span>Strentching</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="block w-2 h-2 bg-[#F85C7F] rounded-full mr-2"></span>
              <span>Balance</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="block w-2 h-2 bg-[#8676FE] rounded-full mr-2"></span>
              <span>Strength</span>
            </div>
          </div>
          <div className="w-1/2 space-y-4  ">
            <div className="flex items-center mb-2">
              <span className=''>10 min</span>
            </div>
            <div className="flex items-end mb-2">
              <span>1 hr</span>
            </div>
            <div className="flex items-end mb-2">
              <span>20 min</span>
            </div>
            <div className="flex items-end mb-2">
              <span>1 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentGoals;
