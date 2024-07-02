import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { VideojuegoService } from '../../services/videojuego.service';

@Component({
  selector: 'app-agregar-video-juego',
  templateUrl: './agregar-video-juego.component.html',
  styleUrl: './agregar-video-juego.component.css'
})
export class AgregarVideoJuegoComponent implements OnInit{

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

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private videojuegoService: VideojuegoService
  ){
    this.mainForm();
  }

  ngOnInit(): void {
    
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
  
  // Método para enviar el formulario
  onSubmit(){
    this.enviado=true;
    if(!this.videoJuegoForm.valid){
      return false;
    }else{
      return this.videojuegoService.agregarVidejuego(this.videoJuegoForm.value).subscribe({
        complete: ()=>{
          console.log('Videojuegp agregado correctamente');
          this.ngZone.run(() => this.router.navigateByUrl('/lista-videoJuegos'));
        },
        error: (e) => {
          console.log(e);
        },
      })
    }
  }
}
