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
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {Listbox} from 'primeng/listbox';
import {PasswordModule} from 'primeng/password';
import {Select} from 'primeng/select';
import {ToggleSwitchModule} from 'primeng/toggleswitch';
import {TableModule} from 'primeng/table';
import {Card} from 'primeng/card';
import {DatePicker} from 'primeng/datepicker';
import {PanelModule} from 'primeng/panel';
import {TabsModule} from 'primeng/tabs';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {Dialog} from 'primeng/dialog';
import {UIChart} from 'primeng/chart';
import {InputMask} from 'primeng/inputmask';
import {FileUpload} from 'primeng/fileupload';
import {CalismalarComponent} from './Calismalar/calismalar.component';
import {Ripple} from 'primeng/ripple';
import {TabPanel} from 'primeng/tabview';
import {Textarea} from 'primeng/textarea';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    CalismalarComponent,
    CityComponent,
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
    PanelModule,
    TabsModule,
    Dialog,
    UIChart,
    Toast,
    InputMask,
    FileUpload,
    Ripple,
    TabPanel,
    Textarea,


  ],
  providers: [
    MessageService,
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
