import {Component, Input, DoCheck} from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {

  @Input() books;
  // @Input() imageUrl:string;


}
