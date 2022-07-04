import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../assets/models/IActiveField";
import {dragData} from "../../../../../assets/data/dragData";

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {
  @Input() field: IActiveField | undefined
  field_name = dragData;
  ngOnInit(): void {
    console.log(this.field_name.button, this.field?.name)
  }

}
