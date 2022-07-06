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
  isEdit: {id: number, name: string, editMode: boolean}
  activeField: IActiveField
  form: Array<{field?: IActiveField}>
}
export const initialState:dragState = {
  isEdit: {id: 0, name: '', editMode: false},
  activeField: {
    name: '',
    id: 0,
    options: {
      styles: {width: '200px', height: '40px', borderStyle: 'solid', fontSize: '16px', fontWeight: '500', color: 'black'},
      placeholder: 'placeholder',
      label: 'field label',
      text: 'field text',
      required: false
      }
    },
  form: []
}
export const dragReducer = createReducer(
  initialState,
  on(setDragObject, (state, {name, id}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false},
      activeField: {name: name, id: id, options: {styles: state.activeField.options.styles, placeholder: 'placeholder', text: 'field text', label: 'field label', required: false}},
    }
  }),
  on(addFieldToForm, (state) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false},
      form: [...state.form, {field: state.activeField}],
      activeField: initialState.activeField
    }
  }),
  on(setActiveFieldValues, (state, {options}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false},
      activeField: {
        name: state.activeField.name,
        id: state.activeField.id,
        options
      }
    }
  }),
  on(removeField, (state, {id}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false},
      form: state.form.filter(field => id !== field.field?.id)
    }
  }),
  on(editField, (state, {options}) => {
    return  {
      ...state,
      isEdit: {id: 0, name: '', editMode: false},
      form: state.form.map(field => {
        if (field.field?.id === state.isEdit.id) {
          return {...field, field: {id: state.isEdit.id, name: state.isEdit.name, options: options}}
        } return field
      })
    }
  }),
  on(setEditMode, (state, {id, name}) => {
    return {
      ...state,
      isEdit: {id, name, editMode: !state.isEdit.editMode}
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
