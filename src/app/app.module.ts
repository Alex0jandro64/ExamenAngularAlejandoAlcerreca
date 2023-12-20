import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MenuComponent } from './vistas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({"projectId":"prueba-5fae3","appId":"1:404432309478:web:f92d975cb0de8816a67f27","storageBucket":"prueba-5fae3.appspot.com","apiKey":"AIzaSyAAZF6zKLGf4uUVGeLFrA3balshvl52c3E","authDomain":"prueba-5fae3.firebaseapp.com","messagingSenderId":"404432309478"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
