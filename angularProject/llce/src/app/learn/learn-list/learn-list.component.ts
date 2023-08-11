import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/question';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'llce-learn-list',
  templateUrl: './learn-list.component.html',
  styleUrls: ['./learn-list.component.css'],
})
export class LearnListComponent implements OnInit {
  questions: Question[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.http.get<Question[]>('../../../assets/question101.json').subscribe(
      (data) => {
        this.questions = data;
        console.log('Data', this.questions);
      },
      (error) => {
        console.error('Error loading questions', error);
      }
    );
  }
}
