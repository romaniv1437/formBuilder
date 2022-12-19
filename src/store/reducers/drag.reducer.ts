import {createReducer, on} from '@ngrx/store';
import {
  addFieldToForm,
  editField,
  removeFieldFromForm,
  setActiveField,
  setActiveFieldStyles,
  setEditMode,
  updatedAt
} from "../actions/drag.actions";
import {IActiveField} from 'src/assets/models/IActiveField';

export const FORM_NODE = 'formBuilder'

export interface dragState {
  activeField: IActiveField
  form: { field: IActiveField }[]
  updatedAt: number
}

export const initialState: dragState = {
  updatedAt: 0,
  activeField: {
    name: '',
    id: '',
    options: {
      styles: {
        width: '200px',
        height: '40px',
        borderStyle: 'solid',
        fontSize: '16px',
        fontWeight: '500',
        color: 'black'
      },
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
  on(setActiveField, (state, {name, id}) => {
    return {
      ...state,
      activeField: {
        name: name,
        id: id,
        options: {
          styles: state.activeField.options.styles,
          placeholder: 'placeholder',
          text: 'field text',
          label: 'field label',
          required: false
        }
      },
    }
  }),
  on(addFieldToForm, (state) => {
    return {
      ...state,
      form: [...state.form, {field: state.activeField}],
    }
  }),
  on(setActiveFieldStyles, (state, {options}) => {
    console.log(!!options.placeholder?.length, state.activeField.options.placeholder)
    return {
      ...state,
      form: state.form.map(field => field?.field.id === state.activeField.id
        ? {
          field: {
            name: state.activeField.name,
            id: state.activeField.id,
            options: {
              styles: {...options.styles},
              label: options.label ? options.label : state.activeField.options.label,
              placeholder: options.placeholder?.length ? options.placeholder : state.activeField.options.placeholder,
              text: options.text ? options.text : state.activeField.options.text,
              required: options.required ? options.required : state.activeField.options.required,
            },
          }
        }
        : field
      )
    }
  }),
  on(removeFieldFromForm, (state, {id}) => {
    return {
      ...state,
      form: state.form.filter(field => id !== field.field?.id)
    }
  }),
  on(updatedAt, (state, {updatedAt}) => {
    return {
      ...state,
      updatedAt: updatedAt
    }
  })
)
