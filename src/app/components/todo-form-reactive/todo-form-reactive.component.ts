import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Todo } from '../../model/Todo';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { CustomValidators } from '../../validators/CustomValidators';

@Component({
  selector: 'eg-todo-form-reactive',
  standalone: true,
  imports: [MatFormField, ReactiveFormsModule, MatInput, MatLabel, MatButton],
  templateUrl: './todo-form-reactive.component.html',
  styleUrl: './todo-form-reactive.component.scss',
})
export class TodoFormReactiveComponent {
  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  form = this.createForm2();

  @Output() save: EventEmitter<Partial<Todo>> = new EventEmitter<
    Partial<Todo>
  >();

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  private createForm() {
    return this.fb.group({
      name: ['', [Validators.required, CustomValidators.isNumber]],
    });
  }

  private createForm2() {
    return new FormGroup({
      name: new FormControl<string>('', {
        validators: [Validators.required, CustomValidators.isNumber],
        nonNullable: true,
      }),
    });
  }
}
