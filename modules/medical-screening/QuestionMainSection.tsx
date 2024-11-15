"use client";

import React, { useState } from "react";
import SectionsList from "./SectionsList";
import ProgressBar from "./ProgressBar";
import QuestionsSection from "./QuestionsSection";
import { useRouter } from "next/navigation";
import { FaFlag } from "react-icons/fa6";

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface Question {
  id: string;
  requiredRef?: { id: string; value: string };
  question: string;
  info?: string;
  values?: string[];
  type: QuestionType;
}

interface MedicalScreeningCollection {
  title: string;
  question: Question[];
}

const QuestionMainSection: React.FC = () => {
  const [sections, setSections] = useState<MedicalScreeningCollection[]>([
    {
      title: "Treatment Goals",
      question: [
        {
          id: "q1",
          question: "Do you smoke?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q2",
          question: "Do you exercise regularly?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q3",
          question: "If yes, write diagnose",
          type: "TEXTAREA",
          requiredRef: { id: "q2", value: "Yes" },
        },
      ],
    },
    {
      title: "Current Condition",
      question: [
        {
          id: "q4",
          question: "Are you currently suffering from pain?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q5",
          question:
            "<b>If yes</b>: has it worsened massively in the last 2 weeks?",
          type: "RADIO",
          values: ["Yes", "No"],
          requiredRef: { id: "q4", value: "Yes" },
        },
        {
          id: "q6",
          question: "Have you been to the doctor for clarification?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q7",
          question: "If yes, write diagnose",
          type: "TEXTAREA",
          requiredRef: { id: "q6", value: "Yes" },
        },
        {
          id: "q8",
          question: "If you are a woman:> Are you pregnant?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Mental and Cognitive Health",
      question: [
        {
          id: "q9",
          question:
            " Do you notice any concentration, memory, or other brain performance problems in yourself ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q10",
          question: " Do you suffer from unusual fatigue and/or irritability ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Mobility and Exercise",
      question: [
        {
          id: "q11",
          question:
            "Do you suffer from balance problems, gait problems, or do you sometimes fall ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q12",
          question: "Do you have chest pain under any physical exertion ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q13",
          question:
            "Do you get out of breath quickly with unreasonably low exertion ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q14",
          question:
            "Is there a sudden progressive loss of strength in the arms or legs ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Medications",
      question: [
        {
          id: "q15",
          question:
            "Do you regularly take medication (e.g. blood thinning medication, birth control pills, etc.) ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q16",
          question: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q15", value: "Yes" },
        },
        {
          id: "q17",
          question:
            "Have you taken cortisone for more than 12 weeks in the last 5 years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Chronic Conditions",
      question: [
        {
          id: "q18",
          question:
            "Do you regularly take medication (e.g. blood thinning medication, birth control pills, etc.) ?",
          type: "RADIO",
          values: ["Yes", "No"],
          info: `<ul class="list-disc list-inside">
      <li class="mb-1">First item with custom style</li>
      <li class="mb-1">Second item styled</li>
      <li class="mb-1">Third item styled</li>
    </ul>`,
        },
        {
          id: "q19",
          question: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q18", value: "Yes" },
        },
        {
          id: "q20",
          question: "<b>Do you suffer from:</b>",
          values: [""],
          type: "TOPIC_QUESTION",
        },
        {
          id: "q21",
          question: "High blood pressure >140/95 mmHg?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q22",
          question: "Serious cardiovascular diseases?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q23",
          question:
            "Circulatory problems (e.g. PAVK, varicose veins or similar)?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q24",
          question: "Osteoporosis or Osteopenia?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Surgical History",
      question: [
        {
          id: "q25",
          question: "Have you had any surgery in the last five years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q26",
          question: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q25", value: "Yes" },
        },
        {
          id: "q27",
          question:
            "Do you have a pacemaker or other external items in your body?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q28",
          question: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q27", value: "Yes" },
        },
      ],
    },
    {
      title: "Infectious Diseases",
      question: [
        {
          id: "q29",
          question:
            "	Are there any known infectious diseases? (e.g. hepatitis, HIV, AIDS)",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q30",
          question: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q29", value: "Yes" },
        },
        {
          id: "q31",
          question:
            "Do you have a pacemaker or other external items in your body?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q32",
          question: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q31", value: "Yes" },
        },
      ],
    },
    {
      title: "Health and Lifestyle Habits",
      question: [
        {
          id: "q33",
          question:
            "Have you lost over 10% of your body weight (severe weight loss) in the last 3 months?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q34",
          question: "Have you smoked in the past 7 years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q35",
          question: "If yes,How many cigarettes per day?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q34", value: "Yes" },
        },
      ],
    },
    {
      title: "Other Health Concerns",
      question: [
        {
          id: "q36",
          question: "Have you had any bone fractures in the last 5 years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q37",
          question: "Do you have persistent hoarseness or unusual cough?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "q38",
          question: "<b>Are there any health concerns like:</b>",
          type: "TOPIC_QUESTION",
          values:[""]
        },
        {
          id: "q39",
          question: "<b>Do you suffer from:</b>",
          type: "TOPIC_QUESTION",
          values:[""]
        },
      ],
    },
  ]);
  const [selectedSection, setSelectedSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completedSections, setCompletedSections] = useState<boolean[]>(
    Array(sections.length).fill(false)
  );

  const [showCompletedView, setShowCompletedView] = useState(false);
  const [resultFlag, setResultFlag] = useState<"Green" | "Yellow" | "Red">("Green");
  const [status, setStatus] = useState<string>("In Progress");
  const [completionDate, setCompletionDate] = useState<Date | null>(null);

  const handleSelectSection = (index: number) => {
    setSelectedSection(index);
  };

  const handleToggleCompletion = (index: number) => {
    setCompletedSections((prev) => {
      const newCompletedSections = [...prev];
      newCompletedSections[index] = !newCompletedSections[index];

      if (newCompletedSections[index]) {
        setCompletionDate(new Date());
        setStatus("Completed");
      } else {
        setCompletionDate(null);
        setStatus("In Progress");
      }
      return newCompletedSections;
    });
  };

  const handleAnswerChange = (id: string, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const areAllQuestionsAnswered = () => {
    const currentQuestions = sections[selectedSection].question;

    return currentQuestions.every((question) => {
      if (question.type === "TOPIC_QUESTION") {
        return true;
      }
      if (question.requiredRef) {
        const requiredAnswer = answers[question.requiredRef.id];
        if (requiredAnswer !== question.requiredRef.value) {
          return true;
        }
      }
      return answers[question.id] !== undefined;
    });
  };
  
  const evaluateResultFlag = () => {
    let hasRedFlag = false;
    let hasGreenFlag = false;
    

    for (const id in answers) {
      const answer = answers[id];
      if (answer === "Yes") {
        hasRedFlag = true;
      } else if (answer === "No") {
        hasGreenFlag = true;
      }
    }

    if (hasRedFlag) {
      setResultFlag("Red");
    } else if (hasGreenFlag) {
      setResultFlag("Green");
    } else {
      setResultFlag("Yellow");
    }
  };

  const handleNext = () => {
    if (areAllQuestionsAnswered()) {
      handleToggleCompletion(selectedSection);

      if (selectedSection < sections.length - 1) {
        setSelectedSection(selectedSection + 1);
      }else {
        evaluateResultFlag();
        setShowCompletedView(true);
      }
    } else {
      alert("Please answer all required questions.");
    }
  };

  const handleBack = () => {
    if (selectedSection > 0) {
      setSelectedSection(selectedSection - 1);
    }
  };

  // Medical Screening Completed View
  const MedicalScreeningCompleted = () => {
    const router = useRouter();

    const goToScreening = () => {
      router.push("/screening"); 
    };

    return (
      <div className="p-4 bg-white">
        <h1 className="text-xl font-medium mb-4 text-black/70">Your Progress</h1>
      <ProgressBar
        completedSections={
          completedSections.filter((completed) => completed).length
        }
        totalSections={sections.length}
      />
            <div className=" flex flex-col justify-center items-center h-[500px] space-y-10 ">
              <div className="flex flex-col items-center justify-center space-y-10 ">
                <p className="text-[32px] font-black text-primary-color">Medical screening completed</p>
                <div className=" space-y-5">
                  <p className="text-[20px] font-semibold text-black">Date: {completionDate ? completionDate.toString() : 'No date available'}</p>
                  <p className="text-[20px] font-semibold text-black">Status: {status}</p>
                  <p className={`text-[20px] font-semibold text-[#D81FDB] flex items-center ${ resultFlag === "Green" ? "text-green-600"  : resultFlag === "Red" ? "text-red-600" : "text-yellow-600"}`} >Result: {resultFlag} <FaFlag className={`${
            resultFlag === "Green"
              ? "text-green-600"
              : resultFlag === "Yellow"
              ? "text-yellow-600"
              : "text-red-600"
          } flex items-center ml-2`} /></p>
                  <p className="text-[20px] font-semibold text-black">Next step: {}</p>
                </div>
              </div>

              <div className="bottom-0 flex flex-col justify-center items-end">
                <button 
                  className="w-full bg-primary-color rounded-sm hover:bg-red-700 font-light text-white text-[20px] py-[10px] px-10 mt-[50px] lg:mt-0"
                  onClick={goToScreening}
                >
                  Make an appointment
                </button>
                <span className="py-2 underline cursor-pointer">More</span>
              </div>
          </div>
      </div>
      
    );
  }

  if (showCompletedView) {
    return <MedicalScreeningCompleted />;
  }

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-medium mb-4 text-black/70">Your Progress</h1>
      <ProgressBar
        completedSections={
          completedSections.filter((completed) => completed).length
        }
        totalSections={sections.length}
      />
      <div className="flex flex-wrap mt-4 ">
        <div className="w-full md:w-1/4 p-2 ">
          <h2 className="text-3xl font-semibold mb-2 text-primary-color">
            Sections
          </h2>
          <div className="my-4">
            <SectionsList
              sections={sections}
              selectedSection={selectedSection}
              onSelectSection={handleSelectSection}
              onToggleCompletion={handleToggleCompletion}
              completedSections={completedSections}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 px-20 sm:px-3 md:px-16 my-10">
          <QuestionsSection
            sectionTitle={sections[selectedSection].title}
            questions={sections[selectedSection].question}
            onAnswerChange={handleAnswerChange}
            answers={answers}
          />
          <div className="mt-4 flex justify-between">
            <button
              className={`bg-white text-primary-color border-2 border-primary-color py-2 px-4 rounded ${
                !areAllQuestionsAnswered()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleBack}
              disabled={selectedSection === 0}
            >
              Back
            </button>
            <button
              className={`bg-primary-color text-white py-2 px-4 rounded ${
                !areAllQuestionsAnswered()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!areAllQuestionsAnswered()}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionMainSection;
