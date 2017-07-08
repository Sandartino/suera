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
  booksBackUp = [];
  rate: string;
  previousRate:number;
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

    this.dataServices.getJSON().subscribe(
      obj => {
        let toArray = [];

        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (this.selectedGenre.includes(key)) {
              toArray.push(obj[key]);
            }
          }
        }

        for (let i = 0; i < toArray.length; i++) {
          for (let k = 0; k < toArray[i].length; k++) {
            if (this.rateIsClicked) {
              if (toArray[i][k]["rate"] === +this.rate) {
                this.books.push(toArray[i][k])
              }
            } else {
              this.books.push(toArray[i][k])
            }
          }
        }

      }
    );
    this.booksBackUp = this.books.slice();
    console.log(this.booksBackUp)
    this.books = [];
  }

  rateFilter(element) {
    this.rateIsClicked = true;
    this.rate = element.getAttribute("data-rate");

    if(this.previousRate !== +this.rate){
      this.previousRate = +this.rate;
    }
    // console.log(this.books)
    // this.books = this.booksBackUp.slice();
    // console.log(this.books)

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i]["rate"] != +this.rate) {
        this.books.splice(i, 1);
        i--;
      }
    }

  }

}
