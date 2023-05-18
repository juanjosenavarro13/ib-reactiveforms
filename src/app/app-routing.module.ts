import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioSimpleComponent } from './formulario-simple/formulario-simple.component';
import { FormularioCompletoComponent } from './formulario-completo/formulario-completo.component';
import { FormularioArrayComponent } from './formulario-array/formulario-array.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'formulario-simple',
    component: FormularioSimpleComponent
  },
  {
    path:'formulario-completo',
    component: FormularioCompletoComponent
  },
  {
    path:'formulario-array',
    component: FormularioArrayComponent
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
