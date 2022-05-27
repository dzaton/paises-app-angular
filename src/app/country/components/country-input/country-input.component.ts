import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject();

  word: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300) // No emite el debounce hasta que pasen 300 milesimas de segundo
    ).subscribe( value => {
      this.onDebounce.emit(value)
    });
  }

  search(){
    this.onEnter.emit(this.word);
  }

  pressedKey(  ){
    this.debouncer.next(this.word);
    
  }

}
