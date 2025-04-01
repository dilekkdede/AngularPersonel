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
  overLabelValue:any = null;
  textAreaValue:any = null;

  constructor() {
  }

  ngOnInit(): void {
    console.log("PERSONEL VERISI BACKEND TARAFINDAN ÇEIKILIYOR...");
  }

  savePerson(){
    console.log("Personel kayıt edildi.");
    console.log(this.numberValue);
  }

}
