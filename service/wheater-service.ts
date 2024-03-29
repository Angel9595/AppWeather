import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WheaterService {

  apiKey = 'bafd7f01084c38ea3764b0faafc01608'
  URI:String ='';


  constructor(private http: HttpClient) {

    this.URI =`https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`;

   }

   getWeather(cityName: string,countryCode:string){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
}
}
