import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldComponent } from './select-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";

describe('SelectFieldComponent', () => {
  let component: SelectFieldComponent;
  let fixture: ComponentFixture<SelectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
