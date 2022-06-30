import { createAction, props } from '@ngrx/store';

export const setDragObject = createAction('[Draggable Object] object' , props<{name: string, id:number}>());
export const addFieldToForm = createAction('[Create Field] form', props<{label?: string, placeholder?: string, text?: string}>())
