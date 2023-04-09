// Path: globals\questionaries.js

const questionaries = [
  {
    id: 0,
    question: "Please specify your Gender.",
    type: "text",
    options: ["Male", "Female"],
  },
  {
    id: 1,
    question: "Are you a married person?",
    type: "text",
    options: ["Yes", "No"],
  },
  {
    id: 2,
    question: "How many dependents do you have?",
    type: "numeric",
    options: [0, 1, 2, 3, 4],
  },
  {
    id: 3,
    question: "How's your education level?",
    type: "text",
    options: ["Graduate", "Not Graduate"],
  },
  {
    id: 4,
    question: "Are you a self-employed person?",
    type: "text",
    options: ["Yes", "No"],
  },
  {
    id: 5,
    question: "What is your annual income?",
    type: "numeric",
  },
  {
    id: 6,
    question: "What is the annual income of the co-applicant? ",
    type: "numeric",
  },
  {
    id: 7,
    question: "What is the loan amount you are looking for?",
    type: "numeric",
  },
  {
    id: 8,
    question: "For how long do you want to take the loan? Answer in months.",
    type: "numeric",
  },
  {
    id: 9,
    question:
      "How's your credit history? Answer *Yes* for positive and *No* for negative.",
    type: "numeric",
    options: [1, 0],
  },
  {
    id: 10,
    question: "How is your current residence area?",
    type: "text",
    options: ["Urban", "Rural", "Semiurban"],
  },
];

export default questionaries;
