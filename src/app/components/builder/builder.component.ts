import {Component, OnInit} from '@angular/core';
import {addFieldToForm, editField, setActiveFieldValues} from "../../../store/actions/drag.actions";
import {select, Store} from "@ngrx/store";
import {dragState, isEdit, selectActiveField} from "../../../store/reducers/drag.reducer";
import {Observable} from "rxjs";
import {IActiveFieldOptions} from "../../../assets/models/IActiveField";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  activeField$: Observable<string>;
  isEdit$: Observable<boolean>;
  // for accordion
  addField(options:IActiveFieldOptions) {
    this.store.dispatch(setActiveFieldValues({options}))
    this.store.dispatch(addFieldToForm());
  }
  // for edit form
  onEditField(options:IActiveFieldOptions) {
    this.store.dispatch(editField({options}))
  }

  constructor(private store: Store<dragState>) {
    this.isEdit$ = store.pipe(select(isEdit))
    this.activeField$ = this.store.pipe(select(selectActiveField))
  }

  ngOnInit(): void {
  }

}
