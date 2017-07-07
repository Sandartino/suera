import { Component, ViewChild } from '@angular/core';
import {FilteringComponent} from "./filtering/filtering.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild(FilteringComponent) genres;
  //
  //
  // ngOnChanges(){
  //   console.log(this.genres.selectedGenre)
  // }

}
