import {Component, ViewChild, ElementRef} from '@angular/core';
import {DataService}       from "../data.service";
import * as noUiSlider from 'nouislider';
import nouislider from 'nouislider';

@Component({
  selector: 'filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']

})
export class FilteringComponent {
  booksResult = [];
  selectedGenre = [];
  rate: number;
  price: number[];
  rateActive: boolean = false;
  priceActive: boolean = false;
  count:number;

  @ViewChild('slider') slider: ElementRef;

  constructor(private dataServices: DataService) {

  }

  genres = [
    {title: 'Фентъзи'},
    {title: 'Драма'},
    {title: 'Трилър'},
    {title: 'Романи'},
    {title: 'Литература'},
    {title: 'История'},
    {title: 'Наука'}
  ];

  filter(value: string) {
    let index = this.selectedGenre.indexOf(value);
    if (index > -1) {
      this.selectedGenre.splice(index, 1);
    } else {
      this.selectedGenre.push(value);
    }

    this.dataServices.getJSON(this.selectedGenre, this.rate, this.price, this.rateActive, this.priceActive).subscribe(
      respond => {
        this.booksResult = respond;
        this.count = this.booksResult.length;
      }
    )
  }

  getRate(element) {
    this.rate = Number(element.target.getAttribute("data-rate"));
    this.rateActive = true;
  }

  initialPrice: number[] = [1, 199];
  from = this.initialPrice[0];
  to = this.initialPrice[1];

  getPrice(price: number[]) {
    this.priceActive = true;
    this.price = price;
    this.from = price[0];
    this.to = price[1];
  }


}
