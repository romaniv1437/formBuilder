import {Component, Input, OnInit} from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {
  @Input() data: string
  @Input() placeholder: string
  @Input() label: string
  @Input() styles: IStyles
  constructor() {
    this.data = ''
    this.placeholder = ''
    this.label = ''
    this.styles = {}
  }

  ngOnInit(): void {
  }

}
