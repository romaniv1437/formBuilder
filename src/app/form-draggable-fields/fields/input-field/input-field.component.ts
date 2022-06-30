import { Component, Input, OnInit } from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})

export class InputFieldComponent implements OnInit {
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
