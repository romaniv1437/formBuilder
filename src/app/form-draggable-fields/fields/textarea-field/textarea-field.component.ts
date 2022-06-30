import {Component, Input, OnInit} from '@angular/core';
import {IStyles} from "../../../../assets/models/IStyle";
import {select, Store} from "@ngrx/store";
import {dragState, selectFieldStyle} from "../../../../store/reducers/drag.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  stylesStore: Observable<IStyles>
  styles: IStyles = {}
  constructor(private store: Store<dragState>) {
    this.stylesStore = this.store.pipe(select(selectFieldStyle))
    this.stylesStore.subscribe(val => this.styles = val).unsubscribe()
  }

  ngOnInit(): void {
  }

}
