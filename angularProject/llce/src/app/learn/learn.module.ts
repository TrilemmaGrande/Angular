import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnListComponent } from './learn-list/learn-list.component';
import { LearnSingleComponent } from './learn-single/learn-single.component';
import { LearnRoutingModule } from './learn-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LearnSingleComponent, LearnListComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    HttpClientModule,
    SharedModule
  ],
})
export class LearnModule {}
