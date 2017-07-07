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
  books = [];

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
  // genresLatin = [
  //   {latin: 'fantasy'},
  //   {latin: 'drama'},
  //   {latin: 'thriller'},
  //   {latin: 'romans'},
  //   {latin: 'literature'},
  //   {latin: 'history'},
  //   {latin: 'science'}
  // ]


  onSelect(value) {
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
              toArray.push(obj[key])
            }
          }
        }
        for (let i = 0; i < toArray.length; i++) {
          for (let k = 0; k < toArray[i].length; k++) {
            this.books.push(toArray[i][k])
          }
        }
      }
    );
    this.books = [];
  }

}
