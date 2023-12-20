import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuestosComponent } from './puestos.component';
import { ListadoPuestoComponent } from './listado-puesto/listado-puesto.component';
import { DetallePuestoComponent } from './detalle-puesto/detalle-puesto.component';
import { DetalleEntrevistaComponent } from '../entrevistas/detalle-entrevista/detalle-entrevista.component';
import { DetalleCandidatoComponent } from '../candidatos/detalle-candidato/detalle-candidato.component';
import { ListadoEntrevistaComponent } from '../entrevistas/listado-entrevista/listado-entrevista.component';

const routes: Routes = [
  { path: '', component: PuestosComponent },
  { path: 'listado-puesto', component: ListadoPuestoComponent },
  { path: 'detalle-entrevista', component: DetalleEntrevistaComponent },
  { path: 'new-puesto', component: DetallePuestoComponent },
  { path: '', redirectTo: 'listado-puesto', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestosRoutingModule { }
