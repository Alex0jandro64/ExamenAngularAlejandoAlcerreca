import { Component } from '@angular/core';
import { Candidatos } from 'src/app/modelos/candidatos';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-listado-candidato',
  templateUrl: './listado-candidato.component.html',
  styleUrls: ['./listado-candidato.component.css']
})
export class ListadoCandidatoComponent {
  listCandidatos: Candidatos[] = [];

  constructor(private fbs: FirebaseService){}

  ngOnInit() {
    this.fbs.coleccion = 'candidatos';
    this.fbs.getCollection().subscribe( res => {
      console.log(res);
      this.listCandidatos = res});
  }

  delJuego(dni: string) {
    // Borrar el candidato, previo aviso y ok
    console.log('Esto borraría el candidato ');
    this.fbs.coleccion = 'candidatos';
    this.fbs.deleteDocument(dni).then(() => console.log('candidato borrado'));
  }


}
