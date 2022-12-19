import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {
  addFieldToForm,
  removeFieldFromForm,
  setActiveField,
  setActiveFieldStyles
} from "../../../../store/actions/drag.actions";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {
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
export class FormBuilderComponent implements OnInit, OnDestroy {
  // for form creator & accordion
  form$: Observable<{ field?: IActiveField }[]> = this.store.pipe(select(selectForm));
  form_result: FormGroup = new FormGroup({
    form_label: new FormControl('My form')
  });
  activeField$: Observable<string> = this.store.pipe(select(selectActiveField));
  updatedAt$: Observable<number> = this.store.pipe(select(updatedAtSelector))
  // for control subscriptions
  controlSub: Subscription = new Subscription();
  // for draggable objects
  data: any

  constructor(public store: Store<dragState>, private fb: FormBuilder) {
  }

  getRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  };

  ngOnInit(): void {
    // create form controls by form$ array
    this.controlSub = this.form$.subscribe(
      value => value.map(field => this.form_result.addControl(String(field.field?.id), this.fb.control('')))
    );
  }

  // 1 for accordion and form-creator
  addField(options: IActiveFieldOptions) {
    this.store.dispatch(setActiveFieldStyles({options}));
  }

  removeField(id: string) {
    this.store.dispatch(removeFieldFromForm({id: id}));
    this.form_result.removeControl(id);
  }

  setEditMode(id: string, name: string, label: string) {
    this.store.dispatch(setActiveField({name, id, label}));
  }

  // 2  for draggable objects
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(setActiveField({name: event.item.data, id: this.getRandomId()}));
    this.store.dispatch(addFieldToForm());
  }

  ngOnDestroy() {
    this.controlSub.unsubscribe()
  }
}
