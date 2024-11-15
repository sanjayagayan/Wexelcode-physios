const qs = [
  {
    title: "Current Condition",
    questions: [
      {
        id: 1,
        requiredRef: null,
        question: "Have you been to the doctor for clarification?",
        values: ["yes", "no"],
        type: "RADIO",
      },
      {
        id: 2,
        requiredRef: { id: 1, value: "yes" },
        question: "If yes, write diagnose",
        values: null,
        type: "TEXT",
      },
      {
        id: 3,
        requiredRef: null,
        question: "Allergies?  If yes, to what?",
        values: null,
        type: "CHECK",
      },
      {
        id: 4,
        requiredRef: { id: 3, value: null },
        question: null,
        values: null,
        type: "TEXT",
      },
    ],
  },
];
