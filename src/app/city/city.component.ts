import {Component, OnInit} from '@angular/core';
import {CityService} from '../services/city.service';

// @ts-ignore

@Component({
  selector: 'app-city',
  standalone: false,
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  sehirler: any = [];


  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.getData(); // Başka sayfaya gittiğimizd dahi veriler kalsın diye burada çağırırız metotları
  }


  saveCity() {
    console.log("Şehirler ");
  }

  getData() {
    this.cityService.findAll().then(response => {
      this.sehirler = response;
    });
  }

}
