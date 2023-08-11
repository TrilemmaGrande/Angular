import { Component } from '@angular/core';
import { Question } from 'src/app/shared/question';
import * as data from '../../../assets/question101.json';

@Component({
  selector: 'llce-learn-list',
  templateUrl: './learn-list.component.html',
  styleUrls: ['./learn-list.component.css'],
})
export class LearnListComponent {
  questions: Question[] = []


  constructor() { 
  }
  ngOnInit() {
    this.questions = data;
    console.log('Data', this.questions);
}

}
