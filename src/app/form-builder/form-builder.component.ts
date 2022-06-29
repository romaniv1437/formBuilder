import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  formFields: any;
  drop(event: CdkDragDrop<string[]>) {
    alert(event.item.data)
  }
  constructor() {

  }
  ngOnInit(): void {
  }

}
