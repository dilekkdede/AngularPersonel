import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
