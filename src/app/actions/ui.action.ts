import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	FORM_EDIT_MODE: type('[UI] Form Edit Mode'),
};

export class FormEditMode implements Action {
	type = ActionTypes.FORM_EDIT_MODE;

	constructor(public payload: string) {
	}
}

export type Actions = FormEditMode;
