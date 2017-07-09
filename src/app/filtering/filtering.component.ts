import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {forEach} from "@angular/router/src/utils/collection";
// import * as jQuery from './@types/jquery';
declare var $: any;

@Component({
  selector: 'filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {
  selectedGenre = [];
  // imageUrl:string;
  booksResult = [];
  rate: number;
  rateActive: boolean = false;
  priceActive: boolean = false;
  price:number[];

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
    {title: 'Художествена лит.'},
    {title: 'Исторически'},
    {title: 'Научна лит.'}
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
        this.booksResult = respond
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

  }

  slider_jq_ui() {
    $("#slider").slider({
      range: true,
      min: 0,
      max: 200,
      step:10,
      values: [10, 190],
      slide: function (event, ui) {
        $("#amountMin").val(ui.values[0] + " лв.");
        $("#amountMax").val(ui.values[1] + " лв.");
      }
    });
    /*$( "#amount" ).val(ui.values[ 0 ] + " лв." + "     " +ui.values[ 1 ] + " лв.");*/
  }


}
