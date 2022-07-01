import {Component} from '@angular/core';
import {dragData} from "../../assets/data/dragData";
import {Observable} from "rxjs";
import {IActiveField} from "../../assets/models/IActiveField";
import {select, Store} from "@ngrx/store";
import {dragState, selectDefaultField} from "../../store/reducers/drag.reducer";

@Component({
  selector: 'app-form-draggable-fields',
  templateUrl: './form-draggable-fields.component.html',
  styleUrls: ['./form-draggable-fields.component.scss']
})
export class FormDraggableFieldsComponent {
  field$: Observable<IActiveField> | null;
  data = dragData;
  constructor(private store: Store<dragState>) {
    this.field$ = this.store.pipe(select(selectDefaultField))
  }
}
