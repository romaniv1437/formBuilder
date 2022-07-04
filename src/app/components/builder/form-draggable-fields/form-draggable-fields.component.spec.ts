import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDraggableFieldsComponent } from './form-draggable-fields.component';

describe('FormDraggableFieldsComponent', () => {
  let component: FormDraggableFieldsComponent;
  let fixture: ComponentFixture<FormDraggableFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDraggableFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDraggableFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
