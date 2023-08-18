import { Component } from '@angular/core';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'llce-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

rightAnswers: number = 0;
wrongAnswers: number = 0;
skippedAnswers: number = 0;
testPassed: boolean = false;
showSkipped: boolean = false;
showPassed: boolean = false;

constructor(private service: ResultService){
  this.rightAnswers = service.rightAnswers;
  this.wrongAnswers = service.wrongAnswers;
  this.skippedAnswers = service.skippedAnswers;
  this.testPassed = service.testPassed;
  this.showSkipped = service.showSkipped;
  this.showPassed = service.showPassed;
}
}
