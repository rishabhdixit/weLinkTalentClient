import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	POSITION_UPDATE:         type('[POSITION] Position Update'),
	POSITION_UPDATE_SUCCESS: type('[POSITION] Position Update Success'),
};

export class PositionUpdateAction implements Action {
	type = ActionTypes.POSITION_UPDATE;

	constructor(public payload: any) {
	}
}

export class PositionUpdateSuccessAction implements Action {
	type = ActionTypes.POSITION_UPDATE_SUCCESS;

	constructor(public payload: any) {
	}
}

export type Actions = PositionUpdateAction
	| PositionUpdateSuccessAction;
