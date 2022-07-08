import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormBuilderComponent} from './form-builder.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {findComponent} from "../../assets/findComponent/findComponent";
import {testField} from "../../../../assets/data/testField";
import {FormCreatorComponent} from "../form-creator/form-creator.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormDraggableFieldsComponent} from "../form-draggable-fields/form-draggable-fields.component";
import {FieldStylesFormComponent} from "../../assets/field-styles-form/field-styles-form.component";
import {ColorPickerModule} from "ngx-color-picker";
import {FormDynamicComponent} from "../form-creator/form-dynamic/form-dynamic.component";
import {InputFieldComponent} from "../form-draggable-fields/fields/input-field/input-field.component";
import {TextareaFieldComponent} from "../form-draggable-fields/fields/textarea-field/textarea-field.component";
import {SelectFieldComponent} from "../form-draggable-fields/fields/select-field/select-field.component";
import {ButtonFieldComponent} from "../form-draggable-fields/fields/button-field/button-field.component";
import {CheckboxFieldComponent} from "../form-draggable-fields/fields/checkbox-field/checkbox-field.component";
import {MatCardModule} from "@angular/material/card";

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormBuilderComponent,
        FormCreatorComponent,
        FormDraggableFieldsComponent,
        FieldStylesFormComponent,
        FormDynamicComponent,
        InputFieldComponent,
        TextareaFieldComponent,
        SelectFieldComponent,
        ButtonFieldComponent,
        CheckboxFieldComponent,
      ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        ReactiveFormsModule,
        FormsModule,
        DragDropModule,
        ColorPickerModule,
        MatCardModule
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
  it('should render start text and components', () => {
    const formBuilderText: HTMLElement = fixture.nativeElement;
    const leftSidebarTitle = formBuilderText.querySelector('.accordion h2')!;
    const draggableFields = findComponent(fixture, 'app-form-draggable-fields')
    const formCreator = findComponent(fixture, 'app-form-creator')
    expect(draggableFields).toBeTruthy()
    expect(formCreator).toBeTruthy()
    expect(leftSidebarTitle.textContent).toEqual('Customize field')
  });
  it('should render create field form component', () => {
    component.activeField$ = of('input')
    component.ngOnInit();
    fixture.detectChanges();
    const createFieldForm = findComponent(fixture, 'app-field-styles-form')
    expect(createFieldForm).not.toBeNull();
  });
  it('should render edit field form component', () => {
    component.isEdit$ = of(true)
    component.ngOnInit();
    fixture.detectChanges();
    const createFieldForm = findComponent(fixture, 'app-field-styles-form')
    expect(createFieldForm).not.toBeNull();
  });
  it('should render form creator component', () => {
    component.form$ = of([{field: testField}]);
    const formCreator = findComponent(fixture, 'app-form-creator');
    component.ngOnInit();
    fixture.detectChanges();
    // check if component exists
    expect(formCreator).not.toBeNull();
    // check if form passed how we want
    expect(formCreator.componentInstance.form$).toEqual(component.form$)
  });
  it('should render draggable fields component', () => {
    const draggableFields = findComponent(fixture, 'app-form-draggable-fields');
    expect(draggableFields).not.toBeNull();
  });
  it('should add new field', () => {
    const label = 'new input'
    component.form_result = new FormGroup<any>({
      'test input': new FormControl()
    })
    // to render add field form
    component.activeField$ = of('input')
    component.ngOnInit();
    fixture.detectChanges();
    // it's add field form
    let addFieldForm = findComponent(fixture, 'app-field-styles-form');
    // check if addFieldForm exists
    expect(addFieldForm).not.toBeNull();
    // spy to submitForm, it's addField from FormBuilderComponent
    const spy = spyOn(addFieldForm.componentInstance, 'submitForm')
    // set some value to label bcz it's required
    addFieldForm.componentInstance.styleForm.get('label')?.setValue(label)
    // check if label set
    expect(addFieldForm.componentInstance.styleForm.get('label')?.value).toEqual(label)
    // after check, submit form to call submitForm(that in onSubmit method)
    addFieldForm.componentInstance.onSubmit()
    // if submitForm called, we dispatch action to store
    expect(spy).toHaveBeenCalled()
  });
  it('should edit field', () => {
    const label = 'new input'
    component.form_result = new FormGroup<any>({
      'test input': new FormControl()
    });
    // to render editField form
    component.isEdit$ = of(true)
    component.ngOnInit();
    fixture.detectChanges();
    const editFieldForm = findComponent(fixture, 'app-field-styles-form');
    // check if editFieldForm exists
    expect(editFieldForm).not.toBeNull();
    // spy to submitForm, it's editField from FormBuilderComponent
    const spy = spyOn(editFieldForm.componentInstance, 'submitForm');
    // set some value to label bcz it's required
    editFieldForm.componentInstance.styleForm.get('label')?.setValue(label)
    // check if label set
    expect(editFieldForm.componentInstance.styleForm.get('label')?.value).toEqual(label)
    // after check, submit form to call submitForm(that in onSubmit method)
    editFieldForm.componentInstance.onSubmit();
    // if submitForm called, we dispatch action to store
    expect(spy).toHaveBeenCalled();
  });
});
