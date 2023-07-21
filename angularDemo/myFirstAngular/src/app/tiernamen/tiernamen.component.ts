import { Component } from '@angular/core';

@Component({
  selector: 'mfa-tiernamen',
  templateUrl: './tiernamen.component.html',
  styleUrls: ['./tiernamen.component.css']
})
export class TiernamenComponent {
tierliste: string[] = [
  'Hund', 'Katze', 'Maus'
]
}
