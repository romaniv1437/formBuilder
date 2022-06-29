import { createAction, props } from '@ngrx/store';

export const setDragObject = createAction('[Draggable Object] object' , props<{name: string, id:number}>());
