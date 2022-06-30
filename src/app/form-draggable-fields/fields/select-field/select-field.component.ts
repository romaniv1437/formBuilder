import {Component, Input, OnInit} from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {dragState, selectFieldStyle} from "../../../../store/reducers/drag.reducer";

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() options: Array<{value: string, text: string}> = [];
  stylesStore: Observable<IStyles>
  styles: IStyles = {}
  constructor(private store: Store<dragState>) {
    this.stylesStore = this.store.pipe(select(selectFieldStyle))
    this.stylesStore.subscribe(val => this.styles = val).unsubscribe()
  }

  ngOnInit(): void {
  }

}
