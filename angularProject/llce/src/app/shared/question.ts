export interface Question {
    questionID: string;
    questionType: string;
    question: string;
    options: string[];
    correctAnswer: string[];
    showAnswer: boolean;
}
