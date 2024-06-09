import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugeComponentComponent } from './huge-component.component';

describe('HugeComponentComponent', () => {
  let component: HugeComponentComponent;
  let fixture: ComponentFixture<HugeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HugeComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HugeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
