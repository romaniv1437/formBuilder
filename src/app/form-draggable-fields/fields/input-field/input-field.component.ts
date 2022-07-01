import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../assets/models/IActiveField";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})

export class InputFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined
  constructor() {

  }
  ngOnInit(): void {
  }
}
