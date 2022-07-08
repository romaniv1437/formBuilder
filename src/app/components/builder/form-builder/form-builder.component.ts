import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {
  addFieldToForm,
  editField,
  removeField,
  setActiveFieldValues,
  setDragObject,
  setEditMode
} from "../../../../store/actions/drag.actions";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {
  dragState,
  editFieldLabel,
  isEdit,
  selectActiveField,
  selectForm
} from "../../../../store/reducers/drag.reducer";
import {IActiveField, IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  // for form creator & accordion
  form$: Observable<Array<{field?: IActiveField}>>
  form_result: FormGroup;
  activeField$: Observable<string>;
  isEdit$: Observable<boolean>;
  editFieldLabel$: Observable<string>;
  // for control subscriptions
  controlSub: Subscription;
  // for draggable objects
  data: any

  constructor(private store: Store<dragState>, private fb: FormBuilder) {
    this.controlSub = new Subscription();
    this.form$ = store.pipe(select(selectForm));
    this.isEdit$ = store.pipe(select(isEdit));
    this.editFieldLabel$ = store.pipe(select(editFieldLabel));
    this.activeField$ = this.store.pipe(select(selectActiveField));
    this.form_result = new FormGroup({
      form_label: new FormControl('My form')
    });
  }
  ngOnInit(): void {
    // create form controls by form$ array
    this.controlSub = this.form$.subscribe(
      value => value.map(
        field => this.form_result.addControl(<string>field.field?.options.label, this.fb.control(''))
      )
    );
  }
  // 1 for accordion and form-creator
  addField(options:IActiveFieldOptions) {
    this.store.dispatch(setActiveFieldValues({options}));
    this.store.dispatch(addFieldToForm());
  }
  editField(options:IActiveFieldOptions, controlName: string) {
    this.store.dispatch(editField({options}));
    this.form_result.removeControl(controlName)
  }
  removeField(id:number, controlName:string) {
    this.store.dispatch(removeField({id: id}));
    this.form_result.removeControl(controlName);
  }
  setEditMode(id:number, name:string, label:string) {
    this.store.dispatch(setEditMode({id, name, label}));
  }
  // 2  for draggable objects
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(setDragObject({name: event.item.data, id: Date.now()}));
  }
}
