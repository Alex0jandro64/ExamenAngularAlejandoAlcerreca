import { Component } from '@angular/core';
import { Entrevistas } from 'src/app/modelos/entrevistas';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-listado-entrevista',
  templateUrl: './listado-entrevista.component.html',
  styleUrls: ['./listado-entrevista.component.css']
})
export class ListadoEntrevistaComponent {
  listEntrevistas: Entrevistas[] = [];

  constructor(private fbs: FirebaseService){}

  ngOnInit() {
    this.fbs.coleccion = 'entrevistas';
    this.fbs.getCollection().subscribe( res => {
      console.log(res);
      this.listEntrevistas = res});
  }

  delJuego(dni: string) {
    // Borrar el entrevista, previo aviso y ok
    console.log('Esto borraría el entrevista ');
    this.fbs.coleccion = 'entrevistas';
    this.fbs.deleteDocument(dni).then(() => console.log('entrevista borrado'));
  }
}
