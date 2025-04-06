import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PERSONEL FRONTED';
  first_name: any = "Dilek";
  last_name: any = "Dede";
  school_number: any = null;
  numberValue: any = null;
  textValue: any = null;
  overLabelValue: any = null;
  textAreaValue: any = null;
  chechkBoxValue: any = null;
  inputGroup: any = null;
  listBox: String[] = ['Ankara', 'Van', 'Kocaeli']
  selectedCity: any = null;
  password: any = null;
  listFood: String[] = ["Hamburger", "Pizza", "Lahmacun", "Kebap"];
  selectedFood: any = null;
  checked = true;
  customers = [
    {
      first_name: 'Ali',
      last_name: 'Kara',
      city: 'Ankara',
      // food_preference burada doğru şekilde tanımlanmış
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
  selectedCustomer: any = null;
  date1:any = null;
  date2:any = null;
  date3:any = null;


  constructor() {
  }

  ngOnInit(): void {
    console.log("PERSONEL VERISI BACKEND TARAFINDAN ÇEIKILIYOR...");
  }

  savePerson() {
    console.log("Personel kayıt edildi.");
    console.log("Number value: " + this.numberValue);
    console.log("CheckBox: " + this.chechkBoxValue);
    console.log("Seçili şehir: " + this.selectedCity);
    console.log("Password: " + this.password);
    console.log("Seçili yemek: " + this.selectedFood);
    console.log("Toogle switch: " + this.checked);
    console.log("DatePickerIcon:"+this.date1);
  }

  kalpButonu() {
    console.log("Kalp Butonuna Tıklandı");
  }


}
