import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnListComponent } from './learn-list/learn-list.component';
import { LearnSingleComponent } from './learn-single/learn-single.component';

const routes: Routes = [
  {
    path: 'learnList',
    component: LearnListComponent,
  },
  {
    path: 'learnSingle/:questionID',
    component: LearnSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnRoutingModule {}
