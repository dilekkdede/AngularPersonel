import {Component, OnInit} from '@angular/core';
import axios from 'axios';

// @ts-ignore

@Component({
  selector: 'app-city',
  standalone: false,
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  sehirler: any = [];


  constructor() {
  }

  ngOnInit(): void {
    this.getData(); // Başka sayfaya gittiğimizd dahi veriler kalsın diye burada çağırırız metotları
  }


  saveCity() {
    console.log("Şehirler ");
    console.log(this.sehirler);


  }

  getData() {
    axios.get('http://localhost:8080/rest/api/city/get-all').then((response) => {
      this.sehirler = response.data;
    }).catch(error => {

    });
  }

}
