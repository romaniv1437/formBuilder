import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {setDragObject} from "../actions/drag.actions";

export const FORM_NODE = 'formBuilder'

export interface dragState {
  activeField: {name: string, id: number},
  form: Array<{field: string, label: string, placeholder: string, text: string}>
}

export const initialState:dragState = {
  activeField: {name: '', id: NaN},
  form: []
}
export const dragReducer = createReducer(
  initialState,
  on(setDragObject, (state, {name, id}) => {
    return {
      ...state,
      activeField: {name: name, id: id},
    }
  })
)

export const selectorActiveField = createFeatureSelector<dragState>(FORM_NODE)

export const selectActiveField = createSelector(
  selectorActiveField,
  state => state.activeField.name
)
