import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined
  @Input() options: Array<{value: string, text: string}> = [];

  ngOnInit(): void {
  }

}