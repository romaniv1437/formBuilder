import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})

export class InputFieldComponent implements OnInit {
  @Input() data: string
  @Input() placeholder: string
  @Input() label: string
  @Input() color: string
  constructor() {
    this.data = ''
    this.placeholder = ''
    this.label = ''
    this.color = ''
  }


  ngOnInit(): void {
  }

}
