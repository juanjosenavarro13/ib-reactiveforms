import { Injectable } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    apellidos: ['', [Validators.required, Validators.minLength(5)]],
    dni: ['', [Validators.required, this.validarDNI]],
  });

  constructor(private fb:FormBuilder) { }


  validarDNI(control: AbstractControl<string>){
    if(control.value.length !== 9){
      return {dniValido: true};
    }
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const numero = Number(control.value.slice(0, -1));
    const letra = control.value.slice(-1).toUpperCase();
    const resto = numero % 23;
    if(letras.charAt(resto) === letra){
      return null;
    }else{
      return {dniValido: true};
    }
  }

  cambiarNombre(){
    this.formulario.patchValue({
      nombre: 'Pepe'
    });
  }

  autoRellenar(){
    this.formulario.setValue({
      nombre: 'Jose',
      apellidos: 'Perez',
      dni: '21154778E'
    });
  }

}
