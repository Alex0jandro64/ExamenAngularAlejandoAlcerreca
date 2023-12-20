import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensaje } from 'src/app/modelos/mensaje';
import { FirebaseService } from 'src/app/service/firebase.service';
import { MensajeComponent } from 'src/app/mensaje/mensaje.component';
import { Entrevistas } from 'src/app/modelos/entrevistas';
import { Candidatos } from 'src/app/modelos/candidatos';
import { Puestos } from 'src/app/modelos/puestos';

@Component({
  selector: 'app-detalle-entrevista',
  templateUrl: './detalle-entrevista.component.html',
  styleUrls: ['./detalle-entrevista.component.css']
})
export class DetalleEntrevistaComponent implements OnInit {

  listCandidatos: Candidatos[] = [];
  listPuestos: Puestos[] = [];
  
  id: string = '';
  entrevista: Entrevistas = {id: '',fechaEntrevista: '',puesto: '',canditadoDni: '',realizada: false};
  mensaje?: Mensaje;
  nuevo = true;
  
  constructor(
    private fsb: FirebaseService,
    private ruta: ActivatedRoute,
    private ruter: Router,
    private modal: NgbModal
    ){}
  
  ngOnInit() {

    this.fsb.coleccion = 'candidatos';
    this.fsb.getCollection().subscribe( res => {
      console.log(res);
      this.listCandidatos = res});

      this.fsb.coleccion = 'puestos';
    this.fsb.getCollection().subscribe( res => {
      console.log(res);
      this.listPuestos = res});

    if(this.ruta.snapshot.paramMap.get('id')) {
      console.log('hay id en la ruta');
      this.id = this.ruta.snapshot.paramMap.get('id')!;
      this.fsb.coleccion = 'entrevistas';
      this.fsb.getDocument(this.id).subscribe( res => this.entrevista = res);
      this.nuevo = false;
    }
  }

  onUpdate(form: NgForm) {
    console.log(form.value);
    this.fsb.coleccion = 'entrevistas';
    if(this.nuevo){// Si es nuevo, uso addDocument
      this.addentrevista();
    }else {
      console.log(form.value);
      this.fsb.updateDocument(form.value)
      .then(() => {
        this.mensaje = {titulo: 'Guardando entrevista', descripcion: 'El entrevista ha sido guardado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando entrevista', descripcion: 'Ha habido un error ' + error};
        this.muestraMensaje(this.mensaje)
      });
      this.ruter.navigateByUrl('/entrevistas/listado-entrevistas');
    }
    
  }

  addentrevista() {
    this.fsb.coleccion = 'entrevistas';
    this.fsb.addDocument(this.entrevista)
      .then(() => {
        this.mensaje = {titulo: 'Guardando entrevista', descripcion: 'El entrevista ha sido creado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando entrevista', descripcion: 'El entrevista no se ha podido guardar. Error: ' + error};
        this.muestraMensaje(this.mensaje);
      });
      this.ruter.navigateByUrl('/entrevistas/listado-entrevista');
  }

  muestraMensaje(mensaje: Mensaje){
    const modelRef = this.modal.open(MensajeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal'
    });
    modelRef.componentInstance.mensaje = mensaje;
    
  }

  editEntrevista(puesto: string) {
      this.entrevista.puesto = puesto; 

      
  }
}
