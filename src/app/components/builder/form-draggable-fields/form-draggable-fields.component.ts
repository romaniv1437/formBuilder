import {Component, OnDestroy, OnInit} from '@angular/core';
import {dragData} from "../../../../assets/data/dragData";
import {Observable, Subscription} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";
import {select, Store} from "@ngrx/store";
import {dragState, selectDefaultField} from "../../../../store/reducers/drag.reducer";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-draggable-fields',
  templateUrl: './form-draggable-fields.component.html',
  styleUrls: ['./form-draggable-fields.component.scss']
})
export class FormDraggableFieldsComponent implements OnInit, OnDestroy{
  field$: Observable<IActiveField> | null;
  data = dragData;
  showForm: FormGroup;
  controlSub: Subscription | undefined;
  constructor(private store: Store<dragState>, private fb: FormBuilder) {
    this.field$ = this.store.pipe(select(selectDefaultField))
    this.showForm = new FormGroup({})
  }
  ngOnInit() {
    this.controlSub = this.field$?.subscribe(field => this.showForm.addControl(field.options.label, this.fb.control('')))
  }
  ngOnDestroy() {
    this.controlSub?.unsubscribe()
  }
}
