import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidatos } from 'src/app/modelos/candidatos';
import { FirebaseService } from 'src/app/service/firebase.service';
import { MensajeComponent } from 'src/app/mensaje/mensaje.component';
import { Mensaje } from 'src/app/modelos/mensaje';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detalle-candidato',
  templateUrl: './detalle-candidato.component.html',
  styleUrls: ['./detalle-candidato.component.css']
})
export class DetalleCandidatoComponent implements OnInit{

  listaCandidatos: Candidatos[] = [];
  dni: string = '';
  candidato: Candidatos = {nombre: '', apellido: '', dni: '', direccion: '', telefono: '', mail: '', fechaNacimiento: ''};
  mensaje?: Mensaje;
  nuevo = true;
  
  constructor(
    private fsb: FirebaseService,
    private ruta: ActivatedRoute,
    private ruter: Router,
    private modal: NgbModal
    ){}
  
  ngOnInit() {

      
    if(this.ruta.snapshot.paramMap.get('dni')) {
      console.log('hay dni en la ruta');
      this.dni = this.ruta.snapshot.paramMap.get('dni')!;
      this.fsb.coleccion = 'candidatos';
      this.fsb.getDocument(this.dni).subscribe( res => this.candidato = res);
      this.nuevo = false;
    }
  }

  onUpdate(form: NgForm) {
    console.log(form.value);
    this.fsb.coleccion = 'candidatos';
    if(this.nuevo){// Si es nuevo, uso addDocument
      this.addcandidato();
    }else {
      this.addcandidato();
      console.log(form.value);
      this.fsb.updateDocument(form.value)
      this.ruter.navigateByUrl('/candidatos/listado-candidatos');
    }
    
  }

  addcandidato() {
    
    this.fsb.coleccion = 'candidatos';
    this.fsb.guardaCandidato(this.candidato)
      .then(() => {
        this.mensaje = {titulo: 'Guardando candidato', descripcion: 'El candidato ha sido creado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando candidato', descripcion: 'El candidato no se ha podido guardar. Error: ' + error};
        this.muestraMensaje(this.mensaje);
      });
      this.ruter.navigateByUrl('/candidatos/listado-candidato');
  }

  muestraMensaje(mensaje: Mensaje){
    const modelRef = this.modal.open(MensajeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal'
    });
    modelRef.componentInstance.mensaje = mensaje;
    
  }

  editCandidato(dni: string) {
      
    this.fsb.coleccion = 'candidatos';
    this.fsb.ObtenerCandidato(dni).subscribe( res => {
      console.log(res);
      this.candidato = res});

      
  }

}

