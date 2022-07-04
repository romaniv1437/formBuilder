import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {dragState, selectForm} from "../../../../store/reducers/drag.reducer";
import {Observable} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {
  form$: Observable<Array<{field?: IActiveField}>>
  constructor(private store: Store<dragState>) {
    this.form$ = store.pipe(select(selectForm))
  }

  ngOnInit(): void {
  }

}
