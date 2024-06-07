import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../model/Todo';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'eg-todo-list-page',
  standalone: true,
  imports: [AsyncPipe, TodoItemComponent, MatButton, RouterLink],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.scss',
})
export default class TodoListPageComponent {
  todos$: Observable<Todo[]> = of([]);
}
