import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {inputAC, checkboxAC, buttonAC, selectAC, textareaAC} from "../actions/drag.actions";

export const FORM_NODE = 'form'

export interface dragState {
  activeField: {name: string, id: number},
  form: Array<{field: string, label: string, placeholder: string, text: string}>
}

export const initialState:dragState = {
  activeField: {name: 'null', id: 0},
  form: []
}
export const dragReducer = createReducer(
  initialState,
  on(inputAC, (state, {id}) => {
    return {
      ...state,
      activeField: {name: 'input', id: id},
    }
  }),
  on(textareaAC, (state, {id}) => {
    return {
      ...state,
      activeField: {name: 'textarea', id: id},
    }
  }),
  on(buttonAC, (state, {id}) => {
    return {
      ...state,
      activeField: {name: 'button', id: id},
    }
  }),
  on(checkboxAC, (state, {id}) => {
    return {
      ...state,
      activeField: {name: 'checkbox', id: id},
    }
  }),
  on(selectAC, (state, {id}) => {
    return {
      ...state,
      activeField: {name: 'select', id: id},
    }
  })
)

export const selectActiveField = createFeatureSelector<dragState>(FORM_NODE)

export const selectorActiveField = createSelector(
  selectActiveField,
  state => state.activeField.name
)
