import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {dragState, selectActiveField} from "../../store/reducers/drag.reducer";
import {addFieldToForm, setActiveFieldValues} from "../../store/actions/drag.actions";
import {FormControl, FormGroup} from "@angular/forms";
import {borderStylesData} from "../../assets/data/borderStylesData";
import {IStyles} from "../../assets/models/IStyle";

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.scss']
})
export class FormAccordionComponent {
  activeField$: Observable<string>
  addFieldForm: FormGroup;
  styles: IStyles = {}
  borderStyles = borderStylesData

  constructor(private store: Store<dragState>) {
    this.activeField$ = this.store.pipe(select(selectActiveField))
    this.addFieldForm = new FormGroup({
      label: new FormControl(),
      placeholder: new FormControl(),
      text: new FormControl(),
      color: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      fontSize: new FormControl(),
      borderStyle: new FormControl(),
      fontWeight: new FormControl(),
    });
  }

  addField(label: string, placeholder: string, text: string, styles: IStyles) {
    this.store.dispatch(setActiveFieldValues({styles: styles, label: label, placeholder: placeholder, text: text}))
    this.store.dispatch(addFieldToForm());
  }

  onAddFieldClicked() {
    this.styles = {
      borderStyle: this.addFieldForm.value.borderStyle,
      width: this.addFieldForm.value.width + 'px',
      height: this.addFieldForm.value.height + 'px',
      fontSize: this.addFieldForm.value.fontSize + 'px',
      fontWeight: this.addFieldForm.value.fontWeight,
      color: this.addFieldForm.value.color
    }
    this.addField(
      this.addFieldForm.value.label,
      this.addFieldForm.value.placeholder,
      this.addFieldForm.value.text,
      this.styles)
    this.addFieldForm.reset()
  }
}
