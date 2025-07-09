import {Component, OnInit} from '@angular/core';
import {PersonelService} from '../services/personel.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  basicData: any;
  basicOptions: any;


  async ngOnInit() {

    const unitCounts: any[] = await this.personelService.countByUnit();

    const labels = unitCounts.map(item => item.code);
    const data = unitCounts.map(item => item.personSize);

    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'Personel Sayısı',
          data: data,
          backgroundColor: '#42A5F5',
        }
      ]
    };

    this.basicOptions = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };
  }

  constructor(private personelService: PersonelService) {
  }

  async countByUnit() {
    const sonuc = await this.personelService.countByUnit();
    console.log("Servisten gelen veri:", sonuc);
  }

  async countByCity() {

    const sonuc = await this.personelService.countByCity();
    console.log("Servisten gelen veri:", sonuc);
  }


}
