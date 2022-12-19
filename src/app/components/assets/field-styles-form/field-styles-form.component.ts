import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IStyles} from "../../../../assets/models/IStyle";
import {IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {borderStylesData} from "../../../../assets/data/borderStylesData";
import {Store} from "@ngrx/store";
import {debounceTime, startWith} from "rxjs";


@Component({
  selector: 'app-field-styles-form',
  templateUrl: './field-styles-form.component.html',
  styleUrls: ['./field-styles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldStylesFormComponent implements OnInit {
  @Input() title: string = '';
  // for add or edit field
  @Input() submitForm: any;
  // for add field
  @Input() activeField: string | undefined
  // for editField
  @Input() onEditField: any;
  @Input() prevFieldLabel: string | undefined = '';
  @Input() form_result: FormGroup = new FormGroup<any>('')
  // local data
  styleForm: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    placeholder: new FormControl(''),
    text: new FormControl(''),
    color: new FormControl(''),
    width: new FormControl(''),
    height: new FormControl(''),
    fontSize: new FormControl(''),
    borderStyle: new FormControl(''),
    fontWeight: new FormControl(''),
    required: new FormControl(false)
  });
  styles: IStyles = {};
  options: IActiveFieldOptions | undefined;
  borderStyles = borderStylesData;

  constructor(private store: Store<Store>) {
  }

  get field() {
    return this.styleForm.controls;
  }

  onSubmit(value: any) {
    this.styles = {
      borderStyle: value.borderStyle,
      width: value.width + 'px',
      height: value.height + 'px',
      fontSize: value.fontSize + 'px',
      fontWeight: value.fontWeight,
      color: value.fontColor
    }
    this.options = {
      placeholder: value.placeholder,
      label: value.label,
      text: value.text,
      styles: this.styles,
      required: value.required
    }
    console.log(this.activeField)
    this.submitForm(this.options, value.label)
  }

  ngOnInit(): void {
    this.styleForm.valueChanges
      .pipe(debounceTime(0))
      .subscribe(value => this.onSubmit(value))
  }

}
