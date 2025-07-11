import {Component, OnInit} from '@angular/core';
import {PersonelService} from '../services/personel.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CityService} from '../services/city.service';
import {UnitService} from '../services/unit.service';

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

  cities: any[] = [];
  units: any[] = [];
  cityId: any = null;

  sehirListesi = [
    {id: 1, name: 'Adana'},
    {id: 2, name: 'Adıyaman'},
    {id: 3, name: 'Afyonkarahisar'},
    {id: 4, name: 'Ağrı'},
    {id: 5, name: 'Amasya'},
    {id: 6, name: 'Ankara'},
    {id: 7, name: 'Antalya'},
    {id: 8, name: 'Artvin'},
    {id: 9, name: 'Aydın'},
    {id: 10, name: 'Balıkesir'},
    {id: 11, name: 'Bilecik'},
    {id: 12, name: 'Bingöl'},
    {id: 13, name: 'Bitlis'},
    {id: 14, name: 'Bolu'},
    {id: 15, name: 'Burdur'},
    {id: 16, name: 'Bursa'},
    {id: 17, name: 'Çanakkale'},
    {id: 18, name: 'Çankırı'},
    {id: 19, name: 'Çorum'},
    {id: 20, name: 'Denizli'},
    {id: 21, name: 'Diyarbakır'},
    {id: 22, name: 'Edirne'},
    {id: 23, name: 'Elazığ'},
    {id: 24, name: 'Erzincan'},
    {id: 25, name: 'Erzurum'},
    {id: 26, name: 'Eskişehir'},
    {id: 27, name: 'Gaziantep'},
    {id: 28, name: 'Giresun'},
    {id: 29, name: 'Gümüşhane'},
    {id: 30, name: 'Hakkari'},
    {id: 31, name: 'Hatay'},
    {id: 32, name: 'Isparta'},
    {id: 33, name: 'Mersin'},
    {id: 34, name: 'İstanbul'},
    {id: 35, name: 'İzmir'},
    {id: 36, name: 'Kars'},
    {id: 37, name: 'Kastamonu'},
    {id: 38, name: 'Kayseri'},
    {id: 39, name: 'Kırklareli'},
    {id: 40, name: 'Kırşehir'},
    {id: 41, name: 'Kocaeli'},
    {id: 42, name: 'Konya'},
    {id: 43, name: 'Kütahya'},
    {id: 44, name: 'Malatya'},
    {id: 45, name: 'Manisa'},
    {id: 46, name: 'Kahramanmaraş'},
    {id: 47, name: 'Mardin'},
    {id: 48, name: 'Muğla'},
    {id: 49, name: 'Muş'},
    {id: 50, name: 'Nevşehir'},
    {id: 51, name: 'Niğde'},
    {id: 52, name: 'Ordu'},
    {id: 53, name: 'Rize'},
    {id: 54, name: 'Sakarya'},
    {id: 55, name: 'Samsun'},
    {id: 56, name: 'Siirt'},
    {id: 57, name: 'Sinop'},
    {id: 58, name: 'Sivas'},
    {id: 59, name: 'Tekirdağ'},
    {id: 60, name: 'Tokat'},
    {id: 61, name: 'Trabzon'},
    {id: 62, name: 'Tunceli'},
    {id: 63, name: 'Şanlıurfa'},
    {id: 64, name: 'Uşak'},
    {id: 65, name: 'Van'},
    {id: 66, name: 'Yozgat'},
    {id: 67, name: 'Zonguldak'},
    {id: 68, name: 'Aksaray'},
    {id: 69, name: 'Bayburt'},
    {id: 70, name: 'Karaman'},
    {id: 71, name: 'Kırıkkale'},
    {id: 72, name: 'Batman'},
    {id: 73, name: 'Şırnak'},
    {id: 74, name: 'Bartın'},
    {id: 75, name: 'Ardahan'},
    {id: 76, name: 'Iğdır'},
    {id: 77, name: 'Yalova'},
    {id: 78, name: 'Karabük'},
    {id: 79, name: 'Kilis'},
    {id: 80, name: 'Osmaniye'},
    {id: 81, name: 'Düzce'}
  ];


  constructor(private personelService: PersonelService,
              private messageService: MessageService,
              private cityService: CityService,
              private unitService: UnitService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getData();
    this.getCity();
    this.getUnits();
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
    console.log(this.personeller);
  }

  getUnits() {
    this.unitService.findAll().then(response => {
      this.units = response;
    });
  }

  getCity() {
    this.cityService.findAll().then(response => {
      this.cities = response;
    });
  }


  save() {
    const personel = {
      "id": null,
      "firstName": this.personName,
      "lastName": this.personLastName,
      "userName": this.personUserName,
      "description": this.personDescription,
      "bolum": this.personBolum,
      "birthDate": this.personBirthDay,
      "adres": {
        "description": this.personAdres_id,
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
    this.personAdres_id = personel.adres.id;
    this.personCity_id = personel.city.id;
    this.personUnit_id = personel.unit.id;
    console.log(personel);
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


  deletePerson(personId: any) {
    this.personelService.delete(personId).then(response => {
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

  confirmDelete(event: Event, personId: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'silmek istediğinize emin misiniz!',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'İptal',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Evet',
        severity: 'danger',
      },

      accept: () => {
        this.deletePerson(personId)
      },
      reject: () => {
      },
    });
  }

}
