import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {addFieldToForm, setActiveFieldValues, setDragObject} from "../actions/drag.actions";
import {IActiveField} from 'src/assets/models/IActiveField';

export const FORM_NODE = 'formBuilder'

export interface dragState {
  activeField: IActiveField
  form: Array<{field?: IActiveField}>
}
export const initialState:dragState = {
  activeField: {
    name: '',
    id: 0,
    options: {
      styles: {width: '200px', height: '40px', borderStyle: 'solid', fontSize: '16px', fontWeight: '500', color: 'black'},
      placeholder: 'placeholder',
      label: 'field label',
      text: 'field text'
      }
    },
  form: []
}
export const dragReducer = createReducer(
  initialState,
  on(setDragObject, (state, {name, id}) => {
    return {
      ...state,
      activeField: {name: name, id: id, options: {styles: state.activeField.options.styles, placeholder: 'placeholder', text: 'field text', label: 'field label'}},
    }
  }),
  on(addFieldToForm, (state) => {
    return {
      ...state,
      form: [...state.form, {field: state.activeField}],
      activeField: initialState.activeField
    }
  }),
  on(setActiveFieldValues, (state, {styles, placeholder, text, label}) => {
    return {
      ...state,
      activeField: {
        name: state.activeField.name,
        id: state.activeField.id,
        options: {styles, placeholder, text, label}
      }
    }
  })
)

export const selectorActiveField = createFeatureSelector<dragState>(FORM_NODE)

export const selectActiveField = createSelector(
  selectorActiveField,
  state => state.activeField.name
)
export const selectDefaultField = createSelector(
  selectorActiveField,
  state => state.activeField
)
