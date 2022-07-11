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
import {MatIconModule} from "@angular/material/icon";
import {IActiveFieldOptions} from "../../../../assets/models/IActiveField";

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
        MatCardModule,
        MatIconModule,

      ],
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
    // get formBuilder text content, and components

    // GET TEXT CONTENT

    const formBuilderText: HTMLElement = fixture.nativeElement;
    const leftSidebarTitle = formBuilderText.querySelector('.accordion h2')!;

    // check if text content equal to text that we want
    expect(leftSidebarTitle.textContent).toEqual('Customize field')

    // FIND CHILD COMPONENTS

    // find draggableFields, formCreator by fixture and selector
    const draggableFields = findComponent(fixture, 'app-form-draggable-fields')
    const formCreator = findComponent(fixture, 'app-form-creator')

    // check is component be truthy
    expect(draggableFields).toBeTruthy()
    expect(formCreator).toBeTruthy()
  });
  it('should render add field form component', () => {
    // here we check if add field form render properly

    // set active field to render add form component
    component.activeField$ = of('input')

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // find addField component by fixture and selector
    const addFieldForm = findComponent(fixture, 'app-field-styles-form')

    // check addField component will not to be null
    expect(addFieldForm).not.toBeNull();
  });
  it('should render edit field form component', () => {
    // here we check if edit field component render properly

    // set isEdit of true for render edit field component
    component.isEdit$ = of(true)

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // find edit field form by fixture and selector
    const editFieldForm = findComponent(fixture, 'app-field-styles-form')

    // check editField component will not to be null
    expect(editFieldForm).not.toBeNull();
  });
  it('should render form creator component', () => {
    // here we check if form creator render properly

    // set form of array with test field
    // this field it's the props of form creator component
    component.form$ = of([{field: testField}]);

    // find formCreator component by fixture and selector
    const formCreator = findComponent(fixture, 'app-form-creator');

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // check if component exists
    expect(formCreator).not.toBeNull();

    // check if form passed how we want
    expect(formCreator.componentInstance.form$).toEqual(component.form$)
  });
  it('should render draggable fields component', () => {

    // find draggableFields component by fixture and selector
    const draggableFields = findComponent(fixture, 'app-form-draggable-fields');

    // check draggableField will not be null
    expect(draggableFields).not.toBeNull();
  });
  it('should add new field from callback', () => {

    // here we check if callback function will be called

    // set label
    const label = 'new input'

    // set new FormGroup in component
    // this form_result will be input props in child component
    component.form_result = new FormGroup<any>({
      'test input': new FormControl()
    })

    // set activeField stream of 'input', for render addField component
    component.activeField$ = of('input')

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // find addField component by fixture and selector
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
  it('should edit field from callback', () => {

    // here we check if callback function will be called

    // set label
    const label = 'new input'

    // set new FormGroup in component
    // this form_result will be input props in child component
    component.form_result = new FormGroup<any>({
      'test input': new FormControl()
    });

    // set isEdit stream of true, for set edit mode and render editField component
    component.isEdit$ = of(true)

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // find editField component by fixture and selector
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
  it('should add and edit and remove field', () => {

    // create spy to store method dispatch
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // call addField, it will add new field to form
    // add field will dispatch to store twice, store spy in this time will be called 2 times
    component.addField(<IActiveFieldOptions>{label: 'test label', placeholder: 'test placeholder', styles: {}})

    // call editField, it will change existed field from form by id
    // edit field will dispatch to store once time, and spy now will be called 3 times
    component.editField(<IActiveFieldOptions>{label: 'test label', placeholder: 'test placeholder', styles: {}}, 'test label')

    // remove field calls once, and it will remove field from the form array
    // now spy will be called 4 times
    component.removeField(0, 'test label')

    // expected spy have been called 4 times
    expect(storeSpy).toHaveBeenCalledTimes(4);
  });

});
