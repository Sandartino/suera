import {Component, Input, OnChanges} from '@angular/core';
import {Color}                       from './color';

@Component({
  selector: 'result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnChanges {
  @Input() books: object[];
  booksDetail:object[];


  constructor() {
  }

  ngOnChanges() {
    this.booksCount();
    // console.log(this.booksDetail)
  }
color:Color = new Color();
  booksCount() {
    let arr = [];
    this.booksDetail = [];
    for (let element of this.books) {
      arr.push(element["genre"])
    }
    let count = {};
    arr.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    for (let key in count) {
      this.booksDetail.push({"genre": key, "count": count[key]})
      // console.log(this.booksDetail[this.booksDetail.length-1])

      console.log( this.color.setColor = this.booksDetail[this.booksDetail.length-1])
    }

    return this.booksDetail
  }


}
