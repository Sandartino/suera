import {Component} from '@angular/core';
import {DataService} from "../data.service";
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
  books = [];
  booksResult = [];
  rate: string;
  previousRate: number;
  rateIsClicked: boolean = false;

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

  genreFilter(value) {
    let index = this.selectedGenre.indexOf(value);
    if (index > -1) {
      this.selectedGenre.splice(index, 1);
    } else {
      this.selectedGenre.push(value);
    }

    //this.books = [];
    this.booksResult = [];
  }

  rateFilter(element) {
    this.rateIsClicked = true;
    this.rate = element.getAttribute("data-rate");
  }

  result() {
    this.dataServices.getJSON().subscribe(
      obj => {
        let toArray = [];
        for (let key in obj) {
          if (this.selectedGenre.includes(key)) {
            toArray.push(obj[key]);
          }
        }

        for (let i = 0; i < toArray.length; i++) {
          for (let k = 0; k < toArray[i].length; k++) {
            if (this.rateIsClicked) {
              let rate = +this.rate;
              this.booksResult = this.books.filter(function (obj) {
                return obj.rate == rate;
              });

            } else {
              this.books.push(toArray[i][k]);
              this.booksResult.push(toArray[i][k]);
            }
          }
        }


      }
    );

    //return this.booksResult
  }


}
