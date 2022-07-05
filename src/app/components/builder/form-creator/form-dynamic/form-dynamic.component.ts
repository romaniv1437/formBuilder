import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../assets/models/IActiveField";
import {dragData} from "../../../../../assets/data/dragData";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {
  @Input() field: IActiveField | undefined
  @Input() form_result: FormGroup | any;
  field_name = dragData;

  ngOnInit(): void {

  }

}
