
import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'; // esto sirve para tener solo 3 opciones de string en el filtro


export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{filtro: filtrosValidos}>()
  );

