import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Question } from 'src/app/shared/question';
import { QuestionService } from 'src/app/shared/question.service';

@Component({
  selector: 'llce-learn-single',
  templateUrl: './learn-single.component.html',
  styleUrls: ['./learn-single.component.css'],
})
export class LearnSingleComponent {
  question$: Observable<Question>;
  questions$: Observable<Question[]>
  pageID: string;
  tempQuestionsLength$: Observable<number>;
  questionsLength: number = 0;

  constructor(private service: QuestionService, private route: ActivatedRoute, private router: Router) {
    
    this.pageID= this.route.snapshot.paramMap.get('id')!;
    this.question$ = this.service.getSingleQuestion(this.pageID);
    this.questions$ = this.service.getQuestions();
    

    this.tempQuestionsLength$ = this.service.getQuestions().pipe(
      map(questions => questions.length))

    this.tempQuestionsLength$.subscribe(length => {
      this.questionsLength = length;
    })
  }
  showAnswer(question: Question) {
    question.showAnswer = !question.showAnswer;
  }
  nextQuestion(){
    this.pageID= this.route.snapshot.paramMap.get('id')!;
    const nextPage : number = parseInt(this.pageID) + 1;
    if (nextPage <= this.questionsLength) {     
      this.question$ = this.service.getSingleQuestion(nextPage.toString());
      this.router.navigate(['/learnSingle', nextPage])
    }  }
  previousQuestion(){
    this.pageID= this.route.snapshot.paramMap.get('id')!;
    const previousPage : number = parseInt(this.pageID) - 1;
    if (previousPage >= 1) {     
      this.question$ = this.service.getSingleQuestion(previousPage.toString());
      this.router.navigate(['/learnSingle', previousPage])
    }  }

}
