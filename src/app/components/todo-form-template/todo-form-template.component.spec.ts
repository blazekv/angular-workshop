import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormTemplateComponent } from './todo-form-template.component';

describe('TodoFormTemplateComponent', () => {
  let component: TodoFormTemplateComponent;
  let fixture: ComponentFixture<TodoFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFormTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
