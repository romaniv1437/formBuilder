import {Component} from '@angular/core';
import {dragData} from "../../assets/data/dragData";

@Component({
  selector: 'app-form-draggable-fields',
  templateUrl: './form-draggable-fields.component.html',
  styleUrls: ['./form-draggable-fields.component.scss']
})
export class FormDraggableFieldsComponent {
  data = dragData
}
