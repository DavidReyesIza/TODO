
import { filtrosValidos } from './filtro/filtro.actions';
import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';


export interface appState{
  todos: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<appState> = {

  todos: todoReducer,
  filtro: filtroReducer


}
