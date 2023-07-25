import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.splice(0,0,message);
  }
  clear() {
    this.messages = [];
  }
}
