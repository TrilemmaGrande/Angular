import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [QuestionComponent],
})
export class SharedModule { }
