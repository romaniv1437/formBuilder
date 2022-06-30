import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {addFieldToForm, setDragObject} from "../actions/drag.actions";
import {IStyles} from "../../assets/models/IStyle";

export const FORM_NODE = 'formBuilder'

export interface dragState {
  activeField: {name: string, id: number, styles: IStyles},
  form: Array<{field?: {name?: string, id?: number, styles?: IStyles}, label?: string, placeholder?: string, text?: string}>
}

export const initialState:dragState = {
  activeField: {
    name: '',
    id: NaN,
    styles: {width: '200px', height: '40px', borderStyle: 'solid', fontSize: '16px', fontWeight: '500', color: 'black'},

    },
  form: []
}
export const dragReducer = createReducer(
  initialState,
  on(setDragObject, (state, {name, id}) => {
    return {
      ...state,
      activeField: {name: name, id: id, styles: state.activeField.styles},
    }
  }),
  on(addFieldToForm, (state, {label, placeholder, text}) => {
    return {
      ...state,
      form: [...state.form, {field: state.activeField, label: label, placeholder: placeholder, text: text}],
      activeField: {name: '', id: 0, styles: {}}
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
