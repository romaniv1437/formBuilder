import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {dragState, selectActiveField} from "../../store/reducers/drag.reducer";

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.scss']
})
export class FormAccordionComponent {
  activeField$: Observable<string>
  constructor(private store$: Store<dragState>) {

    this.activeField$ = this.store$.pipe(select(selectActiveField))
    console.log(this.activeField$)
  }

}
