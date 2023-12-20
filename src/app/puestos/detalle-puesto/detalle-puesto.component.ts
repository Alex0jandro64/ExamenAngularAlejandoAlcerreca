import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeComponent } from 'src/app/mensaje/mensaje.component';
import { Mensaje } from 'src/app/modelos/mensaje';
import { Puestos } from 'src/app/modelos/puestos';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-detalle-puesto',
  templateUrl: './detalle-puesto.component.html',
  styleUrls: ['./detalle-puesto.component.css']
})
export class DetallePuestoComponent implements OnInit {

  id: string = '';
  puesto: Puestos = {id:'' ,disponible:false, nombreEmpresa: '', nombrePuesto: ''};
  mensaje?: Mensaje;
  nuevo = true;
  
  constructor(
    private fsb: FirebaseService,
    private ruta: ActivatedRoute,
    private ruter: Router,
    private modal: NgbModal
    ){}
  
  ngOnInit() {
    if(this.ruta.snapshot.paramMap.get('id')) {
      console.log('hay id en la ruta');
      this.id = this.ruta.snapshot.paramMap.get('id')!;
      this.fsb.coleccion = 'puestos';
      this.fsb.getDocument(this.id).subscribe( res => this.puesto = res);
      this.nuevo = false;
    }
  }

  onUpdate(form: NgForm) {
    console.log(form.value);
    this.fsb.coleccion = 'puestos';
    if(this.nuevo){// Si es nuevo, uso addDocument
      this.addpuesto();
    }else {
      console.log(form.value);
      this.fsb.updateDocument(form.value)
      .then(() => {
        this.mensaje = {titulo: 'Guardando puesto', descripcion: 'El puesto ha sido guardado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando puesto', descripcion: 'Ha habido un error ' + error};
        this.muestraMensaje(this.mensaje)
      });
      this.ruter.navigateByUrl('/puestos/listado-puestos');
    }
    
  }

  addpuesto() {
    this.fsb.coleccion = 'puestos';
    this.fsb.addDocument(this.puesto)
      .then(() => {
        this.mensaje = {titulo: 'Guardando puesto', descripcion: 'El puesto ha sido creado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando puesto', descripcion: 'El puesto no se ha podido guardar. Error: ' + error};
        this.muestraMensaje(this.mensaje);
      });
      this.ruter.navigateByUrl('/puestos/listado-puesto');
  }

  muestraMensaje(mensaje: Mensaje){
    const modelRef = this.modal.open(MensajeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal'
    });
    modelRef.componentInstance.mensaje = mensaje;
    
  }

}

