import * as actions from './../todo.actions';
import { appState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  completado: boolean = false;
  constructor( private store: Store<appState>) { }

  ngOnInit(): void {
  }

  toggleAll(){


    this.completado = !this.completado;


    this.store.dispatch(actions.toggleAll({completado: this.completado}))


  }

}
