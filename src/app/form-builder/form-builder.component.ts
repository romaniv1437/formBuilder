import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {setDragObject} from "../../store/actions/drag.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @Input ('cdkDropListData')
  data: any

  constructor(private store: Store<Store>) {
  }
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(setDragObject({name: event.item.data, id: Date.now()}));
  }

  ngOnInit(): void {
  }

}
