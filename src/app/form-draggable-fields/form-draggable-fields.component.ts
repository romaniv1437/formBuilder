import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-form-draggable-fields',
  templateUrl: './form-draggable-fields.component.html',
  styleUrls: ['./form-draggable-fields.component.scss']
})
export class FormDraggableFieldsComponent implements OnInit {
  inputData =  'input'
  textareaData = 'textarea'
  buttonData = 'button'
  checkboxData = 'checkbox'
  selectData = 'select'
  constructor() { }

  ngOnInit(): void {
  }

}
