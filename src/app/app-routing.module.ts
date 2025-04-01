import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' }, //default route
  { path: 'app', component: AppComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
