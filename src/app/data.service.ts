import {Injectable} from '@angular/core';
import {Http, Response}  from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getJSON(genre: string[], rateActive:boolean, rate:number) {
    return this.http.get('assets/data.json')
      .map(respond => {
        let respondArr = respond.json();
        let sendData = [];

        for (let element of respondArr) {
          for (let i = 0; i < genre.length; i++) {

            if (!rateActive && element["genre"] == genre[i]) {
              sendData.push(element)
            }

            else if(rateActive && element["genre"] == genre[i] && element["rate"] == rate){
              sendData.push(element)
            }

          }
        }

        return sendData;
      })
  }

  getRate(rate: number, books: object[]) {
    /*return this.http.get('assets/data.json')
      .map(respond => {
        let respondArr = respond.json();
        let sendData = [];

        sendData = books.filter(function (e) {
          return e["rate"] == rate;
        });

        return sendData
      })*/
  }


}
