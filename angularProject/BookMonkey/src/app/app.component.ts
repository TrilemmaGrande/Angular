import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  book: Book | null = null;

  showDetails(book: Book) {
    this.book = book;
  }
  showList() {
    this.book = null;
  }
}
