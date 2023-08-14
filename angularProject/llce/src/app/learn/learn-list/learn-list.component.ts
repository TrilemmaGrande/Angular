import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/shared/question';
import { QuestionComponent } from 'src/app/question/question.component';
import { QuestionService } from 'src/app/shared/question.service';
import { LearnModule } from '../learn.module';


@Component({
  selector: 'llce-learn-list',
  templateUrl: './learn-list.component.html',
  styleUrls: ['./learn-list.component.css'],
})
export class LearnListComponent  {
  questions$: Observable<Question[]>;

  constructor(private service: QuestionService) {
    this.questions$ = this.service.getQuestions();
  }
  showAnswer(question: Question) {
    question.showAnswer = !question.showAnswer;
  }
}

 
