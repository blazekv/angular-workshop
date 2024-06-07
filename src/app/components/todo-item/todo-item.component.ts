import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'eg-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() item?: Todo;
}
