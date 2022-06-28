import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form-draggable-fields',
  templateUrl: './form-draggable-fields.component.html',
  styleUrls: ['./form-draggable-fields.component.scss']
})
export class FormDraggableFieldsComponent implements OnInit {
  primary: any;

  constructor() { }

  ngOnInit(): void {
  }

}
