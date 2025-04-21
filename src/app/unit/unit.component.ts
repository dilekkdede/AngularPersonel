import {Component, OnInit} from '@angular/core';
import {UnitService} from '../services/unit.service';

@Component({
  selector: 'app-unit',
  standalone: false,
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.css'
})
export class UnitComponent implements OnInit {

  birimler: any = [];


  constructor(private unitService: UnitService) {
    //Dependcy Injection işlemi yapıldı. Yazmış olduğumuz servisin kullanılabilir hale gelmesi
  }


  ngOnInit(): void {
    //Angularda sayfa yüklendiğinde ilk çalışan fonksiyondur
    this.getData();
  }


  openDialog(): void {
    console.log('openDialog');
  }


  saveUnit() {
    console.log("birimler");
  }

  getData() {
    this.unitService.findAll().then(response => {
      this.birimler = response;
    });
  }

}
