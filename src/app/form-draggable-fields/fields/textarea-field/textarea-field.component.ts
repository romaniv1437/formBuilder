import {Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../assets/models/IActiveField";

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined

  ngOnInit(): void {
  }

}
