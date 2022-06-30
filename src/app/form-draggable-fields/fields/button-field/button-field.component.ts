import {Component, Input, OnInit} from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {dragState, selectFieldStyle} from "../../../../store/reducers/drag.reducer";

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() text: string = '';
  stylesStore: Observable<IStyles>
  styles: IStyles = {}
  constructor(private store$: Store<dragState>) {
    this.stylesStore = this.store$.pipe(select(selectFieldStyle))
    this.stylesStore.subscribe(val => this.styles = val).unsubscribe()
  }

  ngOnInit(): void {
  }

}
