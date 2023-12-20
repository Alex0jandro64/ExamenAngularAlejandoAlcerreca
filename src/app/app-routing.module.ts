import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./puestos/puestos.module').then(m => m.PuestosModule) },{ path: 'candidatos', loadChildren: () => import('./candidatos/candidatos.module').then(m => m.CandidatosModule) }, { path: 'entrevistas', loadChildren: () => import('./entrevistas/entrevistas.module').then(m => m.EntrevistasModule) }, { path: 'puestos', loadChildren: () => import('./puestos/puestos.module').then(m => m.PuestosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
