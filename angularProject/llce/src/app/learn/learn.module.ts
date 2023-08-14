import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnListComponent } from './learn-list/learn-list.component';
import { LearnSingleComponent } from './learn-single/learn-single.component';
import { LearnRoutingModule } from './learn-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from '../question/question.component';


@NgModule({
  declarations: [LearnSingleComponent, LearnListComponent, QuestionComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    HttpClientModule,
  ],
})
export class LearnModule {}
