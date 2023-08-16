import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn/learn.component';
import { ExamComponent } from './exam/exam.component';
import { CheckComponent } from './check/check.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'check/:id',
    component: CheckComponent,
  },
  {
    path: 'exam/:id',
    component: ExamComponent,
  },
  {
    path: 'learn',
    component: LearnComponent,
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnModule),
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
