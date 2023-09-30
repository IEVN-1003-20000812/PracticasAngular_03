import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciaComponent } from './potencia/potencia/potencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CineploisComponent } from './cine/cineplois/cineplois.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciaComponent,
    CineploisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
