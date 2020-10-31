import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private timer;
  private currentTime = 0;

  get time(): string {
    if (this.currentTime > 60) {
      return `${this.currentTime / 60} minutes`;
    }

    return `${this.currentTime} seconds`;
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  resetTimer(): void {
    this.stopTimer();
    this.currentTime = 0;
  }
}
