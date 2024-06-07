import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'eg-todo-form-template',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-form-template.component.html',
  styleUrl: './todo-form-template.component.scss',
})
export class TodoFormTemplateComponent {
  name = '';

  @Output() save: EventEmitter<Todo> = new EventEmitter<Todo>();

  onSubmit() {
    this.save.emit({
      name: this.name,
    });
  }
}
