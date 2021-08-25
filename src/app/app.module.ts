import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotonComponent } from './boton/boton.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    ImagenComponent,
    ListaCategoriaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
