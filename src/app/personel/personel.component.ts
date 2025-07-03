import {Component, OnInit} from '@angular/core';
import {PersonelService} from '../services/personel.service';
import {MessageService} from 'primeng/api';
import {CityService} from '../services/city.service';

@Component({
  selector: 'app-personel',
  standalone: false,
  templateUrl: './personel.component.html',
  styleUrl: './personel.component.css'
})
export class PersonelComponent implements OnInit {

  personeller: any = [];
  visible: boolean = false;
  isEditButton: boolean = false;
  personId: any = null;
  personName: any = null;
  personLastName: any = null;
  personUserName: any = null;
  personDescription: any = null;
  personBolum: any = null;
  personBirthDay: any = null;
  personAdres_id: any = null;
  personCity_id: any = null;
  personUnit_id: any = null;

  citys : any =[];
  cityId: any = null;

  constructor(private personelService: PersonelService, private messageService: MessageService, private cityService: CityService,) {
  }

  ngOnInit(): void {
    this.getData();
  }

  showDialog() {
    this.isEditButton = false;
    this.visible = true;
    this.personName = null;
    this.personLastName = null;
    this.personUserName = null;
    this.personDescription = null;
    this.personBolum = null;
    this.personBirthDay = null;
    this.personAdres_id = null;
    this.personCity_id = null;
    this.personUnit_id = null;
  }


  cancel() {
    this.visible = false;
  }


  getData() {
    this.personelService.findAll().then(response => {
      console.log('Gelen veriler:', response);

      this.personeller = response;
    });
  }

  getCity() {
    this.cityService.findAll().then(response => {
      this.citys = response;
    });
  }


  save() {
    const personel = {
      "id": null,
      "firstName": this.personName, "lastName": this.personLastName, "userName": this.personUserName, "description": this.personDescription,
      "bolum": this.personBolum, "birthDate": this.personBirthDay, "adres": {
        "id": this.personAdres_id,
      },
      "city": {
        "id": this.personCity_id,
      },
      "unit": {
        "id": this.personUnit_id,
      }
    }
    this.personelService.save(personel).then(response => {
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
    }).catch(error => {
      console.log(error);
    })
  }


  edit(personel: any) {
    this.isEditButton = true;
    this.visible = true;
    this.personId = personel.id;
    this.personName = personel.firstName;
    this.personLastName = personel.lastName;
    this.personUserName = personel.userName;
    this.personDescription = personel.description;
    this.personBolum = personel.bolum;
    this.personBirthDay = new Date(personel.birthDate);
    this.personAdres_id = personel.adres.description;
    this.personCity_id = personel.city.name;
    this.personUnit_id = personel.unit.code;
  }

  updatePerson() {
    this.visible = true;

    const personel = {
      id: this.personId,
      firstName: this.personName,
      lastName: this.personLastName,
      userName: this.personUserName,
      description: this.personDescription,
      bolum: this.personBolum,
      birthDate: this.personBirthDay,
      adres: {
        id: this.personAdres_id,
      },
      city: {
        id: this.personCity_id,
      },
      unit: {
        id: this.personUnit_id,
      }
    };

    this.personelService.update(this.personId, personel)
      .then(response => {
        if (response.status === 200) {
          this.visible = false;
          this.getData();
          this.getCity();
          this.messageService.add({
            severity: 'success',
            summary: 'Başarılı',
            detail: 'Başarılı bir şekilde güncellendi'
          });
        } else if (response.status === 400) {
          this.messageService.add({
            severity: 'error',
            summary: 'Başarısız',
            detail: response.message
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    console.log(personel);
  }


  deletePerson(personel: any) {
    this.personelService.delete(personel.id).then(response => {
      if (response.status === 200) {
        this.visible = false;
        this.getData();
        this.messageService.add({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Kayıt silindi'
        })
      }
    }).catch(error => {
      console.log(error);
    })

  }

}
