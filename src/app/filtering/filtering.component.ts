import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {forEach} from "@angular/router/src/utils/collection";
// import * as jQuery from './@types/jquery';
//declare var jQuery:any;

@Component({
  selector: 'filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent {
  selectedGenre = [];
  // imageUrl:string;
  booksResult = [];
  rate: number;
  rateActive:boolean = false;

  constructor(private dataServices: DataService) {
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

  filter(value:string, rateActive:boolean) {
    let index = this.selectedGenre.indexOf(value);
    if (index > -1) {
      this.selectedGenre.splice(index, 1);
    } else {
      this.selectedGenre.push(value);
    }

    this.dataServices.getJSON(this.selectedGenre, this.rateActive, this.rate).subscribe(
      respond => this.booksResult = respond
    )

  }

  getRate(element) {
    this.rate = Number(element.getAttribute("data-rate"));
    this.rateActive = true;
    /*this.dataServices.getRate(rate, this.booksResult).subscribe(
      respond => {
        this.booksResult = respond;
      }
    );*/

  }



}
