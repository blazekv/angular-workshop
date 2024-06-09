import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../model/Todo';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MultiplicationPipe } from '../../pipes/multiplication.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TodoService } from '../../services/todo.service';
import { HugeComponentComponent } from '../../components/huge-component/huge-component.component';

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
    HighlightDirective,
    HugeComponentComponent,
  ],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.scss',
})
export default class TodoListPageComponent {
  test = '';
  private todoService = inject(TodoService);

  todos$: Observable<Todo[]> = this.todoService.getBooks();

  multiply(value: number, multiplier: number) {
    console.log(value, multiplier);
    return value * multiplier;
  }
}
