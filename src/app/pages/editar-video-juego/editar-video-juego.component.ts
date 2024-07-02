import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Videojuego } from '../../models/videoJuego';
import { VideojuegoService } from '../../services/videojuego.service';

@Component({
  selector: 'app-editar-video-juego',
  templateUrl: './editar-video-juego.component.html',
  styleUrl: './editar-video-juego.component.css'
})
export class EditarVideoJuegoComponent  implements OnInit{

    // Propiedades
    videoJuegoForm: FormGroup;
    enviado = false;
    videojuegoClasificacion: any = [
      'E',
      'E 10 +',
      'M',
      'A',
      'RP'
    ];
    videojuegoData: Videojuego[];
  
    constructor(
      public formBuilder: FormBuilder,
      private router: Router,
      private actRoute: ActivatedRoute,
      private videojuegoService: VideojuegoService
    ){ }

    ngOnInit(): void {
      this.mainForm();
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.getVideojuego(id);
      this.videoJuegoForm = this.formBuilder.group({
        titulo: ['',[Validators.required]],
        clasificacion: ['',[Validators.required]],
        desarrolladora: ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        precio: ['',
          [
            Validators.required,
            Validators.pattern('^[0-9]+$')
          ]
        ]
      })
    }

    // Método para generar el formulario
  mainForm(){
    this.videoJuegoForm = this.formBuilder.group({
      titulo: ['',[Validators.required]],
      clasificacion: ['',[Validators.required]],
      desarrolladora: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      precio: ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ]
      ]
    })
  }

  // Método para asignar la categoria seleccionada por el usuario
  actualizarCategoria(d){
    this.videoJuegoForm.get('categoria').setValue(d,{
      onlySelf: true,
    });
  }

  // getter para acceder a los controles del formulario
  get myForm(){
    return this.videoJuegoForm.controls;
  }

  // Método para buscar al videojuego que vamos a modificar
  getVideojuego(id){
    this.videojuegoService.getVideojuego(id).subscribe((data) => {
      this.videoJuegoForm.setValue({
        titulo: data['titulo'],
        clasificacion: data['clasificacion'],
        desarrolladora: data['desarrolladora'],
        descripcion: data['descripcion'],
        precio: data['precio'],
      });
    })
  }

  // Método para enviar el formulario
  onSubmit(){
    this.enviado=true;
    if(!this.videoJuegoForm.valid){
      return false;
    }else{
      if(window.confirm('¿Estás seguro que lo deseas modificar?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.videojuegoService.updateVideojuego(id,this.videoJuegoForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/lista-videoJuegos');
            console.log('')
          },
          error: (e) =>{
            console.log(e);
          }
        })
      }
    }
  }

}
