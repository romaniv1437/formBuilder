import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFieldComponent } from './button-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";

describe('ButtonFieldComponent', () => {
  let component: ButtonFieldComponent;
  let fixture: ComponentFixture<ButtonFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
