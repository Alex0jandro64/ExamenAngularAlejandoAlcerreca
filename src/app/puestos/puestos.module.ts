import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosRoutingModule } from './puestos-routing.module';
import { PuestosComponent } from './puestos.component';
import { DetallePuestoComponent } from './detalle-puesto/detalle-puesto.component';
import { ListadoPuestoComponent } from './listado-puesto/listado-puesto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PuestosComponent,
    DetallePuestoComponent,
    ListadoPuestoComponent,
  ],
  imports: [
    CommonModule,
    PuestosRoutingModule,
    FormsModule,
  ]
})
export class PuestosModule { }
