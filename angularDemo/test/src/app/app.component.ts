import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posX: number = 500;
  posY: number = 500;
  posSuffix: string = 'px';

  @HostListener('window:keydown', ['$event'])
  public keyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'a':
        this.posX -= 5;
        break;
      case 'w':
        this.posY -= 5;
        break;
      case 's':
        this.posY += 5;
        break;
      case 'd':
        this.posX += 5;
        break;

      default:
        break;
    }
  }
}
