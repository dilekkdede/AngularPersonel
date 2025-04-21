import {Component, OnInit} from '@angular/core';
import {CityService} from '../services/city.service';
import {MessageService} from 'primeng/api';

// @ts-ignore

@Component({
  selector: 'app-city',
  standalone: false,
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  //NgModule sadece input yapılan companentlerde kullanılır. Button gibi companentlerde kullanılmaz.
  //Biz HtML içinde kullandığımız herhangi bir input companentin value değerini ts tarafına NgModule ile taşırız
  //Tüm bu işlemlere de DataBinding denir
  //Aslında böyle yaparak dışarıdan girilen inputları elimizde tuttuk . CityCode ya atayarak vb.
  sehirler: any = [];
  visible: boolean = false;
  cityName: any = null;
  cityCode: any = null;

  showDialog() {
    this.visible = true;
    this.cityName = null;
    this.cityCode = null;
  }


  constructor(private cityService: CityService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getData(); // Başka sayfaya gittiğimizd dahi veriler kalsın diye burada çağırırız metotları
  }

  openDialog(): void {
    console.log('openDialog');
  }


  saveCity() {
    const city = {
      "id": null,
      "name": this.cityName,
      "code": this.cityCode,
    }

    this.cityService.save(city).then(response => {

      if (response.status === 201) {
        this.visible = false;
        this.getData();
        this.messageService.add({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Başarılı bir şekilde kayıt yapıldı'
        })
      }
      console.log(response);
    }).catch(error => {
      console.log(error);
    })

    console.log(city);
  }

  getData() {
    this.cityService.findAll().then(response => {
      this.sehirler = response;
    });
  }

  cancel() {
    this.visible = false;
  }

}
