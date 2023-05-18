import { FormControl } from '@angular/forms';
import { FormulariosService } from './../formularios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-completo',
  templateUrl: './formulario-completo.component.html',
  styleUrls: ['./formulario-completo.component.scss']
})
export class FormularioCompletoComponent {

  formulario = this.FormulariosService.formulario;

  constructor(private FormulariosService:FormulariosService) { }

  onSubmit(){
    this.formulario.markAllAsTouched();
    console.log(this.formulario.value);
  }

  get apellidos(){
    return this.formulario.get('apellidos') as FormControl;
  }

  get dni (){
    return this.formulario.get('dni') as FormControl;
  }

  cambiarNombre(){
    this.FormulariosService.cambiarNombre();
  }

  autoRellenar(){
    this.FormulariosService.autoRellenar();
  }

}
