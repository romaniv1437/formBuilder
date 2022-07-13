import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {
  addFieldToForm,
  editField,
  removeFieldFromForm,
  setActiveField,
  setActiveFieldStyles,
  setEditMode
} from "../../../../store/actions/drag.actions";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {
  editFieldLabel,
  isEdit,
  selectActiveField,
  selectForm,
  updatedAtSelector
} from "../../../../store/selectors/drag.selector";
import {IActiveField, IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {dragState} from "../../../../store/reducers/drag.reducer";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit {
  // for form creator & accordion
  form$: Observable<Array<{field?: IActiveField}>>
  form_result: FormGroup;
  activeField$: Observable<string>;
  isEdit$: Observable<boolean>;
  editFieldLabel$: Observable<string>;
  updatedAt$: Observable<number>;
  // for control subscriptions
  controlSub: Subscription;
  // for draggable objects
  data: any

  constructor(public store: Store<dragState>, private fb: FormBuilder) {
    this.controlSub = new Subscription();
    this.updatedAt$ = store.pipe(select(updatedAtSelector))
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
    this.store.dispatch(setActiveFieldStyles({options}));
    this.store.dispatch(addFieldToForm());
  }
  editField(options:IActiveFieldOptions, controlName: string) {
    this.store.dispatch(editField({options}));
    this.form_result.removeControl(controlName)
  }
  removeField(id:number, controlName:string) {
    this.store.dispatch(removeFieldFromForm({id: id}));
    this.form_result.removeControl(controlName);
  }
  setEditMode(id:number, name:string, label:string) {
    this.store.dispatch(setEditMode({id, name, label}));
  }
  // 2  for draggable objects
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(setActiveField({name: event.item.data, id: Date.now()}));
  }
}
