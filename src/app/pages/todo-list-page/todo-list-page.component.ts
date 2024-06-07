import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../model/Todo';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MultiplicationPipe } from '../../pipes/multiplication.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'eg-todo-list-page',
  standalone: true,
  imports: [
    AsyncPipe,
    TodoItemComponent,
    MatButton,
    RouterLink,
    MultiplicationPipe,
    FormsModule,
  ],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.scss',
})
export default class TodoListPageComponent {
  test = '';

  todos$: Observable<Todo[]> = of([]);

  multiply(value: number, multiplier: number) {
    console.log(value, multiplier);
    return value * multiplier;
  }
}
