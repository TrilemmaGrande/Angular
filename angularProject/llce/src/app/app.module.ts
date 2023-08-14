import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn/learn.component';
import { CheckComponent } from './check/check/check.component';
import { ExamComponent } from './exam/exam/exam.component';
import { ResultComponent } from './result/result/result.component';

import { HttpClientModule } from '@angular/common/http';
import { LearnModule } from './learn/learn.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    CheckComponent,
    ExamComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LearnModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
