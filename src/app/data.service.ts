import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getJSON(genre: string[], rate: number, price: number[], rateActive: boolean, priceActive: boolean) {
    return this.http.get('assets/data.json')
      .map(respond => {
        let respondArr = respond.json();
        let sendData = [];

        for (let element of respondArr) {
          for (let i = 0; i < genre.length; i++) {

            if (!rateActive && !priceActive && element["genre"] == genre[i]) {
              sendData.push(element)
            }

            else if (rateActive && !priceActive && element["genre"] == genre[i] && element["rate"] == rate) {
              sendData.push(element)
            }

            else if (priceActive) {
              if (rateActive && element["genre"] == genre[i] && element["price"] >= price[0] && element["price"] <= price[1] && element["rate"] == rate) {
                sendData.push(element)
              } else if (!rateActive && element["genre"] == genre[i] && element["price"] >= price[0] && element["price"] <= price[1]) {
                sendData.push(element)
              }
            }

          }
        }

        return sendData;
      })
  }

}
