import { Injectable, OnInit } from '@angular/core';
import { Question } from './question';
import { map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class QuestionService {
  
  private dataURL : string = '../../assets/question101.json'
  constructor(private http: HttpClient) {
  }
  
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.dataURL);
  }
  getSingleQuestion(id: string): Observable<Question>{
    return this.http
      .get<Question[]>(this.dataURL) 
      .pipe(
        map((questions) => {
          const question = questions.find((q) => q.questionID == id);
          if (question){

            return question;
          }
          else
          {
            throw console.error("question not included");
            
          }
        })
      );
  }
}
