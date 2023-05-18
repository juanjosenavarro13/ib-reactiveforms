import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioSimpleComponent } from './formulario-simple/formulario-simple.component';
import { FormularioCompletoComponent } from './formulario-completo/formulario-completo.component';
import { FormularioArrayComponent } from './formulario-array/formulario-array.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioSimpleComponent,
    FormularioCompletoComponent,
    FormularioArrayComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
