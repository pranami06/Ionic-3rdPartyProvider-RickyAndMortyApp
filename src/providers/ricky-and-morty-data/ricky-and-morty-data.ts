import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RickyAndMortyDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RickyAndMortyDataProvider {

  api = 'https://rickandmortyapi.com/api/';

  constructor(public http: HttpClient) {
    console.log('Hello RickyAndMortyDataProvider Provider');
  }

  // call to api using http client
  getRickyAndMortyData(param: any) {
    return new Promise(resolve => {
      this.http.get(this.api+'/' +param).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("Something went wrong!!", error);
      });
    });
  }

}
