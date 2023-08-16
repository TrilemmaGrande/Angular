import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn/learn.component';
import { HttpClientModule } from '@angular/common/http';
import { LearnModule } from './learn/learn.module';
import { SharedModule } from './shared/shared.module';
import { CheckComponent } from './check/check.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    CheckComponent,
    ExamComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LearnModule, SharedModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
