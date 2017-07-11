import {Directive, HostListener, HostBinding, Output, EventEmitter, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[selectGenre]'
})
export class FilteringDirective implements OnInit {
  btnColor = "#c1c1c1";
  btnSelect = false;

  constructor(private elementRef:ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.firstElementChild.style.display = "none"
  }

  @Output() selectedGenre:EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event.target']) selectGenre(element) {
    this.btnSelect = !this.btnSelect;
    if (this.btnSelect) {
      element.style.backgroundColor = "#5cb85c";
      this.elementRef.nativeElement.firstElementChild.style.display = "initial"
    } else {
      element.style.backgroundColor = "#c1c1c1";
      this.elementRef.nativeElement.firstElementChild.style.display = "none"
    }
    this.selectedGenre.emit(element.getAttribute('data-genre'));
  }

  @HostBinding('style.backgroundColor') get bgColor() {
    return this.btnColor;
  }

}

