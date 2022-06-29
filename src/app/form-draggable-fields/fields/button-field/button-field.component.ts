import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent implements OnInit {
  @Input() data: string
  @Input() label: string
  @Input() text: string
  constructor() {
    this.data = ''
    this.label = ''
    this.text = ''
  }

  ngOnInit(): void {
  }

}
