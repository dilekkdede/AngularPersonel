import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  baseUrl: any = 'http://localhost:8080/rest/api';

  constructor() {
  }


  async findAll() {
    const response = await axios.get(this.baseUrl + '/city/get-all').then(function (response) {
      return response.data;
    })
    return response;

  }

  async save(city: any) {
    const response = await axios.post(this.baseUrl + '/city/save', city).then(function (response) {
      return response.data;
    })
    return response;
  }

  findById(id: number) {
    console.log(id);
  }

  delete(id: number) {
    console.log(id);
  }

  update(id: number, city: any) {
    console.log(city);
  }
}
