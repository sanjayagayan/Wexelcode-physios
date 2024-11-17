'use client';

import { FC, useState, useCallback } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface MedicalScreeningProps {
  date: string;
  status: string;
  result: string;
  summary: { color: string; count: number }[];
  actions: string[];
  questions: {
    title: string;
    checkedInAppointment: boolean;
    questions: {
      question: string;
      answer: string | boolean;
      type: 'text' | 'boolean';
    }[];
  }[];
}

const MedicalScreeningView: FC<MedicalScreeningProps> = ({
  date,
  status,
  result,
  summary,
  actions,
  questions,
}) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // Memoize the toggle function to avoid re-creating it on each render
  const toggleSection = useCallback(
    (idx: number) => {
      setExpandedSection(expandedSection === idx ? null : idx);
    },
    [expandedSection]
  );

  return (
    <div >
      <h1 className="text-xl font-semibold mb-4">Medical Screening nº 1:</h1>

      <div className="flex justify-start space-x-10 w-full mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Date:</span>
          <span className="font-medium">{date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Status:</span>
          <span className="font-medium">{status}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Result:</span>
          <span className="font-medium">
            {result} {result === 'Red' ? '🚩' : result === 'Green' ? '🟢' : '🟡'}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">Summary</h4>
          <div className="flex space-x-4">
            {summary.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-gray-700">{item.count} answers</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Course of Action</h4>
          <select className="p-2 border rounded">
            {actions.map((action, idx) => (
              <option key={idx} value={action}>
                {action}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="text-blue-500 mb-4">See all Results</button>

      <table className="w-full border-collapse border border-gray-200">
        <tbody>
          {questions.map((section, idx) => (
            <tr key={idx} className="border-b">
              <td className="font-semibold cursor-pointer border border-gray-200">
                <div
                  className={`flex justify-between items-center p-2 ${
                    expandedSection === idx
                      ? 'bg-primary-color text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => toggleSection(idx)}
                >
                  <span>{section.title}</span>
                  {expandedSection === idx ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {expandedSection === idx && (
                  <div className="border border-gray-200 p-2 bg-primary-color/10">
                    {section.questions.map((q, qIdx) => (
                      <div key={qIdx} className="mb-2 flex justify-between items-center p-1">
                        <div className="font-medium">{q.question}</div>
                        {q.type === 'text' ? (
                          <div className="text-gray-700">{q.answer}</div>
                        ) : (
                          <div className="flex space-x-4 mt-1">
                            <label className="flex items-center space-x-1">
                              <input type="radio" checked={q.answer === true} readOnly />
                              <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-1">
                              <input type="radio" checked={q.answer === false} readOnly />
                              <span>No</span>
                            </label>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="text-sm text-gray-600 mt-2 p-1">
                      Checked in Appointment: {section.checkedInAppointment ? 'Yes' : 'No'}
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalScreeningView;
