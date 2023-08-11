import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnListComponent } from './learn-list/learn-list.component';
import { LearnSingleComponent } from './learn-single/learn-single.component';
import { LearnRoutingModule } from './learn-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LearnSingleComponent,
    LearnListComponent,
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    HttpClientModule
  ],
})
export class LearnModule { }
