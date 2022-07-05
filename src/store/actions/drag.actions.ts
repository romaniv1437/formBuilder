import {createAction, props} from '@ngrx/store';
import {IActiveFieldOptions} from 'src/assets/models/IActiveField';

export const setDragObject = createAction('[Draggable Object] object' , props<{name: string, id:number}>());
export const addFieldToForm = createAction('[CREATE Field] form');
export const setActiveFieldValues = createAction('[SET Field] active field', props<IActiveFieldOptions>());
export const removeField = createAction('[REMOVE Field] field', props<{id: number}>());
export const editField = createAction('[EDIT Field] form field', props<{id: number, name: string, options: IActiveFieldOptions}>());
export const setEditMode = createAction('[EDIT MODE Field] form field', props<{id: number}>())
