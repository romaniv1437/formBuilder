import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {dragState, isEdit, selectForm} from "../../../../store/reducers/drag.reducer";
import {Observable, Subscription} from "rxjs";
import {IActiveField, IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {editField, removeField, setEditMode} from "../../../../store/actions/drag.actions";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit, OnDestroy {
  form$: Observable<Array<{field?: IActiveField}>>
  isEdit$: Observable<boolean>;
  form_result: FormGroup;
  controlSub: Subscription | undefined;

  constructor(private store: Store<dragState>, private fb: FormBuilder) {
    this.form$ = store.pipe(select(selectForm))
    this.isEdit$ = store.pipe(select(isEdit))
    this.form_result = new FormGroup({
      form_label: new FormControl('My form')
    })
  }
  ngOnInit(): void {
    this.controlSub = this.form$.subscribe(value => {
      if (value[value.length-1]?.field?.options?.label !== undefined) {
        // @ts-ignore
        this.form_result.addControl(value[value.length-1]?.field?.options?.label, this.fb.control(''))
      }
    })
  }
  ngOnDestroy() {
    this.controlSub?.unsubscribe()
  }

  onSubmit() {
    window.alert(JSON.stringify(this.form_result.value))
  }
  onRemoveField(id: number, controlName: string) {
    this.store.dispatch(removeField({id: id}))
    this.form_result.removeControl(controlName)
  }
  onEditField(id:number, name: string, options: IActiveFieldOptions) {
    this.store.dispatch(editField({id, name, options}))
  }
  onSetEditMode(id:number) {
    this.store.dispatch(setEditMode({id}))
  }
}
