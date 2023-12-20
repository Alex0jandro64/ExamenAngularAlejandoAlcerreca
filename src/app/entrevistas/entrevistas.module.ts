import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrevistasRoutingModule } from './entrevistas-routing.module';
import { EntrevistasComponent } from './entrevistas.component';
import { ListadoEntrevistaComponent } from './listado-entrevista/listado-entrevista.component';
import { DetalleEntrevistaComponent } from './detalle-entrevista/detalle-entrevista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntrevistasComponent,
    ListadoEntrevistaComponent,
    DetalleEntrevistaComponent,
  ],
  imports: [
    CommonModule,
    EntrevistasRoutingModule,
    FormsModule,
  ]
})
export class EntrevistasModule { }
