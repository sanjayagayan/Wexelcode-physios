interface MedicalScreeningCollection {
  title: string;
  question: Question[];
}

interface Question {
  id: string;
  requiredRef?: { id: string; value: string[] };
  question: string;
  values?: string;
  info?: string;
  type: QuestionType;
  subtitle: string;
}

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION" ;
