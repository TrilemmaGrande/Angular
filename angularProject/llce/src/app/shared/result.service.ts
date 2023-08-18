import { Injectable } from '@angular/core';
import { skip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  public rightAnswers: number = 0;
  public wrongAnswers: number = 0;
  public skippedAnswers: number = 0;
  public testPassed: boolean = false;
  public showSkipped: boolean = false;
  public showPassed: boolean = false;

  constructor() {}
  resetValues() {
    this.rightAnswers = 0;
    this.wrongAnswers = 0;
    this.skippedAnswers = 0;
    this.testPassed = false;
    this.showSkipped = false;
    this.showPassed = false;
  }
}
