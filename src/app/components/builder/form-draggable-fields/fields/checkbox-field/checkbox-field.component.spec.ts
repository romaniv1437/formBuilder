import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFieldComponent } from './checkbox-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";

describe('CheckboxFieldComponent', () => {
  let component: CheckboxFieldComponent;
  let fixture: ComponentFixture<CheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
