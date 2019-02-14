import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//modulos personalizados 
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

//importando la configuracion de firebase desde enviromente
import { environment } from '../environments/environment';
//components
import { TodoComponent } from './components/todo/todo.component';
//sevices
import {TodoService} from './services/todo.service';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
