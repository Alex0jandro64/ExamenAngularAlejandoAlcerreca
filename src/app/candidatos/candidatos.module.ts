import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosComponent } from './candidatos.component';
import { DetalleCandidatoComponent } from './detalle-candidato/detalle-candidato.component';
import { ListadoCandidatoComponent } from './listado-candidato/listado-candidato.component';

//Modulo que contiene todo el crud de candidatos

@NgModule({
  declarations: [
    CandidatosComponent,
    DetalleCandidatoComponent,
    ListadoCandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    FormsModule,
  ]
})
export class CandidatosModule { }
