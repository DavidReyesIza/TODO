import { createReducer, on } from '@ngrx/store';
import { crear, editar, toggle, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from './models/todo.models';


export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje de ironman'),

];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(limpiarTodos, (state)  => state.filter(todo => !todo.completado)),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id ) ), // regresa todos los todo cuyo id sea diferente al id que estoy recibiendo como argumento
  on(toggle, (state, {id}) => {
    return state.map(todo => {

      if(todo.id === id){

        return {
          ...todo,
          completado : !todo.completado
        }

      }else{
        return todo;
      }



    });

  }),
  on(toggleAll, (state,{completado}) =>{
   return state.map(todo => {
    return {
       ...todo,
       completado: completado
    }
   });
  }),

  on(editar, (state, {id, texto}) => {
    return state.map(todo => {

      if(todo.id === id){

        return {
          ...todo,
          texto: texto
        }

      }else{
        return todo;
      }



    });

  }),
);



export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
