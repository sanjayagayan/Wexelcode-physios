import React from "react";
import InfoIcon from "./InfoIcon";

interface Question {
  id: string;
  requiredRef?: { id: string; value: string };
  question: string;
  values?: string[];
  type: QuestionType;
  info?: string;
}

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface QuestionsSectionProps {
  sectionTitle: string;
  questions: Question[];
  onAnswerChange: (id: string, answer: string) => void;
  answers: Record<string, string>;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  sectionTitle,
  questions,
  onAnswerChange,
  answers,
}) => {

  const renderRadio = (question: Question) => (
    <div>
      {question.values?.map((value) => (
        <label key={value} className="mr-4 text-xl">
          <input
            type="radio"
            name={question.id}
            value={value}
            checked={answers[question.id] === value}
            onChange={() => onAnswerChange(question.id, value)}
            className="w-5"
          />
          {value}
        </label>
      ))}
    </div>
  );

  const renderTextarea = (question: Question) => (
    <textarea
      className="w-[70%] border rounded p-2 text-2xl"
      value={answers[question.id] || ""}
      onChange={(e) => onAnswerChange(question.id, e.target.value)}
      rows={3}
    />
  );

  const renderCheckbox = (question: Question) => (
    <label className="flex items-center text-2xl">
      <input
        type="checkbox"
        checked={answers[question.id] === "true"}
        onChange={() => onAnswerChange(question.id, answers[question.id] === "true" ? "false" : "true")}
        className="mr-2"
      />
      {question.question}
    </label>
  );

  const renderQuestion = (question: Question) => (
    <div key={question.id} className="mb-4 w-full flex gap-x-4 justify-between">
      <div className="flex-1 w-[70%]">
        <div className="mb-2 text-2xl flex items-center">
          <div dangerouslySetInnerHTML={{ __html: question.question }} />
          {question.info && <InfoIcon info={question.info} />}
        </div>
      </div>
      <div className="flex-2 w-[30%] text-right">
        {question.type === "RADIO" && renderRadio(question)}
        {question.type === "TEXTAREA" && renderTextarea(question)}
        {question.type === "CHECKBOX" && renderCheckbox(question)}
      </div>
    </div>
  );

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">{sectionTitle}</h2>
      {questions.map((question) => {
        const shouldRender =
          !question.requiredRef || answers[question.requiredRef.id] === question.requiredRef.value;
        return shouldRender ? renderQuestion(question) : null;
      })}
    </div>
  );
};

export default QuestionsSection;
