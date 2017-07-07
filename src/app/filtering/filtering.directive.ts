import {Directive, HostListener, HostBinding, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[selectGenre]'
})
export class FilteringDirective {
  btnColor = "#c1c1c1";
  btnSelect = false;

  @Output() selectedGenre: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event.target']) selectGenre(element) {
    this.btnSelect = !this.btnSelect;
    if (this.btnSelect) {
      element.style.backgroundColor = "#5cb85c";
    } else {
      element.style.backgroundColor = "#c1c1c1";
    }
    this.selectedGenre.emit(element.getAttribute('data-genre'));
  }

  @HostBinding('style.backgroundColor') get bgColor() {
    return this.btnColor;
  }

}
