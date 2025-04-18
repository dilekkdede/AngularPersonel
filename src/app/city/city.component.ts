import {Component, OnInit} from '@angular/core';

// @ts-ignore

@Component({
  selector: 'app-city',
  standalone: false,
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }


  customers = [
    {
      first_name: 'Ali',
      last_name: 'Kara',
      city: 'Ankara',
    },
    {
      first_name: 'Dilek',
      last_name: 'Dede',
      city: 'Van',

    },
    {
      first_name: 'Can',
      last_name: 'Kabak',
      city: 'Kocaeli',

    },
    {
      first_name: 'Zeynep',
      last_name: 'Hoş',
      city: 'İstanbul',

    },
    {
      first_name: 'Kerem',
      last_name: 'Çatma',
      city: 'Sivas',

    }
  ];

  sehirler:any= [];

  saveCity() {
    console.log("Şehirler ");
    console.log(this.sehirler);
  }


}
