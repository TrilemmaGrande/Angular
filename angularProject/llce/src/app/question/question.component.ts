import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../shared/question';


@Component({
  selector: 'llce-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() question?: Question;
  @Input() showAnswer: boolean = false;
  @Output() noAnswerChange = new EventEmitter<boolean>();
  @Output() rightAnswerChange = new EventEmitter<boolean>();

  private _noAnswer: boolean = false;
  private _rightAnswer: boolean = false;
  selectedCheckboxes: boolean[] = [];

  get noAnswer(): boolean {
    return this._noAnswer;
  }

  set noAnswer(value: boolean) {
    this._noAnswer = value;
    this.noAnswerChange.emit(value);
  }

  get rightAnswer(): boolean {
    return this._rightAnswer;
  }

  set rightAnswer(value: boolean) {
    this._rightAnswer = value;
    this.rightAnswerChange.emit(value);
  }
  testGivenAnswersMC() {
    const mcAnswers: number[] = [];
    this.selectedCheckboxes.forEach((isChecked, index) => {
      if (isChecked) {
        mcAnswers.push(index);
      }
    });
    const answerArray: string[] = this.numbersToChars(mcAnswers);

    if (answerArray.length > 0) {
      if (
        answerArray.length == this.question?.correctAnswer.length &&
        answerArray.every(
          (element, index) => element === this.question?.correctAnswer[index]
        )
      ) {
        this.rightAnswer = true;
        this.noAnswer = false;
      } else {
        this.rightAnswer = false;
        this.noAnswer = false;
      }
    } else {
      this.rightAnswer = false;
      this.noAnswer = true;
    }
  }
  testGivendAnswersSC(optionIndex: number) {
    const answerChar: string = ['A', 'B', 'C', 'D', 'E', 'F'][optionIndex];

    if (answerChar.length > 0) {
      if (answerChar == this.question?.correctAnswer[0]) {
        this.rightAnswer = true;
        this.noAnswer = false;
      } else {
        this.rightAnswer = false;
        this.noAnswer = false;
      }
    } else {
      this.rightAnswer = false;
      this.noAnswer = true;
    }
  }
  testGivenAnswersFI(optionString: string) {
    if (optionString.length > 0) {
      if (optionString == this.question?.correctAnswer[0]) {
        this.rightAnswer = true;
        this.noAnswer = false;
      } else {
        this.rightAnswer = false;
        this.noAnswer = false;
      }
    } else {
      this.rightAnswer = false;
      this.noAnswer = true;
    }
  }

  numbersToChars(numberArr: number[]): string[] {
    return numberArr.map((element) => ['A', 'B', 'C', 'D', 'E', 'F'][element]);
  }
}
