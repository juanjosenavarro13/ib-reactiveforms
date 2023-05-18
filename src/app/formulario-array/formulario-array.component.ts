import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormulariosService } from './../formularios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent {

  formulario = this.fb.group({
    persona: this.FormulariosService.formulario,
    direcciones: this.fb.array([])
  });

  constructor(private FormulariosService:FormulariosService, private fb: FormBuilder) {}

  onSubmit(){
    this.formulario.markAllAsTouched();
    console.log(this.formulario.value);
  }

  get persona (){
    return this.formulario.get('persona') as FormGroup;
  }

  get nombre(){
    return this.persona.get('nombre') as FormControl;
  }

  get apellidos(){
    return this.persona.get('apellidos') as FormControl;
  }

  get dni (){
    return this.persona.get('dni') as FormControl;
  }

  get direcciones() {
    return this.formulario.get('direcciones') as FormArray;
  }


  agregarDireccion(){
    this.direcciones.push(this.fb.group({
      ciudad: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
    }))
  }

  eliminarDireccion(i:number){
    this.direcciones.removeAt(i);
  }

  autocompletarDireccion(index:number){
    this.direcciones.at(index).patchValue({
      ciudad: 'Madrid',
      calle: 'Gran Vía',
      numero: '1',
    })
  }


  cambiarNombre(){
    this.FormulariosService.cambiarNombre();
  }

  autoRellenar(){
    this.FormulariosService.autoRellenar();
  }

}
