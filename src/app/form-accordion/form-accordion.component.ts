import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {dragState, selectorActiveField} from "../../store/reducers/drag.reducer";

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.scss']
})
export class FormAccordionComponent implements OnInit {
  activeField$: Observable<string>
  constructor(private store$: Store<dragState>) {

    this.activeField$ = this.store$.pipe(select(selectorActiveField))
    console.log(this.activeField$)
  }

  ngOnInit(): void {
  }

}
