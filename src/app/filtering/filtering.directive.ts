import {Directive, HostListener, HostBinding, Output, EventEmitter, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[selectGenre]'
})
export class FilteringDirective implements OnInit{
  btnColor = "#c1c1c1";
  btnSelect = false;

  constructor(private elementRef:ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.firstElementChild.style.display = "none"
  }

  @Output() selectedGenre:EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event.target']) selectGenre(element) {
    if(element["localName"] !== "img"){
      this.btnSelect = !this.btnSelect;
      if (this.btnSelect) {
        this.elementRef.nativeElement.firstElementChild.style.display = "initial";
        element.style.backgroundColor = "#5cb85c";
      } else {
        this.elementRef.nativeElement.firstElementChild.style.display = "none";
        element.style.backgroundColor = "#c1c1c1";
      }
      this.selectedGenre.emit(element.getAttribute('data-genre'));
    }

  }

  @HostBinding('style.backgroundColor') get bgColor() {
    return this.btnColor;
  }

}

