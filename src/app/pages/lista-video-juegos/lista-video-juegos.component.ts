import { Component, OnInit } from '@angular/core';
import { VideojuegoService } from '../../services/videojuego.service';

@Component({
  selector: 'app-lista-video-juegos',
  templateUrl: './lista-video-juegos.component.html',
  styleUrl: './lista-video-juegos.component.css'
})
export class ListaVideoJuegosComponent implements OnInit{

  // Propiedades
  videojuegos: any = [];
  constructor(private videojuegosService: VideojuegoService){
    this.getVideojuegos();
  }

  ngOnInit(): void {
    
  }

  // Método para obtener a todos los videojuegos
  getVideojuegos(){
    this.videojuegosService.getVideojuegos().subscribe((data) => {
      this.videojuegos=data;
    })
  }

   // Método para eliminar un videjuego
  eliminarVideojuego(videjuego, index){
    if(window.confirm('¿Estás seguro que lo deseas eliminar?')){
      this.videojuegosService.deleteVideojuego(videjuego._id).subscribe((data) =>{
        this.videojuegos.splice(index,1);
      });
    }
  }


}
