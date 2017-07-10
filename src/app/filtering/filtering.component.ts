import {Component, OnInit} from '@angular/core';
import {DataService}       from "../data.service";
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
  delimiter = "";
  count = "0 резултата";
  P = "0 лв. - 200 лв.";

  constructor(private dataServices: DataService) {
  }

  ngOnInit() {
    this.slider_jq_ui()
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
    this.rate = Number(element.getAttribute("data-rate"));
    this.rateActive = true;
  }


  getPrice() {
    this.price = $("#slider").slider("option", "values");
    this.priceActive = true;
    if (this.priceActive) {
      this.delimiter = "-";
      this.P = '';
    }
  }

  slider_jq_ui() {
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
  }


}
