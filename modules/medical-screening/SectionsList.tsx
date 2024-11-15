import React from "react";
import { FaCircle,FaCheckCircle,FaRegCircle } from "react-icons/fa";

interface Section {
  title: string; 
  question: any[]; 
}

interface SectionsListProps {
  sections: Section[];
  selectedSection: number;
  onSelectSection: (index: number) => void;
  onToggleCompletion: (index: number) => void;
  completedSections: boolean[]; 
}

const SectionsList: React.FC<SectionsListProps> = ({
  sections,
  selectedSection,
  onSelectSection,
  onToggleCompletion,
  completedSections,
}) => {
  return (
    <div style={{ backgroundColor: '#D9D9D9', border: '1px solid black' }} >
      {sections.map((section, index) => (
        <div
          key={index}
          className={`cursor-pointer`}
          onClick={() => onSelectSection(index)}
        >
          <div className="flex justify-between  p-3 " style={{ backgroundColor: '#D9D9D9', border: '1px solid black' }} >
            <span className="text-xl">{section.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`text-xl ${completedSections[index] ? "text-green-500" : "text-primary-color"}`}
            >
              {completedSections[index] ? <FaCheckCircle /> : selectedSection === index ? <FaCircle /> : <FaRegCircle />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionsList;
