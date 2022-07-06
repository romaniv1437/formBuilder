import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicComponent } from './form-dynamic.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";

describe('FormDynamicComponent', () => {
  let component: FormDynamicComponent;
  let fixture: ComponentFixture<FormDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDynamicComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
