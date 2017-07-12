import {Component, Input, OnChanges} from '@angular/core';
import {Color}                       from './color';

@Component({
  selector: 'result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnChanges {
  @Input() books:object[];
  color:Color = new Color();
  booksDetail:object[];

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
      this.booksDetail.push({"genre": key, "count": count[key]});
      this.color.setColor = this.booksDetail[this.booksDetail.length - 1]
    }

    return this.booksDetail
  }


}
