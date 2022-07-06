import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldStylesFormComponent } from './field-styles-form.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";

describe('FieldStylesFormComponent', () => {
  let component: FieldStylesFormComponent;
  let fixture: ComponentFixture<FieldStylesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldStylesFormComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldStylesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
