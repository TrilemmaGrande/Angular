export interface Question {
    id: string;
    questionType: string;
    question: string;
    options: string[];
    correctAnswer: string[];
    showAnswer: boolean;
}
