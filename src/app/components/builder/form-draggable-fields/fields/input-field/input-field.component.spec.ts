import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldComponent } from './input-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
