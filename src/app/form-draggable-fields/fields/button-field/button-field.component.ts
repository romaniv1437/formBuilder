import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../assets/models/IActiveField";

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined

  ngOnInit(): void {
  }

}
