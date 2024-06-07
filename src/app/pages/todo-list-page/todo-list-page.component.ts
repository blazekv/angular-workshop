import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../model/Todo';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'eg-todo-list-page',
  standalone: true,
  imports: [AsyncPipe, TodoItemComponent],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.scss',
})
export class TodoListPageComponent {
  todos$: Observable<Todo[]> = of([]);
}
