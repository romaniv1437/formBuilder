import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined

  ngOnInit(): void {
  }

}
