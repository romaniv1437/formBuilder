import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {
  @Input() data: string
  @Input() label: string
  @Input() text: string
  @Input() color: string
  constructor() {
    this.data = ''
    this.label = ''
    this.text = ''
    this.color = ''
  }

  ngOnInit(): void {
  }

}
