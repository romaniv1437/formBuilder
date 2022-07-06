import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComponent } from './form-builder.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
