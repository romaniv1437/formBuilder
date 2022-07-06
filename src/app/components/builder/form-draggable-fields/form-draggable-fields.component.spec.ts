import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDraggableFieldsComponent } from './form-draggable-fields.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";

describe('FormDraggableFieldsComponent', () => {
  let component: FormDraggableFieldsComponent;
  let fixture: ComponentFixture<FormDraggableFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDraggableFieldsComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ]
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
