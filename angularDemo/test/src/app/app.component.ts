import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posX: number = 300;
  posY: number = 300;
  posSuffix: string= 'px';
  
  public keyDown(event: KeyboardEvent): void{
    switch (event.key) {
      case "a":
        this.posX--;
        break;
        case "w":
          this.posY++;
        break;
        case "s":
          this.posY--;
        break;
        case "d":
          this.posX++;
        break;
    
      default:
        break;
    }
    this.posY -= 100;
  }
}
