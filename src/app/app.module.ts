import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from "primeng/inputtext";
import {FloatLabel} from 'primeng/floatlabel';
import {CheckboxModule} from 'primeng/checkbox';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon, InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputMaskModule} from 'primeng/inputmask';
import {Listbox, ListboxModule} from 'primeng/listbox';
import {Password, PasswordModule} from 'primeng/password';
import {Select} from 'primeng/select';
import {ToggleSwitch, ToggleSwitchModule} from 'primeng/toggleswitch';
import {TableModule} from 'primeng/table';
import {Card} from 'primeng/card';
import {DatePicker} from 'primeng/datepicker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    FloatLabel,
    CheckboxModule,
    InputGroup,
    Listbox,
    PasswordModule,
    InputGroupAddonModule,
    Select,
    ToggleSwitchModule,
    TableModule,
    Card,
    DatePicker,


  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
