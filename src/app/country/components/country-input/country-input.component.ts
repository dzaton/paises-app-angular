import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  constructor() { }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  word: string = '';

  search(){
    this.onEnter.emit(this.word);
  }

}
