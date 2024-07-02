import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgregarVideoJuegoComponent } from './pages/agregar-video-juego/agregar-video-juego.component';
import { EditarVideoJuegoComponent } from './pages/editar-video-juego/editar-video-juego.component';
import { ListaVideoJuegosComponent } from './pages/lista-video-juegos/lista-video-juegos.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarVideoJuegoComponent,
    EditarVideoJuegoComponent,
    ListaVideoJuegosComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
