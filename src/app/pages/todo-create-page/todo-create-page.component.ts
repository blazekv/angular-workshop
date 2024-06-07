import { Component } from '@angular/core';
import { TodoFormReactiveComponent } from '../../components/todo-form-reactive/todo-form-reactive.component';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'eg-todo-create-page',
  standalone: true,
  imports: [TodoFormReactiveComponent],
  templateUrl: './todo-create-page.component.html',
  styleUrl: './todo-create-page.component.scss',
})
export default class TodoCreatePageComponent {
  onSave(item: Todo) {
    console.log('Creating', item);
  }
}
