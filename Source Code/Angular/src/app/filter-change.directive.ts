import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFilterChange]'
})
export class FilterChangeDirective {

  @Output() appFilterChange:EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges() {
    this.appFilterChange.emit(null);
  }

  constructor() {
console.log("---");
   }
}
