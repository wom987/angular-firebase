import { Component, OnInit } from '@angular/core';
//importando el metodo
import {TodoService} from '../../services/todo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  //creando un arreglo 
  todoListArray:any[]=[];
  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges().subscribe(item=>{
      this.todoListArray=[];
      item.forEach(element=>{
        let x =element.payload.toJSON();
        x['$key']=element.key;
        this.todoListArray.push(x);
      })
    }); 
    this.todoListArray.sort((a,b)=>{
      return a.isChecked - b.isChecked;
    }
    )
  }
  addTodo(itemTitle){
    this.todoService.addTodo(itemTitle.value);
    itemTitle.value='';
    itemTitle.focus();
  }
  updateTodo($key:string, isChecked:boolean){
    this.todoService.updateTodo($key,!isChecked);
  }
  deleteTodo($key:string){
    this.todoService.removeTodo($key);
  }
  
}
