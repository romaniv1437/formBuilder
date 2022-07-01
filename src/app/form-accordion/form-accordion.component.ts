import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {dragState, selectActiveField} from "../../store/reducers/drag.reducer";
import {addFieldToForm, setActiveFieldValues} from "../../store/actions/drag.actions";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.scss']
})
export class FormAccordionComponent {
  activeField$: Observable<string>
  addFieldForm: FormGroup;

  constructor(private store: Store<dragState>) {
    this.activeField$ = this.store.pipe(select(selectActiveField))
    this.addFieldForm = new FormGroup({
      label: new FormControl(),
      placeholder: new FormControl(),
      text: new FormControl()
    });
    this.addFieldForm.valueChanges.subscribe(value => console.log(value.label))
  }

  onAddField(label:string, placeholder:string, text:string) {
    this.store.dispatch(setActiveFieldValues({styles: {}, label: label, placeholder: placeholder, text: text}))
    this.store.dispatch(addFieldToForm());
  }

  onClicked() {
    let label = this.addFieldForm.value.label
    let placeholder = this.addFieldForm.value.placeholder
    let text = this.addFieldForm.value.text
    this.onAddField(label, placeholder, text)
  }

}
