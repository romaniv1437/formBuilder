import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {dragState, selectForm} from "../../../../store/reducers/drag.reducer";
import {Observable, Subscription} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {removeField, setEditMode} from "../../../../store/actions/drag.actions";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit, OnDestroy {
  form$: Observable<Array<{field?: IActiveField}>>
  form_result: FormGroup;
  controlSub: Subscription | undefined;

  constructor(private store: Store<dragState>, private fb: FormBuilder) {
    this.form$ = store.pipe(select(selectForm))
    this.form_result = new FormGroup({
      form_label: new FormControl('My form')
    })
  }

  ngOnInit(): void {
    this.controlSub = this.form$.subscribe(
      value => value.map(
        field => this.form_result.addControl(<string>field.field?.options.label, this.fb.control(''))
      )
    )
  }
  ngOnDestroy() {
    this.controlSub?.unsubscribe()
  }

  onSubmit() {
    window.alert(JSON.stringify(this.form_result.value))
  }

  onRemoveField(id:number, controlName:string) {
    this.store.dispatch(removeField({id: id}))
    this.form_result.removeControl(controlName)
  }

  onSetEditMode(id:number, name:string, label:string) {
    this.store.dispatch(setEditMode({id, name}))
    this.form_result.removeControl(label)
  }
}
