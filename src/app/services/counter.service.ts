import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  corrent: number = 0;
  failed: number = 0;
  elements: any[] = [];

  addElement(element: any) {
    this.elements.push(element);
  }

  disableElements() {
    this.elements.forEach((element) => {
      element.disabled = true;
    });
  }

  incCorrect() {
    return ++this.corrent;
  }
  
  incFailed() {
    return ++this.failed;
  }

  getCorrects() {
    return this.corrent;
  }

  getFailed() {
    return this.failed;
  }
}
