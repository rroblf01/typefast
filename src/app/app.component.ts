import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(TimernoticeComponent) timernoticeComponent!: TimernoticeComponent;
  @ViewChild(WritingpadComponent) writingpadComponent!: WritingpadComponent;
  title = 'typefast';

  constructor() {}

  toggleBlur() {
    const blurEl = document.getElementById("blur");
    blurEl?.classList.toggle("active");
  
    const popupEl = document.getElementById("popup");
    popupEl?.classList.toggle("active");

    this.timernoticeComponent.start();
    this.writingpadComponent.start();
  }

}
