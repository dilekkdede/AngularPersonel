import {Injectable} from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UnitService {
  baseUrl: any = 'http://localhost:8080/rest/api';

  constructor() {
  }

  async findAll() {
    //axios: API çağrısı yapmak için kullanılan bir kütüphanedir

    const response = await axios.get(this.baseUrl + '/unit/get-all').then(function (response) {
      return response.data;
    })
    return response;
  }

  save(unit: any) {
    console.log(unit);
  }

  findById(id: number) {
    console.log(id);
  }

  deleteById(id: number) {
    console.log(id);
  }

  update(id: number, unit: any) {
    console.log(unit);
  }
}
