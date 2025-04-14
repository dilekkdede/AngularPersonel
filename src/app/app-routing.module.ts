import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CityComponent} from './city/city.component';

export const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'}, //default route
  {path: 'app', component: AppComponent},
  {path: 'app/city', component: CityComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
