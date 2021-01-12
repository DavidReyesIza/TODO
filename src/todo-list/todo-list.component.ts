

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from 'src/app/todos/models/todo.models';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor( private store: Store<appState>) { }

  ngOnInit(): void {

  /*   this.store.select('todos')
    .subscribe( todos => this.todos = todos); */

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })

  }

}
