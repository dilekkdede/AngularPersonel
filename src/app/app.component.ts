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

  constructor() {
  }

  ngOnInit(): void {
    console.log("PERSONEL VERISI BACKEND TARAFINDAN ÇEIKILIYOR...");
  }

}
