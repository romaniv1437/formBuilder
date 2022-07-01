import { createAction, props } from '@ngrx/store';
import { IActiveFieldOptions } from 'src/assets/models/IActiveField';

export const setDragObject = createAction('[Draggable Object] object' , props<{name: string, id:number}>());
export const addFieldToForm = createAction('[Create Field] form')
export const setActiveFieldValues = createAction('[Set Field] active field', props<IActiveFieldOptions>())
