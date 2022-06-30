import {Component, Input, OnInit} from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() data: string
  @Input() label: string
  @Input() options: Array<{value: string, text: string}>
  @Input() styles: IStyles
  constructor() {
    this.data = ''
    this.label = ''
    this.options = []
    this.styles = {}
  }

  ngOnInit(): void {
  }

}
