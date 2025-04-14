import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CityComponent} from './city/city.component';
import {UnitComponent} from './unit/unit.component';
import {AddressComponent} from './address/address.component';
import {EducationComponent} from './education/education.component';
import {ReportComponent} from './report/report.component';
import {PersonelComponent} from './personel/personel.component';

export const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'}, //default route
  {path: 'app', component: AppComponent},
  {path: 'app/city', component: CityComponent},
  {path: 'app/unit', component: UnitComponent},
  {path: 'app/address', component: AddressComponent},
  {path: 'app/education', component: EducationComponent},
  {path: 'app/report', component: ReportComponent},
  {path: 'app/personel', component: PersonelComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
