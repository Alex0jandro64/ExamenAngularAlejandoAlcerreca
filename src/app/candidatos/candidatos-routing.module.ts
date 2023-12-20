import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosComponent } from './candidatos.component';
import { ListadoCandidatoComponent } from './listado-candidato/listado-candidato.component';
import { DetalleCandidatoComponent } from './detalle-candidato/detalle-candidato.component';

const routes: Routes = [
  { path: '', component: CandidatosComponent },
  { path: 'listado-candidato', component: ListadoCandidatoComponent },
  { path: 'new-candidato', component: DetalleCandidatoComponent },
  { path: 'edit-candidato/:dni', component: DetalleCandidatoComponent },
  { path: 'detalle-entrevista/:id,:id', component: DetalleCandidatoComponent },
  { path: '', redirectTo: 'listado-candidato', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
