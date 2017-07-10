import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnChanges {
  @Input() books: object[];
  booksDetail = [];


  constructor() {
  }

  ngOnChanges() {
    this.booksCount();
  }

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
    }

    return this.booksDetail
  }


}
