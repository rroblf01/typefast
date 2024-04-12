import { Component } from '@angular/core';
import { TimernoticeComponent } from './component/timernotice/timernotice.component';
import { WritingpadComponent } from './component/writingpad/writingpad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimernoticeComponent, WritingpadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typefast';
}
