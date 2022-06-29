import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {buttonAC, checkboxAC, inputAC, selectAC, textareaAC} from "../../store/actions/drag.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  formFields: any

  constructor(private store: Store<Store>) {

  }

  drop(event: CdkDragDrop<string[]>) {
    switch (event.item.data) {
      case 'input': {
        this.store.dispatch(inputAC({id: 1}));
        break
      }
      case 'textarea': {
        this.store.dispatch(textareaAC({id: 2}));
        break
      }
      case 'button': {
        this.store.dispatch(buttonAC({id: 3}));
        break
      }
      case 'checkbox': {
        this.store.dispatch(checkboxAC({id: 4}));
        break
      }
      case 'select': {
        this.store.dispatch(selectAC({id: 5}));
        break
      }
    }
  }

  ngOnInit(): void {
  }

}
