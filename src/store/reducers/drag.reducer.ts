import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {
  addFieldToForm,
  editField,
  removeField,
  setActiveFieldValues,
  setDragObject,
  setEditMode
} from "../actions/drag.actions";
import {IActiveField} from 'src/assets/models/IActiveField';

export const FORM_NODE = 'formBuilder'

export interface dragState {
  isEdit: {id: number, editMode: boolean}
  activeField: IActiveField
  form: Array<{field?: IActiveField}>
}
export const initialState:dragState = {
  isEdit: {id: 0, editMode: false},
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
  }),
  on(removeField, (state, {id}) => {
    return {
      ...state,
      form: state.form.filter(field => id !== field.field?.id)
    }
  }),
  on(editField, (state, {id, name, options}) => {
    return  {
      ...state,
      form: state.form.map(field => {
        if (field.field?.id === id) {
          return {...field, field: {id: id, name: name, options: options}}
        } return field
      })
    }
  }),
  on(setEditMode, (state, {id}) => {
    return {
      ...state,
      isEdit: {id, editMode: !state.isEdit.editMode}
    }
  })

)

export const selectorDragState = createFeatureSelector<dragState>(FORM_NODE)

export const selectActiveField = createSelector(
  selectorDragState,
  state => state.activeField.name
)
export const selectDefaultField = createSelector(
  selectorDragState,
  state => state.activeField
)
export const selectForm = createSelector(
  selectorDragState,
  state => state.form
)
export const isEdit = createSelector(
  selectorDragState,
  state => state.isEdit.editMode
)
