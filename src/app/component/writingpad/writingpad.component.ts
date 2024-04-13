import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-writingpad',
  standalone: true,
  imports: [],
  templateUrl: './writingpad.component.html',
  styleUrl: './writingpad.component.css'
})
export class WritingpadComponent implements OnInit{
  placeholder: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  correctLetters: number;
  failLetters: number;
  words: string[] = [];
  inputText: any;
  pressedKey: string = '';
  expectedKey: string = '';

  constructor(private counterService: CounterService) {
    this.correctLetters = this.counterService.getCorrects();
    this.failLetters = this.counterService.getFailed();
  }

  ngOnInit() {
    this.words = this.placeholder.split(' ');
    this.inputText = document.getElementById('input-text');
    this.counterService.addElement(this.inputText);
  }

  onKeyUp(event: any) {

    const letter = document.getElementById(`letter_${this.correctLetters}`);
    if (letter === null || !event.target.value) return;
    let isCorrect = false;
    this.pressedKey = event.target.value
    this.expectedKey = this.placeholder[this.correctLetters]
    if (event.target.value === this.placeholder[this.correctLetters]) {
      isCorrect = true;
      this.correctLetters = this.counterService.incCorrect();
    }else {
      this.failLetters = this.counterService.incFailed();
    }

    letter.classList.remove(isCorrect ? 'red' : 'green');
    letter.classList.add(isCorrect ? 'green' : 'red');

    letter.style.textDecoration = 'underline';
    this.inputText.value = '';
  }
}
