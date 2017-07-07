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

  getJSON() {
    return this.http.get('assets/data.json')
      .map(respond => respond.json())
  }

  // getBooks(): Promise<any[]> {
  //   var url="assets/proba.json";
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get(url).toPromise()
  //       .then(
  //         res => {
  //           resolve(res.json().data);
  //         },
  //         err =>{
  //           reject(alert('error in DataService'))
  //         }
  //       );
  //   });
  //   return promise;
  // }

}
