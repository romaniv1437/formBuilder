import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {setDragObject} from "../actions/drag.actions";
import {IStyles} from "../../assets/models/IStyle";

export const FORM_NODE = 'formBuilder'

export interface dragState {
  activeField: {name: string, id: number, styles: IStyles},
  form: Array<{field: {name?: string, id?: number, styles?: IStyles}, label: string, placeholder: string, text: string}>
}

export const initialState:dragState = {
  activeField: {
    name: '',
    id: NaN,
    styles: {width: '200px', height: '40px', borderStyle: 'solid', fontSize: '16px', fontWeight: '500', color: 'black'},

    },
  form: [{field: {}, label: '', placeholder: '', text: ''}]
}
export const dragReducer = createReducer(
  initialState,
  on(setDragObject, (state, {name, id}) => {
    return {
      ...state,
      activeField: {name: name, id: id, styles: state.activeField.styles},
    }
  })
)

export const selectorActiveField = createFeatureSelector<dragState>(FORM_NODE)

export const selectActiveField = createSelector(
  selectorActiveField,
  state => state.activeField.name
)
export const selectFieldStyle = createSelector(
  selectorActiveField,
  state => state.activeField.styles
)
