// types.ts

// Type for a single question
export type QuestionOption = {
  text: string;
  value: string; // Category (e.g., 'dystopian', 'fantasy', etc.)
};

export type Question = {
  question: string;
  options: QuestionOption[];
};

// Type for a banned book recommendation
export type BannedBook = {
  title: string;
  author: string;
  reason: string;
};

// Root stack navigation params
export type RootStackParamList = {
  Welcome: undefined;
  Question: undefined;
  Result: { answers: string[] };
};