import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/shared/question';
import { QuestionService } from 'src/app/shared/question.service';

@Component({
  selector: 'llce-learn-single',
  templateUrl: './learn-single.component.html',
  styleUrls: ['./learn-single.component.css'],
})
export class LearnSingleComponent {
  question$: Observable<Question>;

  constructor(
    private service: QuestionService,
    private route: ActivatedRoute,
  ) {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.question$ = this.service.getSingleQuestion(id);
  }
  showAnswer(question: Question) {
    question.showAnswer = !question.showAnswer;
  }
}
