import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList:AngularFireList<any>;

  //configuracion de la coneccion
  constructor(private firebasedb:AngularFireDatabase) { }

  getTodoList(){
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }
  addTodo(title:string){
    this.todoList.push({
      title: title,
      isChecked: false
    })
  }
  updateTodo($key:string, flag:boolean){
    this.todoList.update($key,{isChecked:flag});
  }
  removeTodo($key){
    this.todoList.remove($key);
  }
}
