import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasComponent } from './entrevistas.component';
import { ListadoEntrevistaComponent } from './listado-entrevista/listado-entrevista.component';
import { DetalleEntrevistaComponent } from './detalle-entrevista/detalle-entrevista.component';

const routes: Routes = [
  { path: '', component: EntrevistasComponent },
  { path: 'listado-entrevista', component: ListadoEntrevistaComponent },
  { path: 'new-entrevista', component: DetalleEntrevistaComponent },
  { path: '', redirectTo: 'listado-entrevista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrevistasRoutingModule { }
