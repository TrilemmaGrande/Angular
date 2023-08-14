import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../shared/question';

@Component({
  selector: 'llce-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})

export class QuestionComponent {
  @Input() question?: Question;
  @Input() showAnswer : boolean = false;
}
