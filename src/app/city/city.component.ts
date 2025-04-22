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
  //Ngİf -> ile html tagları içersinde companentlere koşullar yazılabiliyor. javadaki if else yapısı gibi
  sehirler: any = [];
  visible: boolean = false;
  cityName: any = null;
  cityCode: any = null;
  cityId: any = null;
  isEditButton: boolean = false;

  showDialog() {
    this.isEditButton = false;
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
      if (response.status === 400) {
        this.messageService.add({
          severity: 'error',
          summary: 'Başarısız',
          detail: response.message
        })
      }
      //  console.log(response);
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

  deleteCity(city: any) {
    console.log(city);
  }

  editCity(city: any) {
    //Edit metodu tamamen setlemeye yarıyor (postmandeki body ekranı diyebiliriz)
    this.isEditButton = true;
    this.visible = true;
    this.cityName = city.name;
    this.cityCode = city.code;
    this.cityId = city.id;
  }


  updateCity() {
    this.visible = true;

    const city = {
      "id": this.cityId,
      "name": this.cityName,
      "code": this.cityCode,
    }

    this.cityService.update(this.cityId, city).then(response => {

      if (response.status === 200) {
        this.visible = false;
        this.getData();
        this.messageService.add({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Başarılı bir şekilde güncellendi'
        })
      }
      if (response.status === 400) {
        this.messageService.add({
          severity: 'error',
          summary: 'Başarısız',
          detail: response.message
        })
      }
    }).catch(error => {
      console.log(error);

    })

    console.log(city);

  }


}
