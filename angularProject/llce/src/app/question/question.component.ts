import { Component } from '@angular/core';
import { Question } from '../shared/question';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'llce-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions: Question[] = [];

  constructor(private http: HttpClient){
    this.http.get<Question[]>('./assets/question101.json').subscribe(
      (data) => {
        this.questions = data;
      }
    )
  }
}
