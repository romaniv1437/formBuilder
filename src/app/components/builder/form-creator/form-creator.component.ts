import {AfterContentChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements AfterContentChecked{

  @Input() form$: Observable<Array<{field?: IActiveField}>> | undefined
  @Input() form_result: FormGroup = new FormGroup<any>('')
  @Input() removeField: any;
  @Input() setEditMode: any;

  constructor(
    private ref: ChangeDetectorRef,
  ) {}
  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  onSubmit() {
    window.alert(JSON.stringify(this.form_result?.value))
  }
}
