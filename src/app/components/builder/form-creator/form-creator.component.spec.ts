import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormCreatorComponent} from './form-creator.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {ReactiveFormsModule} from "@angular/forms";

describe('FormCreatorComponent', () => {
  let component: FormCreatorComponent;
  let fixture: ComponentFixture<FormCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
