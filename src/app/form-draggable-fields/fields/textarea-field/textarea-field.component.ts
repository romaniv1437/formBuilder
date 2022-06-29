import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {
  @Input() data: string
  @Input() placeholder: string
  @Input() label: string
  constructor() {
    this.data = ''
    this.placeholder = ''
    this.label = ''
  }

  ngOnInit(): void {
  }

}
