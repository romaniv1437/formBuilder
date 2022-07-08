import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FieldStylesFormComponent} from './field-styles-form.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorPickerModule} from "ngx-color-picker";

describe('FieldStylesFormComponent', () => {
  let component: FieldStylesFormComponent;
  let fixture: ComponentFixture<FieldStylesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldStylesFormComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        ReactiveFormsModule,
        FormsModule,
        ColorPickerModule
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
  it('check initial values for styleForm', () => {
    const styleForm = component.styleForm;
    const styleFormValues = {
      label: '',
      text: '',
      color: '',
      placeholder: '',
      width: '',
      height: '',
      fontWeight: '',
      fontSize: '',
      borderStyle: '',
      required: false
    }
    expect(styleForm.value).toEqual(styleFormValues)
  });
  it('check form value after enter it and validation', () => {
    const styleFormLabelElement:
      HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#styleForm')!.querySelector('#label')!;
    const styleFormPlaceholderElement:
      HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#styleForm')!.querySelector('#placeholder')!;
    const styleFormTextElement:
      HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#styleForm')!.querySelector('#text')!;
    styleFormTextElement.value = 'test text';
    styleFormPlaceholderElement.value = 'test placeholder'
    styleFormLabelElement.value = 'test label';
    styleFormTextElement.dispatchEvent(new Event('input'))
    styleFormPlaceholderElement.dispatchEvent(new Event('input'))
    styleFormLabelElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(styleFormLabelElement.value).toEqual(component.styleForm.get('label')?.value);
    expect(styleFormPlaceholderElement.value).toEqual(component.styleForm.get('placeholder')?.value);
    expect(styleFormTextElement.value).toEqual(component.styleForm.get('text')?.value);
    expect(component.styleForm?.errors).toBeNull();
    // these 3 fields works good, then next more fields works too
  });
});
