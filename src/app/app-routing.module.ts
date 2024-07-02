import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarVideoJuegoComponent } from './pages/agregar-video-juego/agregar-video-juego.component';
import { EditarVideoJuegoComponent } from './pages/editar-video-juego/editar-video-juego.component';
import { ListaVideoJuegosComponent } from './pages/lista-video-juegos/lista-video-juegos.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full',redirectTo:'agregar-videoJuego'
  },
  {
    path:'agregar-videoJuego', 
    component:AgregarVideoJuegoComponent
  },
  {
    path:'editar-videoJuego/:id', 
    component:EditarVideoJuegoComponent
  },
  {
    path:'lista-videoJuegos', 
    component:ListaVideoJuegosComponent
  },
  {
    path:'acerca_de',
    component:AcercaDeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
