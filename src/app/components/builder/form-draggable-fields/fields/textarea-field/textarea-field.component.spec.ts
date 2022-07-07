import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextareaFieldComponent} from './textarea-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";

describe('TextareaFieldComponent', () => {
  let component: TextareaFieldComponent;
  let fixture: ComponentFixture<TextareaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaFieldComponent],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
