import { createAction, props } from '@ngrx/store';

export const inputAC =  createAction('[Draggable Object] input', props<{id:number}>());
export const textareaAC = createAction('[Draggable Object] textarea' , props<{id:number}>());
export const buttonAC = createAction('[Draggable Object] button' , props<{id:number}>());
export const checkboxAC = createAction('[Draggable Object] checkbox' , props<{id:number}>());
export const selectAC = createAction('[Draggable Object] select' , props<{id:number}>());
