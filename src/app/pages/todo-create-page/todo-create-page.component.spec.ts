import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreatePageComponent } from './todo-create-page.component';

describe('TodoCreatePageComponent', () => {
  let component: TodoCreatePageComponent;
  let fixture: ComponentFixture<TodoCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCreatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
