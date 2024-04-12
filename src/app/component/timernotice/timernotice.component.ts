import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-timernotice',
  standalone: true,
  imports: [],
  templateUrl: './timernotice.component.html',
})
export class TimernoticeComponent {
  seconds: number = 30;
  intervalId: any;
  hitsPerMinute: string = '...';

  constructor(private counterService: CounterService) {
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      }else {
        clearInterval(this.intervalId);
        this.timeout();
      }
    }, 1000);
  }

  timeout() {
    this.counterService.disableElements();
    this.hitsPerMinute = `${this.counterService.getCorrects() * 2} letras por minuto.`;
  }
}
