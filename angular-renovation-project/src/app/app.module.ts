import { InterieurFormComponent } from './pages/clients/form/interieurForm/interieurForm.component';
import { ServiceComponent } from './pages/clients/services/services.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    InterieurFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,
    ServiceComponent,
    InterieurFormComponent,
  ],
})
export class AppModule { }
