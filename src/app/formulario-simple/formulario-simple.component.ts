import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-simple',
  templateUrl: './formulario-simple.component.html',
  styleUrls: ['./formulario-simple.component.scss']
})
export class FormularioSimpleComponent {

  nombre = new FormControl('', [Validators.required, Validators.minLength(4)]);

}
