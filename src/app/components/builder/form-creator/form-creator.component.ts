import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {dragState, selectForm} from "../../../../store/reducers/drag.reducer";
import {Observable} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {
  form$: Observable<Array<{field?: IActiveField}>>
  form_result: FormGroup;
  constructor(private store: Store<dragState>, private fb: FormBuilder) {
    this.form$ = store.pipe(select(selectForm))
    this.form_result = new FormGroup({
      form_label: new FormControl('My form')
    })
  }
  onSubmit() {
    window.alert(JSON.stringify(this.form_result.value))
  }
  ngOnChanges() {
  }
  ngOnInit(): void {
    this.form$.subscribe(value => {
      if (value[value.length-1]?.field?.options?.label !== undefined) {
        // @ts-ignore
        this.form_result.addControl(value[value.length-1]?.field?.options?.label, this.fb.control(''))
      }
    })

  }

}
