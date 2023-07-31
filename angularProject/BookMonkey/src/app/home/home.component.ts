import { Component } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: BookStoreService) {}

  reset() {
    this.service.reset().subscribe();
  }
}
