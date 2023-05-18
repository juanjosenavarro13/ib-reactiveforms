import { FormBuilder, AbstractControl, FormControl } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { FormulariosService } from './formularios.service';

describe('FormulariosService', () => {
  let service: FormulariosService;
  let control: AbstractControl = new FormControl();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('formulario esta definido', () => {
    const service = new FormulariosService(new FormBuilder());
    expect(service.formulario).toBeDefined();
  });

  it('validar datos de persona', () => {
    const service = new FormulariosService(new FormBuilder());
    service.formulario.setValue({
      nombre: 'Juan',
      apellidos: 'Pérez García',
      dni: '21154778E',
    });
    expect(service.formulario.valid).toBeTruthy();
  });

  it('validar errores de persona', () => {
    const service = new FormulariosService(new FormBuilder());
    service.formulario.setValue({
      nombre: '',
      apellidos: '',
      dni: '',
    });
    expect(service.formulario.valid).toBeFalsy();
  });

  it('validar dni', () => {
    const service = new FormulariosService(new FormBuilder());

    control.setValue('12345678A');
    expect(service.validarDNI(control)).toBeTruthy();

    control.setValue('12345678Z');
    expect(service.validarDNI(control)).toBeFalsy();
  });


  it('cambio de nombre', () => {
    const service = new FormulariosService(new FormBuilder());
    service.cambiarNombre();
    expect(service.formulario.value.nombre).toEqual('Pepe');
  });

  it('autorellenar persona', () => {
    const service = new FormulariosService(new FormBuilder());
    service.autoRellenar();
    expect(service.formulario.value.nombre).toEqual('Jose');
    expect(service.formulario.value.apellidos).toEqual('Perez');
    expect(service.formulario.value.dni).toEqual('21154778E');
  });
});
