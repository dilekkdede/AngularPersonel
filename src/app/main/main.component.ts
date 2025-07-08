import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CityService} from '../services/city.service';
import {PersonelService} from '../services/personel.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private personelService: PersonelService) {
  }


}
