import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { PageComponent } from './page/page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './filtro.pipe';
import { TodoListComponent } from 'src/todo-list/todo-list.component';




@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent, PageComponent, FiltroPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PageComponent,

  ]
})
export class TodoModule { }
