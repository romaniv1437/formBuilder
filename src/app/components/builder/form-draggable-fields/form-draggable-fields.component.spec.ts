import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormDraggableFieldsComponent} from './form-draggable-fields.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {of} from "rxjs";
import {findComponent} from "../../assets/findComponent/findComponent";
import {InputFieldComponent} from "./fields/input-field/input-field.component";
import {TextareaFieldComponent} from "./fields/textarea-field/textarea-field.component";
import {ButtonFieldComponent} from "./fields/button-field/button-field.component";
import {CheckboxFieldComponent} from "./fields/checkbox-field/checkbox-field.component";
import {SelectFieldComponent} from "./fields/select-field/select-field.component";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {testField} from "../../../../assets/data/testField";

describe('FormDraggableFieldsComponent', () => {
  let component: FormDraggableFieldsComponent;
  let fixture: ComponentFixture<FormDraggableFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormDraggableFieldsComponent,
        InputFieldComponent,
        TextareaFieldComponent,
        ButtonFieldComponent,
        CheckboxFieldComponent,
        SelectFieldComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        MatCardModule,
        DragDropModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDraggableFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain text "Select Items"',  () => {
    const textContent: HTMLElement = fixture.nativeElement;
    const h2 = textContent.querySelector('h2')!;
    expect(h2.textContent).toEqual('Select Items');
  });
  it('should render draggable fields', () => {

    // create form group with test field, 'test input'
    component.showForm = new FormGroup<any>({
      'test input': new FormControl()
    })
    // set field$ of test field
    component.field$ = of(testField)

    // call ngOnInit and detectChanges
    component.ngOnInit()
    fixture.detectChanges()

    // find components
    const inputComponent = findComponent(fixture, 'app-input-field');
    const textareaComponent = findComponent(fixture, 'app-textarea-field');
    const buttonComponent = findComponent(fixture, 'app-button-field');
    const checkboxComponent = findComponent(fixture, 'app-checkbox-field');
    const selectComponent = findComponent(fixture, 'app-select-field');

    // check if components render
    expect(selectComponent).not.toBeNull();
    expect(checkboxComponent).not.toBeNull();
    expect(buttonComponent).not.toBeNull();
    expect(textareaComponent).not.toBeNull();
    expect(inputComponent).not.toBeNull();

    // check if fields equal
    expect(inputComponent.componentInstance.field).toEqual(testField)
    expect(textareaComponent.componentInstance.field).toEqual(testField);
    expect(buttonComponent.componentInstance.field).toEqual(testField);
    expect(checkboxComponent.componentInstance.field).toEqual(testField);
    expect(selectComponent.componentInstance.field).toEqual(testField);
  });
});
