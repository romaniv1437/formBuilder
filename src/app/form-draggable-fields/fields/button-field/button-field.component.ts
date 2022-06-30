import {Component, Input, OnInit} from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent implements OnInit {
  @Input() data: string
  @Input() label: string
  @Input() text: string
  @Input() styles: IStyles
  constructor() {
    this.data = ''
    this.label = ''
    this.text = ''
    this.styles = {}
  }

  ngOnInit(): void {
  }

}
