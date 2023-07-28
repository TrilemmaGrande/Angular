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
  lost : boolean = false;
  

  @HostListener('window:keydown', ['$event'])
  public keyDown(event: KeyboardEvent): void {
    const step : number = 100;
    switch (event.key) {
      case 'a':
        this.posX -= step;
        break;
      case 'w':
        this.posY -= step;
        break;
      case 's':
        this.posY += step;
        break;
      case 'd':
        this.posX += step;
        break;

      default:
        break;
    }
  }
  public mouseOver(){
    this.lost = true;
  }
}
