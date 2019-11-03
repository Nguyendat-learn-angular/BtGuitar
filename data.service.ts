import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="./assets/guitar.json";
  url2="./assets/categories.json"
  constructor(private http:HttpClient) { }
  getguitar(){
    return this.http.get(this.url);
  }
  getCategires(){
    return this.http.get(this.url2);
  }
}
