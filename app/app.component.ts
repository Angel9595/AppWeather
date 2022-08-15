import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import { Component,OnInit } from '@angular/core';
import { WheaterService } from '../service/wheater-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

weather:any;

constructor(private weatherservice:WheaterService){

}


ngOnInit(){

  }


getWeather(cityName:string,countryCode:string){
  this.weatherservice.getWeather(cityName,countryCode)
  .subscribe(
    {
   next:res => {
     console.log(this.weather)
     this.weather=res;
   },
   error:err => {
     console.log(err);
   }
 }
  )
}

  submitLocation(cityName:HTMLInputElement, countryCode:HTMLInputElement) {
  if (countryCode.value && cityName.value) {
    this.getWeather(cityName.value, countryCode.value)
    cityName.value='';
    countryCode.value='';
  }else {
    alert('Inserta los 2 datos')
  }

   cityName.focus();
   return false;
  }
}
