import { Component } from '@angular/core';
import { Puestos } from 'src/app/modelos/puestos';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-listado-puesto',
  templateUrl: './listado-puesto.component.html',
  styleUrls: ['./listado-puesto.component.css']
})
export class ListadoPuestoComponent {
  listPuestos: Puestos[] = [];

  constructor(private fbs: FirebaseService){}

  ngOnInit() {
    this.fbs.coleccion = 'puestos';
    this.fbs.getCollection().subscribe( res => {
      console.log(res);
      this.listPuestos = res});
  }

  delJuego(id: string) {
    // Borrar el puesto, previo aviso y ok
    console.log('Esto borraría el puesto ');
    this.fbs.coleccion = 'puestos';
    this.fbs.deleteDocument(id).then(() => console.log('puesto borrado'));
  }
}
