import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {DataService}       from "../data.service";
import * as noUiSlider from 'nouislider';
import {NouisliderModule} from 'ng2-nouislider';
import nouislider from 'nouislider';
declare var $: any;
// import * as jQuery from './@types/jquery';

@Component({
  selector: 'filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']

})
export class FilteringComponent implements OnInit {
  booksResult = [];
  selectedGenre = [];
  rate: number;
  price: number[];
  rateActive: boolean = false;
  priceActive: boolean = false;
  // delimiter = "";
  count = "0 резултата";
  // P = "0 лв. - 200 лв.";

  @ViewChild('slider') slider: ElementRef;

  constructor(private dataServices: DataService, private renderer: Renderer2, private element: ElementRef) {

  }

  ngOnInit() {
    // this.slider_jq_ui()

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
        this.count = this.booksResult.length.toString() + ' резултата';
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
    // this.price = $("#slider").slider("option", "values");
    this.priceActive = true;
    this.price = price;
    this.from = price[0];
    this.to = price[1];
    // if (this.priceActive) {
    //   this.delimiter = "-";
    //   this.P = '';
    // }

  }

  /* slider_jq_ui() {
   $("#slider").slider({
   range: true,
   min: 0,
   max: 200,
   step:10,
   values: [0, 200],
   slide: function (event, ui) {
   $("#amountMin").val(ui.values[0] + " лв.");
   $("#amountMax").val(ui.values[1] + " лв.");
   }
   });
   }*/


}
